import styles from './ListView.module.scss';
import PostType from "@/types/PostType";
import ListItem from "@/components/ListItem/ListItem";
import {ReactNode} from "react";

type ListViewType = {
  posts: PostType[],
  renderItem(item: PostType): ReactNode;
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