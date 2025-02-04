'use client';

import config from "@/config/sites";
import useRetrievePosts from "@/hooks/useRetrievePosts";
import Listings from "@/components/Listings/Listings";
import HelmetComponent from "@/components/HelmetComponent/HelmetComponent";

const Work = () => {
  const { posts, error, isLoading } = useRetrievePosts('work');

  return (
    <>
      <HelmetComponent>
        <title>{config.meta.title} | Work</title>
        <meta property="description" content={config.meta.description} />
      </HelmetComponent>

      <Listings
        title="Work"
        posts={posts}
        isLoading={isLoading}
      />
    </>
  )
}

export default Work;
