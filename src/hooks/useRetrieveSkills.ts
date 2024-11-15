import client from "@/services/api";
import useSWR from "swr";

const requestSkills = async () => {
  try {
    const res = await client.getEntries({
      content_type: 'skill'
    });

    if(res.total) {
      return res.items;
    } else {
      throw new Error('No content found...')
    }
  } catch (e) {
    throw new Error(e as any);
  }
}

const useRetrieveSkills = () => {
  const {data: skills, error, isLoading } = useSWR('skills', requestSkills)

  return {
    isLoading,
    skills,
    error,
  }
}

export default useRetrieveSkills;
