'use client';

import styles from '../page.module.scss'
import {Skeleton, Stack} from "@mui/material";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import ItemAnimation from "@/components/ItemAnimation/ItemAnimation";
import BlogPost from "@/components/BlogPost/BlogPost";
import BlogPostSkeleton from "@/components/BlogPost/BlogPostSkeleton";
import config from "@/config/sites";
import {Helmet} from "react-helmet";
import useRetrievePosts from "@/hooks/useRetrievePosts";

const Work = () => {
  const { posts, error, isLoading } = useRetrievePosts('work');

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
          <>
            {posts?.map(item => (
              <ItemAnimation key={item.sys.id}>
                <BlogPost post={item} />
              </ItemAnimation>
            ))}
          </>
        )}
      </SectionContainer>
    </>
  )
}

export default Work;
