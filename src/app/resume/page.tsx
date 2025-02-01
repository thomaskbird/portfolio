'use client';

import styles from './page.module.scss'
import ResumeItem from "@/components/ResumeItem/ResumeItem";
import {useRef} from "react";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import ResumeBlurb from "@/components/ResumeBlurb/ResumeBlurb";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";
import config from "@/config/sites";
import cn from "classnames";
import useRetrieveExperience from "@/hooks/useRetrieveExperience";
import HelmetComponent from "@/components/HelmetComponent/HelmetComponent";

const Resume = () => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';
  const resumeRef = useRef<HTMLDivElement | null>(null);

  const { experiences, error, isLoading } = useRetrieveExperience()

  return (
    <SectionContainer styleName={cn(styles.insideContainer, isDark ? styles.insideContainerDark : styles.insideContainerLight)}>
      <HelmetComponent>
        <title>{config.meta.title} | Resume</title>
        <meta property="description" content={config.meta.description} />
      </HelmetComponent>

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
