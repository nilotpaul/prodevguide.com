import { SITE_DESCRIPTION, SITE_NAME } from '@/config/site';
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    background_color: '#d4d4d8',
    theme_color: '#d4d4d8',
    dir: 'ltr',
    display: 'standalone',
    screenshots: [
      {
        src: '/site.png',
        type: 'image/png',
      },
    ],
    icons: [
      {
        src: '/favicon.png',
        purpose: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
