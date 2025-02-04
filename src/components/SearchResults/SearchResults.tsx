import BlogPostSkeleton from "@/components/BlogPost/BlogPostSkeleton";
import {Skeleton, Stack} from "@mui/material";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import ItemAnimation from "@/components/ItemAnimation/ItemAnimation";
import BlogPost from "@/components/BlogPost/BlogPost";

type SearchResultsProps = {
  isLoading: boolean;
  posts: any;
}

const SearchResults = ({ isLoading, posts }: SearchResultsProps) => {
  return isLoading ? (
    <>
      <BlogPostSkeleton>
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
      </BlogPostSkeleton>

      <BlogPostSkeleton>
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
      </BlogPostSkeleton>
    </>
  ) : (
    <>
      {(posts ?? []).map((item: any) => (
        <ItemAnimation key={item.sys.id}>
          <BlogPost post={item} />
        </ItemAnimation>
      ))}
    </>
  );
}

export default SearchResults;
