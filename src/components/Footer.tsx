'use client';

import { ALL_LINKS } from '@/config';
import { SOCIAL_LINKS } from '@/config/site';
import { toast } from 'sonner';

import { Button } from './ui/button';
import Link from '@/components/ui/Link';
import { cn } from '@/lib/utils';
import Container from './ui/Container';

const Footer = () => {
  return (
    <Container className='flex flex-col items-center font-medium sm:flex-row sm:items-start sm:justify-between'>
      <section className='sm:space-y-3'>
        <div className='mb-2 flex w-full flex-wrap items-center justify-center sm:items-start'>
          {ALL_LINKS.map((link, index) => (
            <Button
              className={cn('inline h-fit pt-0', {
                'pl-0': index === 0,
              })}
              key={link.path}
              variant='link'
              asChild
            >
              <Link href={link.path}>{link.name}</Link>
            </Button>
          ))}
        </div>

        <p className='text-center text-sm sm:text-start'>
          Copyright &copy; {new Date().getFullYear()} prodevguide.com
        </p>
      </section>

      <section className='mt-5 flex gap-6 sm:mt-0'>
        {SOCIAL_LINKS.map((item) => {
          if (item.name === 'Email') {
            return (
              <p
                onClick={() => {
                  try {
                    navigator.clipboard.writeText(item.link);
                    return toast.success('Email copied', {
                      position: 'top-right',
                    });
                  } catch (err) {
                    console.error('Failed to copy');
                  }
                }}
                key={item.link}
                className='cursor-pointer'
              >
                <item.icon className='h-5 w-5 transition-opacity duration-200 hover:opacity-80' />
                <span className='sr-only'>{item.name}</span>
              </p>
            );
          }

          return (
            <Link key={item.link} target='_blank' href={item.link}>
              <item.icon className='h-5 w-5 transition-opacity duration-200 hover:opacity-80' />
              <span className='sr-only'>{item.name}</span>
            </Link>
          );
        })}
      </section>
    </Container>
  );
};

export default Footer;
