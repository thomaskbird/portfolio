import {Button, Container, Grid} from "@mui/material";
import cn from "classnames";
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <Container maxWidth={false} disableGutters className={styles.hero}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className={styles.heroImage}>
            <img src="/thomas-bird.png" className={cn(styles.heroImageItem, 'animate__animated animate__slow animate__fadeIn ')} alt="Thomas Bird" />
          </Grid>
          <Grid item xs={12} md={6} className={styles.heroText}>
            <h1 className={cn(styles.heroTextTitle, 'animate__animated animate__fadeInDown')}>
              I'm Tom,<br/> Nice to meet you!
            </h1>
            <p className={cn(styles.heroSubText, 'animate__animated animate__fadeInDown animate__delay-0s')}>
              I am a passionate engineer and people leader who thrives in fast paced and collaborative environments!
            </p>

            <Grid className={styles.heroCtas}>
              <Button className={cn(styles.heroButtonPrimary, 'animate__animated animate__fadeInDown animate__slow')} variant="contained" disableElevation>Send a message!</Button>
              <Button className={cn(styles.heroButtonSecondary, 'animate__animated animate__fadeInDown animate__slow')} variant="text" disableElevation>Resume</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default Hero;