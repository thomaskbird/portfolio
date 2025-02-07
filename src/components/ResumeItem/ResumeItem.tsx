import styles from './ResumeItem.module.scss';
import cn from "classnames";
import {useScroll} from "framer-motion";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import moment from "moment";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";

type ResumeItemType = {
  item: any; // ResumeType
  idx: number;
};

// todo: pass index so that we can compare if it is even

const ResumeItem = ({
  item,
  idx,
}: ResumeItemType) => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';
  const isEven = idx % 2 === 0;
  const wrapperRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', '0.25 end'],
  });

  const [scrollValueCalculated, setScrollValueCalculated] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    scrollYProgress.on('change', (num) => {
      setScrollValueCalculated(150 - Math.round(num * 100));
      setOpacity(num);
    });

    return () => scrollYProgress.destroy();
  }, [scrollYProgress]);

  const date = new Date();
  const endAtMoment = moment(item.fields.to);
  const endDate = item.fields.to ? endAtMoment.format("MMM, YYYY") : 'Present';

  return (
    <div
      ref={wrapperRef}
      className={cn(
        styles.resumeItem,
        !isEven ? styles.resumeItemEven : styles.resumeItemOdd
      )}
    >
      <div className={styles.sticky}>
        <motion.div
          className={cn(
            styles.resumeItemLeft,
            isDark ? styles.resumeItemDark : styles.resumeItemLight
          )}
          style={{
            opacity: opacity,
            transform: `scale(${opacity})`,
            // transform: `scale(${opacity}) translate(${!isEven ? '' : '-'}${scrollValueCalculated}px, 0)`,
          }}
        >
          <p className={styles.smallDates}>{moment(item.fields.from).format("MMM, YYYY")} to {endDate}</p>

          <h2>{item.fields.company}</h2>
          <h4>{item.fields.title} <span className={styles.subtitle}>{item.type}</span></h4>


          <ul>
            {item.fields.content.map((content: any, idx: number) => (
              <li key={idx}>{content}</li>
            ))}
          </ul>

          <p><b>Skills:</b> {item.fields.skills.join(', ')}</p>
        </motion.div>
        <div className={styles.indicator}>
          <div className={cn(
            styles.dot,
            isDark ? styles.dotDark : styles.dotLight
          )}></div>
        </div>
        <div className={cn(
          styles.resumeItemRight,
        )}>
          <motion.div
            style={{
              opacity: opacity,
              transform: `translate(${isEven ? '' : '-'}${scrollValueCalculated}px, 0)`,
            }}
            className={cn(
              styles.dates,
              isDark ? styles.datesDark : styles.datesLight,
              isDark ? styles.resumeItemRightDark : styles.resumeItemRightLight
            )}
          >
            <h5>{moment(item.fields.from).format("MMM, YYYY")} to {endDate}</h5>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ResumeItem;
