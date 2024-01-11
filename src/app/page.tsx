import styles from './page.module.scss'
import {Button, Container, Grid} from "@mui/material";
import PageSectionTitle from "@/components/PageSectionTitle/PageSectionTitle";
import ProjectSection from "@/components/ProjectSection/ProjectSection";

export default function Home() {
  return (
    <>
      <Container maxWidth={false} disableGutters className={styles.hero}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className={styles.heroImage}>
              <img src="/thomas-bird.png" className={styles.heroImageItem} />
            </Grid>
            <Grid item xs={12} md={6} className={styles.heroText}>
              <h1 className={styles.heroTextTitle}>I'm Tom,<br/> Nice to meet you!</h1>
              <p className={styles.heroSubText}>I am a passionate engineer and people leader who thrives in fast paced and collaborative environments!</p>

              <Grid>
                <Button className={styles.heroButtonPrimary} variant="contained" disableElevation>Send a message!</Button>
                <Button className={styles.heroButtonSecondary} variant="text" disableElevation>Resume</Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>


      <Container maxWidth={false} disableGutters>
        <Container>
          <PageSectionTitle title="Project Work" />

          <ProjectSection
            alignment="left"
            title="NBC Sports Next"
            image="/projects/nbc-web-homepage.jpg"
            description="Building next generation web apps for streaming todays youth sports!"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam commodi consectetur deserunt, facere harum labore laudantium maiores, odio perferendis perspiciatis possimus quaerat sit. Aliquam atque deleniti eveniet laudantium ratione."
          />

          <ProjectSection
            alignment="right"
            image="/projects/livegistics-web-home.png"
            title="Livegistics"
            description="Making life easier for the materials handling industry one electronic load at a time!"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam commodi consectetur deserunt, facere harum labore laudantium maiores, odio perferendis perspiciatis possimus quaerat sit. Aliquam atque deleniti eveniet laudantium ratione."
          />

          <ProjectSection
            alignment="left"
            image="/projects/powerley-web-home.png"
            title="Powerley"
            description="iOT that makes peoples lives better through great software and cost cutting savings"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam commodi consectetur deserunt, facere harum labore laudantium maiores, odio perferendis perspiciatis possimus quaerat sit. Aliquam atque deleniti eveniet laudantium ratione."
          />
        </Container>
      </Container>
    </>
  )
}
