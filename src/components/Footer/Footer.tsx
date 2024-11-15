import styles from './Footer.module.scss';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";
import MOCK_NAVITEMS from "@/mocks/mockNavigation";
import {Container} from "@mui/material";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";
import Socials from "@/components/Socials/Socials";
import cn from "classnames";
import useRetrievePosts from "@/hooks/useRetrievePosts";
import {ReactNode} from "react";

type FooterType = {};

const iconSize = 'medium';

const Footer = ({}: FooterType) => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';
  const logoUrl = isDark ? '/logo.png' : '/logo-dark.png';
  const { posts } = useRetrievePosts('blog');

  const postsLimited = posts ? posts.slice(0, 10) : [];

  return (
    <Container maxWidth={false} disableGutters className={isDark ? styles.footerWrapperDark : styles.footerWrapperLight}>
      <Container>
        <div>
          <div className={styles.blurbs}>
            <div className={styles.blurb}>
              <RoomIcon fontSize={iconSize} className={cn(styles.blurbIcon, isDark ? styles.blurbIconDark : styles.blurbIconLight)}/>
              <div className={styles.blurbText}>
                <h5>Location</h5>
                <p><Link target="_blank" href="https://maps.app.goo.gl/ZFKQYfNjj4kqwTyH7">Bowling Green, OH</Link></p>
              </div>
            </div>

            <div className={styles.blurb}>
              <PhoneIcon fontSize={iconSize} className={cn(styles.blurbIcon, isDark ? styles.blurbIconDark : styles.blurbIconLight)}/>
              <div className={styles.blurbText}>
                <h5>Phone</h5>
                <p><Link href="tel:313-410-3709">313-410-3709</Link></p>
              </div>
            </div>

            <div className={styles.blurb}>
              <EmailIcon fontSize={iconSize} className={cn(styles.blurbIcon, isDark ? styles.blurbIconDark : styles.blurbIconLight)}/>
              <div className={styles.blurbText}>
                <h5>Email:</h5>
                <p><Link href="mailto:thomaskbird@icloud.com">thomaskbird@icloud.com</Link></p>
              </div>
            </div>
          </div>

          <div className={styles.footerMain}>
            <div className={styles.footerMainColumn}>
              <Socials />
              <img src={logoUrl} alt="Thomas K Bird" className={styles.footerLogo} />
              <p className={styles.copyright}>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className={styles.footerMainColumn}>
              <h5>Blog Posts</h5>
              <div className={styles.footerTitleDivider}></div>

              <ul>
                {postsLimited?.map(post => (
                  <li key={post.sys.id}><Link className={styles.footerLinks} href={`/p/${post.fields.slug}`}>{post.fields.title as ReactNode}</Link></li>
                ))}
              </ul>
            </div>
            <div className={styles.footerMainColumn}>
              <h5>Pages</h5>
              <div className={styles.footerTitleDivider}></div>

              <ul>
                {MOCK_NAVITEMS.map((item) => (
                  <li key={item.id}><Link className={styles.footerLinks} href={item.link}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default Footer;
