import styles from './Fader.module.scss';
import {MutableRefObject, useEffect, useRef, useState} from "react";
import FaderItem from "@/components/Fader/FaderItem";
import cn from "classnames";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";
import useIntervalHook from "@/hooks/useIntervalHook";

type SliderType = {
  items: any;
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

  const {
    activeIndex,
} = useIntervalHook(itemsTotal, duration!, startAt!)

  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';

  return (
    <div className={styles.faderWrap}>
      {(items ?? []).map((testimonial: any, dotIdx: number) => (
        <FaderItem
          key={dotIdx}
          {...testimonial}
          active={activeIndex === dotIdx}
        />
      ))}

      <div className={styles.dotWrap}>
        {(items ?? []).map((testimonial: any, idx: number) => (
          <div key={idx} className={cn(
            styles.dot,
            activeIndex === idx ? styles.dotActive : styles.dotDefault,
            isDark ? styles.dotDark : styles.dotLight
          )} />
        ))}
      </div>
    </div>
  )
}

export default Fader;
