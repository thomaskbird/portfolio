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

const Home = () => {
  const setIsLoading = useGlobalStore(selectSetIsLoading);
  const theme = useGlobalStore(selectTheme);

  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonyType[]>([]);

  useEffect(() => {
    (async() => {
      try {
        setIsLoading(true);
        const projectsFromDb = await retrieveProjects();
        const testimonysFromDb = await retrieveTestimonys();

        const data = await Promise.all([projectsFromDb, testimonysFromDb]);
        setProjects(data[0] as ProjectType[]);
        setTestimonials(data[1] as TestimonyType[]);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

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

        {projects.map((project, idx) => (
          <ProjectSection
            {...project}
            idx={idx}
            key={project.id}
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
