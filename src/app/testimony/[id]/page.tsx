'use client';

import styles from './page.module.scss'
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import config from "@/config/sites";
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
import {ReactNode, use} from "react";
import HelmetComponent from "@/components/HelmetComponent/HelmetComponent";
import Image from 'next/image';

type PageType = {
  params: Promise<{
    id: string,
  }>
}

const Testimony = ({ params }: PageType) => {
  const { id } = use(params);
  const router = useRouter();
  const theme = useGlobalStore(selectTheme);
  const { testimony, error, isLoading } = useRetrieveTestimonial(id);

  const isDark = theme === 'dark';
  const name = testimony ? testimony?.fields.name : '';
  const testimonyProfileImage = (testimony?.fields.profileImage as any)?.fields?.file;

  return (
    <SectionContainer styleName={styles.insideContainer}>
      <HelmetComponent>
        <title>{config.meta.title} | Testimony {name as ReactNode}</title>
        <meta property="description" content={config.meta.description}/>
      </HelmetComponent>

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
        {!isLoading && (
          <Image
            width={testimonyProfileImage.details.image.width}
            height={testimonyProfileImage.details.image.height}
            src={`https:${testimonyProfileImage.url}`}
            alt={name as string}
            title={name as string}
            className={styles.blurbImage}
          />
        )}

        <Typography variant="h1">
          {name as ReactNode}
        </Typography>

        <Typography variant="h5">
          {testimony?.fields.title as ReactNode}
        </Typography>

        <Typography variant="body2" dangerouslySetInnerHTML={{ __html: testimony?.fields.content as string }} />
      </div>
    </SectionContainer>
  )
}

export default Testimony;
