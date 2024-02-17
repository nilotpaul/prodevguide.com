import getUrl from '@/lib/utils';
import { GITHUB_LINK, SITE_NAME, TWITTER_HANDLE } from '@/config/site';
import { Metadata } from 'next';

type TitleTemplate = {
  default: string;
  template: string;
  absolute?: string;
};

export function constructMetadata({
  title = SITE_NAME,
  description = 'website desc',
  image = '/site.png',
  icons = '/favicon.ico',
  noIndex = false,
  notFound,
}: {
  title?: string | TitleTemplate;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  notFound?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      ...(notFound
        ? {
            title: 'Not Found',
            description: 'This page does not exist',
          }
        : {
            title,
            description,
          }),
      images: [
        {
          url: image,
          alt: typeof title === 'string' ? title : undefined,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: image }],
      creator: TWITTER_HANDLE,
    },
    icons,
    metadataBase: new URL(getUrl('')),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    creator: 'Nilotpaul Nandi',
    authors: [{ name: 'Nilotpaul Nandi', url: GITHUB_LINK }],
  };
}
