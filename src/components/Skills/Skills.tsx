'use client';

import {Chip, Grid} from "@mui/material";
import styles from './Skills.module.scss';

type SkillsType = {};

const skills = ['html', 'css', 'php', 'javascript', 'typescript', 'react', 'nextjs', 'redux', 'mobx', 'zustand', 'sass', 'photoshop', 'lightroom', 'GCP', 'AWS', 'CircleCI', 'figma', 'leadership', 'nosql', 'node', 'react-native', 'storybook', 'Graphql', 'Laravel', 'Vue.js', 'C#', 'agile', 'jQuery', 'wordpress', 'angular'];

const Skills = ({}: SkillsType) => {
  return (
    <Grid textAlign="center">
      {skills.map(skill => (
        <Chip key={skill} label={skill} size="medium" className={styles.chip} />
      ))}
    </Grid>
  )
};

export default Skills;