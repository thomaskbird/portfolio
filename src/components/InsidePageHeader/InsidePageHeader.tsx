import styles from "@/components/InsidePageHeader/InsidePageHeader.module.scss";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SkeletonSwitcher from "@/components/SkeletonSwitcher/SkeletonSwitcher";
import Typography from "@mui/material/Typography";
import baseSkeletonProps from "@/components/SkeletonSwitcher/SkeletonSwitcher.config";
import {useRouter} from "next/navigation";

export type InsidePageHeaderProps = {
  createdAt: string;
}

const InsidePageHeader = ({ createdAt }: InsidePageHeaderProps) => {
  const router = useRouter();
  return (
    <Grid container className={styles.pageHeader}>
      <Grid item xs={12} sm={6}>
        <Button
          variant="link"
          startIcon={<ChevronLeftIcon/>}
          onClick={() => router.back()}
        >
          Back
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} className={styles.pageHeaderLeft}>
        {createdAt && (
          <SkeletonSwitcher
            item={<Typography variant="body3">Posted: {createdAt.substring(0, 10)}</Typography>}
            skeletonProps={baseSkeletonProps}
          />
        )}
      </Grid>
    </Grid>
  )
};

export default InsidePageHeader;
