'use client';

import styles from './Skills.module.scss';
import {motion, useScroll} from 'framer-motion';
import {useEffect, useRef, useState} from "react";
import {SkillType} from "@/types/SkillType";
import retrieveSkills from "@/services/retrieveSkills";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetIsLoading} from "@/store/selectors/globalStore";

type SkillsType = {
};

const Skills = ({}: SkillsType) => {
  const setIsLoading = useGlobalStore(selectSetIsLoading);

  const [skills, setSkills] = useState<SkillType[]>([]);
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

  useEffect(() => {
    (async() => {
      try {
        setIsLoading(true);
        const skillsFromDb = await retrieveSkills();

        setSkills(skillsFromDb);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <motion.div
      ref={wrapperRef}
      className={styles.container}
      style={{ transform: `translateY(${vertical}px)` }}
    >
      {(skills ?? []).map(skill => (
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