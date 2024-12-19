export default function Features() {
  const features = [
    { icon: 'ri-window-line', title: 'Elastic scalability', content: 'Handle unbelievable scale without a sweat, whether you’re on Fortune 500, or it’s your launch day.' },
    { icon: 'ri-settings-line', title: 'Rock-solid security', content: 'Infrastructure designed to automatically mitigate DDoS attacks and protect your information.' },
    { icon: 'ri-sun-line', title: 'Global performance', content: 'Effortlessly manage an incredible scale of operations, whether you’re a Fortune 500 company' },
    { icon: 'ri-moon-line', title: 'User-first protection', content: 'Vercel automatically caches your site to ensure that even if a backend.' },
    { icon: 'ri-star-line', title: 'Global performance', content: 'Effortlessly manage an incredible scale of operations, whether you’re a Fortune 500 company' },
    { icon: 'ri-heart-line', title: 'Serverless Storage', content: 'Accelerate development with databases for the fastest frontends.' },
  ];

  return (
    <div className={'flex w-full flex-col items-center'}>
      <div className={'container'}>
        <div className={'flex w-full flex-col border-x border-neutral-700'}>
          <div className={'grid w-full auto-rows-fr grid-cols-3 divide-x divide-y divide-neutral-700 max-lg:grid-cols-2 max-sm:grid-cols-1'}>
            {features.map((feature, index) => (
              <div key={index} className={'group flex h-full w-full flex-col gap-4 p-8 pb-20 transition hover:bg-neutral-700'}>
                <div className={'flex items-center gap-2'}>
                  <i className={`${feature.icon} text-[24px] text-neutral-400 transition group-hover:text-neutral-300`} />
                  <p className={'text-[18px] font-medium leading-[24px] text-neutral-300 transition group-hover:text-neutral-200'}>{feature.title}</p>
                </div>
                <p className={'text-[20px] leading-[24px] text-neutral-300 transition group-hover:text-neutral-200'}>{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
