'use client';

import styles from './Skills.module.scss';
import {motion} from 'framer-motion';

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

// todo: rework this to use `useScroll`, I want the animations faster

const Skills = ({}: SkillsType) => {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="visible"
    >
      {consolidatedSkills.map(((skill, idx) => (
        <motion.div
          custom={idx}
          key={skill}
          className={styles.chip}
          variants={item}
        >
          {skill}
        </motion.div>
      )))}
    </motion.div>
  )
};

export default Skills;