import client from "@/services/api";
import useSWR from "swr";

const requestPost = async (slug: string) => {
  try {
    const res = await client.getEntries({
      content_type: 'content',
      'fields.slug': slug,
      'order': '-sys.createdAt',
    } as any);

    if(res.total) {
      return res.items[0];
    } else {
      throw new Error('No content found...')
    }
  } catch (e) {
    throw new Error(e as any);
  } finally {

  }
}

const useRetrievePost = (slug: string) => {
  const {data: post, error, isLoading } = useSWR(slug, requestPost)

  return {
    isLoading,
    post,
    error,
  }
}

export default useRetrievePost;
