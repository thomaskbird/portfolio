import styles from './Socials.module.scss';
import {Grid, IconButton, Tooltip} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import EventIcon from "@mui/icons-material/Event";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Socials = () => {
  return (
    <Grid container>
      <div className={styles.socials}>
        <Tooltip title="LinkedIn">
          <IconButton className={styles.icons}>
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Resume">
          <IconButton className={styles.icons}>
            <ContactPageIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Contact me">
          <IconButton className={styles.icons}>
            <MailOutlineIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Github">
          <IconButton className={styles.icons}>
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Calendly">
          <IconButton className={styles.icons}>
            <EventIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Instagram">
          <IconButton className={styles.icons}>
            <InstagramIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Twitter/X">
          <IconButton className={styles.icons}>
            <XIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Grid>
  )
}

export default Socials;