import { AspectRatio } from './ui/aspect-ratio';
import Image from './ui/Image';

type PostThumbnailProps = {
  image: string;
  alt: string;
};

const PostThumbnail = ({ image, alt }: PostThumbnailProps) => {
  return (
    <AspectRatio ratio={16 / 9} className='shadow-xl shadow-zinc-400 dark:shadow-blue-950'>
      <Image priority blur src={image} fill alt={alt} className='my-4 rounded-md object-cover' />
    </AspectRatio>
  );
};

export default PostThumbnail;
