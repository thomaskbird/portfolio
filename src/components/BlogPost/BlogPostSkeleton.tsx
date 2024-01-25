import styles from '@/components/BlogPost/BlogPost.module.scss';
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