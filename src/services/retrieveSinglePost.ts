import {getDocs, limit, orderBy, QuerySnapshot, where} from "@firebase/firestore";
import {collectionContent} from "@/services/firebase";
import PostType from "@/types/PostType";
import {query} from "@firebase/database";
import getSingleItemFromSnapshot from "@/services/getSingleItemFromSnapshot";

const retrieveSinglePost = async (slug: string): Promise<PostType> => {
  const getSinglePost = query(
    collectionContent,
    where('version_of', '==', '0'),
    where('status', '==', 'published'),
    where('deleted_at', '==', null),
    where('slug', '==', slug),
    orderBy("created_at", "desc"), limit(1)
  );
  const contentSnapshot: QuerySnapshot = await getDocs(getSinglePost as any);
  return getSingleItemFromSnapshot(contentSnapshot)!;
};

export default retrieveSinglePost;