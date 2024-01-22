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

// todo: @media(min-width: 900px) and (max-width: 1100px) {

const ProjectSection = ({
  alignment,
  image,
  title,
  description,
  content
}: ProjectSectionType) => {
  const wrapperRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [scrollValueCalculated, setScrollValueCalculated] = useState(0);
  const [screenPosition, setScreenPosition] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'end end'],
  });

  const isLeft = alignment === 'left';
  const projectClasses = cn(styles.projects, isLeft ? styles.projectsLeft : styles.projectsRight);
  const classes = cn(styles.projectText, isLeft ? styles.textLeft : styles.textRight);

  useEffect(() => {
    scrollYProgress.on('change', (num) => {
      setScreenPosition(num);
      setScrollValueCalculated(100 - Math.round(num * 100));
      setOpacity(num);
    });

    return () => scrollYProgress.destroy();
  }, []);

  return (
    <div className={styles.stickyWrapper} ref={wrapperRef}>
      <div className={styles.stuck}>
        <Grid container className={projectClasses} spacing={2}>
          {alignment === 'left' && (
            <Screen
              title={title}
              image={image}
              alignment={alignment}
              opacity={opacity}
              scrollValueCalculated={scrollValueCalculated}
              screenPosition={screenPosition}
            />
          )}
          <Grid item xs={12} md={6} className={classes}>
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
              dangerouslySetInnerHTML={{ __html: description}}
            />

            <motion.p
              style={{
                transform: `translate(${isLeft ? '' : '-'}${scrollValueCalculated}px, 0)`,
                opacity: opacity
              }}
              dangerouslySetInnerHTML={{ __html: content}}
            />
          </Grid>
          {alignment === 'right' && (
            <Screen
              title={title}
              image={image}
              alignment={alignment}
              opacity={opacity}
              scrollValueCalculated={scrollValueCalculated}
              screenPosition={screenPosition}
            />
          )}
        </Grid>
      </div>
    </div>
)
}

export default ProjectSection;