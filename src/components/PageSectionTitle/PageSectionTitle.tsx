import styles from './PageSectionTitle.module.scss';
import {Grid} from "@mui/material";

type PageSectionTitleProps = {
  title: string;
}

const PageSectionTitle = ({ title }: PageSectionTitleProps) => (
  <Grid className={styles.pageTitle}>
    <h2 className={styles.title}>
      {title}
    </h2>
    <div className={styles.titleBorder}></div>
  </Grid>
)

export default PageSectionTitle;