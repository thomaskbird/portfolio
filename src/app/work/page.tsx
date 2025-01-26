'use client';

import styles from '../page.module.scss'
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import config from "@/config/sites";
import {Helmet} from "react-helmet-async";
import useRetrievePosts from "@/hooks/useRetrievePosts";
import SearchResults from "@/components/SearchResults/SearchResults";

const Work = () => {
  const { posts, error, isLoading } = useRetrievePosts('posts');

  return (
    <>
      <Helmet>
        <title>{config.meta.title} | Work</title>
        <meta property="description" content={config.meta.description} />
      </Helmet>

      <SectionContainer styleName={styles.listItemWrapper}>
        <Typography variant="h2" style={{ margin: '50px 0' }}>Work</Typography>

        <SearchResults isLoading={isLoading} posts={posts} />
      </SectionContainer>
    </>
  )
}

export default Work;
