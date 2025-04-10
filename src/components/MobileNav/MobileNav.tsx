import styles from './MobileNav.module.scss'
import navStyles from "@/components/Nav/Nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {motion} from "framer-motion";
import MOCK_NAVITEMS from "@/mocks/mockNavigation";
import cn from "classnames";
import * as React from "react";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectIsMobileOpen, selectSetIsMobileOpen, selectSetTheme, selectTheme} from "@/store/selectors/globalStore";
import {LightMode as LightModeIcon, Nightlight as NightLightIcon} from "@mui/icons-material";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
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

const MobileNav = () => {
  const theme = useGlobalStore(selectTheme);
  const setTheme = useGlobalStore(selectSetTheme);
  const isMobileOpen = useGlobalStore(selectIsMobileOpen);
  const setIsMobileOpen = useGlobalStore(selectSetIsMobileOpen);
  const isDark = theme === 'dark';
  const logoUrl = isDark ? '/logo.png' : '/logo-dark.png';

  return (
    <div className={cn(styles.wrapper, isDark ? styles.wrapperDark : styles.wrapperLight)}>
      <div className={styles.header}>
        <Link href="/" onClick={() => setIsMobileOpen()}>
          <Image
            width={715}
            height={83}
            src={logoUrl}
            alt="Thomas K Bird"
            className={navStyles.logo}
          />
        </Link>
        <IconButton onClick={() => setIsMobileOpen()}>
          <CloseIcon className={styles.close}/>
        </IconButton>
      </div>
      <motion.ul
        className={styles.drawerList}
        variants={containerVariants}
        initial="hidden"
        animate={isMobileOpen ? 'visible' : 'hidden'}
        style={{listStyle: 'none', padding: 0}}
      >
        {MOCK_NAVITEMS.map((item) => (
          <motion.li key={item.id} variants={itemVariants}>
            <Link
              href={item.link}
              className={cn(
                styles.navLink,
                isDark ? styles.navLinkDark : styles.navLinkLight
              )}
              onClick={() => setIsMobileOpen()}
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <div className={navStyles.navSwitchMobile}>
        <span className={cn(navStyles.navSwitch, isDark ? navStyles.navSwitchDark : navStyles.navSwitchLight)} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {isDark ? <LightModeIcon /> : <NightLightIcon />}
        </span>
      </div>
    </div>
  )
}

export default MobileNav;
