import { env } from '@/validations/env';
import { ImageLoaderProps } from 'next/image';

export const loader = ({ src, width, quality = 75 }: ImageLoaderProps) => {
  if (src.startsWith('https')) {
    return src;
  }

  const SITE_URL = env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return `${SITE_URL}${src}?w=${width}&q=${quality}`;
};
