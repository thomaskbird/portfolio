'use client';

import config from "@/config/sites";
import useRetrievePosts from "@/hooks/useRetrievePosts";
import Listings from "@/components/Listings/Listings";
import HelmetComponent from "@/components/HelmetComponent/HelmetComponent";

const Photography = () => {
  const { posts, error, isLoading } = useRetrievePosts('photography');

  return (
    <>
      <HelmetComponent>
        <title>{config.meta.title} | Photography</title>
        <meta property="description" content={config.meta.pages.photography} />
      </HelmetComponent>

      <Listings
        title="Photography"
        posts={posts}
        isLoading={isLoading}
      />
    </>
  )
}

export default Photography;
