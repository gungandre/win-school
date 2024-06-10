// hooks/useScrollAndLenis.js
import { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";

const useScrollAndLenis = (condition = false) => {
  const [stopScroll, setStopScroll] = useState(condition);

  const lenis = useLenis(() => {
    if (stopScroll) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [stopScroll]);

  return [stopScroll, setStopScroll];
};

export default useScrollAndLenis;
