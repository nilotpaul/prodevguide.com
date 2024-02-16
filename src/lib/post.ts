import { allPosts } from '.contentlayer/generated';

export const getRecentPosts = (limit: number = 6) => {
  const posts = allPosts
    .sort((a, b) => Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate)))
    .slice(0, limit);

  if (!posts || posts.length === 0) {
    return [];
  }

  return posts;
};

export const getPosts = (category: string) => {
  const posts = allPosts
    .filter(
      (post) =>
        post.category.replace('.', '').toLowerCase() === category.replace('.', '').toLowerCase()
    )
    .sort((a, b) => Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate)));

  if (!posts || posts.length === 0) {
    return [];
  }

  return posts;
};

export const getPublishedPost = ({ slug, category }: { slug: string; category: string }) => {
  const post = allPosts
    .filter(
      (post) =>
        post.status === 'published' &&
        post.category.replace('.', '').toLowerCase() === category.replace('.', '').toLowerCase()
    )
    .sort((a, b) => Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate)))
    .find((post) => post.slugAsParams === slug);

  if (!post || !post._id) {
    return null;
  }

  return post;
};
