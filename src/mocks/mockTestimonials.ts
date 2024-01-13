export type Testimonial = {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  content: string;
  image: string;
};

const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    firstName: 'Guarionex',
    lastName: 'Baez',
    title: 'Director of Customer Success',
    content: 'It is with great enthusiasm that I recommend Thomas Bird, who serves as the Chief Technology Officer at Livegistics. Thomas possesses a rare blend of technical acumen and strategic vision, which has been pivotal in driving our technological advancements. His leadership has been instrumental in not only developing cutting-edge solutions but also in fostering a culture of innovation within the team. Thomas has an innate ability to identify opportunities for operational efficiencies and to implement scalable solutions that have a tangible impact on our bottom line. His commitment to excellence, coupled with his ability to lead cross-functional teams, makes him an invaluable asset to any organization. I have the utmost confidence in Thomas\'s capabilities and wholeheartedly endorse him for any leadership role in technology and strategy.',
    image: '/testimonials/tony-baez.jpg'
  },
  {
    id: 2,
    firstName: 'George',
    lastName: 'Apostolopoulos',
    title: 'Product Leader',
    content: 'Thomas is an extremely skilled and effective CTO. Having worked alongside him, I can see his skills in action. He is not one to simply give commands. He is a doer that rolls his sleeves up and gets to coding along with his team! A true example for all technology leaders. Working side by side with him at Livegistics is a pleasure and has made me a more effective leader through his standards! A perfectionist and a hard worker to the core, yet also very entrepreneurial minded!',
    image: '/testimonials/george-apostolopoulos.jpg'
  },
  {
    id: 3,
    firstName: 'Stefan',
    lastName: 'Munck',
    title: 'SR Graphic Designer',
    content: 'Tom always seemed to amaze me with his work ethic. He would go above and beyond the call of duty for his clients. His knowledge of computer programming blows me away! A true role model, I always enjoyed working with Tom and talking about future leads and projects. A true team player!',
    image: '/testimonials/stefan-munck.jpg'
  },
  {
    id: 4,
    firstName: 'Andrew',
    lastName: 'Devich',
    title: 'Sales Analyst',
    content: 'Working alongside Thomas was an exceptional and consistently engaging experience. Thomas truly embodies the ideal coworker, always ready to provide assistance and share knowledge, even when our roles didn\'t directly align. His dedication to uplifting those around him goes above and beyond. \n\n Whenever I entrusted a sale to Thomas and his development team, the process proceeded seamlessly. Our clients held Thomas in high esteem for the positive impact he had on their teams through his interactions. The significant growth of the team under his leadership cannot be overstated. Thanks to him, Livegistics has made remarkable progress in improving its position.',
    image: '/testimonials/andrew-devich.jpg'
  }
];

export default MOCK_TESTIMONIALS;