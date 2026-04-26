import { Review } from './types';

export const INITIAL_REVIEWS: Review[] = [
  {
    identity: 1,
    name: 'Hariharan',
    company: 'TechStart Inc.',
    rating: 5,
    message: 'DenveX completely transformed our online presence. Their team delivered a website that not only looks stunning but also performs exceptionally well.',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days ago
  },
  {
    identity: 2,
    name: 'Omkar Varma',
    company: 'FinanceApp',
    rating: 5,
    message: 'The web app they built for us has received incredible feedback from our users. The attention to detail and user experience is unmatched.',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(), // 10 days ago
  },
  {
    identity: 3,
    name: 'Tamilselvan',
    company: 'StyleShop',
    rating: 4,
    message: 'Working with DenveX was a game-changer for our business. They understood our vision and executed it flawlessly.',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15).toISOString(), // 15 days ago
  },
  {
    identity: 4,
    name: 'Sarah Chen',
    company: 'Innovate.io',
    rating: 5,
    message: 'The performance optimization they did for our platform was phenomenal. Our bounce rate dropped by 40% within the first month.',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
  },
];
