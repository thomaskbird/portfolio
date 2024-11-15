import client from "@/services/api";
import useSWR from "swr";

const requestTestimonials = async () => {
  try {
    const res = await client.getEntries({
      content_type: 'testimonial'
    });

    if(res.total) {
      return res.items;
    } else {
      throw new Error('No content found...')
    }
  } catch (e) {
    throw new Error(e);
  }
}

const useRetrieveTestimonials = () => {
  const {data: testimonials, error, isLoading } = useSWR('testimonials', requestTestimonials)

  return {
    isLoading,
    testimonials,
    error,
  }
}

export default useRetrieveTestimonials;
