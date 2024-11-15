import client from "@/services/api";
import useSWR from "swr";

const requestHeros = async () => {
  try {
    const res = await client.getEntries({
      content_type: 'homepageHero',
      order: 'fields.priority'
    } as any);

    if(res.total) {
      return res.items;
    } else {
      throw new Error('No content found...')
    }
  } catch (e) {
    throw new Error(e as any);
  }
}

const useRetrieveHeros = () => {
  const {data: heros, error, isLoading } = useSWR('heros', requestHeros)

  return {
    isLoading,
    heros,
    error,
  }
}

export default useRetrieveHeros;
