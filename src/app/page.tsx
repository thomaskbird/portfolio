'use client';

import styles from './page.module.scss'
import {Container} from "@mui/material";
import PageSectionTitle from "@/components/PageSectionTitle/PageSectionTitle";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Skills from "@/components/Skills/Skills";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import config from "@/config/sites";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";
import Fader from "@/components/Fader/Fader";
import useRetrieveTestimonials from "@/hooks/useRetrieveTestimonials";
import useRetrieveHeros, {HeroFieldsType} from "@/hooks/useRetrieveHeros";
import useRetrieveWhatIDo from "@/hooks/useRetrieveWhatIDo";
import HelmetComponent from "@/components/HelmetComponent/HelmetComponent";



const Home = () => {
  const theme = useGlobalStore(selectTheme);
  const { testimonials, isLoading, error } = useRetrieveTestimonials()
  const { heros, isLoading: herosIsLoading, error: herosError } = useRetrieveHeros();
  const { items: homeHero } = useRetrieveWhatIDo();
  const isDark = theme === 'dark';

  return (
    <Container className={styles.overallWrapper} maxWidth={false} disableGutters>
      <HelmetComponent>
        <title>Thomas K Bird | Home</title>
        <meta property="description" content={config.meta.description} />
      </HelmetComponent>

      <Hero/>

      <SectionContainer styleName={isDark ? styles.aboutContainerDark : styles.aboutContainerLight}>
        <PageSectionTitle title="What I do?" />
        <div style={{ marginBottom: 0 }}>
          <Fader items={homeHero} duration={10000} />
        </div>
      </SectionContainer>

      <SectionContainer styleName={isDark ? styles.skillsContainerDark : styles.skillsContainerLight}>
        <PageSectionTitle title="Skills" />
        <Skills />
      </SectionContainer>

      <SectionContainer styleName={isDark ? styles.mainContentDark : styles.mainContentLight}>

        <PageSectionTitle title="Project Work"/>

        {heros && heros?.map((project, idx) => (
          <ProjectSection
            idx={idx}
            key={project.sys.id}
            image={project.fields.image as string}
            title={project.fields.title as string}
            subtitle={project.fields.subtitle as string}
            description={project.fields.description as string}
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
