import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';
import Switch from "@mui/material/Switch";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Container, Slide, Tooltip, useScrollTrigger} from "@mui/material";
import navStyles from './Nav.module.scss';
import Link from "next/link";
import MOCK_NAVITEMS from "@/mocks/mockNavigation";
import {usePathname} from "next/navigation";
import CloseIcon from '@mui/icons-material/Close';
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetTheme, selectTheme} from "@/store/selectors/globalStore";
import cn from "classnames";
import {ChangeEvent, ReactElement, useState} from "react";
import Image from 'next/image';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  navOnly?: boolean;
}

interface HideOnScrollProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: ReactElement;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Nav = ({ window, navOnly = false }: Props) => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';
  const setTheme = useGlobalStore(selectSetTheme);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const logoUrl = isDark ? '/logo.png' : '/logo-dark.png';

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const HideOnScroll = ({ children, window }: HideOnScrollProps) => {
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <div className={navStyles.drawerHeaderItems}>
        <Link href="/">
          <Image
            width={715}
            height={83}
            src={logoUrl}
            alt="Thomas K Bird"
            className={navStyles.logo}
          />
        </Link>
        <IconButton>
          <CloseIcon className={navStyles.close} />
        </IconButton>
      </div>
      <Divider />
      <motion.ul
        className={navStyles.drawerList}
        variants={containerVariants}
        initial="hidden"
        animate={mobileOpen ? 'visible' : 'hidden'}
        style={{listStyle: 'none', padding: 0}}
      >
          {MOCK_NAVITEMS.map((item) => (
            <motion.li key={item.id} variants={itemVariants}>
              <Link
                href={item.link}
                className={cn(
                  navStyles.navLink,
                  isDark ? navStyles.navLinkDark : navStyles.navLinkLight
                )}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
      </motion.ul>

      <Divider/>

      <div className={navStyles.navSwitch}>
        <Tooltip title={`${theme} mode`}>
          <Switch
            checked={isDark}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => setTheme(evt.target.checked ? 'dark' : 'light')}
          />
        </Tooltip>
      </div>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className={navStyles.navWrapper}>
      <CssBaseline />
      <HideOnScroll window={window}>
        <AppBar
          elevation={0}
          component="nav"
          color={navOnly ? 'primary' : 'transparent'}
        >
          <Container>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                <Link href="/">
                  <Image
                    width={715}
                    height={83}
                    src={logoUrl}
                    alt="Thomas K Bird"
                    className={navStyles.logo}
                  />
                </Link>
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {MOCK_NAVITEMS.map((item) => (
                  <Link href={item.link} key={item.id}>
                    <Button color="nav" component={isHome ? 'span' : 'button'} disableRipple>
                      {item.label}
                    </Button>
                  </Link>
                ))}

                <Tooltip title={`${theme} mode`}>
                  <Switch checked={isDark} onChange={(evt: ChangeEvent<HTMLInputElement>) => setTheme(evt.target.checked ? 'dark' : 'light')} />
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            // display: { xs: 'block', sm: 'none' },
            // '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Nav;
