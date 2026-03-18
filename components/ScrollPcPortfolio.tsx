"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

type ScrollPcPortfolioProps = {
  frameCount: number;
  children?: React.ReactNode;
};

export default function ScrollPcPortfolio({ frameCount, children }: ScrollPcPortfolioProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progressVal, setProgressVal] = useState(0);

  // Load exactly frameCount images mapping to public/sequence/frame_X.webp
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const loadImages = async () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `/sequence/frame_${i}.webp`;
        img.onload = () => {
          loadedCount++;
          setProgressVal(Math.round((loadedCount / frameCount) * 100));
          if (loadedCount === frameCount) {
            setImages(loadedImages);
            setLoaded(true);
          }
        };
        img.onerror = () => {
          console.error(`Failed to load frame ${i}`);
          loadedCount++;
          if (loadedCount === frameCount) {
            setImages(loadedImages);
            setLoaded(true);
          }
        }
        loadedImages.push(img);
      }
    };
    loadImages();
  }, [frameCount]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    if (!loaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (val: number) => {
      const idx = Math.min(
        frameCount - 1,
        Math.max(0, Math.round(val))
      );
      const img = images[idx];

      if (img && img.complete && img.naturalHeight !== 0) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate aspect ratio keeping the canvas contained at ~60% size for maximum sharpness
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight;
        
        // Use a scale factor to shrink the image (e.g., 0.6 = 60% of the screen)
        const scaleFactor = 0.65; 

        if (imgRatio > canvasRatio) {
          // Fit by width
          drawWidth = canvas.width * scaleFactor;
          drawHeight = drawWidth / imgRatio;
        } else {
          // Fit by height
          drawHeight = canvas.height * scaleFactor;
          drawWidth = drawHeight * imgRatio;
        }

        // Center on the canvas
        const drawX = (canvas.width - drawWidth) / 2;
        const drawY = (canvas.height - drawHeight) / 2;

        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      }
    };

    render(frameIndex.get());

    const unsubscribe = frameIndex.on("change", (latest) => {
      render(latest);
    });

    return () => unsubscribe();
  }, [loaded, images, frameIndex, frameCount]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full text-white" style={{ height: "1400vh" }}>
      {/* Loading Overlay */}
      {!loaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white/90">
          <div className="mb-4 text-xl font-light tracking-widest text-[#d1d5db] uppercase">Initializing Hardware</div>
          <div className="w-64 h-1 bg-white/10 rounded overflow-hidden">
            <div 
              className="h-full bg-white/80 transition-all duration-300"
              style={{ width: `${progressVal}%` }}
            />
          </div>
        </div>
      )}

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pointer-events-none -z-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
        
        <canvas ref={canvasRef} className="object-cover w-full h-full opacity-60" />
      </div>
      
      {/* Scrolling Content over the sticky canvas (scaled up slightly since container is 600vh) */}
      <div className="relative z-10 w-full h-[1400vh]">
        {children}
      </div>
    </div>
  );
}
