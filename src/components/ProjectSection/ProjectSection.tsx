'use client';

import styles from './ProjectSection.module.scss';
import {Grid} from "@mui/material";
import Screen from "@/components/Screen/Screen";
import cn from 'classnames';
import { Controller, Scene } from 'react-scrollmagic';

type ProjectSectionType = {
  alignment: 'left' | 'right';
  image: string;
  title: string;
  description: string;
  content: string;
};

const ProjectSection = ({
  alignment,
  image,
  title,
  description,
  content
}: ProjectSectionType) => {
  const classes = cn(styles.projectText, alignment === 'left' ? styles.textLeft : styles.textRight)

  return (
    // <Controller>
    //   <Scene duration={2000} pin triggerHook={0} classToggle="TEST" pushFollowers={true}>
        <Grid container className={styles.projects} spacing={2}>
          {alignment === 'left' && (<Screen image={image} alignment={alignment} />)}
          <Grid item xs={6} className={classes}>
            <h2>{title}</h2>
            <h5>{description}</h5>

            <p>{content}</p>
          </Grid>
          {alignment === 'right' && (<Screen image={image} alignment={alignment} />)}
        </Grid>
    //   </Scene>
    // </Controller>
  )
}

export default ProjectSection;