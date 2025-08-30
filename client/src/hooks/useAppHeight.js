import { useEffect } from "react";

export default function useAppHeight() {
  useEffect(() => {
    const setAppHeight = () => {
      const height = window.innerHeight;
      document.documentElement.style.setProperty("--app-height", `${height}px`);
    };

    // Set on load
    setAppHeight();

    // Events to catch browser bar changes
    window.addEventListener("resize", setAppHeight);
    window.addEventListener("orientationchange", setAppHeight);
    document.addEventListener("visibilitychange", setAppHeight);

    return () => {
      window.removeEventListener("resize", setAppHeight);
      window.removeEventListener("orientationchange", setAppHeight);
      document.removeEventListener("visibilitychange", setAppHeight);
    };
  }, []);
}
