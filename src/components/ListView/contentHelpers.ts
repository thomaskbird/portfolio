import {getDocs, QuerySnapshot} from "@firebase/firestore";
import {queryAllContentOrdered} from "@/services/firebase";
import {makeArrayFromSnapshot} from "@/utils/makeArrayFromSnapshot";
import PostType from "@/types/PostType";

const retrieveAllPosts = async (): Promise<PostType[]> => {
  const contentSnapshot: QuerySnapshot = await getDocs(queryAllContentOrdered);
  const postsRecordsFromDb = makeArrayFromSnapshot<PostType>(contentSnapshot);

  return postsRecordsFromDb;
};

export default retrieveAllPosts;