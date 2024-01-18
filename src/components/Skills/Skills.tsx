'use client';

import styles from './Skills.module.scss';
import {motion, useScroll, useTransform} from 'framer-motion';
import {useEffect, useRef, useState} from "react";

type SkillsType = {};

const skills = {
  code: {
    slug: 'code',
    label: 'Code',
    skills: ['html', 'css', 'php', 'javascript', 'typescript', 'react', 'nextjs', 'redux', 'mobx', 'zustand', 'sass', 'gcp', 'aws', 'circleci', 'nosql', 'node', 'react-native', 'storybook', 'graphql', 'laravel', 'vue.js', 'c#', 'jQuery', 'wordpress', 'angular', 'expressjs', 'mui', 'analytics']
  },
  design: {
    slug: 'design',
    label: 'Design',
    skills: ['photoshop', 'lightroom', 'figma', 'invision', 'miro']
  },
  soft: {
    slug: 'soft',
    label: 'Soft Skills',
    skills: ['leadership', 'communication', 'agile']
  }
};

const consolidatedSkills = [skills.code.skills, skills.soft.skills, skills.design.skills].flat();

const item = {
  hidden: { y: 25, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.1
    }
  }),
};

const Skills = ({}: SkillsType) => {
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
      {consolidatedSkills.map(((skill, idx) => (
        <motion.div
          key={skill}
          className={styles.chip}
          style={{
            opacity: scrollYProgress,
          }}
        >
          {skill}
        </motion.div>
      )))}
    </motion.div>
  )
};

export default Skills;