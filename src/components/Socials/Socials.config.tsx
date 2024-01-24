import {ReactNode} from "react";
import styles from './Socials.module.scss';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import EventIcon from "@mui/icons-material/Event";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

export type SocialItem = {
  id: number;
  title: string;
  icon: ReactNode,
};

const socialItems: SocialItem[] = [
  {
    id: 1,
    title: 'LinkedIn',
    icon: <LinkedInIcon />
  },
  {
    id: 2,
    title: 'Resume',
    icon: <ContactPageIcon />
  },
  {
    id: 3,
    title: 'Contact me',
    icon: <MailOutlineIcon />
  },
  {
    id: 4,
    title: 'Github',
    icon: <GitHubIcon />
  },
  {
    id: 5,
    title: 'Calendly',
    icon: <EventIcon />
  },
  {
    id: 6,
    title: 'Instagram',
    icon: <InstagramIcon />
  },
  {
    id: 7,
    title: 'Twitter',
    icon: <XIcon />
  },
];

export default socialItems;