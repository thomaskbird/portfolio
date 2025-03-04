import styles from './Listings.module.scss';

import PostSkeleton from "@/components/Post/PostSkeleton";
import {Skeleton, Stack, ToggleButton, ToggleButtonGroup, Tooltip} from "@mui/material";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import ItemAnimation from "@/components/ItemAnimation/ItemAnimation";
import Post from "@/components/Post/Post";
import Typography from "@mui/material/Typography";
import ListIcon from "@mui/icons-material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectListingFormat, selectSetListingLayout} from "@/store/selectors/globalStore";
import useWindowDimensions from "@/hooks/useWindowDimensions";

type ListingsProps = {
  title: string;
  query?: string;
  isLoading: boolean;
  posts: any;
}

export type ListingFormatType = 'list' | 'card';

const Listings = ({
  title,
  query,
  isLoading,
  posts
}: ListingsProps) => {
  const setListingLayout = useGlobalStore(selectSetListingLayout);
  const listingFormat = useGlobalStore(selectListingFormat);
  const windowDimensions = useWindowDimensions();

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormat: ListingFormatType | null,
  ) => setListingLayout(newFormat as ListingFormatType)

  return (
    <SectionContainer styleName={styles.listingsContainer}>
      <div className={styles.contentListingHeader}>
        <Typography variant="h2" style={{margin: '50px 0'}}>
          {title}
          {posts && <small className={styles.contentListingHeaderSubtitle}>{posts.length} Results found for <em>{query ?? title}</em>...</small>}
        </Typography>
        <ToggleButtonGroup
          exclusive
          color="secondary"
          orientation={windowDimensions.width < 601 ? 'vertical' : 'horizontal'}
          value={listingFormat}
          onChange={handleFormat}
          aria-label="text alignment"
          className={styles.contentListingHeaderButtonGroup}
        >
          <Tooltip title="List">
            <ToggleButton value="list" aria-label="left aligned">
              <ListIcon/>
            </ToggleButton>
          </Tooltip>
          <Tooltip title="Card">
            <ToggleButton value="card" aria-label="right aligned">
              <DashboardIcon/>
            </ToggleButton>
          </Tooltip>
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
        <div className={listingFormat === 'card' ? styles.listingItemsContainer : ''}>
          {posts && posts.length > 0 ? posts.map((item: any) => (
            <ItemAnimation key={item.sys.id}>
              <Post post={item} />
            </ItemAnimation>
          )) : (posts === undefined && query === '') ? (
            <Typography variant="h6">
              Enter a search query to search for results...
            </Typography>
          ) : (
            <Typography variant="h6">
              {posts ? posts.length : ''}
              No results found...
            </Typography>
          )}
        </div>
      )}
    </SectionContainer>
  );
}

export default Listings;
