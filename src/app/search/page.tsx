'use client';

import {Helmet} from "react-helmet";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import styles from "@/app/p/[slug]/page.module.scss";
import {Container, Grid, Stack} from "@mui/material";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SkeletonSwitcher from "@/components/SkeletonSwitcher/SkeletonSwitcher";
import Typography from "@mui/material/Typography";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import {ReactNode} from "react";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {Document} from "@contentful/rich-text-types";
import Link from "next/link";
import Image from "next/image";
import config from "@/config/sites";
import stripTags from "@/utils/stripTags";
import searchFormSchema, {SearchFormType} from "@/app/search/searchFormSchema";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import HookFormTextField from "@/components/HookFormTextField/HookFormTextField";
import {useRouter, useSearchParams} from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') ?? '';

  const defaultVals: SearchFormType = {
    query: query,
  }

  const {
    handleSubmit,
    reset,
    control,
    setError,
  } = useForm<SearchFormType>({
    resolver: yupResolver(searchFormSchema),
    defaultValues: defaultVals
  });

  // const title = post ? `${config.meta.title} | Blog | ${post.fields.title}` : `${config.meta.title} | Blog`;
  // const desc = post ? stripTags(post.fields.description as string) : '';
  // const media = post?.fields.media;

  const onSubmit: SubmitHandler<SearchFormType> = (data) => {
    console.log('submit', data);
  }

  return (
    <Container maxWidth={false} disableGutters>
      {/*<Helmet>*/}
      {/*  <title>Search</title>*/}
      {/*  <meta property="description" content={desc}/>*/}
      {/*  <meta property="keywords" content={post?.fields.keywords as string}/>*/}
      {/*</Helmet>*/}

      <SectionContainer styleName={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Search:</h3>
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
    </Container>
)
}

export default Search;
