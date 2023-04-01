import { send, shield, star } from '../assets';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const features = [
  {
    id: 'feature-1',
    icon: send,
    title: 'Mobile First',
    content:
      'Our web design and development process begins with a mobile-first approach, ensuring that every website we create is optimized for mobile devices before expanding to tablet and desktop versions.',
  },
  {
    id: 'feature-2',
    icon: star,
    title: '24/7 Support',
    content:
      'Call direct anytime day or night, no phone trees or automated responses.',
  },
  {
    id: 'feature-3',
    icon: shield,
    title: 'Web Hosting',
    content:
      'We simplify the payment process by including hosting fees in the monthly payment for our web design and development services.',
  },
];
