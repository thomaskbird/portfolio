import styles from "@/components/Slider/Slider.module.scss";
import {Testimonial} from "@/mocks/mockTestimonials";
import cn from "classnames";

type SlideType = {
  active: boolean;
}

const wordLimit = 30;

const Slide = ({
  firstName,
  lastName,
  title,
  content,
  image,
  active
}: Testimonial & SlideType) => {
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
      <p
        className={styles.slideText}
        dangerouslySetInnerHTML={{
          __html: content.split(' ').length > wordLimit ? `${content.split(' ').splice(0, wordLimit).join(' ')}...` : content
      }}
      />
    </div>
  )
}

export default Slide;