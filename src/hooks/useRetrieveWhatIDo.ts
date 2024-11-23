import client from "@/services/api";
import useSWR from "swr";

const requestWhatIDo = async () => {
  try {
    const res = await client.getEntries({
      content_type: 'whatIDo',
    });

    if(res.total) {
      return res.items.map(item => ({
        id: item.sys.id,
        title: item.fields.title,
        content: item.fields.content
      }))
    } else {
      throw new Error('No what i do\'s found...')
    }
  } catch (e) {
    throw new Error(e as any);
  } finally {

  }
}

const useRetrieveWhatIDo = () => {
  const {data: items, error, isLoading } = useSWR('whatido', requestWhatIDo)

  return {
    isLoading,
    items,
    error,
  }
}

export default useRetrieveWhatIDo;
