import React from 'react';

type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ size = 'medium', variant = 'primary', children, onClick, href, className }) => {
  const baseClass = 'flex items-center w-fit text-[16px] leading-[18px] font-medium group justify-center';
  const sizeClass = size === 'small' ? 'gap-1 px-3 py-1.5' : size === 'large' ? 'gap-1.5 px-6 py-3 !text-[18px] !leading-[22px]' : 'gap-1.5 px-5 py-2.5';
  const variantClass = variant === 'secondary' ? 'bg-neutral-500 text-neutral-100' : 'bg-neutral-100 text-neutral-900';
  const buttonClass = `${baseClass} ${sizeClass} ${variantClass} ${className || ''}`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
