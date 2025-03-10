import styles from './Slider.module.scss';
import Slide from "@/components/Slider/Slide";
import {MutableRefObject, useCallback, useEffect, useRef, useState} from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import {IconButton} from "@mui/material";
import {useInView} from "framer-motion";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";
import cn from "classnames";
import Image from "next/image";

type SliderType = {
  items: any;
  duration?: number;
  autoPlay?: boolean;
  startAt?: number;
  autoPlayOnlyWhenVisible?: boolean;
};

// todo: look at converting slider to something like this so we don't have so many styling issues with responsiveness and absolute positioning
// todo: https://codesandbox.io/p/sandbox/framer-motion-layout-animations-snxgv?file=%2Fsrc%2Findex.tsx
const Slider = ({
  items,
  duration = 3000,
  autoPlay = true,
  startAt = 0,
  autoPlayOnlyWhenVisible = false
}: SliderType) => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';
  const [itemsTotal, setItemsTotal] = useState(0);

  const interval: MutableRefObject<any> = useRef();
  const sliderRef: MutableRefObject<any> = useRef();

  const isVisible = useInView(sliderRef);

  const [activeIndex, setActiveIndex] = useState<number>(startAt);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // trigger the interval to start
  const startInterval = useCallback((totalItems: number) => {
    interval.current = setInterval(() => {
      handleAuto(totalItems);
    }, duration);
  }, [duration]);

  useEffect(() => {
    if(items && items.length > 0) {
      if(!isRunning && autoPlay && !autoPlayOnlyWhenVisible) {
        setIsRunning(true);
        startInterval(items.length);
      }

      setItemsTotal(items.length);
    }

    return () => stopInterval();
  }, [items, isRunning, autoPlay, autoPlayOnlyWhenVisible, startInterval]);

  useEffect(() => {
    if(autoPlayOnlyWhenVisible) {
      if(autoPlay) {
        console.warn('You must set autoPlay to false if autoPlayOnlyWhenVisible is true');
      } else {
        if(isVisible && !isRunning) {
          startInterval(itemsTotal);
          setIsRunning(true);
        } else {
          stopInterval();
          setIsRunning(false);
        }
      }
    }
  }, [isVisible, autoPlay, autoPlayOnlyWhenVisible, isRunning, itemsTotal, startInterval]);

  const stopInterval = () => clearInterval(interval.current);

  // handle pause play
  const handleTogglePlaying = () => {
    if(isRunning) {
      stopInterval();
    } else {
      startInterval(itemsTotal);
    }

    setIsRunning(prevState => !prevState);
  }

  // handle next when autoplaying
  const handleAuto = (totalItems: number) => {
    setActiveIndex(prevState => {
      const next = prevState + 1;
      if(next < totalItems) {
        return next;
      } else {
        return 0;
      }
    })
  }

  return (
    <div className={styles.sliderBorder}>
      <div className={cn(styles.sliderWrap, isDark ? styles.sliderWrapDark : styles.sliderWrapLight)}>
        <Image
          width={198}
          height={155}
          alt="Quote graphic"
          src="/quote.png"
          className={cn(styles.quoteLeft, isDark ? styles.quoteColorDark : styles.quoteColorLight)}
        />
        <Image
          width={198}
          height={155}
          alt="Quote graphic"
          src="/quote.png"
          className={cn(styles.quoteRight, isDark ? styles.quoteColorDark : styles.quoteColorLight)}
        />

        <div className={styles.slidesWrap} ref={sliderRef}>
          {(items ?? []).map((testimonial: any, idx: number) => (
            <Slide
              key={idx}
              {...testimonial.fields}
              id={testimonial.sys.id}
              active={activeIndex === idx}
            />
          ))}
        </div>

        <div className={styles.pagination}>
          <IconButton className={styles.icons} onClick={handleTogglePlaying}>
            {isRunning ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
          </IconButton>
          {(items ?? []).map((testimonial: any, iDot: number) => (
            <div
              key={iDot}
              className={cn(activeIndex === iDot ? styles.dotActive : styles.dot, isDark ? styles.dotDark : styles.dotLight)}
              onClick={() => activeIndex === iDot ? false : setActiveIndex(iDot)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider;
