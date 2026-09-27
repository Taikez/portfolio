"use client";

import { useRef, MouseEvent } from "react";

export default function GlowWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;

    // clientX/Y are viewport-relative
    const { clientX, clientY } = e;

    wrapperRef.current.style.setProperty("--mouse-x", `${clientX}px`);
    wrapperRef.current.style.setProperty("--mouse-y", `${clientY}px`);
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      // Replaced hardcoded slate colors with your new theme tokens
      className="relative min-h-screen w-full bg-background text-foreground group"
    >
      <div
        // Removed lg:absolute so this remains locked to the viewport
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(29, 78, 216, 0.15), transparent 80%)",
        }}
      />

      <div className="relative z-40">{children}</div>
    </div>
  );
}
