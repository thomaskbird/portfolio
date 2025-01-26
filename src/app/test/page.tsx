'use client';

import client from "@/services/api";
import {useEffect, useState} from "react";
import styles from '../page.module.scss'
import pageStyles from './page.module.scss'
import {Chip, Container} from '@mui/material';
import Hero from '@/components/Hero/Hero';
import Box from '@mui/material/Box';

import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight'
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import InsidePageHeader from "@/components/InsidePageHeader/InsidePageHeader";
import {redirect} from "next/navigation";

// todo: figure out how to render a video element instead of the video being rendered into an image tag
//    possible solution rehype raw: https://stackoverflow.com/questions/75358080/how-can-i-embed-a-youtube-video-in-reactjs-markdown-with-react-markdown

const Services = () => {
  const [post, setPost] = useState(undefined);
  useEffect(() => {
    const requestPost = async () => {
      try {
        const res = await client.getEntry('7Cl0BdQgFy14PibejJtx2g');
        console.log('res', res.metadata.tags);
        setPost(res)
      } catch (e) {
        throw new Error(e as any);
      }
    }

    requestPost()
  }, [])

  console.log('post', post);

  return (
    <Container className={styles.overallWrapper} maxWidth={false} disableGutters>
      <Hero navOnly={true} />
      <SectionContainer styleName={styles.wrapper}>
        <InsidePageHeader createdAt={post?.sys.createdAt} />
        <Box>
          {post && <Markdown rehypePlugins={[rehypeHighlight]}>{post.fields.body}</Markdown>}
        </Box>
        {post && post.metadata.tags && (
          <Box className={pageStyles.tagWrapper}>
            <Box>
              <h3>Tags:</h3>
            </Box>
            <Box>{post.metadata.tags.map(tag => (
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
  )
}

export default Services;
