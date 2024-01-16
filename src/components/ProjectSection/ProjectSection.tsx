'use client';

import styles from './ProjectSection.module.scss';
import {Grid} from "@mui/material";
import Screen from "@/components/Screen/Screen";
import cn from 'classnames';
import {motion, useScroll} from 'framer-motion';
import {MutableRefObject, useEffect, useRef, useState} from "react";

type ProjectSectionType = {
  alignment: 'left' | 'right';
  image: string;
  title: string;
  description: string;
  content: string;
};

// todo: research how to implement this https://gsap.com/community/forums/topic/34484-scrolltrigger-combined-with-div-that-has-inner-scroll/
// https://gsap.com/resources/React/
// https://stackoverflow.com/a/52028461

const ProjectSection = ({
  alignment,
  image,
  title,
  description,
  content
}: ProjectSectionType) => {
  const wrapperRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [scrollValueCalculated, setScrollValueCalculated] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['0.5 1', '1.33 1'],
  });

  const isLeft = alignment === 'left';
  const projectClasses = cn(styles.projects, isLeft ? styles.projectsLeft : styles.projectsRight);
  const classes = cn(styles.projectText, isLeft ? styles.textLeft : styles.textRight);

  useEffect(() => {
    scrollYProgress.on('change', (num) => {
      setScrollValueCalculated(100 - Math.round(num * 100));
      setOpacity(num);
    });

    return () => scrollYProgress.destroy();
  }, []);

  return (
    <motion.div ref={wrapperRef}>
      <Grid container className={projectClasses} spacing={2}>
        {alignment === 'left' && <Screen image={image} alignment={alignment} opacity={opacity} scrollValueCalculated={scrollValueCalculated} />}
        <Grid item xs={6} className={classes}>
          <motion.h2
            style={{
              transform: `translate(${isLeft ? '' : '-'}${scrollValueCalculated * .25}px, 0)`,
              opacity: opacity
            }}
          >
            {title}
          </motion.h2>

          <motion.h5
            style={{
              transform: `translate(${isLeft ? '' : '-'}${scrollValueCalculated * .5}px, 0)`,
              opacity: opacity
            }}
          >
            {description}
          </motion.h5>

          <motion.p
            style={{
              transform: `translate(${isLeft ? '' : '-'}${scrollValueCalculated}px, 0)`,
              opacity: opacity
            }}
          >
            {content}
          </motion.p>
        </Grid>
        {alignment === 'right' && <Screen image={image} alignment={alignment} opacity={opacity} scrollValueCalculated={scrollValueCalculated} />}
      </Grid>
    </motion.div>
  )
}

export default ProjectSection;