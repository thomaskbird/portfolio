import client from "@/services/api";
import useSWR from "swr";

const requestPage = async (slug: string) => {
  try {
    const res = await client.getEntries({
      content_type: 'posts',
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

const useRetrievePage = (slug: string) => {
  const {data: page, error, isLoading } = useSWR(slug, requestPage)

  return {
    isLoading,
    page,
    error,
  }
}

export default useRetrievePage;
