import styles from "./Screen.module.scss";
import {Grid} from "@mui/material";
import cn from "classnames";

type ScreenType = {
  image: string;
  alignment: 'left' | 'right';
}

const Screen = ({ image, alignment }: ScreenType) => {
  const transformClasses = cn(styles.innerMacbookWrap, alignment === 'left' ? styles.innerMacbookWrapLeft : styles.innerMacbookWrapRight);
  const screenClasses = cn(styles.projectMacbook, 'animate__animated', alignment === 'left' ? 'animate__fadeInLeft' : 'animate__fadeInRight')

  return (
    <Grid item xs={12} md={6} className={screenClasses}>
      <div className={transformClasses}>
        <img src="/macbook-pro.png" className={styles.macbookImage} />
        <div className={styles.screen}>
          <img src={image} className={styles.screenView} />
        </div>
      </div>
    </Grid>
  )
}

export default Screen;