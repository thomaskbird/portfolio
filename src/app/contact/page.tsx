'use client';

import styles from '../page.module.scss'
import pageStyles from './page.module.scss';
import {Grid} from "@mui/material";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";
import config from "@/config/sites";
import WordSlider from "@/components/WordSlider/WordSlider";
import cn from "classnames";
import Link from "next/link";
import HelmetComponent from "@/components/HelmetComponent/HelmetComponent";
import Image from "next/image";
import logos from "@/mocks/mockLogos";

// todo: https://www.frontend.fyi/v/staggered-text-animations-with-framer-motion
// todo: https://codesandbox.io/p/sandbox/text-typing-animation-forked-mgzgdj

const Contact = () => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';

  return (
    <>
      <HelmetComponent>
        <title>{config.meta.title} | Contact</title>
        <meta property="description" content={config.meta.description}/>
      </HelmetComponent>

      <div className={cn(
        pageStyles.horizontalScrollSnapper,
        isDark ? pageStyles.horizontalScrollSnapperDark : pageStyles.horizontalScrollSnapperLight
      )}>
        {logos.map(logo => (
          <Image
            width={501}
            height={501}
            key={logo.id}
            src={logo.src}
            alt={logo.title}
            title={logo.title}
            className={pageStyles.logo}
          />
        ))}
      </div>

      <SectionContainer styleName={styles.contactContentWrapper} innerStyles={styles.contactContentInnerWrapper}>
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

            <Typography variant="body2"><Link target="_blank"
                                              href="mailto:thomaskbird@icloud.com">Thomaskbird@icloud.com</Link></Typography>
          </Grid>
        </Grid>
      </SectionContainer>
    </>
  );
}

export default Contact;
