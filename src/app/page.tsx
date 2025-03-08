'use client';

import styles from './page.module.scss'
import {Container, Skeleton, Stack} from "@mui/material";
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
import useRetrieveHeros from "@/hooks/useRetrieveHeros";
import useRetrieveWhatIDo from "@/hooks/useRetrieveWhatIDo";
import HelmetComponent from "@/components/HelmetComponent/HelmetComponent";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import ScrollSnapper from "@/components/ScrollSnapper/ScrollSnapper";
import Image from "next/image";
import pageStyles from "@/app/contact/page.module.scss";
import logos from "@/mocks/mockLogos";
import PhotoScroller from "@/components/PhotoScroller/PhotoScroller";

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
        <meta property="description" content={config.meta.description}/>
      </HelmetComponent>

      <Hero/>

      <SectionContainer styleName={isDark ? styles.aboutContainerDark : styles.aboutContainerLight}>
        <PageSectionTitle title="What I do?" subtitle="Get A Deeper Look At What Drives Me" />
        <div style={{marginBottom: 0}}>
          {homeHero ? (
            <Fader items={homeHero} duration={10000}/>
          ) : (
            <Stack spacing={2} alignItems="center">
              <Skeleton width="80%" variant="rectangular" {...{...baseSkeletonProps}} />
              <Skeleton width="90%" variant="rectangular" {...{...baseSkeletonProps}} />
              <Skeleton width="60%" variant="rectangular" {...{...baseSkeletonProps}} />
            </Stack>
          )}
        </div>
      </SectionContainer>

      <SectionContainer styleName={isDark ? styles.skillsContainerDark : styles.skillsContainerLight}>
        <PageSectionTitle title="Skills" subtitle="Acquired through years of professional work"/>
        <Skills/>
      </SectionContainer>

      <SectionContainer styleName={isDark ? styles.mainContentDark : styles.mainContentLight}>
        <PageSectionTitle title="Brands" subtitle="I've Had The Pleasure To Work With"/>
        <ScrollSnapper>
          {logos.map(logo => (
            <Image
              width={501}
              height={501}
              key={logo.id}
              src={logo.src}
              alt={logo.title}
              title={logo.title}
              className={pageStyles.logo}
            />
          ))}
        </ScrollSnapper>
      </SectionContainer>

      <SectionContainer styleName={isDark ? styles.skillsContainerDark : styles.skillsContainerLight}>

        <PageSectionTitle title="Project Work" subtitle="Projects I've been blessed to be a part of"/>

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
      <Container maxWidth={false} disableGutters className={isDark ? styles.photographyWrapperDark : styles.photographyWrapperLight}>
        <Container>
          <PageSectionTitle title="Photography" subtitle="Capturing moments, freezing moments forever!"/>
          <PhotoScroller />
        </Container>
      </Container>
      <Container maxWidth={false} disableGutters className={isDark ? styles.testimonialWrapperDark : styles.testimonialWrapperLight}>
        <Container>
          <PageSectionTitle title="People Are Talking" subtitle="See What They've Got To Say"/>
          <Slider items={testimonials}/>
        </Container>
      </Container>
    </Container>
  );
}

export default Home;
