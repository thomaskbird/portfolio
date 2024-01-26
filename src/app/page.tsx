'use client';

import styles from './page.module.scss'
import {Container} from "@mui/material";
import PageSectionTitle from "@/components/PageSectionTitle/PageSectionTitle";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Skills from "@/components/Skills/Skills";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import MockProjects from "@/mocks/mockProjects";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import {Helmet} from 'react-helmet';
import config from "@/config/sites";

const Home = () => {

  return (
    <Container className={styles.overallWrapper} maxWidth={false} disableGutters>
      <Helmet>
        <title>Thomas K Bird | Home</title>
        <meta property="description" content={config.meta.description} />
      </Helmet>

      <Hero/>

      <SectionContainer styleName={styles.mainContent}>
        <PageSectionTitle title="Skills"/>

        <Skills/>

        <PageSectionTitle title="Project Work"/>

        {MockProjects.map(project => (
          <ProjectSection
            {...project}
            key={project.id}
          />
        ))}
      </SectionContainer>
      <Container maxWidth={false} disableGutters className={styles.testimonialWrapper}>
        <Container>
          <PageSectionTitle title="People Are Talking"/>

          <Slider/>
        </Container>
      </Container>
    </Container>
  )
}

export default Home;