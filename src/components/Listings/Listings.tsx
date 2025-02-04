import styles from './Listings.module.scss';

import PostSkeleton from "@/components/Post/PostSkeleton";
import {Skeleton, Stack, ToggleButton, ToggleButtonGroup} from "@mui/material";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import ItemAnimation from "@/components/ItemAnimation/ItemAnimation";
import Post from "@/components/Post/Post";
import Typography from "@mui/material/Typography";
import ListIcon from "@mui/icons-material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {useState} from "react";
import SectionContainer from "@/components/SectionContainer/SectionContainer";

type ListingsProps = {
  title: string;
  isLoading: boolean;
  posts: any;
}

type FormatType = 'list' | 'card';

const Listings = ({
  title,
  isLoading,
  posts
}: ListingsProps) => {
  const [format, setFormat] = useState<FormatType>('list');

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormat: FormatType | null,
  ) => {
    setFormat(newFormat as FormatType)
  }

  return (
    <SectionContainer styleName={styles.listingsContainer}>
      <div className={styles.contentListingHeader}>
        <Typography variant="h2" style={{margin: '50px 0'}}>
          {title}
          {posts && <small className={styles.contentListingHeaderSubtitle}>{posts.length} Results...</small>}
        </Typography>
        <ToggleButtonGroup
          value={format}
          exclusive
          onChange={handleFormat}
          aria-label="text alignment"
          className={styles.contentListingHeaderButtonGroup}
        >
          <ToggleButton value="list" aria-label="left aligned">
            <ListIcon/>
          </ToggleButton>
          <ToggleButton value="card" aria-label="right aligned">
            <DashboardIcon/>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {isLoading ? (
        <>
          <PostSkeleton>
            <Stack spacing={2} sx={{margin: '25px 0 0'}}>
              <Skeleton height={40} width="70%" variant="rectangular" {...{...baseSkeletonProps}} />
            </Stack>

            <Stack spacing={2} sx={{margin: '25px 0 40px'}}>
              <Skeleton width="90%" variant="rectangular" {...{...baseSkeletonProps}} />
              <Skeleton variant="rectangular" {...{...baseSkeletonProps}} />
              <Skeleton width="40%" variant="rectangular" {...{...baseSkeletonProps}} />
            </Stack>

            <Stack spacing={2} sx={{margin: '20px 0'}}>
              <Skeleton width="95%" variant="rectangular" {...{...baseSkeletonProps}} />
              <Skeleton variant="rectangular" {...{...baseSkeletonProps}} />
              <Skeleton variant="rectangular" {...{...baseSkeletonProps}} />
              <Skeleton width="70%" variant="rectangular" {...{...baseSkeletonProps}} />
            </Stack>
          </PostSkeleton>

          <PostSkeleton>
            <Stack spacing={2} sx={{margin: '25px 0 0'}}>
              <Skeleton height={40} width="70%" variant="rectangular" {...{...baseSkeletonProps}} />
            </Stack>

            <Stack spacing={2} sx={{margin: '25px 0 40px'}}>
              <Skeleton width="90%" variant="rectangular" {...{...baseSkeletonProps}} />
              <Skeleton variant="rectangular" {...{...baseSkeletonProps}} />
              <Skeleton width="40%" variant="rectangular" {...{...baseSkeletonProps}} />
            </Stack>

            <Stack spacing={2} sx={{margin: '20px 0 25px'}}>
              <Skeleton width="95%" variant="rectangular" {...{...baseSkeletonProps}} />
              <Skeleton variant="rectangular" {...{...baseSkeletonProps}} />
              <Skeleton variant="rectangular" {...{...baseSkeletonProps}} />
              <Skeleton width="20%" variant="rectangular" {...{...baseSkeletonProps}} />
            </Stack>
          </PostSkeleton>
        </>
      ) : (
        <div className={format === 'card' ? styles.listingItemsContainer : ''}>
          {posts && posts.length > 0 ? posts.map((item: any) => (
            <ItemAnimation key={item.sys.id}>
              <Post post={item} />
            </ItemAnimation>
          )) : (
            <Typography variant="h6">
              No results found...
            </Typography>
          )}
        </div>
      )}
    </SectionContainer>
  );
}

export default Listings;
