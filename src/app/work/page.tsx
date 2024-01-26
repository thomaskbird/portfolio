'use client';

import styles from '../page.module.scss'
import {Skeleton, Stack} from "@mui/material";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectIsLoading, selectSetIsLoading} from "@/store/selectors/globalStore";
import {useEffect, useState} from "react";
import PostType from "@/types/PostType";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import ListView from "@/components/ListView/ListView";
import ItemAnimation from "@/components/ItemAnimation/ItemAnimation";
import BlogPost from "@/components/BlogPost/BlogPost";
import retrieveAllWork from "@/services/retrieveAllWork";
import BlogPostSkeleton from "@/components/BlogPost/BlogPostSkeleton";
import config from "@/config/sites";
import {Helmet} from "react-helmet";

const Work = () => {
  const isLoading = useGlobalStore(selectIsLoading);
  const setIsLoading = useGlobalStore(selectSetIsLoading);

  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    (async() => {
      setIsLoading(true);
      const postsFromDb = await retrieveAllWork();
      setPosts(postsFromDb);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>{config.meta.title} | Work</title>
        <meta property="description" content={config.meta.description} />
      </Helmet>

      <SectionContainer styleName={styles.listItemWrapper}>
        <Typography variant="h2" style={{ margin: '50px 0' }}>Work</Typography>

        {isLoading ? (
          <>
            <BlogPostSkeleton>
              <Stack spacing={2} sx={{ margin: '25px 0 0' }}>
                <Skeleton height={40} width="70%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              </Stack>

              <Stack spacing={2} sx={{ margin: '25px 0 40px' }}>
                <Skeleton width="90%" variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton width="40%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              </Stack>

              <Stack spacing={2} sx={{ margin: '20px 0' }}>
                <Skeleton width="95%" variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton width="70%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              </Stack>
            </BlogPostSkeleton>

            <BlogPostSkeleton>
              <Stack spacing={2} sx={{ margin: '25px 0 0' }}>
                <Skeleton height={40} width="70%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              </Stack>

              <Stack spacing={2} sx={{ margin: '25px 0 40px' }}>
                <Skeleton width="90%" variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton width="40%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              </Stack>

              <Stack spacing={2} sx={{ margin: '20px 0 25px' }}>
                <Skeleton width="95%" variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton width="20%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              </Stack>
            </BlogPostSkeleton>
          </>
        ) : (
          <ListView
            posts={posts}
            renderItem={(item) => (
              <ItemAnimation key={item.id}>
                <BlogPost post={item} />
              </ItemAnimation>
            )}
          />
        )}
      </SectionContainer>
    </>
  )
}

export default Work;
