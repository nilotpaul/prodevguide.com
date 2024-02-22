'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

import NextImage, { ImageProps as NextImageProps } from 'next/image';

type ImageProps = {
  mode?: 'local' | 'external';
  blur?: boolean;
} & Omit<NextImageProps, 'loader'>;

const Image = ({ mode = 'local', blur = false, src, className, ...props }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  // const imageUrl = mode === 'local' ? getAssets(src as string) : src;

  return (
    <NextImage
      src={src}
      onLoad={() => setIsLoading(false)}
      className={cn(
        'transition-opacity duration-300',
        isLoading ? 'opacity-0' : 'opacity-100',
        className
      )}
      {...props}
    />
  );
};

export default Image;
