import { useEffect } from "react";

export default function useAppHeight() {
  useEffect(() => {
    const setAppHeight = () => {
      const height = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
      document.documentElement.style.setProperty("--app-height", `${height}px`);
    };

    setAppHeight();

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", setAppHeight);
      window.visualViewport.addEventListener("scroll", setAppHeight);
    }

    window.addEventListener("orientationchange", setAppHeight);

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", setAppHeight);
        window.visualViewport.removeEventListener("scroll", setAppHeight);
      }
      window.removeEventListener("orientationchange", setAppHeight);
    };
  }, []);
}
