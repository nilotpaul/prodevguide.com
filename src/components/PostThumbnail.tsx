import { AspectRatio } from './ui/aspect-ratio';
import Image from './ui/Image';

type PostThumbnailProps = {
  image: string;
  alt: string;
};

const PostThumbnail = ({ image, alt }: PostThumbnailProps) => {
  return (
    <AspectRatio ratio={16 / 9} className='relative shadow-xl shadow-zinc-400 dark:shadow-blue-950'>
      <Image
        src={image}
        alt={alt}
        priority
        blur
        fill
        mode='local'
        className='my-4 h-full w-full rounded-md object-cover'
      />
    </AspectRatio>
  );
};

export default PostThumbnail;
