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
import useMisc from "@/hooks/useMisc";

// todo: https://www.frontend.fyi/v/staggered-text-animations-with-framer-motion
// todo: https://codesandbox.io/p/sandbox/text-typing-animation-forked-mgzgdj

// Fallback shown until the Contentful `misc` entry `message-form-text` loads.
const defaultMessageFormText = "Hiring for a Staff or Principal Applied AI role, building an engineering leadership team, or need an architect to take an AI initiative from idea to production? I'd like to hear from you. Consulting and advisory conversations are welcome.";

const Contact = () => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';
  const { findField } = useMisc();

  const messageFormText = (findField('message-form-text') as string | undefined) ?? defaultMessageFormText;
  const email = (findField('email') as string | undefined) ?? config.contact.email;

  return (
    <>
      <HelmetComponent>
        <title>{config.meta.title} | Contact</title>
        <meta property="description" content={config.meta.pages.contact}/>
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
              sentence="I am"
              slideWords={[
                'an AI Architect',
                'an Engineering Leader',
                'a Systems Thinker',
                'a Hands-on Builder',
                'Pragmatic',
                'Analytical',
                'Collaborative',
                'Outcome-driven',
              ]}
            />

            <Typography variant="body2" color="secondary" sx={{marginBottom: '20px'}}>
              I&apos;m an <em>Applied AI architect</em> and <em>engineering leader</em>. I build
              <em> production AI systems</em>, lead engineering teams, and turn complex business problems
              into <em>measurable outcomes</em>.
            </Typography>
            <Typography variant="body2" color="secondary">
              {messageFormText}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{marginBottom: '20px', marginTop: '50px'}}>Send a message</Typography>

            <Typography variant="body2"><Link target="_blank" href={`mailto:${email}`}>{email}</Link></Typography>
          </Grid>
        </Grid>
      </SectionContainer>
    </>
  );
}

export default Contact;
