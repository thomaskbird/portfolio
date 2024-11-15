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
import {selectSetIsLoading, selectTheme} from "@/store/selectors/globalStore";
import config from "@/config/sites";
import {Helmet} from "react-helmet";
import cn from "classnames";
import useRetrieveExperience from "@/hooks/useRetrieveExperience";

const Resume = () => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';
  const resumeRef = useRef<HTMLDivElement | null>(null);

  const { experiences, error, isLoading } = useRetrieveExperience()
  console.log('experiences', experiences);

  return (
    <SectionContainer styleName={cn(styles.insideContainer, isDark ? styles.insideContainerDark : styles.insideContainerLight)}>
      <Helmet>
        <title>{config.meta.title} | Resume</title>
        <meta property="description" content={config.meta.description} />
      </Helmet>

      <ResumeBlurb />

      <div className={styles.resumeWrapper} ref={resumeRef}>
        <div className={cn(styles.divider, isDark ? styles.dividerDark : styles.dividerLight)}></div>

        <div className={styles.resumeContainer}>
          {experiences?.map(((item, idx) => <ResumeItem key={item.sys.id} idx={idx} item={item}/>))}
        </div>
      </div>

    </SectionContainer>
  )
}

export default Resume;
