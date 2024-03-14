import { Categories } from '@/config';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import Link from '@/components/ui/Link';

type HeaderCardMobileProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const HeaderCardMobile = ({ children, onClick }: HeaderCardMobileProps) => {
  return (
    <Accordion type='single' collapsible className='w-full pr-4'>
      <AccordionItem separator={false} value='categories'>
        <AccordionTrigger className='py-0'>{children}</AccordionTrigger>

        <AccordionContent className='mt-4 flex w-full flex-col gap-3 pl-12 xs:text-base'>
          {Categories.map((category) => (
            <Link onClick={onClick} href={`/blog${category.path}`} key={category.path}>
              {category.name}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default HeaderCardMobile;
