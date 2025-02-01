'use client';

import styles from '../page.module.scss'
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import config from "@/config/sites";
import useRetrievePosts from "@/hooks/useRetrievePosts";
import SearchResults from "@/components/SearchResults/SearchResults";
import HelmetComponent from "@/components/HelmetComponent/HelmetComponent";

const Blog = () => {
  const { posts, error, isLoading } = useRetrievePosts('blog');
  const orderedPosts = posts?.reverse();

  return (
    <>
      <HelmetComponent>
        <title>{config.meta.title} | Blog</title>
        <meta property="description" content={config.meta.description} />
      </HelmetComponent>

      <SectionContainer styleName={styles.listItemWrapper}>
        <Typography variant="h2" style={{margin: '50px 0'}}>Blog</Typography>

        {orderedPosts && (
          <SearchResults isLoading={isLoading} posts={orderedPosts} />
        )}
      </SectionContainer>
    </>
  )
}

export default Blog;
