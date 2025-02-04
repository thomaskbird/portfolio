'use client';

import config from "@/config/sites";
import useRetrievePosts from "@/hooks/useRetrievePosts";
import Listings from "@/components/Listings/Listings";
import HelmetComponent from "@/components/HelmetComponent/HelmetComponent";

const Blog = () => {
  const { posts, error, isLoading } = useRetrievePosts('blog');

  return (
    <>
      <HelmetComponent>
        <title>{config.meta.title} | Blog</title>
        <meta property="description" content={config.meta.description} />
      </HelmetComponent>

      <Listings
        title="Blog"
        posts={posts}
        isLoading={isLoading}
      />
    </>
  )
}

export default Blog;
