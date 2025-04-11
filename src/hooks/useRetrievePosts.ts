import client from "@/services/api";
import useSWR from "swr";
import { Entry, EntryFieldType, EntryFieldTypes, Asset } from "contentful";
import { ContentfulAssetType } from "@/store/types/contentful";

type TagTypes = 'blog' | 'work' | 'posts' | 'photography';

type PostSkeleton = {
  contentTypeId: "posts";
  fields: {
    title: string;
    slug: string;
    description: string;
    featuredImage: EntryFieldTypes.AssetLink;
    body: string;
    keywords: string[];
    codepen: EntryFieldTypes.RichText;
    gallery: Entry<ContentfulAssetType>[];
  };
}

const requestPosts = async (tag: TagTypes): Promise<Entry<PostSkeleton>[]> => {
  try {
    const res = await client.getEntries<PostSkeleton>({
      content_type: 'posts',
      'metadata.tags.sys.id[in]': [tag],
      order: ['-sys.createdAt'],
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
  const { data: posts, error, isLoading } = useSWR<Entry<PostSkeleton>[], Error>(tag, requestPosts);
  
  return {
    isLoading,
    posts,
    error,
  }
}

export default useRetrievePosts;
