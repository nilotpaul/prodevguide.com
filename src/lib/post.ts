import { allPosts } from '.contentlayer/generated';

export const getPosts = (category: string) => {
  const posts = allPosts.filter(
    (post) => post.category.replace('.', '').toLowerCase() === category.toLowerCase()
  );

  if (!posts || posts.length === 0) {
    return [];
  }

  return posts;
};

export const getPublishedPost = ({ slug, category }: { slug: string; category: string }) => {
  const post = allPosts
    .filter((post) => post.status === 'published' && post.category.toLowerCase() === category)
    .find((post) => post.slugAsParams === slug);

  if (!post || !post._id) {
    return null;
  }

  return post;
};
