'use client';

import styles from './page.module.scss';
import {Container, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetIsLoading} from "@/store/selectors/globalStore";
import PostType from "@/types/PostType";
import retrieveSinglePost from "@/services/retrieveSinglePost";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from "@mui/material/Button";
import {useRouter} from "next/navigation";

export type PageType = {
  params: {
    slug: string,
  }
}

// todo: put related posts widget here showing 3 related posts...
//

const Page = ({ params }: PageType) => {
  const { slug } = params;
  const setIsLoading = useGlobalStore(selectSetIsLoading);
  const router = useRouter();

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
      <SectionContainer styleName={styles.wrapper}>
        <Grid container className={styles.pageHeader}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              startIcon={<ChevronLeftIcon/>}
              className={styles.downloadButton}
              onClick={() => router.back()}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} className={styles.pageHeaderLeft}>
            <Typography variant="body2">Posted: {post?.created_at}</Typography>
          </Grid>
        </Grid>

        <Typography variant="h2">{post?.title}</Typography>

        <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: post?.body! }} />
      </SectionContainer>
    </Container>
  )
}

export default Page;
