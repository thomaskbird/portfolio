'use client';

import styles from '../page.module.scss'
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import config from "@/config/sites";
import useRetrievePosts from "@/hooks/useRetrievePosts";
import SearchResults from "@/components/SearchResults/SearchResults";
import HelmetComponent from "@/components/HelmetComponent/HelmetComponent";
import {useState} from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListIcon from '@mui/icons-material/List';

const Blog = () => {
  const [format, setFormat] = useState<'list' | 'card'>('list');
  const { posts, error, isLoading } = useRetrievePosts('blog');
  const orderedPosts = posts?.reverse();

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormat: 'list' | 'card' | null,
  ) => {
    setFormat(newFormat)
  }

  return (
    <>
      <HelmetComponent>
        <title>{config.meta.title} | Blog</title>
        <meta property="description" content={config.meta.description} />
      </HelmetComponent>

      <SectionContainer styleName={styles.listItemWrapper}>
        <div className={styles.contentListingHeader}>
          <Typography variant="h2" style={{margin: '50px 0'}}>Blog</Typography>
          <ToggleButtonGroup
            value={format}
            exclusive
            onChange={handleFormat}
            aria-label="text alignment"
          >
            <ToggleButton value="list" aria-label="left aligned">
              <ListIcon />
            </ToggleButton>
            <ToggleButton value="card" aria-label="right aligned">
              <DashboardIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        {orderedPosts && (
          <SearchResults isLoading={isLoading} posts={orderedPosts} />
        )}
      </SectionContainer>
    </>
  )
}

export default Blog;
