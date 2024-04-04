'use client';

import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

type CopyCodeProps = {
  rawCode: string;
};

const CopyCode = ({ rawCode }: CopyCodeProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 640px)');

  const onCopy = async () => {
    await navigator.clipboard.writeText(rawCode);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  // const isSingelLine = rawCode.split('\n').length <= 2;

  return (
    <Button
      className={cn('absolute -top-2 right-0 sm:right-1 sm:top-6')}
      size='sm'
      variant={!isDesktop ? 'noBackground' : 'ghost'}
      disabled={isCopied}
      onClick={onCopy}
    >
      {isCopied ? 'Copied' : 'Copy'}
    </Button>
  );
};

export default CopyCode;
