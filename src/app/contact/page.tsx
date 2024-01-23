'use client';

import styles from '../page.module.scss'
import pageStyles from './page.module.scss';
import {Grid} from "@mui/material";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Button from "@mui/material/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import HookFormTextField from "@/components/HookFormTextField/HookFormTextField";
import contactFormSchema, {ContactFormType} from "@/app/contact/contactFormSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import Typography from "@mui/material/Typography";
import addContact from "@/services/addContact";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetIsLoading} from "@/store/selectors/globalStore";
import {useState} from "react";

const defaultVals: ContactFormType = {
  name: '',
  email: '',
  phone: '',
  message: ''
}

const Contact = () => {
  const setIsLoading = useGlobalStore(selectSetIsLoading);
  const {
    handleSubmit,
    reset,
    control,
    setValue,
  } = useForm<ContactFormType>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: defaultVals
  });

  const [success, setSuccess] = useState(false);

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    setIsLoading(true);
    const submission = await addContact(data);

    if(submission) {
      reset();
    }
    setSuccess(true);
    setIsLoading(false);
  };

  return (
    <>
      <SectionContainer styleName={styles.mainContent}>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" sx={{ marginBottom: '20px' }}>What am I looking for?</Typography>
            <Typography variant="body1" color="secondary" sx={{ marginBottom: '20px' }}>
              I&apos;m an engineer with a <em>passion</em> for working with people and creating <em>amazing products</em>, that said my goal is to find a team working with the <em>latest</em> cutting edge technology, that fosters <em>creative thinking</em> and embraces new ideas.
            </Typography>
            <Typography variant="body1" color="secondary">
              Beyond just that I strongly believe good <em>company culture</em> can make or break a team, without it the best all stars won&apos;t be as effective.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ marginBottom: '20px' }}>Send a message</Typography>

            {success ? (
              <Typography variant="body1" color="success" sx={{ color: 'rgba(91,229,169,0.5)' }}>Your message has been submitted, I&apos;ll we be in contact as soon as possible! Thanks for stopping bye!</Typography>
            ) : (
              <Typography variant="body1" color="secondary">Thanks for stopping by and showing interest, use the form below and I would be happy to get back to you at my earliest convenience! Thanks</Typography>
            )}

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
    </>
  )
}

export default Contact;
