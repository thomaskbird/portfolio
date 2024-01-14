import styles from "./Screen.module.scss";
import {Grid} from "@mui/material";
import cn from "classnames";
import { motion } from 'framer-motion';

type ScreenType = {
  image: string;
  alignment: 'left' | 'right';
  scrollValueCalculated: number;
  opacity: number;
}

const Screen = ({ image, alignment, scrollValueCalculated, opacity }: ScreenType) => {
  const isLeft = alignment === 'left';
  const transformClasses = cn(styles.innerMacbookWrap, isLeft ? styles.innerMacbookWrapLeft : styles.innerMacbookWrapRight);

  return (
    <Grid item xs={12} md={6} className={cn(styles.projectMacbook, 'projectMacbookInitial', 'projectMacbookAnimation')}>
      <motion.div
        style={{
          transform: `translate(${!isLeft ? '' : '-'}${scrollValueCalculated}px, 0)`,
          opacity: opacity
        }}
      >
        <div className={transformClasses}>
          <img src="/macbook-pro.png" className={styles.macbookImage} />
          <div className={styles.screen}>
            <img src={image} className={styles.screenView} />
          </div>
        </div>
      </motion.div>
    </Grid>
  )
}

export default Screen;