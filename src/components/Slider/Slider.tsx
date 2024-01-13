import styles from './Slider.module.scss';

type SliderType = {

};

const Slider = ({}: SliderType) => {
  return (
    <div className={styles.sliderWrap}>
      <img src="/quote.png" className={styles.quoteLeft}/>
      <img src="/quote.png" className={styles.quoteRight}/>
      <div className={styles.slide}>
        <div className={styles.badge}>
          <div className={styles.avatar}>
            <img src="/testimonials/tony-baez.jpg" />
          </div>
          <div className={styles.badgeText}>
            <h3>Guarionex Baez</h3>
            <h5>Director of Customer Success</h5>
          </div>
        </div>
        <p className={styles.slideText}>It is with great enthusiasm that I recommend Thomas Bird, who
          serves as the Chief Technology Officer at Livegistics. Thomas
          possesses a rare blend of technical acumen and strategic vision,
          which has been pivotal in driving our technological
          advancements.</p>
      </div>
      <div className={styles.pagination}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dotActive}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  )
}

export default Slider;