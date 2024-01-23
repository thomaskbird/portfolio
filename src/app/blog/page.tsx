'use client';

import styles from '../page.module.scss'
import ListView from "@/components/ListView/ListView";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectIsLoading, selectSetIsLoading} from "@/store/selectors/globalStore";
import {useEffect, useState} from "react";
import PostType from "@/types/PostType";
import retrieveAllPosts from "@/components/ListView/contentHelpers";
import BlogPost from "@/components/BlogPost/BlogPost";
import { motion } from 'framer-motion';
import ItemAnimation from "@/components/ItemAnimation/ItemAnimation";
import {Skeleton, Stack} from "@mui/material";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
const Blog = () => {
  const isLoading = useGlobalStore(selectIsLoading);
  const setIsLoading = useGlobalStore(selectSetIsLoading);

  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    (async() => {
      setIsLoading(true);
      const postsFromDb = await retrieveAllPosts();
      setPosts(postsFromDb);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <SectionContainer styleName={styles.listItemWrapper}>
        <Typography variant="h2">Blog</Typography>

        {isLoading ? (
          <>
            <Stack spacing={2} sx={{ margin: '50px 0 0' }}>
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

            <Stack spacing={2} sx={{ margin: '100px 0 0' }}>
              <Skeleton height={40} width="70%" variant="rectangular" {...{ ...baseSkeletonProps }} />
            </Stack>

            <Stack spacing={2} sx={{ margin: '25px 0 40px' }}>
              <Skeleton width="90%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
              <Skeleton width="40%" variant="rectangular" {...{ ...baseSkeletonProps }} />
            </Stack>

            <Stack spacing={2} sx={{ margin: '20px 0 100px' }}>
              <Skeleton width="95%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
              <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
              <Skeleton width="70%" variant="rectangular" {...{ ...baseSkeletonProps }} />
            </Stack>
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

export default Blog;
