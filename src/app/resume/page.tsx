'use client';

import styles from '../page.module.scss'
import {Container} from "@mui/material";
import Hero from "@/components/Hero/Hero";
import Box from "@mui/material/Box";
import MOCK_RESUME from '@/mocks/mockResume';
import ResumeItem from "@/components/ResumeItem/ResumeItem";

const Resume = () => {
  return (
    <Container className={styles.overallWrapper} maxWidth={false} disableGutters>
      <Hero navOnly={true} />

      <Container maxWidth={false} disableGutters className={styles.insideContainer}>
        <Container>

          <div className={styles.resumeContainer}>
            {MOCK_RESUME.map(item => <ResumeItem key={item.id} item={item} />)}
          </div>

        </Container>
      </Container>
    </Container>
  )
}

export default Resume;
