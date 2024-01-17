import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Container, Slide, useScrollTrigger} from "@mui/material";
import styles from "@/components/Socials/Socials.module.scss";
import navStyles from './Nav.module.scss';
import Link from "next/link";
import MOCK_NAVITEMS from "@/mocks/mockNavigation";

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
  console.log('navOnly', navOnly);
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {MOCK_NAVITEMS.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
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
          component="nav"
          color={navOnly ? 'primary' : 'transparent'}
          elevation={0}
          sx={{
            bgcolor: 'linear-gradient(45deg, rgba(7,14,23,1) 0%, rgba(39,62,93,1) 100%)'
          }}
        >
          <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
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
              <img src="/logo.png" alt="Thomas K Bird" className={styles.logo} />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {MOCK_NAVITEMS.map((item) => (
                <Link href={item.link} key={item.id} passHref>
                  <Button sx={{ color: '#fff' }}>
                    {item.label}
                  </Button>
                </Link>
              ))}
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Nav;