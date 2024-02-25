import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function NotFound() {
  return (
    <>
      <Header />

      <div className='flex h-[calc(100vh-6rem-8rem)] w-full items-center justify-center sm:h-[calc(100vh-6rem-4rem)]'>
        <div className='flex flex-col gap-4 text-center'>
          <h1 className='my-0 bg-gradient-to-r from-rose to-blue-700 bg-clip-text text-[9rem] font-bold leading-tight text-transparent xs:text-[10rem] xs:leading-snug sm:leading-tight'>
            404
          </h1>

          <div className='flex flex-col items-center justify-center gap-6'>
            <p className='text-lg md:text-xl'>Page not found</p>

            <Button size='sm' className='mx-auto w-fit font-semibold tracking-wide' asChild>
              <Link href='/'>Return Home</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className='my-6 space-y-6'>
        <Separator className='w-full opacity-50' />
        <Footer />
      </div>
    </>
  );
}
