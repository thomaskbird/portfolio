import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Container, Slide, useScrollTrigger} from "@mui/material";
import navStyles from './Nav.module.scss';
import Link from "next/link";
import MOCK_NAVITEMS from "@/mocks/mockNavigation";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetIsMobileOpen, selectSetTheme, selectTheme} from "@/store/selectors/globalStore";
import {ReactElement} from "react";
import Image from 'next/image';
import {LightMode as LightModeIcon, Nightlight as NightLightIcon} from "@mui/icons-material";
import cn from "classnames";

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

const Nav = ({ window, navOnly = false }: Props) => {
  const theme = useGlobalStore(selectTheme);
  const setIsMobileOpen = useGlobalStore(selectSetIsMobileOpen);
  const isDark = theme === 'dark';
  const setTheme = useGlobalStore(selectSetTheme);
  const logoUrl = isDark ? '/logo.png' : '/logo-dark.png';

  const handleToggle = () => setIsMobileOpen()

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
                onClick={handleToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
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
              <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                {MOCK_NAVITEMS.map((item) => (
                  <Link href={item.link} key={item.id}>
                    <Button color="nav" component="span" className={navStyles.links} disableRipple>
                      {item.label}
                    </Button>
                  </Link>
                ))}

                <span className={cn(navStyles.navSwitch, isDark ? navStyles.navSwitchDark : navStyles.navSwitchLight)} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                  {isDark ? <LightModeIcon /> : <NightLightIcon />}
                </span>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}

export default Nav;
