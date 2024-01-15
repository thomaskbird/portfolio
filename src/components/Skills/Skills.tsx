'use client';

import {Chip, Grid} from "@mui/material";
import styles from './Skills.module.scss';
import {motion, useInView, useScroll} from 'framer-motion';
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

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  },
};

const Skills = ({}: SkillsType) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      className={styles.container}
      ref={wrapperRef}
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {consolidatedSkills.map(((skill, idx) => (
        <motion.div
          key={skill}
          className={styles.chip}
          variants={item}
          transition={{ duration: 0.1, ease: 'easeOut' }}
        >
          {skill}
        </motion.div>
      )))}
    </motion.div>
  )
};

export default Skills;