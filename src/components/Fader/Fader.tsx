import styles from './Fader.module.scss';
import {MutableRefObject, useEffect, useRef, useState} from "react";
import FaderItem from "@/components/Fader/FaderItem";

type SliderType = {
  items: any[];
  duration?: number;
  startAt?: number;
};

// todo: look at converting slider to something like this so we don't have so many styling issues with responsiveness and absolute positioning
// todo: https://codesandbox.io/p/sandbox/framer-motion-layout-animations-snxgv?file=%2Fsrc%2Findex.tsx

const Fader = ({
  items,
  duration = 3000,
  startAt = 0,
}: SliderType) => {
  const itemsTotal = items?.length ?? 0;

  const interval: MutableRefObject<any> = useRef();

  const [activeIndex, setActiveIndex] = useState<number>(startAt);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // trigger autoplay
  useEffect(() => {
    if(!isRunning) {
      setIsRunning(true);
      startInterval();
    }

    return () => stopInterval();
  }, []);

  // trigger the interval to start
  const startInterval = () => {
    interval.current = setInterval(() => {
      handleAuto();
    }, duration);
  };

  const stopInterval = () => clearInterval(interval.current);

  // handle next when autoplaying
  const handleAuto = () => {
    setActiveIndex(prevState => {
      const next = prevState + 1;
      if(next < itemsTotal) {
        return next;
      } else {
        return 0;
      }
    })
  }

  return (
    <div className={styles.faderWrap}>
      {(items ?? []).map((testimonial, idx) => (
        <FaderItem
          key={idx}
          {...testimonial}
          active={activeIndex === idx}
        />
      ))}
    </div>
  )
}

export default Fader;
