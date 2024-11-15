import client from "@/services/api";
import useSWR from "swr";

const requestExperiences = async () => {
  try {
    const res = await client.getEntries({
      content_type: 'workExperience',
      order: 'sys.createdAt'
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

const useRetrieveExperience = () => {
  const {data: experiences, error, isLoading } = useSWR('experiences', requestExperiences)

  return {
    isLoading,
    experiences,
    error,
  }
}

export default useRetrieveExperience;
