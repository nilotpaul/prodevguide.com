import { getBlurDataUrl } from '@/lib/getBlurDataUrl';
import getUrl from '@/lib/utils';

import NextImage, { ImageProps as NextImageProps } from 'next/image';

type ImageProps = {
  mode?: 'local' | 'external';
  blur?: boolean;
} & Omit<NextImageProps, 'loader'>;

const Image = async ({ mode = 'local', blur = false, src, ...props }: ImageProps) => {
  const imageUrl = mode === 'local' ? `${getUrl(`/assets${src}`)}` : src;

  const blurDataUrl = await getBlurDataUrl(imageUrl as string);

  return (
    <NextImage
      src={imageUrl}
      blurDataURL={blurDataUrl}
      placeholder={blur ? 'blur' : 'empty'}
      {...props}
    />
  );
};

export default Image;
