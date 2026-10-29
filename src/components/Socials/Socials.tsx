import styles from './Socials.module.scss';
import {Grid, IconButton, Tooltip} from "@mui/material";
import socialItems from "@/components/Socials/Socials.config";
import Link from "next/link";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";
import cn from "classnames";

const Socials = () => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';

  return (
    <Grid container className={styles.socialWrap}>
      <div className={styles.socials} data-track-location="socials">
        {socialItems.map(social => (
          <Tooltip key={social.id} title={social.title}>
            <Link href={social.url} target="_blank" aria-label={social.title}>
              <IconButton className={cn(styles.icons, isDark ? styles.iconsDark : styles.iconsLight)}>
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
