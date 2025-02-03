import Typography from "@mui/material/Typography";
import styles from './BlogPost.module.scss';
import Link from "next/link";
import Button from "@mui/material/Button";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectTheme} from "@/store/selectors/globalStore";
import cn from "classnames";
import {Entry} from "contentful";
import {ReactNode} from "react";
import pageStyles from "@/app/page/[slug]/page.module.scss";
import Image from "next/image";

// type Post = {
//   type: 'Page' | 'Post'
//   title: string;
//   slug: string;
//   description: string;
//   body: string;
//   featuredImage: string;
//   keywords: string;
//   media: string;
// }

type ListItemType = {
  post: Entry
};

const BlogPost = ({
  post,
}: ListItemType) => {
  const theme = useGlobalStore(selectTheme);
  const isDark = theme === 'dark';

  const featuredImage = post.fields.featuredImage?.fields;
  console.log('post', featuredImage);

  return (
    <div className={styles.listItemWrapperBorder}>
      <div className={cn(styles.listItemWrapper, isDark ? styles.listItemWrapperDark : styles.listItemWrapperLight)}>
        <div className={styles.listItemHeader}>
          <Link href={`/page/${post.fields.slug}`}>
            <Typography variant="h4">{post.fields.title as string}</Typography>
          </Link>
          <span className={styles.listItemPosted}>{post.sys.createdAt.substring(0, 10)}</span>
        </div>

        {featuredImage && (
          <div className={styles.featuredImage}>
            <Link href={`/page/${post.fields.slug}`}>
              <Image
                className={pageStyles.media}
                src={'https:' + featuredImage.file.url}
                alt={featuredImage.title ?? 'No title text supplied'}
                title={featuredImage.title ?? 'No title text supplied'}
                width={featuredImage.file.details.image.width}
                height={featuredImage.file.details.image.height}
              />
            </Link>
          </div>
        )}

        <Typography variant="body2" sx={{ marginBottom: 3 }}>
          {post.fields.description as ReactNode}
        </Typography>

        <Link href={`/page/${post.fields.slug}`}>
          <Button variant="text" color="nav">
            View post...
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default BlogPost;
