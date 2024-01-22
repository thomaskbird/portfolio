import styles from './ListView.module.scss';
import {ReactNode} from "react";

type ListViewType = {
  posts: any[],
  renderItem(item: any): ReactNode;
};

const ListView = ({
  posts,
  renderItem
}: ListViewType) => {
  return (
    <div className={styles.listViewWrapper}>
      <div className={styles.postsContainer}>
        {posts.map(post => renderItem(post))}
      </div>
    </div>
  )
}

export default ListView;