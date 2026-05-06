import { Suspense } from "react";
import Image from "next/image";
import { HeroSectionWrapper } from "@/components/HeroSectionWrapper";
import { FloatingNav } from "@/components/FloatingNav";
import { MainHeader, MainFooter } from "@/components/layout";
import { NoticeSection } from "@/components/NoticeSection";
import { FAQSection } from "@/components/FAQSection";
import { PopularProductsSection } from "@/components/PopularProductsSection";
import { AllProductsSection } from "@/components/AllProductsSection";
import { NoticePopup } from "@/components/NoticePopup";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 공지 팝업 */}
      <NoticePopup />

      {/* Header */}
      <MainHeader />

      {/* 플로팅 네비게이션 (데스크톱만) */}
      <FloatingNav />

      {/* Section 1: Hero Section */}
      <section
        id="hero"
        className="bg-[#FAFAFA] px-4 py-8 sm:px-8 md:px-16 lg:px-[120px] xl:px-[200px] md:py-16 lg:py-[73px]"
      >
        <HeroSectionWrapper />
      </section>

      {/* Section 2: 자주 찾는 상품 */}
      <section className="bg-white px-4 pt-10 pb-6 sm:px-8 md:px-16 lg:px-[120px] xl:px-[200px] md:pt-16 md:pb-8 lg:pt-20 lg:pb-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-[18px] font-semibold text-[#212121] md:text-[24px]">
            자주 찾는 상품
          </h2>
        </div>
        <Suspense
          fallback={
            <div className="flex gap-4 md:gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-[10px] w-[150px] h-[220px] animate-pulse md:w-[236px] md:h-[280px]"
                />
              ))}
            </div>
          }
        >
          <PopularProductsSection />
        </Suspense>
      </section>

      {/* Section 3: 전체 상품 */}
      <section
        id="products"
        className="bg-white px-4 py-6 sm:px-8 md:px-16 lg:px-[120px] xl:px-[200px] md:py-10 lg:py-12"
      >
        <Suspense
          fallback={
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-[10px] h-[150px] animate-pulse md:h-[180px] lg:h-[200px]"
                />
              ))}
            </div>
          }
        >
          <AllProductsSection />
        </Suspense>
      </section>

      {/* Section 4: 안전한 결제 보장 */}
      <section
        id="safety"
        className="bg-white px-4 py-10 sm:px-8 md:px-16 lg:px-[120px] xl:px-[200px] md:py-16 lg:py-20"
      >
        <h2 className="text-[20px] font-bold text-[#212121] mb-6 md:text-[28px] lg:text-[32px] md:mb-8 lg:mb-10">
          언제나 안전한 결제를 보장할게요
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:grid-cols-4 lg:gap-8">
          <div className="bg-[#FAFAFA] rounded-[10px] p-4 flex flex-col items-center text-center md:p-6">
            <div className="relative w-[80px] h-[80px] mb-2 md:w-[140px] md:h-[140px]">
              <Image
                src="/Rectangle 55.png"
                alt="24시 발송 시스템"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-[14px] font-semibold text-[#424242] mb-1 md:text-[20px] md:mb-2">
              24시 발송 시스템
            </p>
            <p className="text-[11px] text-[#9E9E9E] leading-[1.4] md:text-[16px]">
              자동화 시스템으로 24시 실시간으로 PIN번호를 받아 보실 수 있습니다.
            </p>
          </div>
          <div className="bg-[#FAFAFA] rounded-[10px] p-4 flex flex-col items-center text-center md:p-6">
            <div className="relative w-[80px] h-[80px] mb-2 md:w-[140px] md:h-[140px]">
              <Image
                src="/lock.png"
                alt="보안 시스템 작동중"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-[14px] font-semibold text-[#424242] mb-1 md:text-[20px] md:mb-2">
              보안 시스템 작동중
            </p>
            <p className="text-[11px] text-[#9E9E9E] leading-[1.4] md:text-[16px]">
              실시간 발권된 상품권과 완벽한 보안 시스템 작동으로 걱정없이 이용 하세요.
            </p>
          </div>
          <div className="bg-[#FAFAFA] rounded-[10px] p-4 flex flex-col items-center text-center md:p-6">
            <div className="relative w-[80px] h-[80px] mb-2 md:w-[140px] md:h-[140px]">
              <Image
                src="/shield.png"
                alt="안전한 상품권"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-[14px] font-semibold text-[#424242] mb-1 md:text-[20px] md:mb-2">
              안전한 상품권
            </p>
            <p className="text-[11px] text-[#9E9E9E] leading-[1.4] md:text-[16px]">
              주문이 접수되면 사용 이력이 없는 상품권을 기준으로 발급 절차가 진행됩니다.
            </p>
          </div>
          <div className="bg-[#FAFAFA] rounded-[10px] p-4 flex flex-col items-center text-center md:p-6">
            <div className="relative w-[80px] h-[80px] mb-2 md:w-[140px] md:h-[140px]">
              <Image
                src="/card.png"
                alt="다양한 결제수단"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-[14px] font-semibold text-[#424242] mb-1 md:text-[20px] md:mb-2">
              다양한 결제수단
            </p>
            <p className="text-[11px] text-[#9E9E9E] leading-[1.4] md:text-[16px]">
              카드와 휴대폰 결제를 한 화면에서 확인할 수 있어, 별도 페이지 이동 없이 이용 흐름을 이어갈 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: 공지 및 도움말 */}
      <section
        id="notice"
        className="bg-white px-4 py-10 sm:px-8 md:px-16 lg:px-[120px] xl:px-[200px] md:py-16 lg:py-20"
      >
        <h2 className="text-[18px] font-semibold text-[#212121] mb-4 md:text-[24px] md:mb-6">
          공지 및 도움말
        </h2>

        {/* 제휴 문의 배너 - 임시 주석처리 */}
        {/* <div className="mb-6 md:mb-8">
          <img
            src="/image 25.png"
            alt="상품권 판매 제휴 문의"
            className="w-full h-auto object-cover rounded-[10px]"
          />
        </div> */}

        {/* 공지사항 & FAQ */}
        <div
          className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-8"
          id="faq"
        >
          {/* 공지사항 */}
          <Suspense
            fallback={
              <div className="bg-[#E6F0FF] rounded-[10px] p-5 md:p-10 animate-pulse">
                <div className="text-center mb-4 md:mb-8">
                  <p className="text-[14px] font-medium text-[#0565FF] mb-1 md:text-[18px] md:mb-2">
                    NOTICE
                  </p>
                  <p className="text-[20px] font-bold text-[#212121] md:text-[32px]">
                    공지사항
                  </p>
                </div>
                <div className="space-y-3 md:space-y-6">
                  <div className="bg-gray-100 rounded-[12px] h-[48px] md:h-[72px]" />
                  <div className="bg-gray-100 rounded-[12px] h-[48px] md:h-[72px]" />
                </div>
              </div>
            }
          >
            <NoticeSection />
          </Suspense>

          {/* 자주 묻는 질문 */}
          <Suspense
            fallback={
              <div className="bg-[#FAFAFA] rounded-[10px] p-5 md:p-10 animate-pulse">
                <div className="text-center mb-4 md:mb-8">
                  <p className="text-[14px] font-medium text-[#03C3FF] mb-1 md:text-[18px] md:mb-2">
                    FAQ
                  </p>
                  <p className="text-[20px] font-bold text-[#212121] md:text-[32px]">
                    자주 묻는 질문
                  </p>
                </div>
                <div className="space-y-3 md:space-y-6">
                  <div className="bg-gray-100 rounded-[12px] h-[48px] md:h-[72px]" />
                </div>
              </div>
            }
          >
            <FAQSection />
          </Suspense>
        </div>
      </section>

      {/* Footer */}
      <MainFooter />
    </div>
  );
}
