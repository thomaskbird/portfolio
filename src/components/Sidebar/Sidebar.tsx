import styles from './Sidebar.module.scss';
import Link from "next/link";
import {ReactNode} from "react";
import useSearch from "@/hooks/useSearch";
import useTags from "@/hooks/useTags";
import {Chip} from "@mui/material";
import {redirect} from "next/navigation";
import Divider from "@/components/Divider/Divider";

type SidebarType = {
  page: any;
}

const Sidebar = ({ page }: SidebarType) => {
  const {
    isLoading: isSearchLoading,
    posts,
  } = useSearch('posts', 'css');

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
            {posts?.filter(p => p.sys.id !== page?.sys.id).map(post => (
              <li key={post.sys.id}>
                <Link
                  className={styles.footerLinks}
                  href={`/page/${post.fields.slug}`}
                >
                  {post.fields.title as ReactNode}
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
