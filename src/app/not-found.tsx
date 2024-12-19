import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className={'container'}>
      <div className={'flex h-[80vh] min-h-fit w-full flex-col items-center justify-center gap-6 border-x border-neutral-700 p-8 py-24'}>
        <div className={'flex flex-col items-center gap-1'}>
          <p className={'error-gradient text-[200px] font-medium leading-none'}>404</p>
          <p className={'mt-[-52px] text-[24px] leading-[30px]'}>Page you are looking for is not here</p>
          <p className={'text-neutral-300'}>May have been deleted or never existed</p>
        </div>
        <Button href="/" size="large">
          <i className="ri-arrow-left-line text-[24px]"></i>
          Back to Home
        </Button>
      </div>
    </div>
  );
}
