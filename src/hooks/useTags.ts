import client from "@/services/api";
import useSWR from "swr";

type PostTypes = 'blog' | 'work' | 'posts';

const requestTags = async () => {
  try {
    const res = await client.getTags();
    if(res.total) {
      return res.items;
    } else {
      throw new Error('No tags found...')
    }
  } catch (e) {
    throw new Error(e as any);
  }
}

const useTags = () => {
  const {data: tags, error, isLoading } = useSWR(
    'tags',
    requestTags
  )

  return {
    isLoading,
    tags,
    error,
  }
}

export default useTags;
