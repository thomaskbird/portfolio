import styles from './ResumeItem.module.scss';
import cn from "classnames";
import {useScroll} from "framer-motion";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import {ResumeType} from "@/types/ResumeType";
import moment from "moment";

type ResumeItemType = {
  item: ResumeType
  idx: number;
};

// todo: pass index so that we can compare if it is even

const ResumeItem = ({
  item,
  idx,
}: ResumeItemType) => {
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
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={cn(styles.resumeItem, !isEven ? styles.resumeItemEven : styles.resumeItemOdd)}
    >
      <div className={styles.sticky}>
        <motion.div
          className={styles.resumeItemLeft}
          style={{
            opacity: opacity,
            transform: `scale(${opacity}) translate(${!isEven ? '' : '-'}${scrollValueCalculated}px, 0)`,
          }}
        >
          <h2>
            {item.company}
          </h2>
          <h4><span className={styles.subtitle}>{item.type}</span> {item.title}</h4>

          <ul>
            {item.bullets.map((bullet, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: bullet }}></li>
            ))}
          </ul>

          <p><b>Skills:</b> {item.skills.join(', ')}</p>
        </motion.div>
        <div className={styles.indicator}>
        <div className={styles.dot}></div>
        </div>
        <div className={styles.resumeItemRight}>
          <motion.div
            style={{
              opacity: opacity,
              transform: `translate(${isEven ? '' : '-'}${scrollValueCalculated}px, 0)`,
            }}
            className={styles.dates}
          >
            <h5>{moment(item.startAt).format("MMM, YYYY")} to {moment(item.endAt).format("MMM, YYYY")}</h5>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ResumeItem;