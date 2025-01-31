import client from "@/services/api";
import useSWR from "swr";

type TagTypes = 'blog' | 'work' | 'posts';

const requestPosts = async (tag: TagTypes) => {
  try {
    const res = await client.getEntries({
      content_type: 'posts',
      'metadata.tags.sys.id[in]': [tag]
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

const useRetrievePosts = (tag: TagTypes) => {
  const {data: posts, error, isLoading } = useSWR(tag, requestPosts)

  return {
    isLoading,
    posts,
    error,
  }
}

export default useRetrievePosts;
