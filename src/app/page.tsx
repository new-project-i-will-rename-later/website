import Hero from '@/components/home/Hero';
import Faq from '@/components/home/Faq';
import Divider from '@/components/Divider';
import Partners from '@/components/home/Partners';
import Features from '@/components/home/Features';

export default function Home() {
  return (
    <div className={'flex w-full flex-col items-center'}>
      <Hero />
      <Divider />
      <Partners />
      <Divider />
      <Features />
      <Divider />
      <Faq />
    </div>
  );
}
