import Typography from "@mui/material/Typography";
import styles from './ListItem.module.scss';
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import PostType from "@/types/PostType";

type ListItemType = {
  post: PostType
};

const ListItem = ({
  post,
}: ListItemType) => {
  return (
    <div className={styles.listItemWrapperBorder}>
      <div className={styles.listItemWrapper}>
        <Typography variant="h5">{post.title} <span className={styles.listItemPosted}>{post.created_at}</span></Typography>
        <Typography variant="body2" dangerouslySetInnerHTML={{ __html: post.description }}></Typography>

      </div>
    </div>
  )
}

export default ListItem;