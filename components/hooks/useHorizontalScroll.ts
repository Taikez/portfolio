"use client";

import { useEffect, useRef } from "react";

export function useHorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleWheel = (event: WheelEvent) => {
      // Convert vertical mouse-wheel movement into horizontal scrolling.
      if (
        Math.abs(event.deltaY) > Math.abs(event.deltaX) &&
        element.scrollWidth > element.clientWidth
      ) {
        event.preventDefault();

        element.scrollBy({
          left: event.deltaY,
          behavior: "auto",
        });
      }
    };

    element.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return scrollRef;
}
