"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

export function SwipeSlider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".swipe-section");
    if (!sections.length) return;

    let animating = false;
    let currentIndex = 0;

    gsap.set(sections, { zIndex: (i) => sections.length - i });
    gsap.set(sections.slice(1), { autoAlpha: 0, yPercent: 100 });

    const gotoSection = (index: number, direction: number) => {
      if (animating || index < 0 || index >= sections.length) return;
      animating = true;

      const currentSection = sections[currentIndex];
      const nextSection = sections[index];

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut" },
        onComplete: () => {
          animating = false;
        },
      });

      if (direction === 1) {
        tl.set(nextSection, { autoAlpha: 1, yPercent: 100 })
          .to(currentSection, { yPercent: -100, autoAlpha: 0 }, 0)
          .to(nextSection, { yPercent: 0 }, 0);
      } else {
        tl.set(nextSection, { autoAlpha: 1, yPercent: -100 })
          .to(currentSection, { yPercent: 100, autoAlpha: 0 }, 0)
          .to(nextSection, { yPercent: 0 }, 0);
      }

      currentIndex = index;
    };

    const observer = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    return () => observer.kill();
  }, []);

  // Convert children to an array so we can map them into individual slides
  const childArray = React.Children.toArray(children);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(100dvh-64px)] overflow-hidden bg-background"
    >
      {childArray.map((child, idx) => (
        <section
          key={idx}
          className="swipe-section absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden bg-background"
        >
          <div className="w-full h-full px-6">{child}</div>
        </section>
      ))}
    </div>
  );
}
