import { allPages } from '.contentlayer/generated';

export const getPages = () => {
  const pages = allPages;

  return pages;
};

export const getPage = (slug: string) => {
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page || !page._id) {
    return null;
  }

  return page;
};
