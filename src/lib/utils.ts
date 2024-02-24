import { env } from '../validations/env';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createPostLink = ({ slug, category }: { slug: string; category: string }) => {
  const link = slug.replace('posts', category.replace('.', '').toLowerCase());

  return link;
};

export const createHeadingLink = (heading: string) => {
  const link = heading.replaceAll('#', '').replace(' ', '').replaceAll(' ', '-').toLowerCase();

  return '#' + link;
};

export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;

  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);

  return readTime;
};

export const getAssets = (url: string) => {
  const ASSETS_URL = env.ASSETS_BUCKET_URL;

  if (ASSETS_URL) {
    return `${ASSETS_URL}/assets${url}`;
  } else {
    return `/assets${url}`;
  }
};

export default function getUrl(url: string) {
  if (typeof window !== 'undefined') return url;

  if (env.NEXT_PUBLIC_SITE_URL) {
    return `${env.NEXT_PUBLIC_SITE_URL}${url}`;
  } else {
    return `http://localhost:3000${url}`;
  }
}
