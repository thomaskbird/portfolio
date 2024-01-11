import styles from "@/app/page.module.scss";
import {Button, Container, Grid} from "@mui/material";
import cn from "classnames";

type HeroType = {}

const Hero = ({}: HeroType) => {
  return (
    <Container maxWidth={false} disableGutters className={styles.hero}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className={styles.heroImage}>
            <img src="/thomas-bird.png" className={cn(styles.heroImageItem, 'animate__animated animate__fadeIn animate__delay-1s')} alt="Thomas Bird" />
          </Grid>
          <Grid item xs={12} md={6} className={styles.heroText}>
            <h1 className={cn(styles.heroTextTitle, 'animate__animated animate__fadeInDown')}>
              I'm Tom,<br/> Nice to meet you!
            </h1>
            <p className={cn(styles.heroSubText, 'animate__animated animate__fadeInDown animate__delay-0s')}>
              I am a passionate engineer and people leader who thrives in fast paced and collaborative environments!
            </p>

            <Grid>
              <Button className={cn(styles.heroButtonPrimary, 'animate__animated animate__fadeInDown animate__delay-1s')} variant="contained" disableElevation>Send a message!</Button>
              <Button className={cn(styles.heroButtonSecondary, 'animate__animated animate__fadeInDown animate__delay-2s')} variant="text" disableElevation>Resume</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default Hero;