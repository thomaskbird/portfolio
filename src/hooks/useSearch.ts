import client from "@/services/api";
import useSWR from "swr";

type PostTypes = 'blog' | 'work' | 'posts';

const requestSearch = async (type: PostTypes, query: string) => {
  try {
    const res = await client.getEntries({
      query: query
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

const useSearch = (type: PostTypes, query: string) => {
  const {data: posts, error, isLoading } = useSWR(
    query !== '' ? `${type}/${query}` : null,
    (type: PostTypes) => requestSearch(type, query)
  )

  return {
    isLoading,
    posts,
    error,
  }
}

export default useSearch;
