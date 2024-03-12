'use client';

import { useState } from 'react';
import { loader } from '@/lib/loader';
import { env } from '@/validations/env';

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { Skeleton } from './skeleton';
import { cn } from '@/lib/utils';

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
          'opacity-100 transition-opacity duration-300',
          {
            'opacity-0': isLoading,
          },
          className
        )}
        loader={staticSite ? loader : undefined}
        {...props}
      />

      {isLoading && (
        <Skeleton
          aria-disabled='true'
          className={cn(
            height && width && `h-[${height.toString()}px] w-[${width.toString()}px]`,
            className
          )}
        />
      )}
    </>
  );
};

export default Image;
