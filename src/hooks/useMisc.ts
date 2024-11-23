import client from "@/services/api";
import useSWR from "swr";

const requestMisc = async () => {
  try {
    const res = await client.getEntries({
      content_type: 'misc',
    } as any);

    if(res.total) {
      return res.items;
    } else {
      throw new Error('No misc items found...')
    }
  } catch (e) {
    throw new Error(e as any);
  }
}

const useMisc = () => {
  const {data: misc, error, isLoading } = useSWR('misc', requestMisc)

  const findField = (key: string) => {
    const item = misc?.find(item => item.fields.slug === key ? item.fields.value : undefined);
    return item ? item?.fields.value : undefined;
  }

  return {
    isLoading,
    findField,
    misc,
    error,
  }
}

export default useMisc;
