import {getDocs, QuerySnapshot} from "@firebase/firestore";
import {queryAllContentOrdered, queryLatestContentOrdered} from "@/services/firebase";
import {makeArrayFromSnapshot} from "@/utils/makeArrayFromSnapshot";
import PostType from "@/types/PostType";

const retrieveLatestPosts = async (): Promise<PostType[]> => {
  const contentSnapshot: QuerySnapshot = await getDocs(queryLatestContentOrdered as any);
  const postsRecordsFromDb = makeArrayFromSnapshot<PostType>(contentSnapshot as any);

  return postsRecordsFromDb;
};

export default retrieveLatestPosts;