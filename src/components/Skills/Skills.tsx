'use client';

import styles from './Skills.module.scss';
import {motion, useScroll} from 'framer-motion';
import {useEffect, useRef, useState} from "react";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";
import cn from "classnames";
import useRetrieveSkills from "@/hooks/useRetrieveSkills";
import useShuffle from "@/hooks/useShuffle";

type SkillsType = {
};

const Skills = ({}: SkillsType) => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';
  const { skills, error, isLoading } = useRetrieveSkills();
  const shuffledSkills = useShuffle(skills ?? []);
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
  }, [scrollYProgress]);

  return (
    <motion.div
      ref={wrapperRef}
      className={styles.container}
      style={{ transform: `translateY(${vertical}px)` }}
    >
      {shuffledSkills.map(skill => (
        <motion.div
          key={skill.sys.id}
          className={cn(styles.chip, isDark ? styles.chipDark : styles.chipLight)}
          style={{
            opacity: scrollYProgress,
          }}
        >
          {skill.fields?.title as string}
        </motion.div>
      ))}
    </motion.div>
  )
};

export default Skills;
