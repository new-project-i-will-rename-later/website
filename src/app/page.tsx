import Hero from '@/components/home/Hero';
import Faq from '@/components/home/Faq';

export default function Home() {
  return (
    <div className={'flex w-full flex-col items-center'}>
      <Hero />
      <Faq />
    </div>
  );
}
