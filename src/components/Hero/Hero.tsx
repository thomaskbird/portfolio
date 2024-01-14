import {Button, Container, Grid} from '@mui/material';
import cn from 'classnames';
import styles from './Hero.module.scss';
import Socials from '@/components/Socials/Socials';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1 },
  transition: { delay: 0.4 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.1
    }
  }
};

const buttons = {
  hidden: { y: -20, opacity: 0 },
  transition: { duration: 0.25 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Hero = () => {
  return (
    <Container maxWidth={false} disableGutters className={styles.hero}>
      <Container>
        <Socials />
        <motion.div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className={styles.heroImage}>
              <img src="/thomas-bird.png" className={cn(styles.heroImageItem, 'animate__animated animate__slow animate__fadeIn ')} alt="Thomas Bird" />
            </Grid>
            <Grid item xs={12} md={6} className={styles.heroText}>
              <motion.h1
                initial="hidden"
                animate="visible"
                transition={{ ease: 'easeIn', duration: 0.25,  }}
                variants={{
                  hidden: {y: -30, opacity: 0},
                  visible: { y: 0, opacity: 1}
                }}
                className={cn(styles.heroTextTitle)}
              >
                I&apos;m Tom,<br/> Nice to meet you!
              </motion.h1>
              <motion.p
                initial="hidden"
                animate="visible"
                transition={{ ease: 'easeIn', duration: 0.5, delay: 0.25 }}
                variants={{
                  hidden: {y: -30, opacity: 0},
                  visible: { y: 0, opacity: 1}
                }}
                className={cn(styles.heroSubText)}
              >
                I am a passionate engineer and people leader who thrives in fast paced and collaborative environments!
              </motion.p>

              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className={styles.heroCtas}
              >
                <motion.button variants={buttons} className={cn(styles.heroButton, styles.heroButtonPrimary)}>Send a message!</motion.button>
                <motion.button variants={buttons} className={cn(styles.heroButton, styles.heroButtonSecondary)}>Resume</motion.button>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Container>
  )
}

export default Hero;