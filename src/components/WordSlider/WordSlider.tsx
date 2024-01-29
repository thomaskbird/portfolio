import {MutableRefObject, useEffect, useRef, useState} from "react";
import styles from './WordSlider.module.scss';
import cn from "classnames";

export type WordSliderType = {
  sentence: string;
  duration?: number;
  slideWords: string[];
};

const WordSlider = ({
  sentence,
  duration = 2000,
  slideWords,
}: WordSliderType) => {
  const interval = useRef<MutableRefObject<any>>();
  const [activeIndex, setActiveIndex] = useState(0);

  const itemsTotal = (slideWords ?? []).length;

  const startInterval = () => {
    interval.current = setInterval(() => {
      handleAuto();
    }, duration);
  };

  const stopInterval = () => clearInterval(interval.current);

  useEffect(() => {
    startInterval();

    return () => stopInterval();
  }, []);

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
    <div className={styles.wrapper}>
      <h3>
        <span className={styles.sentence}>{sentence}&nbsp;</span>
        <span className={styles.mask}>
          {(slideWords ?? []).map((word, idx) => (
            <span key={idx} className={idx === activeIndex ? cn(styles.word, styles.active) : styles.word}>
              {word}
            </span>
          ))}
        </span>
      </h3>
    </div>
  )
}

export default WordSlider;