import {getDocs, orderBy, QuerySnapshot, where} from "@firebase/firestore";
import {collectionContent, queryAllContentOrdered} from "@/services/firebase";
import {makeArrayFromSnapshot} from "@/utils/makeArrayFromSnapshot";
import PostType from "@/types/PostType";
import {query} from "@firebase/database";

const retrieveAllWork = async (): Promise<PostType[]> => {
  const queryWork = (query as any)(
    collectionContent,
    where('version_of', '==', '0'),
    where('status', '==', 'published'),
    where('deleted_at', '==', null),
    where('tags', 'array-contains', 'work'),
    orderBy("created_at", "desc")
  );
  const contentSnapshot: QuerySnapshot = await getDocs(queryWork as any);
  const postsRecordsFromDb = makeArrayFromSnapshot<PostType>(contentSnapshot as any);

  return postsRecordsFromDb;
};

export default retrieveAllWork;