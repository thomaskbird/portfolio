export type NavItem = {
  id: number;
  link: string;
  label: string;
  slug: string;
};

const MOCK_NAVITEMS: NavItem[] = [
  {
    id: 1,
    link: '/',
    label: 'Home',
    slug: 'home'
  },
  {
    id: 2,
    link: '/work',
    label: 'Work',
    slug: 'work'
  },
  // {
  //   id: 3,
  //   link: '/services',
  //   label: 'Services',
  //   slug: 'services'
  // },
  {
    id: 3,
    link: '/blog',
    label: 'Blog',
    slug: 'blog'
  },
  {
    id: 4,
    link: '/photography',
    label: 'Photography',
    slug: 'photography'
  },
  {
    id: 5,
    link: '/resume',
    label: 'Resume',
    slug: 'resume'
  },
  {
    id: 6,
    link: '/search',
    label: 'Search',
    slug: 'search'
  },
  {
    id: 7,
    link: '/contact',
    label: 'Contact',
    slug: 'contact'
  },
];

export default MOCK_NAVITEMS;
