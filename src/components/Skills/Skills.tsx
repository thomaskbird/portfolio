'use client';

import styles from './Skills.module.scss';
import {motion, useScroll, useTransform} from 'framer-motion';
import {useEffect, useRef, useState} from "react";

type SkillsType = {
  items: any[];
};

const Skills = ({
  items
}: SkillsType) => {
  const [vertical, setVertical] = useState(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['0.25 1', '1.33 1'],
  });

  useEffect(() => {
    scrollYProgress.on('change', (num) => {
      const calculated = 60 - (num * 60);
      setVertical(calculated);
    });

    return () => scrollYProgress.destroy();
  }, []);

  return (
    <motion.div
      ref={wrapperRef}
      className={styles.container}
      style={{ transform: `translateY(${vertical}px)` }}
    >
      {(items ?? []).map(skill => (
        <motion.div
          key={skill.id}
          className={styles.chip}
          style={{
            opacity: scrollYProgress,
          }}
        >
          {skill.title}
        </motion.div>
      ))}
    </motion.div>
  )
};

export default Skills;