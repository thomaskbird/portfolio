import client from "@/services/api";
import useSWR from "swr";

const requestPhotos = async (tag: string) => {
  try {
    const res = await client.getAssets({
      'metadata.tags.sys.id[in]': [tag],
      order: '-sys.createdAt',
    } as any);

    if(res.total) {
      return res.items;
    } else {
      throw new Error('No photos found...')
    }
  } catch (e) {
    throw new Error(e as any);
  }
}

const useRetrievePhotos = () => {
  const {data: photos, error, isLoading } = useSWR('photoScroller', requestPhotos)

  return {
    isLoading,
    photos,
    error,
  }
}

export default useRetrievePhotos;
