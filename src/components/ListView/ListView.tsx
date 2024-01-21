import Typography from "@mui/material/Typography";
import styles from './ListView.module.scss';
import {getDocs, QuerySnapshot} from "@firebase/firestore";
import {queryAllContentOrdered, queryAllJobsOrdered} from "@/services/firebase";
import {makeArrayFromSnapshot} from "@/utils/makeArrayFromSnapshot";
import {ResumeType} from "@/types/ResumeType";
import {useEffect, useState} from "react";
import PostType from "@/types/PostType";
import ListItem from "@/components/ListItem/ListItem";
import {usePathname} from "next/navigation";
import retrieveAllPosts from "@/components/ListView/contentHelpers";

type ListViewType = {};

const ListView = ({}: ListViewType) => {
  const pathname = usePathname();

  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async() => {
      const postsFromDb = await retrieveAllPosts();
      setPosts(postsFromDb);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className={styles.listViewWrapper}>
      <div className={styles.postsContainer}>
        {posts.map(post => <ListItem key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default ListView;