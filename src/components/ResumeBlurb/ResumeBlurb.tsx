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
        I&apos;m an <em>Applied AI architect</em> and <em>engineering leader</em> with 15+ years of experience
        turning ambiguous business problems into reliable, scalable software. Today I architect production AI
        platforms: agent orchestration, retrieval-augmented generation, evaluation, and the observability that
        makes AI trustworthy in regulated, high-stakes environments.
      </Typography>

      <Typography variant="body2">
        I&apos;ve sat in the <em>CTO chair</em>, grown an engineering organization from a handful of people to more
        than fifty, and built the project management, product, QA, and DevOps functions that made delivery
        predictable. I still design systems, debug hard problems, and <em>ship code alongside the team</em>.
      </Typography>

      <Typography variant="body2">
        I&apos;ve led teams and shipped products for Betco, NBC Sports, OpenAI, Livegistics, and Powerley across
        AI, media, healthcare, IoT, fintech, and logistics. I lead with <em>outcomes</em> first: revenue,
        reliability, delivery speed, and customer value. Then I choose the technology that earns its place.
      </Typography>

      <Typography variant="h3" sx={{margin: '50px 0'}}>Skills</Typography>
      <Skills/>
    </div>
  )
}

export default ResumeBlurb;
