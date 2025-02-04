'use client';

import SectionContainer from "@/components/SectionContainer/SectionContainer";
import pageStyles from './page.module.scss';
import {Container} from "@mui/material";
import Button from "@mui/material/Button";
import config from "@/config/sites";
import searchFormSchema, {SearchFormType} from "@/app/search/searchFormSchema";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import HookFormTextField from "@/components/HookFormTextField/HookFormTextField";
import {redirect, useSearchParams} from "next/navigation";
import useSearch from "@/hooks/useSearch";
import HelmetComponent from "@/components/HelmetComponent/HelmetComponent";
import SearchIcon from "@mui/icons-material/Search";
import Listings from "@/components/Listings/Listings";

const Testimony = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') ?? '';

  const {
    isLoading,
    posts,
    error,
  } = useSearch('posts', query);

  const defaultVals: SearchFormType = {
    query: query,
  }

  const {
    handleSubmit,
    control,
  } = useForm<SearchFormType>({
    resolver: yupResolver(searchFormSchema),
    defaultValues: defaultVals
  });

  const onSubmit: SubmitHandler<SearchFormType> = (data) => {
    redirect(`/search?query=${data.query}`)
  }

  return (
    <Container maxWidth={false} disableGutters>
      <HelmetComponent>
        <title>{`${config.meta.title} | Blog`}</title>
        <meta property="description" content="Search website"/>
        <meta property="keywords" content="search, site, site search" />
      </HelmetComponent>

      <SectionContainer styleName={pageStyles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={pageStyles.searchWrap}>
          <HookFormTextField
            name="query"
            control={control}
            label="Enter search..."
            variant="outlined"
          />

          <Button
            color="hero"
            type="submit"
            disableElevation
            variant="outlined"
          >
            <SearchIcon />
          </Button>
        </form>
      </SectionContainer>

      <Listings
        title="Search"
        isLoading={isLoading}
        posts={posts}
      />

      {/*<SectionContainer styleName={pageStyles.listItemWrapper}>*/}
      {/*  <Typography variant="h2" style={{ margin: '50px 0' }}>*/}
      {/*    {posts ? posts.length : ''} Results...*/}
      {/*  </Typography>*/}

      {/*  {isLoading ? (*/}
      {/*    <>*/}
      {/*      <PostSkeleton>*/}
      {/*        <Stack spacing={2} sx={{ margin: '25px 0 0' }}>*/}
      {/*          <Skeleton height={40} width="70%" variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*        </Stack>*/}

      {/*        <Stack spacing={2} sx={{ margin: '25px 0 40px' }}>*/}
      {/*          <Skeleton width="90%" variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*          <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*          <Skeleton width="40%" variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*        </Stack>*/}

      {/*        <Stack spacing={2} sx={{ margin: '20px 0' }}>*/}
      {/*          <Skeleton width="95%" variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*          <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*          <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*          <Skeleton width="70%" variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*        </Stack>*/}
      {/*      </PostSkeleton>*/}

      {/*      <PostSkeleton>*/}
      {/*        <Stack spacing={2} sx={{ margin: '25px 0 0' }}>*/}
      {/*          <Skeleton height={40} width="70%" variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*        </Stack>*/}

      {/*        <Stack spacing={2} sx={{ margin: '25px 0 40px' }}>*/}
      {/*          <Skeleton width="90%" variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*          <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*          <Skeleton width="40%" variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*        </Stack>*/}

      {/*        <Stack spacing={2} sx={{ margin: '20px 0 25px' }}>*/}
      {/*          <Skeleton width="95%" variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*          <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*          <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*          <Skeleton width="20%" variant="rectangular" {...{ ...baseSkeletonProps }} />*/}
      {/*        </Stack>*/}
      {/*      </PostSkeleton>*/}
      {/*    </>*/}
      {/*  ) : (*/}
      {/*    <>*/}
      {/*      {posts ? posts?.map(item => (*/}
      {/*        <ItemAnimation key={item.sys.id}>*/}
      {/*          <Post post={item} />*/}
      {/*        </ItemAnimation>*/}
      {/*      )): (*/}
      {/*        <p>{query ? 'No content found...' : 'Enter a search query to search for results...'}</p>*/}
      {/*      )}*/}
      {/*    </>*/}
      {/*  )}*/}
      {/*</SectionContainer>*/}
    </Container>
  )
}

export default Testimony;
