import Link from './ui/Link';
import { Icons } from './Icons';

type SharePostProps = {
  url: string;
  text: string;
};

const SharePost = ({ url, text }: SharePostProps) => {
  return (
    <div className='flex w-full items-center justify-end gap-4'>
      <p className='mr-2 text-sm text-rose'>Share on:</p>

      <Link
        target='_blank'
        referrerPolicy='no-referrer'
        href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}
      >
        <Icons.twitter />
      </Link>
      <Link
        target='_blank'
        referrerPolicy='no-referrer'
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
      >
        <Icons.facebook />
      </Link>
      <Link
        target='_blank'
        referrerPolicy='no-referrer'
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
      >
        <Icons.linkedin />
      </Link>
      <Link
        target='_blank'
        referrerPolicy='no-referrer'
        href={`https://t.me/share/url?url=${url}&text=${text}`}
      >
        <Icons.telegram />
      </Link>
      <Link
        target='_blank'
        referrerPolicy='no-referrer'
        href={`https://api.whatsapp.com/send?text=${url}`}
      >
        <Icons.whatsapp />
      </Link>
    </div>
  );
};

export default SharePost;
