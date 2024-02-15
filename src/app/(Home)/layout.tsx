import Header from '@/components/Header';
import Container from '@/components/ui/Container';

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Header />

      <Container className='mt-12'>{children}</Container>
    </>
  );
};

export default HomeLayout;
