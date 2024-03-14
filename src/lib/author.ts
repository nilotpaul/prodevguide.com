import { allAuthors } from '.contentlayer/generated';

export const getAuthorByName = (name: string) => {
  const author = allAuthors.find((author) => author.slugAsParams === name);

  if (!author || !author._id) {
    return null;
  }

  return author;
};
