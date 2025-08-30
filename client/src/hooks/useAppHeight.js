import { useEffect } from "react";

export default function useAppHeight() {
  useEffect(() => {
    const setAppHeight = () => {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
      );
    };
    window.addEventListener("resize", setAppHeight);
    setAppHeight();
    return () => window.removeEventListener("resize", setAppHeight);
  }, []);
}
