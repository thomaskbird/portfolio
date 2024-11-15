'use client';

import styles from './Skills.module.scss';
import {motion, useScroll} from 'framer-motion';
import {useEffect, useRef, useState} from "react";
import {SkillType} from "@/types/SkillType";
import retrieveSkills from "@/services/retrieveSkills";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetIsLoading, selectTheme} from "@/store/selectors/globalStore";
import cn from "classnames";
import useRetrieveSkills from "@/hooks/useRetrieveSkills";

type SkillsType = {
};

const Skills = ({}: SkillsType) => {
  const setIsLoading = useGlobalStore(selectSetIsLoading);
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';
  const { skills, error, isLoading } = useRetrieveSkills();

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
      {(skills ?? []).map(skill => (
        <motion.div
          key={skill.sys.id}
          className={cn(styles.chip, isDark ? styles.chipDark : styles.chipLight)}
          style={{
            opacity: scrollYProgress,
          }}
        >
          {skill.fields?.title}
        </motion.div>
      ))}
    </motion.div>
  )
};

export default Skills;
