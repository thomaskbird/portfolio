import Typography from "@mui/material/Typography";
import styles from './BlogPost.module.scss';
import PostType from "@/types/PostType";
import Link from "next/link";
import Button from "@mui/material/Button";

type ListItemType = {
  post: PostType
};

const BlogPost = ({
  post,
}: ListItemType) => {
  return (
    <div className={styles.listItemWrapperBorder}>
      <div className={styles.listItemWrapper}>
        <div className={styles.listItemHeader}>
          <Link href={`/p/${post.slug}`}>
            <Typography variant="h4">{post.title}</Typography>
          </Link>
          <span className={styles.listItemPosted}>{post.created_at.substring(0, 10)}</span>
        </div>

        <Typography variant="body2" dangerouslySetInnerHTML={{ __html: post.description }} sx={{ marginBottom: 3 }}/>

        <Link href={`/p/${post.slug}`}>
          <Button variant="text" color="nav">
            View post...
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default BlogPost;
