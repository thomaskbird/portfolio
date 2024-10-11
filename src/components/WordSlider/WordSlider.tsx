import {MutableRefObject, useEffect, useRef, useState} from "react";
import styles from './WordSlider.module.scss';
import cn from "classnames";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";

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
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';
  const interval: MutableRefObject<any> = useRef();
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
            <span
              key={idx}
              className={cn(
                styles.word,
                isDark ? styles.wordDark : styles.wordLight,
                idx === activeIndex ? styles.active : '',
              )}>
              {word}
            </span>
          ))}
        </span>
      </h3>
    </div>
  )
}

export default WordSlider;
