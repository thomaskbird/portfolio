import styles from './MobileNav.module.scss'
import navStyles from "@/components/Nav/Nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import {motion} from "framer-motion";
import MOCK_NAVITEMS from "@/mocks/mockNavigation";
import cn from "classnames";
import * as React from "react";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetTheme, selectTheme} from "@/store/selectors/globalStore";
import {Tooltip} from "@mui/material";
import Switch from "@mui/material/Switch";
import {ChangeEvent} from "react";

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

const MobileNav = () => {
  const theme = useGlobalStore(selectTheme);
  const setTheme = useGlobalStore(selectSetTheme);
  const isDark = theme === 'dark';
  const logoUrl = isDark ? '/logo.png' : '/logo-dark.png';

  return (
    <div className={cn(styles.wrapper, isDark ? styles.wrapperDark : styles.wrapperLight)}>
      <div className={styles.header}>
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
          <CloseIcon className={styles.close}/>
        </IconButton>
      </div>
      <motion.ul
        className={styles.drawerList}
        variants={containerVariants}
        initial="hidden"
        animate={true ? 'visible' : 'hidden'}
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
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <div className={navStyles.navSwitch}>
        <Tooltip title={`${theme} mode`}>
          <Switch
            checked={isDark}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => setTheme(evt.target.checked ? 'dark' : 'light')}
          />
        </Tooltip>
      </div>
    </div>
  )
}

export default MobileNav;
