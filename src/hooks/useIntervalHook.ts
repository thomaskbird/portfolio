import {MutableRefObject, useEffect, useRef, useState} from "react";

const useIntervalHook = (total: number, duration: number, startAt: number) => {
  const interval: MutableRefObject<any> = useRef();
  const [activeIndex, setActiveIndex] = useState<number>(startAt ?? 0);

  useEffect(() => {
    interval.current = setInterval(() => {
      setActiveIndex(prevState => {
        const next = prevState + 1;
        if(next < total) {
          return next;
        } else {
          return 0;
        }
      })
    }, duration);

    return () => clearInterval(interval.current);
  });

  return {
    activeIndex,
  }
}

export default useIntervalHook;
