import styles from './Socials.module.scss';
import {Grid, IconButton, Tooltip} from "@mui/material";
import socialItems from "@/components/Socials/Socials.config";
import Link from "next/link";

const Socials = () => {
  return (
    <Grid container className={styles.socialWrap}>
      <div className={styles.socials}>
        {socialItems.map(social => (
          <Tooltip key={social.id} title={social.title}>
            <Link href={social.url} target="_blank">
              <IconButton className={styles.icons}>
                {social.icon}
              </IconButton>
            </Link>
          </Tooltip>
        ))}
      </div>
    </Grid>
  )
}

export default Socials;
