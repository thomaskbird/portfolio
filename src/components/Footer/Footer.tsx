import styles from './Footer.module.scss';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";

type FooterType = {};

const iconSize = 'medium';

const Footer = ({}: FooterType) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.blurbs}>
        <div className={styles.blurb}>
          <RoomIcon fontSize={iconSize} className={styles.blurbIcon}/>
          <div className={styles.blurbText}>
            <h5>Location</h5>
            <p>Bowling Green, OH</p>
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
            <li><Link href="/post/something">Learning new css tricks</Link></li>
            <li><Link href="/post/something">Using the new IntersectionObserver</Link></li>
            <li><Link href="/post/something">Redux in a nutshell</Link></li>
            <li><Link href="/post/something">Redux, Zustand, Mobx what to use for state management</Link></li>
            <li><Link href="/post/something">Coding a simple slider</Link></li>
          </ul>
        </div>
        <div className={styles.footerMainColumn}>
          <h5>Pages</h5>
          <div className={styles.footerTitleDivider}></div>

          <ul>
            <li><Link href="/post/something">Home</Link></li>
            <li><Link href="/post/something">Work</Link></li>
            <li><Link href="/post/something">Services</Link></li>
            <li><Link href="/post/something">Blog</Link></li>
            <li><Link href="/post/something">Resume</Link></li>
            <li><Link href="/post/something">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;