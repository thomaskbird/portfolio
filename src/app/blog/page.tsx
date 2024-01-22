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
import ListItem from "@/components/ListItem/ListItem";
import { motion } from 'framer-motion';
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
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              viewport={{
                amount: 0.5,
              }}
              transition={{
                duration: 0.5
              }}
            >
              <ListItem post={item} />
            </motion.div>
          )}
        />
      </SectionContainer>
    </>
  )
}

export default Blog;
