import client from "@/services/api";
import useSWR from "swr";

const requestTestimonial = async (id: string) => {
  try {
    const res = await client.getEntry(id);

    if(res) {
      return res;
    } else {
      throw new Error('No content found...')
    }
  } catch (e) {
    throw new Error(e as any);
  }
}

const useRetrieveTestimonial = (id: string) => {
  const {data: testimony, error, isLoading } = useSWR(`${id}`, requestTestimonial)

  return {
    isLoading,
    testimony,
    error,
  }
}

export default useRetrieveTestimonial;
