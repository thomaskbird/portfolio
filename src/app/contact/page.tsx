'use client';

import styles from '../page.module.scss'
import pageStyles from './page.module.scss';
import {Grid} from "@mui/material";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetIsLoading, selectTheme} from "@/store/selectors/globalStore";
import config from "@/config/sites";
import {Helmet} from "react-helmet-async";
import WordSlider from "@/components/WordSlider/WordSlider";
import cn from "classnames";
import useMisc from "@/hooks/useMisc";
import Link from "next/link";

const logos = [
  {
    id: 0,
    title: 'OpenAI',
    src: '/logos/OpenAI.png'
  },
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
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';

  return (
    <>
      <Helmet>
        <title>{config.meta.title} | Contact</title>
        <meta property="description" content={config.meta.description}/>
      </Helmet>

      <div className={cn(
        pageStyles.horizontalScrollSnapper,
        isDark ? pageStyles.horizontalScrollSnapperDark : pageStyles.horizontalScrollSnapperLight
      )}>
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

      <SectionContainer styleName={styles.contactContentWrapper}>
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
            <Typography variant="h5" sx={{marginBottom: '20px', marginTop: '50px'}}>Send a message</Typography>

            <Typography variant="body2"><Link target="_blank" href="mailto:thomaskbird@icloud.com">Thomaskbird@icloud.com</Link></Typography>
          </Grid>
        </Grid>
      </SectionContainer>
    </>
  )
}

export default Contact;
