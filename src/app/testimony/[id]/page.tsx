'use client';

import styles from './page.module.scss'
import {useEffect, useState} from "react";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetIsLoading} from "@/store/selectors/globalStore";
import config from "@/config/sites";
import {Helmet} from "react-helmet";
import {TestimonyType} from "@/types/TestimonyType";
import retrieveTestimony from "@/services/retrieveTestimony";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SkeletonSwitcher from "@/components/SkeletonSwitcher/SkeletonSwitcher";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import {useRouter} from "next/navigation";

type PageType = {
  params: {
    id: string,
  }
}

const Testimony = ({ params }: PageType) => {
  const { id } = params;
  const router = useRouter();
  const setIsLoading = useGlobalStore(selectSetIsLoading);
  const [testimony, setTestimony] = useState<TestimonyType | undefined>(undefined);

  useEffect(() => {
    const retrieveTestimonial = async () => {
      const testimonyFromDb = await retrieveTestimony(id);
      setTestimony(testimonyFromDb);
    }

    retrieveTestimonial();
  }, []);

  return (
    <SectionContainer styleName={styles.insideContainer}>
      <Helmet>
        <title>{config.meta.title} | Resume</title>
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
            item={<Typography variant="body3">Posted: {testimony?.createdAt.substring(0, 10)}</Typography>}
            skeletonProps={baseSkeletonProps}
          />
        </Grid>
      </Grid>

      <div className={styles.blurb}>
        <img src={testimony?.image} alt={`${testimony?.firstName} ${testimony?.lastName}`} title={`${testimony?.firstName} ${testimony?.lastName}`} className={styles.blurbImage}/>

        <Typography variant="h1">
          {testimony?.firstName} {testimony?.lastName}
        </Typography>

        <Typography variant="h5">
          {testimony?.title}
        </Typography>

        <Typography variant="body2" dangerouslySetInnerHTML={{ __html: testimony?.body as string }} />
      </div>
    </SectionContainer>
  )
}

export default Testimony;
