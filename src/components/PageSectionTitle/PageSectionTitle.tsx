import styles from './PageSectionTitle.module.scss';
import { motion } from 'framer-motion';

type PageSectionTitleProps = {
  title: string;
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: i * 0.2
    }
  }),
};

// todo: add motion to here
const PageSectionTitle = ({ title }: PageSectionTitleProps) => (
  <motion.div
    className={styles.pageTitle}
    initial="hidden"
    whileInView="visible"
    viewport={{
      amount: 0.5
    }}
  >
    <motion.h2 custom={2} variants={item} className={styles.title}>
      {title}
    </motion.h2>
    <motion.div custom={3} variants={item} className={styles.titleBorder}></motion.div>
  </motion.div>
)

export default PageSectionTitle;