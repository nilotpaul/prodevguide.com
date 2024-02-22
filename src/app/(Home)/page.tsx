import { GITHUB_LINK } from '@/config/site';

import RecentPosts from '@/components/RecentPosts';
import Link from '@/components/ui/Link';
import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/Heading';

const HomePage = () => {
  return (
    <main className='my-28 space-y-40 md:space-y-48'>
      <div className='flex flex-col items-center justify-center text-center'>
        <Heading
          classNames={{
            h1: 'text-3xl font-bold xs:text-4xl sm:text-5xl',
            separator: 'hidden',
          }}
        >
          Welcome to the blog! I&apos;m Paul.
        </Heading>
        <p className='-mt-2 w-2/3 text-lg sm:text-xl'>I share my learnings and other stuff.</p>

        <div className='my-6 space-x-3'>
          <Button className='xs:text-base sm:text-sm' variant='special' asChild>
            <Link target='_blank' href={GITHUB_LINK}>
              GitHub
            </Link>
          </Button>
          <Button className='xs:text-base sm:text-sm' variant='special' asChild>
            <Link href='/about'>About Me</Link>
          </Button>
        </div>
      </div>

      <RecentPosts />
    </main>
  );
};

export default HomePage;
