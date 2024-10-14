import {useEffect, useState} from "react";
import PostType from "@/types/PostType";
import {query} from "@firebase/database";
import {collectionContent} from "@/services/firebase";
import {getDocs, orderBy, QuerySnapshot, where} from "@firebase/firestore";
import {makeArrayFromSnapshot} from "@/utils/makeArrayFromSnapshot";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectSetIsLoading} from "@/store/selectors/globalStore";

type PostTypes = 'blog' | 'work';

const useRetrievePosts = (type: PostTypes) => {
  const setIsLoading = useGlobalStore(selectSetIsLoading);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [error, setError] = useState<any>(undefined);

  useEffect(() => {
    const requestPosts = async () => {
      try {
        setIsLoading(true);

        const queryWork = (query as any)(
          collectionContent,
          where('version_of', '==', '0'),
          where('status', '==', 'published'),
          where('deleted_at', '==', null),
          where('tags', 'array-contains', type),
          orderBy("created_at", "desc")
        );
        const contentSnapshot: QuerySnapshot = await getDocs(queryWork as any);
        const postsRecordsFromDb = makeArrayFromSnapshot<PostType>(contentSnapshot as any);

        setPosts(postsRecordsFromDb);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }

    requestPosts();
  }, [type]);

  return {
    posts,
    error,
  }
}

export default useRetrievePosts;
