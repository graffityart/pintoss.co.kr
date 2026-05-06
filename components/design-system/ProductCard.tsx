'use client';

import React from 'react';
import { cn } from '@/lib/cn';
import Image from 'next/image';

export interface ProductCardProps {
  brandLogo?: string;
  brandLogoAlt?: string;
  productName?: string;
  price?: string;
  buttonText?: string;
  selected?: boolean;
  showButton?: boolean;
  onClick?: () => void;
  onPurchaseClick?: () => void;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  brandLogo,
  brandLogoAlt = '브랜드 로고',
  productName = '상품명',
  price = '00,000원',
  buttonText = '자세히 보기',
  selected = false,
  showButton = true,
  onClick,
  onPurchaseClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'group bg-white rounded-[22px]',
        'flex flex-col items-center justify-between gap-5',
        'px-5 py-6 md:px-6 md:py-7',
        'box-border cursor-pointer',
        'border border-[#DDE7F3]',
        'shadow-[0_8px_24px_rgba(15,23,42,0.04)]',
        'transition-all duration-200',
        'hover:-translate-y-1 hover:border-[#94A3B8] hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]',
        selected &&
          'border-[#0F172A] bg-[#F8FAFC] shadow-[0_14px_34px_rgba(15,23,42,0.10)]',
        className
      )}
    >
      {brandLogo ? (
        <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-[18px] border border-[#EEF2F7] bg-[#F8FAFC] md:h-[108px] md:w-[108px]">
          <Image
            src={brandLogo}
            alt={brandLogoAlt}
            fill
            className="object-contain p-[14px]"
          />
        </div>
      ) : (
        <div className="flex h-[92px] w-[92px] shrink-0 items-center justify-center rounded-[18px] border border-[#EEF2F7] bg-[#F8FAFC] md:h-[108px] md:w-[108px]">
          <span className="text-[13px] font-medium text-[#94A3B8]">로고</span>
        </div>
      )}

      <div className="flex w-full flex-col items-center gap-2 text-center">
        <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-[15px] font-semibold leading-[1.4] tracking-[-0.35px] text-[#334155] md:text-[17px]">
          {productName}
        </p>

        <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-[18px] font-extrabold leading-[1.3] tracking-[-0.45px] text-[#0F172A] md:text-[20px]">
          {price}
        </p>
      </div>

      {showButton && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPurchaseClick?.();
          }}
          className={cn(
            'w-full rounded-[14px]',
            'px-5 py-3',
            'text-[14px] font-bold tracking-[-0.3px] md:text-[15px]',
            'transition-all duration-200',
            selected
              ? 'bg-[#0F172A] text-white hover:bg-[#1D4ED8]'
              : 'border border-[#CBD5E1] bg-[#F8FAFC] text-[#334155] hover:border-[#0F172A] hover:bg-[#0F172A] hover:text-white'
          )}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};
