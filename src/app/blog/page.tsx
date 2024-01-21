'use client';

import styles from '../page.module.scss'
import ListView from "@/components/ListView/ListView";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";

const Blog = () => {
  return (
    <>
      <SectionContainer styleName={styles.listItemWrapper}>
        <Typography variant="h2">Blog</Typography>
        
        <ListView />
      </SectionContainer>
    </>
  )
}

export default Blog;
