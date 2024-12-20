'use client';

import styles from './page.module.scss';
import {Container, Grid, Stack} from "@mui/material";
import {ReactNode, useEffect, useRef, useState} from "react";
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
import useRetrievePost from "@/hooks/useRetrievePost";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {Document} from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

type PageType = {
  params: {
    slug: string,
  }
}

// todo: put related posts widget here showing 3 related posts...
// todo: eventually see about code highlighting
const Page = ({ params }: PageType) => {
  const codepenRef = useRef<any>(null);
  const { slug } = params;
  const { post, isLoading } = useRetrievePost(slug);
  const router = useRouter();
  const [hasAppendedScript, setHasAppendedScript] = useState(false);

  useEffect(() => {
    if(codepenRef.current) {
      const script = document.createElement('script');
      script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
      script.async = true;

      codepenRef.current.appendChild(script);
      setHasAppendedScript(true);
    }
  }, [isLoading]);

  const title = post ? `${config.meta.title} | Blog | ${post.fields.title}` : `${config.meta.title} | Blog`;
  const desc = post ? stripTags(post.fields.description as string) : '';
  const media = post?.fields.media;

  return (
    <Container maxWidth={false} disableGutters>
      <Helmet>
        <title>{title}</title>
        <meta property="description" content={desc}/>
        <meta property="keywords" content={post?.fields.keywords as string}/>
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
            {post && (
              <SkeletonSwitcher
                item={<Typography variant="body3">Posted: {post?.sys.createdAt.substring(0, 10)}</Typography>}
                skeletonProps={baseSkeletonProps}
              />
            )}
          </Grid>
        </Grid>

        {post ? (
          <Stack spacing={2}>
            <SkeletonSwitcher
              item={<Typography variant="h2" className={styles.postTitle}>{post?.fields.title as ReactNode}</Typography>}
              skeletonProps={baseSkeletonProps}
            />

            <SkeletonSwitcher
              item={<div className={styles.postBody}>{documentToReactComponents(post?.fields.body as Document)}</div>}
              skeletonProps={{...baseSkeletonProps, height: 200}}
            />

            {post.fields.codepen && (
              <div dangerouslySetInnerHTML={{__html: (post.fields.codepen as any).content[0].content[0].value}}/>
            )}

            <div className={styles.mediaWrapper}>
            {media && (media as any).map((item: any) => (
              <div key={item.sys.id} className={styles.mediaItem}>
                <Link href={'https:'+ item.fields.file.url} target="_blank">
                  <Image
                    className={styles.media}
                    src={'https:'+ item.fields.file.url}
                    alt={item.fields.file.title}
                    width={item.fields.file.details.image.width}
                    height={item.fields.file.details.image.height}
                  />
                </Link>
              </div>
            ))}
            </div>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Typography variant="h2" className={styles.postTitle}>
              Uh oh something went wrong, please try again!
            </Typography>
          </Stack>
        )}
      </SectionContainer>
      <div ref={codepenRef} />
    </Container>
  )
}

export default Page;
