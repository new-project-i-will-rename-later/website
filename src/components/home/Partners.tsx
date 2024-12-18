import Marquee from 'react-fast-marquee';
import Image from 'next/image';
const logos = [
  '/media/partners/dummy.png',
  '/media/partners/dummy-1.png',
  '/media/partners/dummy-2.png',
  '/media/partners/dummy-3.png',
  '/media/partners/dummy-4.png',
  '/media/partners/dummy-5.png',
  '/media/partners/dummy-6.png',
  '/media/partners/dummy-7.png',
];

export default function Partners() {
  return (
    <div className="h-[120px] w-full">
      <Marquee autoFill={true} gradient gradientWidth={'25%'} gradientColor={'#0A0A0A'} className={'flex h-full items-center'} speed={24}>
        {logos.map((logo, index) => (
          <Image src={logo} alt={`logo`} width={200} height={120} className="pointer-events-none ml-28 h-8 w-32 select-none object-contain max-lg:ml-20 max-lg:h-6 max-md:ml-16" draggable={false} key={index} />
        ))}
      </Marquee>
    </div>
  );
}
