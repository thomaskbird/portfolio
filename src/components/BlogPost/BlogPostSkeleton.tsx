import Typography from "@mui/material/Typography";
import styles from './BlogPost.module.scss';
import PostType from "@/types/PostType";
import Link from "next/link";
import Button from "@mui/material/Button";
import {ReactNode} from "react";

type BlogPostSkeletonType = {
  children: ReactNode
};

const BlogPostSkeleton = ({
  children,
}: BlogPostSkeletonType) => {
  return (
    <div className={styles.listItemWrapperBorder}>
      <div className={styles.listItemWrapper}>
        {children}
      </div>
    </div>
  )
}

export default BlogPostSkeleton;