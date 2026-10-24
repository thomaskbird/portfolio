import client from "@/services/api";
import useSWR from "swr";
import {Entry} from "contentful";
import PostType from "@/types/PostType";

// Section-level tags that every post carries; they say nothing about topic.
const GENERIC_TAG_IDS = ['blog', 'work', 'photography', 'page'];

const RELATED_POSTS_LIMIT = 6;

const requestPosts = async (tagIds: string[]): Promise<Entry<PostType>[]> => {
  try {
    const res = await client.getEntries<PostType>({
      content_type: 'posts',
      ...(tagIds.length > 0 ? {'metadata.tags.sys.id[in]': tagIds} : {}),
      order: ['-fields.publishedAt', '-sys.createdAt'],
      limit: RELATED_POSTS_LIMIT,
      select: ['sys.id', 'fields.title', 'fields.slug'],
    });

    return res.items;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unknown error occurred while fetching related posts');
  }
}

/**
 * The topic tag ids for a page, excluding the generic section tags, sorted
 * so the same set of tags always produces the same SWR key.
 */
export const getTopicTagIds = (page: any): string[] => {
  const tags: { sys: { id: string } }[] = page?.metadata?.tags ?? [];

  return tags
    .map(tag => tag.sys.id)
    .filter(id => !GENERIC_TAG_IDS.includes(id))
    .sort();
}

/**
 * Posts sharing at least one of the supplied topic tags. Fetches nothing
 * when there are no usable tags.
 */
const useRelatedPosts = (tagIds: string[]) => {
  const sortedIds = [...tagIds].sort();
  const key = sortedIds.length > 0 ? `related-posts/${sortedIds.join(',')}` : null;

  const { data: posts, error, isLoading } = useSWR<Entry<PostType>[], Error>(
    key,
    () => requestPosts(sortedIds),
  );

  return {
    isLoading,
    posts,
    error,
  }
}

/**
 * Latest posts with no tag filter; used as a fallback so the sidebar never
 * renders empty. Fetches only while `enabled` is true.
 */
export const useLatestPosts = (enabled: boolean) => {
  const { data: posts, error, isLoading } = useSWR<Entry<PostType>[], Error>(
    enabled ? 'related-posts/latest' : null,
    () => requestPosts([]),
  );

  return {
    isLoading,
    posts,
    error,
  }
}

export default useRelatedPosts;
