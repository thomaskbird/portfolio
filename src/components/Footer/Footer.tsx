import styles from './Footer.module.scss';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";
import MOCK_NAVITEMS from "@/mocks/mockNavigation";
import {Container} from "@mui/material";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetIsLoading} from "@/store/selectors/globalStore";
import {useEffect, useState} from "react";
import PostType from "@/types/PostType";
import retrieveLatestPosts from "@/services/retrieveLatestPosts";

type FooterType = {};

const iconSize = 'medium';

const Footer = ({}: FooterType) => {
  const setIsLoading = useGlobalStore(selectSetIsLoading);

  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    (async() => {
      setIsLoading(true);
      const postsFromDb = await retrieveLatestPosts();
      setPosts(postsFromDb);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container maxWidth={false} disableGutters className={styles.footerWrapper}>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.blurbs}>
            <div className={styles.blurb}>
              <RoomIcon fontSize={iconSize} className={styles.blurbIcon}/>
              <div className={styles.blurbText}>
                <h5>Location</h5>
                <p><a target="_blank" href="https://maps.app.goo.gl/ZFKQYfNjj4kqwTyH7">Bowling Green, OH</a></p>
              </div>
            </div>

            <div className={styles.blurb}>
              <PhoneIcon fontSize={iconSize} className={styles.blurbIcon}/>
              <div className={styles.blurbText}>
                <h5>Phone</h5>
                <p>313-410-3709</p>
              </div>
            </div>

            <div className={styles.blurb}>
              <EmailIcon fontSize={iconSize} className={styles.blurbIcon}/>
              <div className={styles.blurbText}>
                <h5>Email:</h5>
                <p><a href="mailto:thomaskbird@icloud.com">thomaskbird@icloud.com</a></p>
              </div>
            </div>
          </div>

          <div className={styles.footerMain}>
            <div className={styles.footerMainColumn}>
              <img src="/logo.png" alt="Thomas K Bird" className={styles.footerLogo} />
              <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className={styles.footerMainColumn}>
              <h5>Blog Posts</h5>
              <div className={styles.footerTitleDivider}></div>

              <ul>
                {posts.map(post => (
                  <li key={post.id}><Link href={`/page/${post.slug}`}>{post.title}</Link></li>
                ))}
              </ul>
            </div>
            <div className={styles.footerMainColumn}>
              <h5>Pages</h5>
              <div className={styles.footerTitleDivider}></div>

              <ul>
                {MOCK_NAVITEMS.map((item) => (
                  <li key={item.id}><Link href={item.link}>{item.label}</Link></li>
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