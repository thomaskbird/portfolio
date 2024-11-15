import client from "@/services/api";
import useSWR from "swr";

type PostTypes = 'blog' | 'work';

const requestPosts = async (type: string) => {
  try {
    const res = await client.getEntries({
      'metadata.tags.sys.id[in]': [type]
    });

    if(res.total) {
      return res.items;
    } else {
      throw new Error('No content found...')
    }
  } catch (e) {
    throw new Error(e as any);
  }
}

const useRetrievePosts = (type: PostTypes) => {
  const {data: posts, error, isLoading } = useSWR(type, requestPosts)

  return {
    isLoading,
    posts,
    error,
  }
}

export default useRetrievePosts;
