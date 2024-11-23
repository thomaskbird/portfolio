import {Container, Grid} from '@mui/material';
import cn from 'classnames';
import styles from '@/components/Hero/Hero.module.scss';
import { motion } from 'framer-motion';
import Nav from "@/components/Nav/Nav";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Fader from "@/components/Fader/Fader";
import homeHero from "@/data/homeHero";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";
import useMisc from "@/hooks/useMisc";

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

const headline = "I'm Tom, Nice to meet you!".split(' ');

const Hero = ({ navOnly = false }: HeroType) => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';

  const { findField } = useMisc()

  const headline = ((findField('tag-heading') ?? '') as string).split(' ');

  return (
    <Container maxWidth={false} disableGutters className={isDark ? styles.heroDark : styles.heroLight}>
      <Container>
        <Nav navOnly={navOnly} />

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
                <motion.div
                  custom={1}
                  variants={items}
                  className={cn(styles.heroTextTitle)}
                >
                  <Typography variant="h1">
                    {headline.map((el, i) => (
                      <motion.span
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{
                          duration: 1,
                          delay: i / 50,
                        }}
                        key={i}
                      >
                        {el}{' '}
                      </motion.span>
                    ))}
                  </Typography>
                </motion.div>

                <motion.div
                  custom={2}
                  variants={items}
                >
                  <Typography variant="body2" color="white" className={styles.heroSubText}>
                    I am a <em>passionate</em> engineer and people <em>leader</em> who <em>thrives</em> in <em>fast paced</em> and <em>collaborative</em> environments!
                  </Typography>
                </motion.div>

                <div className={styles.heroCtas}>
                  <motion.div custom={3} variants={items}>
                    <Link href="/contact">
                      <Button
                        disableElevation
                        variant="outlined"
                        className={cn(styles.heroCtaPrimary, isDark ? styles.heroCtaPrimaryDark : styles.heroCtaPrimaryLight)}
                      >
                        Contact me
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div custom={4} variants={items}>
                    <Link href="/resume">
                      <Button variant="text" color="clear" className={cn(styles.heroCtaSecondary, isDark ? styles.heroCtaSecondaryDark : styles.heroCtaSecondaryLight)} disableElevation disableRipple>
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
