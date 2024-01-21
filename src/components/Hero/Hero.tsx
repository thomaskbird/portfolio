import {Container, Grid} from '@mui/material';
import cn from 'classnames';
import styles from './Hero.module.scss';
import Socials from '@/components/Socials/Socials';
import { motion } from 'framer-motion';
import Nav from "@/components/Nav/Nav";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

type HeroType = {
  navOnly?: boolean;
}

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

const Hero = ({ navOnly = false }: HeroType) => {
  return (
    <Container maxWidth={false} disableGutters className={styles.hero}>
      <Container>
        <Nav navOnly={navOnly} />
        <Socials />

        {!navOnly && (
          <motion.div initial="hidden" whileInView="visible" viewport={{once: true}}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} className={styles.heroImage}>
                <motion.img
                  custom={2}
                  variants={imageTransition}
                  src="/thomas-bird.png"
                  className={cn(styles.heroImageItem, 'animate__animated animate__slow animate__fadeIn ')}
                  alt="Thomas Bird"
                />
              </Grid>
              <Grid item xs={12} md={6} className={styles.heroText}>
                <motion.h1
                  custom={1}
                  variants={items}
                  className={cn(styles.heroTextTitle)}
                >
                  I&apos;m Tom,<br/> Nice to meet you!
                </motion.h1>
                <motion.div
                  custom={2}
                  variants={items}
                >
                  <Typography variant="body1" color="white" className={styles.heroSubText}>
                    I am a <span className="emphasis">passionate</span> engineer and people <span className="emphasis">leader</span> who <span
                    className={styles.emphasis}>thrives</span> in <span className="emphasis">fast paced</span> and <span className="emphasis">collaborative</span> environments!
                  </Typography>
                </motion.div>

                <div className={styles.heroCtas}>
                  <motion.div custom={3} variants={items}>
                    <Link href="/contact">
                      <Button
                        color="hero"
                        disableElevation
                        variant="outlined"
                        className={styles.heroCtaPrimary}
                      >
                        Contact me
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div custom={4} variants={items}>
                    <Link href="/resume">
                      <Button variant="text" color="clear" disableElevation>
                        Resume
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </Grid>
            </Grid>
          </motion.div>
        )}
      </Container>
    </Container>
  )
}

export default Hero;