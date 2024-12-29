'use client';

import client from "@/services/api";
import {useEffect, useState} from "react";
import styles from '../page.module.scss'
import {Container} from '@mui/material';
import Hero from '@/components/Hero/Hero';
import Box from '@mui/material/Box';

import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight'
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import InsidePageHeader from "@/components/InsidePageHeader/InsidePageHeader";

const Services = () => {
  const [post, setPost] = useState(undefined);
  useEffect(() => {
    const requestPost = async () => {
      try {
        const res = await client.getEntry('1SfRwXUWegPMcpc2bImYIM');
        setPost(res)
      } catch (e) {
        throw new Error(e as any);
      }
    }

    requestPost()
  }, [])
  return (
    <Container className={styles.overallWrapper} maxWidth={false} disableGutters>
      <Hero navOnly={true} />
      <SectionContainer styleName={styles.wrapper}>
        <InsidePageHeader createdAt={post?.sys.createdAt} />
        <Box>
          {post && <Markdown rehypePlugins={[rehypeHighlight]}>{post.fields.body}</Markdown>}
        </Box>
      </SectionContainer>
    </Container>
  )
}

export default Services;
