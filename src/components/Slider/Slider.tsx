import styles from './Slider.module.scss';
import MOCK_TESTIMONIALS from "@/mocks/mockTestimonials";
import Slide from "@/components/Slider/Slide";
import {useState} from "react";

type SliderType = {

};

const Slider = ({}: SliderType) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (idx: number) => {
    setActiveIndex(idx);
  }

  return (
    <div className={styles.sliderWrap}>
      <img src="/quote.png" className={styles.quoteLeft}/>
      <img src="/quote.png" className={styles.quoteRight}/>

      <div className={styles.slidesWrap}>
        {MOCK_TESTIMONIALS.map((testimonial, idx) => (
          <Slide
            key={testimonial.id}
            {...testimonial}
            active={activeIndex === idx}
          />
        ))}
      </div>

      <div className={styles.pagination}>
        {MOCK_TESTIMONIALS.map((testimonial, iDot) => (
          <div
            key={testimonial.id}
            className={activeIndex === iDot ? styles.dotActive : styles.dot}
            onClick={() => handleDotClick(iDot)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Slider;