'use client';

import {use, useEffect, useRef, useState} from "react";
import pageStyles from './page.module.scss'
import {Chip, Container} from '@mui/material';
import Box from '@mui/material/Box';

import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight'
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import InsidePageHeader from "@/components/InsidePageHeader/InsidePageHeader";
import {redirect} from "next/navigation";
import useRetrievePage from "@/hooks/useRetrievePage";
import config from "@/config/sites";
import stripTags from "@/utils/stripTags";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Image from "next/image";
import Link from "next/link";
import MediaGallery from "@/components/MediaGallery/MediaGallery";

// todo: figure out how to render a video element instead of the video being rendered into an image tag
//    possible solution rehype raw: https://stackoverflow.com/questions/75358080/how-can-i-embed-a-youtube-video-in-reactjs-markdown-with-react-markdown

type PageType = {
  params: Promise<{
    slug: string,
  }>
}

const InsidePage = ({ params }: PageType) => {
  const [hasAppendedScript, setHasAppendedScript] = useState(false);
  const codepenRef = useRef<any>(null);
  const { slug } = use(params);
  const { page, isLoading } = useRetrievePage(slug);

  useEffect(() => {
    if(codepenRef.current) {
      const script = document.createElement('script');
      script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
      script.async = true;

      codepenRef.current.appendChild(script);
      setHasAppendedScript(true);
    }
  }, [isLoading]);

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
              <div className={pageStyles.mediaWrapper}>
                <Link target="_blank" href={`https:\\${page.fields.featuredImage.fields.file.url}`}>
                  <Image
                    className={pageStyles.media}
                    src={'https:' + page.fields.featuredImage.fields.file.url}
                    alt={page.fields.featuredImage.fields.title ?? 'No alt text supplied'}
                    title={page.fields.featuredImage.fields.title ?? 'No title text supplied'}
                    width={page.fields.featuredImage.fields.file.details.image.width}
                    height={page.fields.featuredImage.fields.file.details.image.height}
                  />
                </Link>
              </div>
            )}

            <InsidePageHeader createdAt={page?.sys.createdAt}/>
          </Box>

          {page && (
            <Box>
              <Markdown rehypePlugins={[rehypeHighlight]}>{page.fields.body}</Markdown>
              {page.fields.codepen && (
                <div dangerouslySetInnerHTML={{__html: (page.fields.codepen as any).content[0].content[0].value}}/>
              )}
            </Box>
          )}

          {page && page.fields.gallery && (
            <MediaGallery gallery={page.fields.gallery} />
          )}

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
        <div ref={codepenRef}/>
      </Container>
    </HelmetProvider>
  )
}

export default InsidePage;
