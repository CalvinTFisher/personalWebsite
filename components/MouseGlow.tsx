"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20, restDelta: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20, restDelta: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[998] top-0 left-0"
      style={{ x: springX, y: springY }}
    >
      {/* Large outer glow — visible only on dark backgrounds via mix-blend-screen */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.07) 0%, rgba(147,51,234,0.04) 40%, transparent 70%)",
        }}
      />
      {/* Small tight cursor dot */}
      <div className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full mix-blend-screen"
        style={{ background: "radial-gradient(circle, rgba(165,180,252,0.5) 0%, transparent 100%)" }}
      />
    </motion.div>
  );
}
