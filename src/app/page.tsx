'use client';

import styles from './page.module.scss'
import {Container} from "@mui/material";
import PageSectionTitle from "@/components/PageSectionTitle/PageSectionTitle";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Skills from "@/components/Skills/Skills";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import Footer from "@/components/Footer/Footer";
import MockProjects from "@/mocks/mockProjects";

const Home = () => {
  return (
    <Container className={styles.overallWrapper} maxWidth={false} disableGutters>
      <Hero />

      <Container maxWidth={false} disableGutters>
        <Container>
          <PageSectionTitle title="Skills" />

          <Skills />

          <PageSectionTitle title="Project Work" />

          {MockProjects.map(project => (
            <ProjectSection
              {...project}
              key={project.id}
            />
          ))}
        </Container>
      </Container>
      <Container maxWidth={false} disableGutters className={styles.testimonialWrapper}>
        <Container>
          <PageSectionTitle title="People Are Talking" />

          <Slider />
        </Container>
      </Container>
      <Container maxWidth={false} disableGutters className={styles.footerWrapper}>
        <Container>
          <Footer />
        </Container>
      </Container>
    </Container>
  )
}

export default Home;