import getUrl from '@/lib/utils';
import { GITHUB_LINK, TWITTER_HANDLE } from '@/config/site';
import { Metadata } from 'next';

type TitleTemplate = {
  default: string;
  template: string;
  absolute?: string;
};

export function constructMetadata({
  title = 'ProDev Guide',
  description = 'Sharing helpful insights and real-world advice for developers, building a community and growing together.',
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
    ...(notFound
      ? {
          title: 'Not Found',
          description: 'This page does not exist',
        }
      : {
          title,
          description,
        }),
    openGraph: {
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
