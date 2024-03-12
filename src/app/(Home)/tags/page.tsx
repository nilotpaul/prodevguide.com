import { Tags } from '@/config';
import { constructMetadata } from '@/lib/metadata';

import Heading from '@/components/ui/Heading';
import PostTags from '@/components/PostTags';

export const metadata = constructMetadata({
  title: 'Tags',
  description: 'Collection of post tags',
});

const TagsPage = () => {
  return (
    <>
      <Heading>Tags</Heading>

      <PostTags
        classNames={{
          tag: 'h-8 w-fit p-0 text-sm',
          main: 'gap-x-4',
        }}
        tags={Tags.map(({ name }) => name)}
        hrefs={Tags.map(({ path }) => '/tags' + path)}
      />
    </>
  );
};

export default TagsPage;
