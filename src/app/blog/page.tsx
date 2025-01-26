'use client';

import styles from '../page.module.scss'
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import BlogPost from "@/components/BlogPost/BlogPost";
import ItemAnimation from "@/components/ItemAnimation/ItemAnimation";
import {Skeleton, Stack} from "@mui/material";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import BlogPostSkeleton from "@/components/BlogPost/BlogPostSkeleton";
import config from "@/config/sites";
import {Helmet} from "react-helmet-async";
import useRetrievePosts from "@/hooks/useRetrievePosts";

const Blog = () => {
  const { posts, error, isLoading } = useRetrievePosts('blog');
  const orderedPosts = posts?.reverse();

  return (
    <>
      <Helmet>
        <title>{config.meta.title} | Blog</title>
        <meta property="description" content={config.meta.description} />
      </Helmet>
      <SectionContainer styleName={styles.listItemWrapper}>
        <Typography variant="h2" style={{margin: '50px 0'}}>Blog</Typography>

        {isLoading ? (
          <>
            <BlogPostSkeleton>
              <Stack spacing={2} sx={{margin: '25px 0 0'}}>
                <Skeleton height={40} width="70%" variant="rectangular" {...{...baseSkeletonProps}} />
              </Stack>

              <Stack spacing={2} sx={{margin: '25px 0 40px'}}>
                <Skeleton width="90%" variant="rectangular" {...{...baseSkeletonProps}} />
                <Skeleton variant="rectangular" {...{...baseSkeletonProps}} />
                <Skeleton width="40%" variant="rectangular" {...{...baseSkeletonProps}} />
              </Stack>

              <Stack spacing={2} sx={{margin: '20px 0'}}>
                <Skeleton width="95%" variant="rectangular" {...{...baseSkeletonProps}} />
                <Skeleton variant="rectangular" {...{...baseSkeletonProps}} />
                <Skeleton variant="rectangular" {...{...baseSkeletonProps}} />
                <Skeleton width="70%" variant="rectangular" {...{...baseSkeletonProps}} />
              </Stack>
            </BlogPostSkeleton>

            <BlogPostSkeleton>
              <Stack spacing={2} sx={{margin: '25px 0 0'}}>
                <Skeleton height={40} width="70%" variant="rectangular" {...{...baseSkeletonProps}} />
              </Stack>

              <Stack spacing={2} sx={{margin: '25px 0 40px'}}>
                <Skeleton width="90%" variant="rectangular" {...{...baseSkeletonProps}} />
                <Skeleton variant="rectangular" {...{...baseSkeletonProps}} />
                <Skeleton width="40%" variant="rectangular" {...{...baseSkeletonProps}} />
              </Stack>

              <Stack spacing={2} sx={{margin: '20px 0 25px'}}>
                <Skeleton width="95%" variant="rectangular" {...{...baseSkeletonProps}} />
                <Skeleton variant="rectangular" {...{...baseSkeletonProps}} />
                <Skeleton variant="rectangular" {...{...baseSkeletonProps}} />
                <Skeleton width="20%" variant="rectangular" {...{...baseSkeletonProps}} />
              </Stack>
            </BlogPostSkeleton>
          </>
        ) : (
          <>
            {(orderedPosts ?? []).map(item => (
              <ItemAnimation key={item.sys.id}>
                <BlogPost post={item}/>
              </ItemAnimation>
            ))}
          </>
        )}
      </SectionContainer>
    </>
  )
}

export default Blog;
