import styles from "@/components/Slider/Slider.module.scss";
import cn from "classnames";
import {TestimonyType} from "@/types/TestimonyType";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from 'next/image';

type SlideType = {
  active: boolean;
}

const wordLimit = 30;

const Slide = ({
  id,
  name,
  title,
  content,
  profileImage,
  active
}: TestimonyType & SlideType) => {
  return (
    <div className={cn(styles.slide, active ? styles.active : '')}>
      <div className={styles.badge}>
        <div className={styles.avatar}>
          <Image
            src={`https://${(profileImage as any).fields.file.url}`}
            alt={`${name}`}
            width={(profileImage as any).fields.file.details.image.width}
            height={(profileImage as any).fields.file.details.image.height}
          />
        </div>
        <div className={styles.badgeText}>
          <h5>{title}</h5>
          <h3>{name}</h3>
        </div>
      </div>
      <Typography
        variant="body2"
        className={styles.slideText}
        dangerouslySetInnerHTML={{
          __html: content.split(' ').length > wordLimit ? `${content.split(' ').splice(0, wordLimit).join(' ')}...` : content
        }}
      />

      <Link className={styles.viewMoreLink} href={`/testimony/${id}`}>View more...</Link>
    </div>
  )
}

export default Slide;
