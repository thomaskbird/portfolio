import {MutableRefObject, useEffect, useRef, useState} from "react";

const useIntervalHook = (total, duration, startAt) => {
  const interval: MutableRefObject<any> = useRef();
  const [activeIndex, setActiveIndex] = useState<number>(startAt ?? 0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // handle next when autoplaying
  const handleAuto = () => {console.log('handleAuto')
    setActiveIndex(prevState => {
      const next = prevState + 1;
      if(next < total) {
        return next;
      } else {
        return 0;
      }
    })
  }

  const stopInterval = () => clearInterval(interval.current);

  const startInterval = () => {
    setIsRunning(true);
    interval.current = setInterval(() => handleAuto(), duration);
  };

  return {
    startInterval,
    stopInterval,
    activeIndex,
    isRunning,
  }
}

export default useIntervalHook;
