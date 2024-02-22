import { getPostsByTag } from '@/lib/post';
import { createPostLink } from '@/lib/utils';
import { Tags } from '@/config';
import { constructMetadata } from '@/lib/metadata';

import Heading from '@/components/ui/Heading';
import PostPreview from '@/components/PostPreview';
import GridWrapper from '@/components/GridWrapper';
import Link from '@/components/ui/Link';

export const dynamicParams = false;

export function generateMetadata({ params }: TagPageProps) {
  const tag = Tags.find(({ path }) => path.replace('/', '') === params.tag);

  if (!tag || !tag.name) return constructMetadata({ notFound: true });

  return constructMetadata({
    title: tag.name,
    description: `Collection of posts with ${tag.name}`,
  });
}

export function generateStaticParams() {
  return Tags.map(({ path }) => ({
    tag: path.replace('/', ''),
  }));
}

type TagPageProps = {
  params: {
    tag: string;
  };
};

const page = ({ params }: TagPageProps) => {
  const { tag } = params;

  const posts = getPostsByTag({ tag });

  return (
    <>
      <Heading>Posts with {tag}</Heading>

      <GridWrapper>
        {posts.map((post) => (
          <Link key={post._id} href={`/blog${createPostLink(post)}`}>
            <PostPreview post={post} />
          </Link>
        ))}
      </GridWrapper>
    </>
  );
};

export default page;
