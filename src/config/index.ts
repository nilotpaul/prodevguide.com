export const NAV_MENU = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'About',
    path: '/about',
  },
];

export const PostStatus = ['draft', 'published'];

export const Categories = [
  {
    name: 'Tutorials',
    description: 'Detailed guides on development techniques and best practices.',
    path: '/tutorials',
  },
  {
    name: 'Resources & Tools',
    description: 'Valuable resources and tools to boost your productivity.',
    path: '/resources',
  },
  {
    name: 'Tips & Tricks',
    description: 'Useful tips and tricks for enhancing your workflow.',
    path: '/tips',
  },
];

export const Tags = [
  {
    name: 'Node.js',
    path: '/node-js',
  },
  {
    name: 'Web Development',
    path: '/web-development',
  },
  {
    name: 'Express.js',
    path: '/express-js',
  },
  {
    name: 'APIs',
    path: '/apis',
  },
];

export const ALL_LINKS = [
  ...NAV_MENU,
  {
    name: 'Tags',
    path: '/tags',
  },
];
