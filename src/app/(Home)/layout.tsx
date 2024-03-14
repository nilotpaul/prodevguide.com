import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Container from '@/components/ui/Container';
import { Separator } from '@/components/ui/separator';

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Header />
      <Container className='mb-32 mt-12 h-full'>{children}</Container>

      <div className='my-6 space-y-6'>
        <Separator className='w-full opacity-50' />
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
