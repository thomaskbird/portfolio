import styles from './Slider.module.scss';
import MOCK_TESTIMONIALS from "@/mocks/mockTestimonials";
import Slide from "@/components/Slider/Slide";
import {useEffect, useState} from "react";

type SliderType = {

};

// todo: consider only triggering autoplay when the section is within the viewport and disabling when not in view

const Slider = ({}: SliderType) => {
  const testimonialsTotal = MOCK_TESTIMONIALS.length;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleDotClick();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleDotClick = (idx?: number) => {
    if(idx) {
      setActiveIndex(idx);
    } else {
      setActiveIndex(prevState => {
        const next = prevState + 1;
        if(next < testimonialsTotal) {
          return next;
        } else {
          return 0;
        }
      })
    }
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
            onClick={() => activeIndex === iDot ? false : handleDotClick(iDot)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Slider;