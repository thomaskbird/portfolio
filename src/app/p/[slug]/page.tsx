'use client';

import styles from './page.module.scss';
import {Container, Grid, Stack} from "@mui/material";
import {LegacyRef, MutableRefObject, useEffect, useRef, useState} from "react";
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
import Script from "next/script";

export type PageType = {
  params: {
    slug: string,
  }
}

// todo: put related posts widget here showing 3 related posts...
// todo: eventually see about code highlighting
const Page = ({ params }: PageType) => {
  const codepenRef = useRef<any>(null);
  const { slug } = params;
  const setIsLoading = useGlobalStore(selectSetIsLoading);
  const router = useRouter();

  const [post, setPost] = useState<PostType | undefined>(undefined);

  useEffect(() => {
    (async() => {
      try {
        setIsLoading(true);
        const postFromDb = await retrieveSinglePost(slug);
        setPost(postFromDb);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if(codepenRef.current) {
      const script = document.createElement('script');
      script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
      script.async = true;

      codepenRef.current.appendChild(script);
    }
  }, [codepenRef.current]);

  const title = post ? `${config.meta.title} | Blog | ${post.title}` : `${config.meta.title} | Blog`;
  const desc = post ? stripTags(post.description) : '';

  return (
    <Container maxWidth={false} disableGutters>
      <Helmet>
        <title>{title}</title>
        <meta property="description" content={desc}/>
        <meta property="keywords" content={post?.keywords}/>
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
              item={<Typography variant="body3">Posted: {post?.created_at.substring(0, 10)}</Typography>}
              skeletonProps={baseSkeletonProps}
            />
          </Grid>
        </Grid>

        <Stack spacing={2}>
          <SkeletonSwitcher
            item={<Typography variant="h2" className={styles.postTitle}>{post?.title}</Typography>}
            skeletonProps={baseSkeletonProps}
          />

          <SkeletonSwitcher
            item={<Typography variant="body2" className={styles.postBody}
                              dangerouslySetInnerHTML={{__html: post?.body!}}/>}
            skeletonProps={{...baseSkeletonProps, height: 200}}
          />
        </Stack>
      </SectionContainer>
      <div ref={codepenRef}></div>
    </Container>
  )
}

export default Page;
