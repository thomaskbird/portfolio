'use client';

import styles from '../page.module.scss'
import ListView from "@/components/ListView/ListView";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetIsLoading} from "@/store/selectors/globalStore";
import {useEffect, useState} from "react";
import PostType from "@/types/PostType";
import retrieveAllPosts from "@/components/ListView/contentHelpers";
import BlogPost from "@/components/BlogPost/BlogPost";
import { motion } from 'framer-motion';
import ItemAnimation from "@/components/ItemAnimation/ItemAnimation";
const Blog = () => {
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

        <ListView
          posts={posts}
          renderItem={(item) => (
            <ItemAnimation key={item.id}>
              <BlogPost post={item} />
            </ItemAnimation>
          )}
        />
      </SectionContainer>
    </>
  )
}

export default Blog;
