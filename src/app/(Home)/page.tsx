import RecentPosts from '@/components/RecentPosts';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <main className='mt-24 space-y-32 sm:space-y-52'>
      <div className='flex flex-col items-center justify-center text-center'>
        <h1 className='text-3xl font-bold xs:text-4xl md:text-5xl'>
          Welcome to the blog! I&apos;m Paul.
        </h1>
        <p className='w-2/3 text-lg sm:text-xl'>I share my learnings and other stuff.</p>

        <div className='my-6 space-x-3'>
          <Button variant='special' asChild>
            <Link target='_blank' href='https://github.com/nilotpaul'>
              GitHub
            </Link>
          </Button>
          <Button variant='special' asChild>
            <Link href='/about'>About Me</Link>
          </Button>
        </div>
      </div>

      <RecentPosts />
    </main>
  );
};

export default HomePage;
