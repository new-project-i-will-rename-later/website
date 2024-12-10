'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className={'container'}>
      <div className={'border-gray-500 flex w-full max-w-[1200px] items-center gap-16 border border-t-0 border-neutral-700 p-8'}>
        <div className={'flex flex-none items-center gap-3'}>
          <Image src={'/logo.svg'} alt={'logo'} width={40} height={40} />
          <p className={'text-[24px] font-medium max-md:hidden'}>Unknown</p>
        </div>
        <div className={'relative flex items-center gap-6 text-neutral-300 max-lg:hidden'}>
          <Link href={'/'} className={`transition ${isActive('/products') ? 'text-neutral-100' : 'hover:text-neutral-200'}`}>
            Products
          </Link>
          <Link href={'/resources'} className={`transition ${isActive('/resources') ? 'text-neutral-100' : 'hover:text-neutral-200'}`}>
            Resources
          </Link>
          <Link href={'/docs'} className={`transition ${isActive('/docs') ? 'text-neutral-100' : 'hover:text-neutral-200'}`}>
            Docs
          </Link>
          <Link href={'/pricing'} className={`transition ${isActive('/pricing') ? 'text-neutral-100' : 'hover:text-neutral-200'}`}>
            Pricing
          </Link>
        </div>
        <div className={'ml-auto flex items-center gap-4'}>
          <Button className={'max-sm:hidden'} href={'/get-started'} size={'large'}>
            Get Started
            <i className="ri-arrow-right-up-line text-[24px] transition group-hover:rotate-45"></i>
          </Button>
          <button className={'aspect-square h-[46] text-4xl text-neutral-200 lg:hidden'}>
            <i className="ri-menu-3-line" />
          </button>
        </div>
      </div>
    </div>
  );
}
