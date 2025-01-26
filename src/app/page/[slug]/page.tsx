'use client';

import client from "@/services/api";
import {ReactNode, use, useEffect, useRef, useState} from "react";
import pageStyles from './page.module.scss'
import {Chip, Container} from '@mui/material';
import Hero from '@/components/Hero/Hero';
import Box from '@mui/material/Box';

import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight'
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import InsidePageHeader from "@/components/InsidePageHeader/InsidePageHeader";
import {redirect} from "next/navigation";
import useRetrievePost from "@/hooks/useRetrievePost";
import useRetrievePage from "@/hooks/useRetrievePage";
import config from "@/config/sites";
import stripTags from "@/utils/stripTags";
import {Helmet, HelmetProvider} from "react-helmet-async";
import styles from "@/app/page/[slug]/page.module.scss";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import SkeletonSwitcher from "@/components/SkeletonSwitcher/SkeletonSwitcher";

// todo: figure out how to render a video element instead of the video being rendered into an image tag
//    possible solution rehype raw: https://stackoverflow.com/questions/75358080/how-can-i-embed-a-youtube-video-in-reactjs-markdown-with-react-markdown

type PageType = {
  params: Promise<{
    slug: string,
  }>
}

const InsidePage = ({ params }: PageType) => {
  const codepenRef = useRef<any>(null);
  const { slug } = use(params);
  const { page, isLoading } = useRetrievePage(slug);

  const title = page ? `${config.meta.title} | Blog | ${page.fields.title}` : `${config.meta.title} | Blog`;
  const desc = page ? stripTags(page.fields.description as string) : '';

  return (
    <HelmetProvider>
      <Container maxWidth={false} disableGutters>
        <Helmet>
          <title>{title}</title>
          <meta property="description" content={desc}/>
          <meta property="keywords" content={page?.fields.keywords as string}/>
        </Helmet>

        <SectionContainer styleName={pageStyles.wrapper}>
          <Box>
            {page && page.fields.featuredImage && (
              <Image
                className={styles.media}
                src={'https:'+ page.fields.featuredImage.fields.file.url}
                alt={page.fields.featuredImage.fields.file.title ?? 'No alt text supplied'}
                width={page.fields.featuredImage.fields.file.details.image.width}
                height={page.fields.featuredImage.fields.file.details.image.height}
              />
            )}

            <InsidePageHeader createdAt={page?.sys.createdAt} />

            <SkeletonSwitcher
              item={<Typography variant="h2" className={styles.postTitle}>{page?.fields.title as ReactNode}</Typography>}
              skeletonProps={baseSkeletonProps}
            />
          </Box>

          <Box>
            {page && <Markdown rehypePlugins={[rehypeHighlight]}>{page.fields.body}</Markdown>}
          </Box>

          {page && page.metadata.tags && (
            <Box className={pageStyles.tagWrapper}>
              <Box>
                <h3>Tags:</h3>
              </Box>
              <Box>{page.metadata.tags.map(tag => (
                <Chip
                  key={tag.sys.id}
                  variant="outlined"
                  className={pageStyles.tag} label={tag.sys.id}
                  onClick={() => redirect(`/search?query=${tag.sys.id}`)}
                />
              ))}</Box>
            </Box>
          )}
        </SectionContainer>
      </Container>
    </HelmetProvider>
  )
}

export default InsidePage;
