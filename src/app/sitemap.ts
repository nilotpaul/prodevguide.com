import { MetadataRoute } from 'next';
import { Categories, ALL_LINKS, Tags } from '@/config';
import { getPages } from '@/lib/page';
import { getPosts } from '@/lib/post';
import getUrl, { createPostLink } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const allPagesSlug = getPages().map(({ slugAsParams }) => slugAsParams);

  const mainPages = ALL_LINKS.filter(
    ({ path }) => !allPagesSlug.includes(path.replace('/', ''))
  ).map((page) => ({
    url: getUrl(page.path).replace(/\/$/, ''),
    lastModified: now,
  }));

  const pages = getPages().map((page) => ({
    url: getUrl(`/${page.slugAsParams}`),
    lastModified: page.lastUpdated ?? now,
  }));

  const categories = Categories.map((category) => ({
    url: getUrl(`/blog${category.path}`),
    lastModified: now,
  }));

  const posts = Categories.map(({ path }) => getPosts(path.replace('/', '')))
    .flat()
    .map((post) => ({
      url: getUrl(`/blog${createPostLink(post)}`),
      lastModified: post.lastUpdated ?? now,
    }));

  const tagPages = Tags.map((tag) => ({
    url: getUrl(`/tags${tag.path}`),
    lastModified: now,
  }));

  return [...mainPages, ...pages, ...categories, ...posts, ...tagPages];
}
