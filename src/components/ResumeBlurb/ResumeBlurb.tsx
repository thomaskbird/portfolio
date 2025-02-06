import styles from './ResumeBlurb.module.scss';
import Link from "next/link";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Typography from "@mui/material/Typography";
import Skills from "@/components/Skills/Skills";
import cn from "classnames";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";
import Image from "next/image";

type ResumeBlurbType = {};

const ResumeBlurb = ({}: ResumeBlurbType) => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';

  return (
    <div className={cn(styles.blurb, isDark ? styles.blurbDark : styles.blurbLight)}>
      <Link
        href="https://docs.google.com/document/d/1gjkhy1ogLDcKIiUpiStgMHxc052bkdsn/edit?usp=sharing&ouid=101742124066617366377&rtpof=true&sd=true"
        target="_blank">
        <Button variant="contained" startIcon={<CloudDownloadIcon/>} className={styles.downloadButton}>
          Download Resume
        </Button>
      </Link>

      <Image
        width={471}
        height={595}
        src="/thomas-bird.png"
        alt="Thomas Bird"
        title="Thomas Bird"
        className={styles.blurbImage}
      />
      <Typography variant="h1">
        About Me
      </Typography>

      <Typography variant="body2">
        I&apos;m a <em>passionate</em> Engineer who loves to tinker, a genuine curiosity keeps me invigorated with
        the work I do. <em>Driven</em> and <em>relentless</em>, I’m the type of person who encounters problems and
        just doesn’t know the words “Give up”. I’m extremely collaborative, concise and attentive throughout all
        that I do with a special focus on attention to detail.
      </Typography>

      <Typography variant="body2">
        I&apos;ve had a <em>diverse</em> background in many industries, sizes of companies and roles. This has
        given me a top notch ability to anticipate and deliver on a higher level by being ready for what’s coming
        next. It gives me a <em>strong intuition</em> that helps prepare me for future problems and the inevitable
        curve balls.
      </Typography>

      <Typography variant="body2">
        My <em>passion</em> is building and creating <em>amazing</em> pieces of software that are not only cool,
        but make my clients and customers lives better!
      </Typography>

      <Typography variant="h3" sx={{margin: '50px 0'}}>Skills</Typography>
      <Skills/>
    </div>
  )
}

export default ResumeBlurb;
