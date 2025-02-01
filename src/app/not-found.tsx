'use client';

import pageStyles from "@/app/not-found.module.scss";
import {Container} from "@mui/material";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import HookFormTextField from "@/components/HookFormTextField/HookFormTextField";
import Button from "@mui/material/Button";
import searchFormSchema, {SearchFormType} from "@/app/search/searchFormSchema";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {redirect} from "next/navigation";

const NotFound = () => {
  const defaultVals: SearchFormType = {
    query: '',
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
            Search
          </Button>
        </form>
      </SectionContainer>
      <SectionContainer styleName={pageStyles.content}>
        <Typography variant="h1">
          Uh oh, looks like something went wrong...
        </Typography>

        <Typography variant="body2">
          Sorry the page you were looking for could not be found, you can use the search form above or please try again...
        </Typography>
      </SectionContainer>
    </Container>
  )
}

export default NotFound;
