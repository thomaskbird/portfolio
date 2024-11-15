'use client';

import styles from './page.module.scss'
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import config from "@/config/sites";
import {Helmet} from "react-helmet";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SkeletonSwitcher from "@/components/SkeletonSwitcher/SkeletonSwitcher";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import {useRouter} from "next/navigation";
import useRetrieveTestimonial from "@/hooks/useRetrieveTestimonial";
import cn from "classnames";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";

type PageType = {
  params: {
    id: string,
  }
}

const Testimony = ({ params }: PageType) => {
  const { id } = params;
  const router = useRouter();
  const theme = useGlobalStore(selectTheme);
  const { testimony, error, isLoading } = useRetrieveTestimonial(id);

  const isDark = theme === 'dark';
  const name = testimony ? testimony?.fields.name : '';

  return (
    <SectionContainer styleName={styles.insideContainer}>
      <Helmet>
        <title>{config.meta.title} | Testimony {name}</title>
        <meta property="description" content={config.meta.description}/>
      </Helmet>

      <Grid container className={styles.pageHeader}>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            startIcon={<ChevronLeftIcon/>}
            onClick={() => router.back()}
          >
            Back
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.pageHeaderLeft}>
          <SkeletonSwitcher
            item={<Typography variant="body3">Posted: {testimony?.sys.updatedAt.substring(0, 10)}</Typography>}
            skeletonProps={baseSkeletonProps}
          />
        </Grid>
      </Grid>

      <div className={cn(styles.blurb, isDark ? styles.blurbDark : styles.blurbLight)}>
        <img src={testimony?.fields.profileImage?.fields.file.url} alt={name} title={name} className={styles.blurbImage}/>

        <Typography variant="h1">
          {name}
        </Typography>

        <Typography variant="h5">
          {testimony?.fields.title}
        </Typography>

        <Typography variant="body2" dangerouslySetInnerHTML={{ __html: testimony?.fields.content as string }} />
      </div>
    </SectionContainer>
  )
}

export default Testimony;
