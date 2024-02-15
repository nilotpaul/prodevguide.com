import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files';

import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode, { type Options } from 'rehype-pretty-code';

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
  documentTypes: [Page],
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
        // @ts-ignore issue with current version
        rehypePrettyCode,
        {
          theme: 'tokyo-night',
        },
      ],
    ],
  },
});
