import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
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
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectIsMobileOpen, selectSetIsMobileOpen, selectSetTheme, selectTheme} from "@/store/selectors/globalStore";
import {ChangeEvent, ReactElement} from "react";
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

const Nav = ({ window, navOnly = false }: Props) => {
  const theme = useGlobalStore(selectTheme);
  const isMobileOpen = useGlobalStore(selectIsMobileOpen);
  const setIsMobileOpen = useGlobalStore(selectSetIsMobileOpen);
  const isDark = theme === 'dark';
  const setTheme = useGlobalStore(selectSetTheme);
  const pathname = usePathname();
  const isHome = pathname === '/';
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
    </Box>
  );
}

export default Nav;
