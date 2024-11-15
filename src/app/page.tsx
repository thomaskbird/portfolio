'use client';

import styles from './page.module.scss'
import {Container} from "@mui/material";
import PageSectionTitle from "@/components/PageSectionTitle/PageSectionTitle";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Skills from "@/components/Skills/Skills";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import {Helmet} from 'react-helmet';
import config from "@/config/sites";
import {ProjectType} from "@/types/ProjectType";
import {useEffect, useState} from "react";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetIsLoading, selectTheme} from "@/store/selectors/globalStore";
import retrieveProjects from "@/services/retrieveProjects";
import {TestimonyType} from "@/types/TestimonyType";
import retrieveTestimonys from "@/services/retrieveTestimonys";
import homeHero from "@/data/homeHero";
import Fader from "@/components/Fader/Fader";
import useRetrieveTestimonials from "@/hooks/useRetrieveTestimonials";
import useRetrieveHeros from "@/hooks/useRetrieveHeros";

const Home = () => {
  const theme = useGlobalStore(selectTheme);
  const { testimonials, isLoading, error } = useRetrieveTestimonials()
  const { heros, isLoading: herosIsLoading, error: herosError } = useRetrieveHeros();
  console.log('heros', heros);

  const isDark = theme === 'dark';

  return (
    <Container className={styles.overallWrapper} maxWidth={false} disableGutters>
      <Helmet>
        <title>Thomas K Bird | Home</title>
        <meta property="description" content={config.meta.description} />
      </Helmet>

      <Hero/>

      <SectionContainer styleName={isDark ? styles.aboutContainerDark : styles.aboutContainerLight}>
        <PageSectionTitle title="What I do?" />
        <div style={{ marginBottom: 0 }}>
          <Fader items={homeHero} duration={5000} />
        </div>
      </SectionContainer>

      <SectionContainer styleName={isDark ? styles.skillsContainerDark : styles.skillsContainerLight}>
        <PageSectionTitle title="Skills" />
        <Skills />
      </SectionContainer>

      <SectionContainer styleName={isDark ? styles.mainContentDark : styles.mainContentLight}>

        <PageSectionTitle title="Project Work"/>

        {heros?.map((project, idx) => (
          <ProjectSection
            {...project.fields}
            idx={idx}
            key={project.sys.id}
          />
        ))}
      </SectionContainer>
      <Container maxWidth={false} disableGutters className={isDark ? styles.testimonialWrapperDark : styles.testimonialWrapperLight}>
        <Container>
          <PageSectionTitle title="People Are Talking"/>
            <Slider items={testimonials} />
        </Container>
      </Container>
    </Container>
  )
}

export default Home;
