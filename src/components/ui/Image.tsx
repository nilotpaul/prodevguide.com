'use client';

import { useState } from 'react';
import { loader } from '@/lib/loader';
import { env } from '@/validations/env';
import { cn } from '@/lib/utils';

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { Skeleton } from './skeleton';

type ImageProps = {
  mode?: 'local' | 'external';
  blur?: boolean;
  ratio?: string;
} & Omit<NextImageProps, 'loader'>;

const Image = ({
  mode = 'local',
  blur = false,
  ratio,
  src,
  className,
  height,
  width,
  ...props
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageUrl = mode === 'local' ? `/assets${src}` : src;
  const staticSite = env.NEXT_PUBLIC_SITE_MODE === 'static';

  return (
    <>
      <NextImage
        src={imageUrl}
        height={height}
        width={width}
        onLoad={() => setIsLoading(false)}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        loader={staticSite ? loader : undefined}
        {...props}
      />
      <Skeleton
        aria-disabled='true'
        className={cn(
          height && width && `h-[${height}] w-[${width}]`,
          ratio && `aspect-[${ratio}]`,
          {
            hidden: !isLoading,
          },
          className
        )}
      />
    </>
  );
};

export default Image;
