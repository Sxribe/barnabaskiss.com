import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState<number>(null!);

  function findWidth() {
    return window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      let timer: NodeJS.Timeout = null!;
      const listener = () => {
        clearTimeout(timer);
        timer = setTimeout(() => setWidth(findWidth()), 20);
      };
      window.addEventListener("resize", listener);

      return () => {
        window.removeEventListener("resize", listener)
      }
    }
  }, []);

  return width;
}