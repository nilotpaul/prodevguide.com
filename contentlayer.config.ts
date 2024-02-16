import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files';

import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeToc from 'rehype-toc';
import { Categories, PostStatus, Tags } from './src/config';

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
} satisfies ComputedFields;

export const Author = defineDocumentType(() => ({
  name: 'Author',
  contentType: 'mdx',
  filePathPattern: 'authors/**/*.mdx',
  fields: {
    name: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
    },
    link: {
      type: 'string',
    },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: 'posts/**/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    thumbnail: {
      type: 'string',
      required: true,
    },
    publishedDate: {
      type: 'date',
      required: true,
    },
    lastUpdated: {
      type: 'date',
    },
    category: {
      type: 'enum',
      options: Categories.map(({ name }) => name),
      required: true,
    },
    tags: {
      type: 'list',
      of: {
        type: 'string',
        options: Tags,
      },
    },
    authors: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    status: {
      type: 'enum',
      options: PostStatus,
      required: true,
    },
  },
  computedFields: {
    ...computedFields,
    headings: {
      type: 'json',
      resolve: (doc) => doc.body.raw.match(/^(#{1,3})\s(.*)$/gm),
    },
  },
}));

export const Page = defineDocumentType(() => ({
  name: 'Page',
  contentType: 'mdx',
  filePathPattern: 'pages/**/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Page, Post, Author],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          className: ['subheading-anchor'],
          ariaLabel: 'Link to section',
        },
      ],
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: 'tokyo-night',
        },
      ],
      [
        // @ts-ignore
        rehypeToc,
        {
          headings: ['h1', 'h2', 'h3'],
          cssClasses: {
            link: 'xs:text-base sm:text-sm font-semibold ',
          },
        },
      ],
    ],
  },
});
