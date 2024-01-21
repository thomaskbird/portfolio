'use client';

import styles from '../page.module.scss'
import pageStyles from './page.module.scss';
import {Container, Grid, TextField} from "@mui/material";
import Hero from "@/components/Hero/Hero";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Button from "@mui/material/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import HookFormTextField from "@/components/HookFormTextField/HookFormTextField";
import contactFormSchema, {ContactFormType} from "@/app/contact/contactFormSchema";
import {yupResolver} from "@hookform/resolvers/yup";

const defaultVals: ContactFormType = {
  name: '',
  email: '',
  phone: '',
  message: ''
}

const Contact = () => {
  const {
    handleSubmit,
    reset,
    control,
    setValue,
  } = useForm<ContactFormType>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: defaultVals
  });
  const onSubmit: SubmitHandler<ContactFormType> = (data) => {
    console.log('data', data);
  };

  return (
    <Container className={styles.overallWrapper} maxWidth={false} disableGutters>
      <Hero navOnly={true} />

      <SectionContainer styleName={styles.mainContent}>

        <Grid container>
          <Grid item xs={12} md={8}>
            TEST
          </Grid>

          <Grid item xs={12} md={4}>
            <h2>Thomas Bird</h2>
            <h5>Email: Thomas.bird1984@gmail.com</h5>
            <form className={pageStyles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={pageStyles.fieldWrapper}>
                <HookFormTextField
                  name="name"
                  control={control}
                  label="Name:"
                  variant="outlined"
                />
                <HookFormTextField
                  name="email"
                  control={control}
                  label="Email:"
                  variant="outlined"
                />
                <HookFormTextField
                  name="phone"
                  control={control}
                  label="Phone:"
                  variant="outlined"
                />
                <HookFormTextField
                  multiline
                  name="message"
                  control={control}
                  label="Message:"
                  variant="outlined"
                  rows={5}
                />
              </div>

              <Button
                color="hero"
                type="submit"
                disableElevation
                variant="outlined"
                className={styles.heroCtaPrimary}
              >
                Contact me
              </Button>
            </form>
          </Grid>
        </Grid>
      </SectionContainer>

    </Container>
  )
}

export default Contact;
