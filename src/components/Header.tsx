'use client';

import { useState, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { label: 'Solutions', width: 320, height: 220 },
  { label: 'Resources', width: 560, height: 300 },
  { label: 'Developers', width: 420, height: 400 },
] as const;

const CONTENT = {
  Solutions: <div className={'h-24 w-52 bg-neutral-300'}>asdasd</div>,
  Resources: <div className={'h-24 w-52 bg-neutral-300'}>asdasd</div>,
  Developers: <div className={'h-24 w-52 bg-neutral-300'}>asdasd</div>,
};

export default function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoverDetails, setHoverDetails] = useState<{
    position: number;
    width: number;
    height: number;
    direction: 'left' | 'right';
  }>({ position: 0, width: 0, height: 0, direction: 'right' });

  const linksRef = useRef<HTMLDivElement>(null);
  const lastHoveredLink = useRef<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const handleMouseEnter = useCallback(
    (label: string, index: number) => {
      if (linksRef.current) {
        const linkElements = linksRef.current.children;
        const hoveredElement = linkElements[index] as HTMLElement;

        if (hoveredElement) {
          const currentPos = hoveredElement.offsetLeft + hoveredElement.offsetWidth / 2;
          const direction = hoverDetails.position < currentPos ? 'right' : 'left';

          setHoveredLink(label);
          setHoverDetails({
            position: currentPos,
            width: LINKS[index].width,
            height: LINKS[index].height,
            direction,
          });

          lastHoveredLink.current = label;
        }
      }
    },
    [hoverDetails.position],
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredLink(null);
    lastHoveredLink.current = null;
  }, []);

  const getContent = useMemo(() => {
    return hoveredLink ? CONTENT[hoveredLink as keyof typeof CONTENT] : null;
  }, [hoveredLink]);

  const contentVariants = {
    initial: (direction: 'left' | 'right') => ({ opacity: 0, x: direction === 'right' ? 20 : -20 }),
    animate: { opacity: 1, x: 0, transition: { duration: 0.1 } },
    exit: (direction: 'left' | 'right') => ({ opacity: 0, x: direction === 'right' ? -20 : 20 }),
  };

  return (
    <div className="container">
      <div className="border-gray-500 relative flex w-full max-w-[1200px] items-center gap-16 border border-t-0 border-neutral-700 p-8">
        <div className="flex flex-none items-center gap-3">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <p className="text-[24px] font-medium max-md:hidden">Unknown</p>
        </div>
        <div ref={linksRef} className="relative flex items-center text-neutral-300 max-lg:hidden">
          {LINKS.map(({ label }, index) => (
            <p key={label} onMouseEnter={() => handleMouseEnter(label, index)} onMouseLeave={handleMouseLeave} className={`cursor-default p-3 hover:bg-neutral-700 ${hoveredLink === label ? 'bg-neutral-700 text-neutral-100' : ''}`}>
              {label}
            </p>
          ))}
          <AnimatePresence>
            {hoveredLink && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2,
                }}
                className="transition-navigation absolute top-12 translate-x-[-50%] overflow-hidden bg-neutral-700"
                style={{
                  left: hoverDetails.position,
                  width: hoverDetails.width,
                  height: hoverDetails.height,
                }}
                onMouseEnter={() => setHoveredLink(hoveredLink)}
                onMouseLeave={handleMouseLeave}
              >
                <AnimatePresence mode="wait">
                  <motion.div key={hoveredLink} custom={hoverDetails.direction} variants={contentVariants} initial="initial" animate="animate" exit="exit" className="h-full w-full">
                    {getContent}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button className="max-lg:hidden" href="/get-started" size="large">
            Get Started
            <i className="ri-arrow-right-up-line text-[24px] transition group-hover:rotate-45"></i>
          </Button>
          <button onClick={() => setMobileMenu(true)} className="aspect-square h-[46] text-4xl text-neutral-200 lg:hidden">
            <i className="ri-menu-3-line" />
          </button>
        </div>
        <AnimatePresence mode="wait">
          {mobileMenu && (
            <motion.div className={'fixed left-0 top-0 flex h-screen w-screen flex-col gap-6 bg-neutral-800 px-[57] py-8'}>
              <div className={'flex w-full items-center justify-end'}>
                <button onClick={() => setMobileMenu(false)} className="aspect-square h-[46] text-4xl text-neutral-200 lg:hidden">
                  <i className="ri-close-line" />
                </button>
              </div>
              <div className={'flex flex-col gap-2'}>
                <p>links will be here</p>
              </div>
              <Button className="w-full" href="/get-started" size="large">
                Get Started
                <i className="ri-arrow-right-up-line text-[24px] transition group-hover:rotate-45"></i>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
