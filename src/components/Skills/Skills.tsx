'use client';

import {Chip, Grid} from "@mui/material";
import styles from './Skills.module.scss';
import { motion } from 'framer-motion';

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

const container = {
  initial: 'offscreen',
  whileInView: 'onscreen',
  viewport: {},
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.0,
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Skills = ({}: SkillsType) => {
  return (
    <motion.div className={styles.container} variants={container} initial="hidden" animate="visible">
      {consolidatedSkills.map(skill => (
        <motion.div variants={item} key={skill} className={styles.chip}>{skill}</motion.div>
      ))}
    </motion.div>
  )
};

export default Skills;