'use client';

import styles from '../../page.module.scss'
import pageStyles from './page.module.scss';
import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetIsLoading} from "@/store/selectors/globalStore";
import PostType from "@/types/PostType";
import retrieveSinglePost from "@/services/retrieveSinglePost";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";

export type PageType = {
  params: {
    slug: string,
  }
}

const Page = ({ params }: PageType) => {
  const { slug } = params;
  const setIsLoading = useGlobalStore(selectSetIsLoading);

  const [post, setPost] = useState<PostType | undefined>(undefined);

  useEffect(() => {
    (async() => {
      setIsLoading(true);
      const postFromDb = await retrieveSinglePost(slug);
      setPost(postFromDb);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container className={styles.overallWrapper} maxWidth={false} disableGutters>
      <SectionContainer styleName={styles.listItemWrapper}>
        <Typography variant="h2">{post?.title}</Typography>

        <div className={pageStyles.postBody} dangerouslySetInnerHTML={{ __html: post?.body }} />
      </SectionContainer>
    </Container>
  )
}

export default Page;
