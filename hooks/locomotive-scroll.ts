import { useEffect, useRef, MutableRefObject } from "react";
import LocomotiveScroll from "locomotive-scroll";

export function useLocoScroll(
  start: boolean
): MutableRefObject<HTMLElement | null> {
  const scrollRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!start) return;

    const scrollEl = scrollRef.current;
    let locoScroll: LocomotiveScroll | null = null;

    if (scrollEl) {
      locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: "is-revealed",
        // Add other options as needed
      });
    }

    return () => {
      if (locoScroll) {
        locoScroll.destroy();
      }
    };
  }, [start]);

  return scrollRef;
}
