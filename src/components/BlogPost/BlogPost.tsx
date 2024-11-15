import Typography from "@mui/material/Typography";
import styles from './BlogPost.module.scss';
import PostType from "@/types/PostType";
import Link from "next/link";
import Button from "@mui/material/Button";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";
import cn from "classnames";
import {Entry} from "contentful";

type Post = {
  type: 'Page' | 'Post'
  title: string;
  slug: string;
  description: string;
  body: string;
  featuredImage: string;
  keywords: string;
  media: string;
}

type ListItemType = {
  post: Entry
};

const BlogPost = ({
  post,
}: ListItemType) => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';

  return (
    <div className={styles.listItemWrapperBorder}>
      <div className={cn(styles.listItemWrapper, isDark ? styles.listItemWrapperDark : styles.listItemWrapperLight)}>
        <div className={styles.listItemHeader}>
          <Link href={`/p/${post.fields.slug}`}>
            <Typography variant="h4">{post.fields.title}</Typography>
          </Link>
          <span className={styles.listItemPosted}>{post.sys.createdAt.substring(0, 10)}</span>
        </div>

        <Typography variant="body2" sx={{ marginBottom: 3 }}>
          {post.fields.description}
        </Typography>

        <Link href={`/p/${post.fields.slug}`}>
          <Button variant="text" color="nav">
            View post...
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default BlogPost;
