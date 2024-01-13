import {Button, Container, Grid, IconButton, Tooltip} from "@mui/material";
import cn from "classnames";
import styles from './Hero.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from "@mui/icons-material/GitHub";
import EventIcon from '@mui/icons-material/Event';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {
  return (
    <Container maxWidth={false} disableGutters className={styles.hero}>
      <Container>
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className={styles.heroImage}>
            <img src="/thomas-bird.png" className={cn(styles.heroImageItem, 'animate__animated animate__slow animate__fadeIn ')} alt="Thomas Bird" />
          </Grid>
          <Grid item xs={12} md={6} className={styles.heroText}>
            <h1 className={cn(styles.heroTextTitle, 'animate__animated animate__fadeInDown')}>
              I'm Tom,<br/> Nice to meet you!
            </h1>
            <p className={cn(styles.heroSubText, 'animate__animated animate__fadeInDown animate__delay-0s')}>
              I am a passionate engineer and people leader who thrives in fast paced and collaborative environments!
            </p>

            <Grid className={styles.heroCtas}>
              <Button className={cn(styles.heroButtonPrimary, 'animate__animated animate__fadeInDown animate__slow')} variant="contained" disableElevation>Send a message!</Button>
              <Button className={cn(styles.heroButtonSecondary, 'animate__animated animate__fadeInDown animate__slow')} variant="text" disableElevation>Resume</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default Hero;