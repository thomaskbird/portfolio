'use client';

import styles from './page.module.scss'
import ResumeItem from "@/components/ResumeItem/ResumeItem";
import {useEffect, useRef, useState} from "react";
import {getDocs, QuerySnapshot} from "@firebase/firestore";
import {queryAllJobsOrdered} from "@/services/firebase";
import {makeArrayFromSnapshot} from "@/utils/makeArrayFromSnapshot";
import {ResumeType} from "@/types/ResumeType";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import ResumeBlurb from "@/components/ResumeBlurb/ResumeBlurb";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetIsLoading} from "@/store/selectors/globalStore";
import config from "@/config/sites";
import {Helmet} from "react-helmet";

const Resume = () => {
  const setIsLoading = useGlobalStore(selectSetIsLoading);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const [jobs, setJobs] = useState<ResumeType[]>([]);

  const retrieveAllJobs = async () => {
    const jobsSnapshot: QuerySnapshot = await getDocs(queryAllJobsOrdered as any);
    setIsLoading(false);
    const jobRecordsFromDb = makeArrayFromSnapshot<ResumeType>(jobsSnapshot as any);
    setJobs(jobRecordsFromDb);
  };

  useEffect(() => {
    retrieveAllJobs();
  }, []);

  return (
    <SectionContainer styleName={styles.insideContainer}>
      <Helmet>
        <title>{config.meta.title} | Resume</title>
        <meta property="description" content={config.meta.description} />
      </Helmet>

      <ResumeBlurb />

      <div className={styles.resumeWrapper} ref={resumeRef}>
        <div className={styles.divider}></div>

        <div className={styles.resumeContainer}>
          {jobs.map(((item, idx) => <ResumeItem key={item.id} idx={idx} item={item}/>))}
        </div>
      </div>

    </SectionContainer>
  )
}

export default Resume;
