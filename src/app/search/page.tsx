'use client';

import {Helmet} from "react-helmet";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import styles from "@/app/p/[slug]/page.module.scss";
import {Container, Skeleton, Stack} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import config from "@/config/sites";
import searchFormSchema, {SearchFormType} from "@/app/search/searchFormSchema";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import HookFormTextField from "@/components/HookFormTextField/HookFormTextField";
import {redirect, useSearchParams} from "next/navigation";
import useSearch from "@/hooks/useSearch";
import BlogPostSkeleton from "@/components/BlogPost/BlogPostSkeleton";
import ItemAnimation from "@/components/ItemAnimation/ItemAnimation";
import BlogPost from "@/components/BlogPost/BlogPost";

const Search = () => {
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
      <Helmet>
        <title>{`${config.meta.title} | Blog`}</title>
        <meta property="description" content="Search website"/>
        <meta property="keywords" content="search, site, site search" />
      </Helmet>

      <SectionContainer styleName={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            Contact me
          </Button>
        </form>
      </SectionContainer>

      <SectionContainer styleName={styles.listItemWrapper}>
        <Typography variant="h2" style={{ margin: '50px 0' }}>Results...</Typography>

        {isLoading ? (
          <>
            <BlogPostSkeleton>
              <Stack spacing={2} sx={{ margin: '25px 0 0' }}>
                <Skeleton height={40} width="70%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              </Stack>

              <Stack spacing={2} sx={{ margin: '25px 0 40px' }}>
                <Skeleton width="90%" variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton width="40%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              </Stack>

              <Stack spacing={2} sx={{ margin: '20px 0' }}>
                <Skeleton width="95%" variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton width="70%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              </Stack>
            </BlogPostSkeleton>

            <BlogPostSkeleton>
              <Stack spacing={2} sx={{ margin: '25px 0 0' }}>
                <Skeleton height={40} width="70%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              </Stack>

              <Stack spacing={2} sx={{ margin: '25px 0 40px' }}>
                <Skeleton width="90%" variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton width="40%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              </Stack>

              <Stack spacing={2} sx={{ margin: '20px 0 25px' }}>
                <Skeleton width="95%" variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton variant="rectangular" {...{ ...baseSkeletonProps }} />
                <Skeleton width="20%" variant="rectangular" {...{ ...baseSkeletonProps }} />
              </Stack>
            </BlogPostSkeleton>
          </>
        ) : (
          <>
            {posts?.map(item => (
              <ItemAnimation key={item.sys.id}>
                <BlogPost post={item} />
              </ItemAnimation>
            ))}
          </>
        )}
      </SectionContainer>
    </Container>
)
}

export default Search;
