type EmptyFallbackProps = {
  className?: string;
};

const EmptyFallback = ({ className }: EmptyFallbackProps) => {
  return (
    <div>
      <p>
        <span className='text-white'>Sorry!</span> Nothing to show here.
      </p>
    </div>
  );
};

export default EmptyFallback;
