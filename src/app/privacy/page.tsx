'use client';

import styles from '../page.module.scss';
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import config from "@/config/sites";

const LAST_UPDATED = 'October 29, 2026';

const Privacy = () => (
  <SectionContainer styleName={styles.contactContentWrapper} innerStyles={styles.contactContentInnerWrapper}>
    <Typography variant="h2" component="h1" sx={{marginBottom: '30px'}}>Privacy</Typography>

    <Typography variant="body2" color="secondary" sx={{marginBottom: '20px'}}>
      This is a personal website. It does not sell anything, run ads, or sell or share visitor data.
      Last updated {LAST_UPDATED}.
    </Typography>

    <h2>What is measured</h2>
    <Typography variant="body2" color="secondary" sx={{marginBottom: '20px'}}>
      The site uses Google Analytics to understand how it is used, which helps me decide what to write and
      improve. It records the pages you view, roughly where you are (city and country), your device and
      browser type, how you arrived (for example from a search engine or LinkedIn), and clicks on links such
      as the resume, email and booking links. Google Analytics uses cookies to do this. It does not receive
      your name, your email address, or anything you type.
    </Typography>

    <h2>Opting out</h2>
    <Typography variant="body2" color="secondary" sx={{marginBottom: '20px'}}>
      You can block analytics by declining or clearing cookies in your browser, using a content blocker, or
      installing Google&apos;s{' '}
      <Link href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
        Analytics opt-out browser add-on
      </Link>.
    </Typography>

    <h2>Hosting and content</h2>
    <Typography variant="body2" color="secondary" sx={{marginBottom: '20px'}}>
      The site is hosted on Netlify and its articles and images are served by Contentful. Like any web host,
      they receive standard request information, such as your IP address and browser, in order to deliver
      the pages.
    </Typography>

    <h2>Contact</h2>
    <Typography variant="body2" color="secondary">
      If you email me, I use your message only to reply. Questions about this page:{' '}
      <Link href={`mailto:${config.contact.email}`}>{config.contact.email}</Link>.
    </Typography>
  </SectionContainer>
);

export default Privacy;
