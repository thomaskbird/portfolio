import styles from './page.module.scss'
import {Button, Container, Grid} from "@mui/material";
import PageSectionTitle from "@/components/PageSectionTitle/PageSectionTitle";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Skills from "@/components/Skills/Skills";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <Container className={styles.overallWrapper} maxWidth={false} disableGutters>
      <Hero />

      <Container maxWidth={false} disableGutters>
        <Container>
          <PageSectionTitle title="Skills" />

          <Skills />

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
    </Container>
  )
}
