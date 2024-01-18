'use client';

import styles from '../page.module.scss'
import {Container} from "@mui/material";
import Hero from "@/components/Hero/Hero";
import Box from "@mui/material/Box";

const Blog = () => {
  return (
    <Container className={styles.overallWrapper} maxWidth={false} disableGutters>
      <Hero navOnly={true} />
      <Box style={{ height: '2000px' }} />
    </Container>
  )
}

export default Blog;
