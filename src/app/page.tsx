import Hero from '@/components/home/Hero';
import Faq from '@/components/home/Faq';
import Divider from '@/components/Divider';

export default function Home() {
  return (
    <div className={'flex w-full flex-col items-center'}>
      <Hero />
      <Divider />
      <Faq />
    </div>
  );
}
