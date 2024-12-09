import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center gap-4">
      <Image src={'/logo.svg'} className={'aspect-square w-20'} alt={'logo'} width={40} height={40} />
      <p>Index Page</p>
      <p>Geist Font</p>
      <i className="ri-arrow-left-up-line"></i>
    </div>
  );
}
