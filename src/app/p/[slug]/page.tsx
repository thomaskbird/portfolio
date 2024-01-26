'use client';

import styles from './page.module.scss';
import {Container, Grid, Stack} from "@mui/material";
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
import SkeletonSwitcher from "@/components/SkeletonSwitcher/SkeletonSwitcher";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import config from "@/config/sites";
import {Helmet} from "react-helmet";
import stripTags from "@/utils/stripTags";

export type PageType = {
  params: {
    slug: string,
  }
}

// todo: put related posts widget here showing 3 related posts...
// todo: eventually see about code highlighting
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

  const title = post ? `${config.meta.title} | Blog | ${post.title}` : `${config.meta.title} | Blog`;
  const desc = post ? stripTags(post.description) : '';

  return (
    <Container maxWidth={false} disableGutters>
      <Helmet>
        <title>{title}</title>
        <meta property="description" content={desc} />
      </Helmet>

      <SectionContainer styleName={styles.wrapper}>
        <Grid container className={styles.pageHeader}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              startIcon={<ChevronLeftIcon/>}
              onClick={() => router.back()}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} className={styles.pageHeaderLeft}>
            <SkeletonSwitcher
              item={<Typography variant="body2">Posted: {post?.created_at}</Typography>}
              skeletonProps={baseSkeletonProps}
            />
          </Grid>
        </Grid>

        <Stack spacing={2}>
          <SkeletonSwitcher
            item={<Typography variant="h2">{post?.title}</Typography>}
            skeletonProps={baseSkeletonProps}
          />

          <SkeletonSwitcher
            item={<div className={styles.postBody} dangerouslySetInnerHTML={{__html: post?.body!}}/>}
            skeletonProps={{ ...baseSkeletonProps, height: 200 }}
          />
        </Stack>
      </SectionContainer>
    </Container>
  )
}

export default Page;
