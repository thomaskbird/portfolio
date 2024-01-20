'use client';

import styles from './page.module.scss'
import {Container, Fab} from "@mui/material";
import Hero from "@/components/Hero/Hero";
import MOCK_RESUME from '@/mocks/mockResume';
import ResumeItem from "@/components/ResumeItem/ResumeItem";
import Typography from "@mui/material/Typography";
import Skills from "@/components/Skills/Skills";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useRef} from "react";
import { motion } from "framer-motion";

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement | null>(null);

  const backToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <Container maxWidth={false} disableGutters>
      <Hero navOnly={true} />

      <Container maxWidth={false} disableGutters className={styles.insideContainer}>
        <Container>

          <div className={styles.blurb}>
            <img src="/thomas-bird.png" alt="Thomas Bird" title="Thomas Bird" className={styles.blurbImage} />
            <Typography variant="h1">
              About Me
            </Typography>

            <Typography variant="body2">
              I&apos;m a <em>passionate</em> Engineer who loves to tinker, a genuine curiosity keeps me invigorated with the work I do. <em>Driven</em> and <em>relentless</em>, I’m the type of person who encounters problems and just doesn’t know the words “Give up”. I’m extremely collaborative, concise and attentive throughout all that I do with a special focus on attention to detail.
            </Typography>

            <Typography variant="body2">
              I&apos;ve had a <em>diverse</em> background in many industries, sizes of companies and roles. This has given me a top notch ability to anticipate and deliver on a higher level by being ready for what’s coming next. It gives me a <em>strong intuition</em> that helps prepare me for future problems and the inevitable curve balls.
            </Typography>

            <Typography variant="body2">
              My <em>passion</em> is building and creating <em>amazing</em> pieces of software that are not only cool, but make my clients and customers lives better!
            </Typography>

            <Typography variant="h3" sx={{ margin: '50px 0' }}>Skills</Typography>
            <Skills />
          </div>

          <div className={styles.resumeWrapper} ref={resumeRef}>
            <div className={styles.divider}></div>

            <Fab color="primary" className={styles.backToTop} onClick={backToTop}>
              <ExpandLessIcon />
            </Fab>

            <div className={styles.resumeContainer}>
              {MOCK_RESUME.map(item => <ResumeItem key={item.id} item={item}/>)}
            </div>
          </div>

        </Container>
      </Container>
    </Container>
  )
}

export default Resume;
