import styles from './Slider.module.scss';
import MOCK_TESTIMONIALS from "@/mocks/mockTestimonials";
import Slide from "@/components/Slider/Slide";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import {IconButton} from "@mui/material";

type SliderType = {
  duration?: number;
  autoPlay?: boolean;
  startAt?: number;
};

// todo: consider only triggering autoplay when the section is within the viewport and disabling when not in view
const Slider = ({
  duration = 3000,
  autoPlay = true,
  startAt = 0
}: SliderType) => {
  const testimonialsTotal = MOCK_TESTIMONIALS.length;
  const interval: MutableRefObject<any> = useRef();
  const [activeIndex, setActiveIndex] = useState<number>(startAt);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // trigger autoplay
  useEffect(() => {
    if(!isRunning && autoPlay) {
      setIsRunning(true);
      startInterval();
    }

    return () => clearInterval(interval.current);
  }, []);

  // trigger the interval to start
  const startInterval = () => {
    interval.current = setInterval(() => {
      handleAuto();
    }, duration);
  };

  // handle pause play
  const handleTogglePlaying = () => {
    if(isRunning) {
      clearInterval(interval.current);
    } else {
      startInterval();
    }

    setIsRunning(prevState => !prevState);
  }

  // when a pagination item is clicked navigate to it
  const handleDotClick = (idx: number) => {
    setActiveIndex(idx);
  }

  // handle next when autoplaying
  const handleAuto = () => {
    setActiveIndex(prevState => {
      const next = prevState + 1;
      if(next < testimonialsTotal) {
        return next;
      } else {
        return 0;
      }
    })
  }

  return (
    <div className={styles.sliderWrap}>
      <img src="/quote.png" className={styles.quoteLeft}/>
      <img src="/quote.png" className={styles.quoteRight}/>

      <div className={styles.slidesWrap}>
        {MOCK_TESTIMONIALS.map((testimonial, idx) => (
          <Slide
            key={testimonial.id}
            {...testimonial}
            active={activeIndex === idx}
          />
        ))}
      </div>

      <div className={styles.pagination}>
        <IconButton className={styles.icons} onClick={handleTogglePlaying}>
          {isRunning ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
        </IconButton>
        {MOCK_TESTIMONIALS.map((testimonial, iDot) => (
          <div
            key={testimonial.id}
            className={activeIndex === iDot ? styles.dotActive : styles.dot}
            onClick={() => activeIndex === iDot ? false : handleDotClick(iDot)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Slider;