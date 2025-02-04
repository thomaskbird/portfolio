import styles from './Post.module.scss';
import {ReactNode} from "react";

type BlogPostSkeletonType = {
  children: ReactNode
};

const PostSkeleton = ({
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

export default PostSkeleton;
