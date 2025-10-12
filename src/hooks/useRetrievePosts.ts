import client from "@/services/api";
import useSWR from "swr";
import {
  Entry,
  EntrySkeletonType,
  EntryFieldTypes,
  AssetLink
} from "contentful";
import PostType from "@/types/PostType";

type TagTypes = 'blog' | 'work' | 'posts' | 'photography';

const requestPosts = async (tag: TagTypes): Promise<Entry<PostType>[]> => {
  try {
    const res = await client.getEntries<PostType>({
      content_type: 'posts',
      'metadata.tags.sys.id[in]': [tag],
      order: ['-fields.publishedAt', '-sys.createdAt'],
    });

    if(res.total) {
      return res.items;
    } else {
      throw new Error('No content found...')
    }
  } catch (error) {
    // Preserve the error stack trace and type information
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unknown error occurred while fetching posts');
  }
}

const useRetrievePosts = (tag: TagTypes) => {
  const { data: posts, error, isLoading } = useSWR<Entry<PostType>[], Error>(tag, requestPosts);

  return {
    isLoading,
    posts,
    error,
  }
}

export default useRetrievePosts;
