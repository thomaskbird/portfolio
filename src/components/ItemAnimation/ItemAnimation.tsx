import {ReactNode} from "react";
import { motion } from 'framer-motion';

export type ItemAnimationType = {
  children: ReactNode;
};

const ItemAnimation = ({ children }: ItemAnimationType) => (
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.9,
      y: 20,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
      y: 0
    }}
    viewport={{
      amount: 0.5,
    }}
    transition={{
      duration: 0.5
    }}
  >
    {children}
  </motion.div>
);

export default ItemAnimation;