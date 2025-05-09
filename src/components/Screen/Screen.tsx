import styles from "./Screen.module.scss";
import {Grid} from "@mui/material";
import cn from "classnames";
import { motion } from 'framer-motion';
import {useEffect, useRef, useState} from "react";
import Image from 'next/image';

type ScreenType = {
  image: string;
  title: string;
  isLeft: boolean;
  scrollValueCalculated: number;
  screenPosition: number;
  opacity: number;
}

const Screen = ({ image, title, isLeft, scrollValueCalculated, opacity, screenPosition }: ScreenType) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const screenContainerRef = useRef<HTMLDivElement | null>(null);

  const [imgHeight, setImgHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [distanceToScroll, setDistanceToScroll] = useState(0);

  const transformClasses = cn(styles.innerMacbookWrap, isLeft ? styles.innerMacbookWrapLeft : styles.innerMacbookWrapRight);

  useEffect(() => {
    if(imgRef.current) {
      setImgHeight(imgRef.current?.height - 500 - 2);
    }
  }, [imgRef.current?.height, screenContainerRef]);

  const resizedHandler = () => {
    if(window.innerWidth <= 600 && imgRef.current && screenContainerRef.current) {
      setDistanceToScroll(imgRef.current?.height - screenContainerRef.current?.clientHeight);
    }

    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    if(window) {
      window.addEventListener('resize', resizedHandler);
      return () => window.removeEventListener('resize', resizedHandler)
    }
  }, []);

  useEffect(() => {
    resizedHandler();
  }, []);

  return (
    <Grid item xs={12} md={6} className={cn(styles.projectMacbook, 'projectMacbookInitial', 'projectMacbookAnimation')}>
      <motion.div
        style={{
          width: '100%',
          transform: `translate(${!isLeft ? '' : '-'}${scrollValueCalculated}px, 0)`,
          opacity: opacity
        }}
      >
        <div className={transformClasses}>
          <Image
            width={1500}
            height={871}
            src="/macbook-pro.png"
            className={styles.macbookImage}
            alt="MacBook Pro"
            title={title}
          />
          <div className={styles.screen} ref={screenContainerRef}>
            <motion.img
              alt={title}
              title={title}
              ref={imgRef}
              src={image}
              className={styles.screenView}
              style={{
                transform: `translateY(-${isMobile ? (distanceToScroll * screenPosition) : (imgHeight * screenPosition)}px)`
              }}
            />
          </div>
        </div>
      </motion.div>
    </Grid>
  );
}

export default Screen;
