import { siFacebook, siLinkedin, siTwitter } from 'simple-icons';
import Link from './ui/Link';

type SharePostProps = {
  url: string;
  text: string;
};

const SharePost = ({ url, text }: SharePostProps) => {
  return (
    <div className='flex w-full items-center justify-end gap-3'>
      <p className='mr-2 text-sm text-rose'>Share on:</p>

      <Link
        target='_blank'
        referrerPolicy='no-referrer'
        href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}
      >
        <svg
          role='img'
          viewBox='0 0 24 24'
          className='h-4 w-4 cursor-pointer transition-opacity hover:opacity-90'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d={siTwitter.path} />
        </svg>
      </Link>
      <Link
        target='_blank'
        referrerPolicy='no-referrer'
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
      >
        <svg
          role='img'
          viewBox='0 0 24 24'
          className='h-4 w-4 cursor-pointer transition-opacity hover:opacity-90'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d={siFacebook.path} />
        </svg>
      </Link>
      <Link
        target='_blank'
        referrerPolicy='no-referrer'
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
      >
        <svg
          role='img'
          viewBox='0 0 24 24'
          className='h-4 w-4 cursor-pointer transition-opacity hover:opacity-90'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d={siLinkedin.path} />
        </svg>{' '}
      </Link>
    </div>
  );
};

export default SharePost;
