'use client';

import React from 'react';
import { cn } from '@/lib/cn';
import Image from 'next/image';

export interface HeroSectionProps {
  title?: string[];
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = ["휴대폰 소액결제, 신용카드 결제", "클릭 한 번으로 손쉬운 상품권 구매"],
  subtitle = "구매 즉시 발급, 24시간 언제든 사용 가능, 상품권 이용 흐름까지 한 번에 확인",
  buttonText = "이용 흐름 확인하기",
  onButtonClick,
  imageSrc = '/hero-image.png',
  imageAlt = '바로 구매하기',
  className,
}) => {
  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-[28px]',
        'bg-gradient-to-br from-[#F3F7FF] via-white to-[#EEFDF8]',
        'border border-[#D8E4F5]',
        'shadow-[0_18px_50px_rgba(15,23,42,0.08)]',
        'flex flex-col items-center gap-8',
        'px-5 py-10 sm:px-8 md:px-12 md:py-14',
        'lg:flex-row lg:items-center lg:justify-between lg:gap-16',
        className
      )}
    >
      <div className="absolute -top-20 -right-20 h-[220px] w-[220px] rounded-full bg-[#DBEAFE]/70 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-[240px] w-[240px] rounded-full bg-[#CFFAFE]/60 blur-3xl" />

      <div className="relative z-10 flex w-full flex-col items-center text-center lg:max-w-[520px] lg:items-start lg:text-left">
        <span className="mb-5 inline-flex rounded-full border border-[#BFD7FF] bg-white/80 px-4 py-2 text-[13px] font-bold text-[#2563EB]">
          핀토스몰
        </span>

        <div className="text-[30px] font-extrabold leading-[1.22] tracking-[-0.9px] text-[#111827] sm:text-[36px] md:text-[44px] lg:text-[48px]">
          {title.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <p className="mt-5 max-w-[560px] text-[15px] font-medium leading-[1.8] text-[#526174] sm:text-[17px] md:text-[18px]">
          {subtitle}
        </p>

        <div className="mt-8 flex w-full justify-center lg:justify-start">
          <button
            type="button"
            onClick={onButtonClick}
            className={cn(
              'rounded-[16px]',
              'bg-[#0F172A] px-7 py-4',
              'text-[15px] font-bold text-white',
              'shadow-[0_12px_24px_rgba(15,23,42,0.18)]',
              'transition-all duration-200',
              'hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_16px_30px_rgba(37,99,235,0.25)]',
              'active:translate-y-0'
            )}
          >
            {buttonText}
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:w-[430px] lg:max-w-none">
        <div className="relative h-[240px] w-full sm:h-[290px] md:h-[330px] lg:h-[370px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain drop-shadow-[0_24px_30px_rgba(15,23,42,0.16)]"
            priority
          />
        </div>
      </div>
    </section>
  );
};
