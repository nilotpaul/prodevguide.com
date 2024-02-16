import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export default function getUrl(url: string) {
  if (typeof window !== 'undefined') return url;

  if (process.env.NEXT_URL) {
    return `${process.env.NEXT_URL}${url}`;
  } else {
    return `http://localhost:3000${url}`;
  }
}