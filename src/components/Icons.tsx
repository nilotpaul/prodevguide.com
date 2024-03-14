import { type LucideProps, Sun } from 'lucide-react';
import {
  siFacebook,
  siLinkedin,
  siTwitter,
  siWhatsapp,
  siGmail,
  siGithub,
  siTelegram,
} from 'simple-icons';
import { MoonIcon, CaretLeftIcon } from '@radix-ui/react-icons';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Icons = {
  facebook: ({ className, ...props }: JSX.IntrinsicElements['svg']) => (
    <svg
      role='img'
      viewBox='0 0 24 24'
      className={cn('h-4 w-4 cursor-pointer transition-opacity hover:opacity-90', className)}
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d={siFacebook.path} />
    </svg>
  ),
  linkedin: ({ className, ...props }: JSX.IntrinsicElements['svg']) => (
    <svg
      role='img'
      viewBox='0 0 24 24'
      className={cn('h-4 w-4 cursor-pointer transition-opacity hover:opacity-90', className)}
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d={siLinkedin.path} />
    </svg>
  ),
  twitter: ({ className, ...props }: JSX.IntrinsicElements['svg']) => (
    <svg
      role='img'
      viewBox='0 0 24 24'
      className={cn('h-4 w-4 cursor-pointer transition-opacity hover:opacity-90', className)}
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d={siTwitter.path} />
    </svg>
  ),
  whatsapp: ({ className, ...props }: JSX.IntrinsicElements['svg']) => (
    <svg
      role='img'
      viewBox='0 0 24 24'
      className={cn('h-4 w-4 cursor-pointer transition-opacity hover:opacity-90', className)}
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d={siWhatsapp.path} />
    </svg>
  ),
  gamil: ({ className, ...props }: JSX.IntrinsicElements['svg']) => (
    <svg
      role='img'
      viewBox='0 0 24 24'
      className={cn('h-4 w-4 cursor-pointer transition-opacity hover:opacity-90', className)}
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d={siGmail.path} />
    </svg>
  ),
  github: ({ className, ...props }: JSX.IntrinsicElements['svg']) => (
    <svg
      role='img'
      viewBox='0 0 24 24'
      className={cn('h-4 w-4 cursor-pointer transition-opacity hover:opacity-90', className)}
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d={siGithub.path} />
    </svg>
  ),
  telegram: ({ className, ...props }: JSX.IntrinsicElements['svg']) => (
    <svg
      role='img'
      viewBox='0 0 24 24'
      className={cn('h-4 w-4 cursor-pointer transition-opacity hover:opacity-90', className)}
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d={siTelegram.path} />
    </svg>
  ),
  sun: (props: LucideProps) => <Sun {...props} />,
  moon: (props: ComponentProps<typeof MoonIcon>) => <MoonIcon {...props} />,
  leftArrow: (props: ComponentProps<typeof CaretLeftIcon>) => <CaretLeftIcon {...props} />,
};
