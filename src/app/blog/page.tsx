'use client';

import styles from '../page.module.scss'
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import config from "@/config/sites";
import {Helmet} from "react-helmet";
import useRetrievePosts from "@/hooks/useRetrievePosts";
import SearchResults from "@/components/SearchResults/SearchResults";

const Blog = () => {
  const { posts, error, isLoading } = useRetrievePosts('posts');
  const orderedPosts = posts?.reverse();

  return (
    <>
      <Helmet>
        <title>{config.meta.title} | Blog</title>
        <meta property="description" content={config.meta.description} />
      </Helmet>

      <SectionContainer styleName={styles.listItemWrapper}>
        <Typography variant="h2" style={{margin: '50px 0'}}>Blog</Typography>

        <SearchResults isLoading={isLoading} posts={orderedPosts} />
      </SectionContainer>
    </>
  )
}

export default Blog;
