import styles from './Sidebar.module.scss';
import Link from "next/link";
import {ReactNode} from "react";
import useRelatedPosts, {getTopicTagIds, useLatestPosts} from "@/hooks/useRelatedPosts";
import useTags from "@/hooks/useTags";
import {Chip} from "@mui/material";
import {redirect} from "next/navigation";
import Divider from "@/components/Divider/Divider";

type SidebarType = {
  page: any;
}

const RELATED_POSTS_MAX = 5;

const Sidebar = ({ page }: SidebarType) => {
  const topicTagIds = getTopicTagIds(page);

  const {
    isLoading: isLoadingRelated,
    posts: relatedPosts,
  } = useRelatedPosts(topicTagIds);

  const relatedItems = relatedPosts?.filter(p => p.sys.id !== page?.sys.id) ?? [];

  // Fall back to the latest posts once the page is known and either it has no
  // topic tags or the tag query returned nothing beyond the current post.
  const needsFallback = !!page && (
    topicTagIds.length === 0 || (!isLoadingRelated && relatedItems.length === 0)
  );

  const { posts: latestPosts } = useLatestPosts(needsFallback);

  const posts = relatedItems.length > 0
    ? relatedItems
    : latestPosts?.filter(p => p.sys.id !== page?.sys.id);

  const {
    tags,
    isLoading: isLoadingTags,
  } = useTags();

  return (
    <div className={styles.sidebarItemWrapper}>
      {posts && (
        <div className={styles.sidebarItemWrap}>
          <h5>Related Posts</h5>
          <Divider />

          <ul>
            {posts.slice(0, RELATED_POSTS_MAX).map(post => (
              <li key={post.sys.id}>
                <Link
                  className={styles.footerLinks}
                  href={`/page/${post.fields.slug}`}
                >
                  {post.fields.title as unknown as ReactNode}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tags && (
        <div className={styles.sidebarItemWrap}>
          <h5>Tags</h5>
          <Divider />

          {tags.map(tag => (
            <Chip
              key={tag.sys.id}
              label={tag.name}
              variant="outlined"
              className={styles.tagItem}
              onClick={() => redirect(`/search?query=${tag.sys.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Sidebar;
