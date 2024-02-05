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
import {useEffect, useState} from "react";
import config from "@/config/sites";
import {Helmet} from "react-helmet";
import WordSlider from "@/components/WordSlider/WordSlider";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Socials from "@/components/Socials/Socials";
import randomInteger from "@/utils/generateRandomNumber";

const defaultVals: ContactFormType = {
  name: '',
  email: '',
  phone: '',
  message: '',
  captcha: 0,
}

const logos = [
  {
    id: 1,
    title: 'NBC Sports',
    src: '/logos/nbc.png'
  },
  {
    id: 2,
    title: 'Powerley',
    src: '/logos/powerley.png'
  },
  {
    id: 3,
    title: 'Ford',
    src: '/logos/ford.png'
  },
  {
    id: 4,
    title: 'GM',
    src: '/logos/gm.png'
  },
  {
    id: 5,
    title: 'Livegistics',
    src: '/logos/livegistics.png'
  },
  {
    id: 6,
    title: 'Dominos',
    src: '/logos/dominos.png'
  },
  {
    id: 7,
    title: 'Ultimate Software',
    src: '/logos/ultimate-software.png'
  },
  {
    id: 8,
    title: 'UnitedHealth Group',
    src: '/logos/unitedhealth-group.png'
  },
  {
    id: 9,
    title: 'Belle Tire',
    src: '/logos/belle.png'
  },
  {
    id: 10,
    title: 'Brogan & Partners',
    src: '/logos/brogan.png',
  },
  {
    id: 11,
    title: 'Media Genesis',
    src: '/logos/mediag.png',
  }
]

// todo: https://www.frontend.fyi/v/staggered-text-animations-with-framer-motion
// todo: https://codesandbox.io/p/sandbox/text-typing-animation-forked-mgzgdj

const Contact = () => {
  const setIsLoading = useGlobalStore(selectSetIsLoading);
  const {
    handleSubmit,
    reset,
    control,
    setError,
  } = useForm<ContactFormType>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: defaultVals
  });

  const [success, setSuccess] = useState(false);
  const [captchaVals, setCaptchaVals] = useState<number[]>([]);

  useEffect(() => {
    setCaptchaVals([randomInteger(), randomInteger()]);
  }, []);

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    if(captchaVals[0] + captchaVals[1] === data.captcha) {
      setIsLoading(true);

      try {
        const submission = await addContact(data);

        if(submission) {
          reset();
        }
      } catch (e) {
        console.error(e);
      } finally {
        setSuccess(true);
        setIsLoading(false);
      }
    } else {
      setError('captcha', {
        type: 'manual',
        message: 'Your captcha answer was not correct, please try again'
      })
    }
  };

  return (
    <>
      <Helmet>
        <title>{config.meta.title} | Contact</title>
        <meta property="description" content={config.meta.description}/>
      </Helmet>

      <div className={pageStyles.horizontalScrollSnapper}>
        {logos.map(logo => (
          <img
            key={logo.id}
            src={logo.src}
            alt={logo.title}
            title={logo.title}
            className={pageStyles.logo}
          />
        ))}
      </div>

      <SectionContainer styleName={styles.mainContent}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <WordSlider
              sentence="What am I?"
              slideWords={[
                'Bold',
                'Creative',
                'Collaborative',
                'Driven',
                'Relentless',
                'Curious',
                'Analytical',
                'Attentive',
              ]}
            />

            <Typography variant="body2" color="secondary" sx={{marginBottom: '20px'}}>
              I&apos;m an engineer with a <em>passion</em> for working with people and creating <em>amazing
              products</em>, my goal is to find a team working with the <em>latest</em> and greatest
              technology, that fosters <em>creative thinking</em> and embraces <em>new ideas</em>.
            </Typography>
            <Typography variant="body2" color="secondary">
              I&apos;m looking for a company that understands its only as good as the culture it creates!
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{marginBottom: '20px', marginTop: '0px'}}>Find me online</Typography>
            <Socials/>

            <Typography variant="h5" sx={{marginBottom: '20px', marginTop: '50px'}}>Send a message</Typography>

            {success ? (
              <Typography variant="body2" color="success" sx={{color: 'rgba(91,229,169,0.5)'}}>
                <CheckCircleOutlineIcon className={pageStyles.icon}/>
                Your message has been
                submitted, I&apos;ll we be in contact as soon as possible! Thanks for stopping bye!</Typography>
            ) : (
              <Typography variant="body2" color="secondary">Thanks for stopping by, fill out the short form below
                and I will be in contact as soon as possible! Thanks.</Typography>
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
                <HookFormTextField
                  name="captcha"
                  control={control}
                  label={`What is ${captchaVals[0]} + ${captchaVals[1]} = ?`}
                  variant="outlined"
                />
              </div>

              <Button
                color="hero"
                type="submit"
                disableElevation
                variant="outlined"
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
