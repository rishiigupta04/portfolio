"use client";

import { useEffect, useRef } from "react";
import { ThemeProvider } from "./theme-provider";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function RootLayoutClient({
  children,
  interClass,
}: {
  children: React.ReactNode;
  interClass: string;
}) {
  const scrollRef = useRef<HTMLElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        // Add other options as needed
      });
    }

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    });

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <body className={interClass}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <main data-scroll-container ref={scrollRef}>
          {children}
        </main>
      </ThemeProvider>
    </body>
  );
}
