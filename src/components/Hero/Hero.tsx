import {Button, Container, Grid} from '@mui/material';
import cn from 'classnames';
import styles from './Hero.module.scss';
import Socials from '@/components/Socials/Socials';
import { motion } from 'framer-motion';

const items = {
  hidden: (i: number) => ({
    y: `-${i * 20}px`,
    opacity: 0
  }),
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: i * 0.3
    }
  })
};

const imageTransition = {
  ...items,
  visible: (i: number) => ({
    ...items.visible,
    y: 30,
    transition: {
      delay: i * 0.1,
      duration: 1
    }
  })
}

const Hero = () => {
  return (
    <Container maxWidth={false} disableGutters className={styles.hero}>
      <Container>
        <Socials />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className={styles.heroImage}>
              <motion.img custom={2} variants={imageTransition} src="/thomas-bird.png" className={cn(styles.heroImageItem, 'animate__animated animate__slow animate__fadeIn ')} alt="Thomas Bird" />
            </Grid>
            <Grid item xs={12} md={6} className={styles.heroText}>
              <motion.h1
                custom={1}
                variants={items}
                className={cn(styles.heroTextTitle)}
              >
                I&apos;m Tom,<br/> Nice to meet you!
              </motion.h1>
              <motion.p
                custom={2}
                variants={items}
                className={cn(styles.heroSubText)}
              >
                I am a passionate engineer and people leader who thrives in fast paced and collaborative environments!
              </motion.p>

              <div className={styles.heroCtas}>
                <motion.button custom={3} variants={items} className={cn(styles.heroButton, styles.heroButtonPrimary)}>Send a message!</motion.button>
                <motion.button custom={4} variants={items} className={cn(styles.heroButton, styles.heroButtonSecondary)}>Resume</motion.button>
              </div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Container>
  )
}

export default Hero;