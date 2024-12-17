'use client';

import Button from '@/components/ui/Button';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqData = [
  {
    question: 'Is IdentiKit OpenSource?',
    answer:
      'Yes, IdentiKit is open-source. This means that anyone can access the source code, contribute to its development, and customize it to fit their needs. Additionally, we prioritize community engagement and transparency, ensuring that all updates and changes are shared openly. IdentiKit',
  },
  {
    question: 'Can I switch from another provider?',
    answer:
      'This means that anyone can access the source code, contribute to its development, and customize it to fit their needs. Additionally, we prioritize community engagement and transparency, ensuring that all updates and changes are shared openly. IdentiKit',
  },
  {
    question: 'What networks does IdentiKit?',
    answer: 'Customize it to fit their needs. Additionally, we prioritize community engagement and transparency, ensuring that all updates and changes are shared openly. IdentiKit',
  },
  {
    question: 'How do I customize my profile?',
    answer:
      'Yes, IdentiKit is open-source. This means that anyone can access the source code, contribute to its development, and customize it to fit their needs. Additionally, we prioritize community engagement and transparency, ensuring that all updates and changes are shared openly. IdentiKit',
  },
];

export default function Faq() {
  const [expanded, setExpanded] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className={'flex w-full flex-col items-center'}>
      <div className={'h-[1px] w-full bg-neutral-700'} />
      <div className={'container'}>
        <div className={'flex w-full flex-col border-x border-neutral-700 p-8 pb-32'}>
          <div className={'flex w-full items-start gap-[120] max-lg:flex-col max-lg:gap-12'}>
            <div className={'flex w-full max-w-[340px] flex-col gap-4'}>
              <p className={'text-[40px] font-medium leading-[52px]'}>Frequently Asked Questions</p>
              <Button href="/faq" size="large" variant={'secondary'}>
                See All FAQs
                <i className="ri-arrow-right-up-line text-[24px] transition group-hover:rotate-45" />
              </Button>
            </div>
            <div className={'flex w-full flex-col gap-4'}>
              {faqData.map((item, index) => (
                <div key={index} className={`bg-transparent flex w-full flex-col px-4 py-6 transition ${expanded === index ? 'bg-neutral-700' : ''}`}>
                  <div className={`flex cursor-pointer items-center gap-4 text-[24px] ${expanded === index ? 'text-neutral-100' : 'text-neutral-200'}`} onClick={() => toggleExpand(index)}>
                    <span className="relative flex aspect-square w-6 items-center justify-center">
                      <div className="absolute h-0.5 w-4 rotate-0 bg-neutral-200" />
                      <div className={`absolute h-4 w-0.5 bg-neutral-200 transition ${expanded === index ? 'rotate-90' : ''}`} />
                    </span>
                    <p>{item.question}</p>
                  </div>
                  <AnimatePresence>
                    {expanded === index && (
                      <motion.div
                        className={'origin-top-left overflow-hidden px-10 text-neutral-300'}
                        initial={{ height: 0, opacity: 0, scale: 0.95 }}
                        animate={{ height: 'auto', opacity: 1, scale: 1 }}
                        exit={{ height: 0, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={'h-4'} />
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
