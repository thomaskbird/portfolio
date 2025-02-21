import styles from './Divider.module.scss';
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";
import cn from "classnames";

const Divider = () => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';

  return (
    <div className={cn(styles.footerTitleDivider, isDark ? styles.footerTitleDividerDark : styles.footerTitleDividerLight)} />
  )
}

export default Divider;
