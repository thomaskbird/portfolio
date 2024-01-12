'use client';

import {Chip, Grid} from "@mui/material";
import styles from './Skills.module.scss';

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

const Skills = ({}: SkillsType) => {
  return (
    <Grid textAlign="center">
      {consolidatedSkills.map(skill => (
        <Chip key={skill} label={skill} size="medium" className={styles.chip} />
      ))}
    </Grid>
  )
};

export default Skills;