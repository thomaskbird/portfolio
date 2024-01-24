import styles from './Socials.module.scss';
import {Grid, IconButton, Tooltip} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import EventIcon from "@mui/icons-material/Event";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import socialItems from "@/components/Socials/Socials.config";

const Socials = () => {
  return (
    <Grid container className={styles.socialWrap}>
      <img src="/logo.png" alt="Thomas K Bird" className={styles.logo}/>
      <div className={styles.socials}>
        {socialItems.map(social => (
          <Tooltip title={social.title}>
            <IconButton className={styles.icons}>
              {social.icon}
            </IconButton>
          </Tooltip>
        ))}
      </div>
    </Grid>
  )
}

export default Socials;