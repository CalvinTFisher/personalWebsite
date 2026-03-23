"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

const FRAME_COUNT = 192;

type ScrollPcPortfolioProps = {
  children?: React.ReactNode;
};

export default function ScrollPcPortfolio({ children }: ScrollPcPortfolioProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progressVal, setProgressVal] = useState(0);

  // Pre-load all frames into memory so scrubbing is instant
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Frames are 1-indexed: frame_1.jpg … frame_192.jpg
      img.src = `/sequence/frame_${i + 1}.jpg`;

      const index = i; // capture for closure
      img.onload = () => {
        loadedImages[index] = img;
        loadedCount++;
        setProgressVal(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          setImages([...loadedImages]);
          setLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages([...loadedImages]);
          setLoaded(true);
        }
      };
    }
  }, []);

  // Track scroll progress through the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Gentle smoothing — keeps it feeling attached without input lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Render the correct frame to the canvas on every scroll tick
  useEffect(() => {
    if (!loaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (val: number) => {
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(val)));
      const img = images[idx];
      if (!img || !img.complete || img.naturalHeight === 0) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // object-contain: letterbox to fill canvas without cropping
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.naturalWidth / img.naturalHeight;

      let drawWidth: number, drawHeight: number;
      if (imgRatio > canvasRatio) {
        // Constrained by width
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgRatio;
      } else {
        // Constrained by height
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgRatio;
      }

      const drawX = (canvas.width - drawWidth) / 2;
      const drawY = (canvas.height - drawHeight) / 2;

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    render(frameIndex.get());
    const unsub = frameIndex.on("change", (val) => render(val));
    return () => unsub();
  }, [loaded, images, frameIndex]);

  // Keep canvas pixel dimensions in sync with the viewport
  useEffect(() => {
    const sync = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full text-white" style={{ height: "700vh" }}>

      {/* Loading overlay — shown until all 192 frames are decoded in RAM */}
      {!loaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white/90">
          <div className="mb-4 text-xl font-light tracking-widest text-[#d1d5db] uppercase">
            Initializing Hardware
          </div>
          <div className="w-64 h-1 bg-white/10 rounded overflow-hidden">
            <div
              className="h-full bg-white/80 transition-all duration-300"
              style={{ width: `${progressVal}%` }}
            />
          </div>
        </div>
      )}

      {/* Sticky full-screen canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pointer-events-none -z-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
        <canvas ref={canvasRef} className="w-full h-full opacity-60" />
      </div>

      {/* Overlaid scrolling content */}
      <div className="relative z-10 w-full h-[700vh] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
