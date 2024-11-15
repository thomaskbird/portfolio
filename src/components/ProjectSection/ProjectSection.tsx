'use client';

import styles from './ProjectSection.module.scss';
import {Grid} from "@mui/material";
import Screen from "@/components/Screen/Screen";
import cn from 'classnames';
import {motion, useScroll} from 'framer-motion';
import {MutableRefObject, useEffect, useRef, useState} from "react";
import Typography from "@mui/material/Typography";

type ProjectSectionType = {
  idx: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
};

// todo: @media(min-width: 900px) and (max-width: 1100px) {

const ProjectSection = ({
  idx,
  image,
  title,
  subtitle,
  description
}: any) => {
  const wrapperRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [scrollValueCalculated, setScrollValueCalculated] = useState(0);
  const [screenPosition, setScreenPosition] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'end end'],
  });

  const isLeft = idx % 2 === 0;
  const projectClasses = cn(styles.projects, isLeft ? styles.projectsLeft : styles.projectsRight);
  const classes = cn(styles.projectText, isLeft ? styles.textLeft : styles.textRight);
  const featureImage = image.fields.file.url;

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
          {isLeft && (
            <Screen
              title={title}
              image={featureImage}
              isLeft={isLeft}
              opacity={opacity}
              scrollValueCalculated={scrollValueCalculated}
              screenPosition={screenPosition}
            />
          )}
          <Grid item xs={12} md={6} className={classes}>
            <motion.h1
              style={{
                transform: `translate(${isLeft ? '' : '-'}${scrollValueCalculated * .25}px, 0)`,
                opacity: opacity
              }}
            >
              {title}
            </motion.h1>

            <motion.h4
              style={{
                transform: `translate(${isLeft ? '' : '-'}${scrollValueCalculated * .5}px, 0)`,
                opacity: opacity
              }}
              dangerouslySetInnerHTML={{ __html: subtitle}}
            />

            <motion.div
              style={{
                transform: `translate(${isLeft ? '' : '-'}${scrollValueCalculated}px, 0)`,
                opacity: opacity
              }}
            >
              <Typography variant="body2" dangerouslySetInnerHTML={{ __html: description }} />
            </motion.div>
          </Grid>
          {!isLeft && (
            <Screen
              title={title}
              image={featureImage}
              isLeft={isLeft}
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
