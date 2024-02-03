import styles from "@/components/Slider/Slider.module.scss";
import cn from "classnames";
import {TestimonyType} from "@/types/TestimonyType";
import Typography from "@mui/material/Typography";

type SlideType = {
  active: boolean;
}

const wordLimit = 30;

const Slide = ({
  firstName,
  lastName,
  title,
  body,
  image,
  active
}: TestimonyType & SlideType) => {
  return (
    <div className={cn(styles.slide, active ? styles.active : '')}>
      <div className={styles.badge}>
        <div className={styles.avatar}>
          <img src={image} alt={`${firstName} ${lastName}`} />
        </div>
        <div className={styles.badgeText}>
          <h5>{title}</h5>
          <h3>{firstName} {lastName}</h3>
        </div>
      </div>
      <Typography
        variant="body2"
        className={styles.slideText}
        dangerouslySetInnerHTML={{
          __html: body.split(' ').length > wordLimit ? `${body.split(' ').splice(0, wordLimit).join(' ')}...` : body
        }}
      />
    </div>
  )
}

export default Slide;