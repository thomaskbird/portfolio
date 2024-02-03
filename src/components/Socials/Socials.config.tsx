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
  icon: ReactNode;
  url: string;
};

const socialItems: SocialItem[] = [
  {
    id: 1,
    title: 'LinkedIn',
    icon: <LinkedInIcon />,
    url: 'https://linkedin.com/in/thomaskbird',
  },
  {
    id: 2,
    title: 'Resume',
    icon: <ContactPageIcon />,
    url: 'https://docs.google.com/document/d/1gjkhy1ogLDcKIiUpiStgMHxc052bkdsn/edit',
  },
  {
    id: 3,
    title: 'Contact me',
    icon: <MailOutlineIcon />,
    url: 'mailto:thomaskbird@icloud.com',
  },
  {
    id: 4,
    title: 'Github',
    icon: <GitHubIcon />,
    url: 'https://github.com/thomaskbird',
  },
  {
    id: 5,
    title: 'Calendly',
    icon: <EventIcon />,
    url: 'https://calendly.com/thomasbird',
  },
  {
    id: 6,
    title: 'Instagram',
    icon: <InstagramIcon />,
    url: 'https://www.instagram.com/airborneartists1/',
  },
  {
    id: 7,
    title: 'Twitter',
    icon: <XIcon />,
    url: 'https://twitter.com/thomaskbird',
  },
];

export default socialItems;