import styles from './ScrollSnapper.module.scss'
import {ReactNode} from "react";

type ScrollSnapperTypes = {
  children: ReactNode | ReactNode[];
}

const ScrollSnapper = ({ children }: ScrollSnapperTypes) => {
  return (
    <div className={styles.scrollSnapperWrapper}>
      {children}
    </div>
  )
}

export default ScrollSnapper
