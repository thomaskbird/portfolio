import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
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
import {selectIsLoading, selectSetIsLoading, selectSetTheme, selectTheme} from "@/store/selectors/globalStore";

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
  children: React.ReactElement;
}

const drawerWidth = 240;

const Nav = ({ window, navOnly = false }: Props) => {
  const theme = useGlobalStore(selectTheme);
  const setTheme = useGlobalStore(selectSetTheme);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const logoUrl = theme === 'dark' ? '/logo.png' : '/logo-dark.png';

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
          <img src={logoUrl} alt="Thomas K Bird" className={navStyles.logo} />
        </Link>
        <IconButton>
          <CloseIcon className={navStyles.close} />
        </IconButton>
      </div>
      <Divider />
      <List className={navStyles.drawerList}>
        {MOCK_NAVITEMS.map((item) => (
          <Link href={item.link} key={item.id} className={navStyles.navLink}>
            {item.label}
          </Link>
        ))}
      </List>
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
                  <img src={logoUrl} alt="Thomas K Bird" className={navStyles.logo} />
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

                {/* todo: need to handle a whole of styling issues */}
                <Tooltip title={`${theme} mode`}>
                  <Switch checked={theme === 'dark'} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setTheme(evt.target.checked ? 'dark' : 'light')} />
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
