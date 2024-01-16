export type Project = {
  id: number;
  alignment: 'left' | 'right';
  title: string;
  image: string;
  description: string;
  content: string;
};

const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    alignment: 'left',
    title: 'NBC Sports Next',
    image: '/projects/nbc-web-homepage.jpg',
    description: 'Building next generation web apps for streaming todays youth sports!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam commodi consectetur deserunt, facere harum labore laudantium maiores, odio perferendis perspiciatis possimus quaerat sit. Aliquam atque deleniti eveniet laudantium ratione.'
  },
  {
    id: 2,
    alignment: 'right',
    title: 'Livegistics',
    image: '/projects/livegistics-web-home.png',
    description: 'Making life easier for the materials handling industry one electronic load at a time!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam commodi consectetur deserunt, facere harum labore laudantium maiores, odio perferendis perspiciatis possimus quaerat sit. Aliquam atque deleniti eveniet laudantium ratione.'
  },
  {
    id: 3,
    alignment: 'left',
    title: 'Powerley',
    image: '/projects/powerley-web-home.png',
    description: 'iOT that makes peoples lives better through great software and cost cutting savings',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam commodi consectetur deserunt, facere harum labore laudantium maiores, odio perferendis perspiciatis possimus quaerat sit. Aliquam atque deleniti eveniet laudantium ratione.'
  }
]

export default MOCK_PROJECTS;

