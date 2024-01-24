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
          <Typography variant="h3">{post.title}</Typography>
          <span className={styles.listItemPosted}>{post.created_at}</span>
        </div>

        <Typography variant="body2" dangerouslySetInnerHTML={{ __html: post.description }}></Typography>

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