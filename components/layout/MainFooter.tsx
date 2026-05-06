import Link from "next/link";

export function MainFooter() {
  return (
    <footer className="mt-16 border-t border-[#E5E7EB] bg-[#F8FAFC] px-4 py-8 sm:px-8 md:px-16 lg:px-[120px] xl:px-[200px] md:py-12">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8">

        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="w-[104px] h-8 md:w-[142px] md:h-10">
              <img
                src="/logo.png"
                alt="핀토스"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="text-[15px] font-bold text-[#111827] md:text-[20px]">
                핀토스 운영안내
              </p>
              <p className="mt-2 max-w-[620px] text-[12px] leading-[1.7] text-[#6B7280] md:text-[15px]">
                디지털 상품 이용 과정과 결제 흐름 관련 정보를 기반으로 운영되는 안내 페이지입니다.
                이용 전 확인해야 하는 기준과 고객지원 정보를 함께 제공합니다.
              </p>
            </div>
          </div>

          <div className="rounded-[18px] border border-[#DBEAFE] bg-white px-5 py-4 shadow-sm md:min-w-[260px] md:text-right">
            <p className="text-[13px] font-semibold text-[#111827] md:text-[16px]">
              고객지원
            </p>
            <p className="mt-2 text-[22px] font-bold leading-none text-[#0565FF] md:text-[30px]">
              010-9300-4202
            </p>
            <p className="mt-2 text-[12px] text-[#6B7280] md:text-[14px]">
              운영시간 10:00 - 18:00
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-5">
            <p className="mb-3 text-[13px] font-bold text-[#111827] md:text-[16px]">
              운영 정보
            </p>
            <ul className="space-y-2 text-[12px] leading-[1.6] text-[#4B5563] md:text-[14px]">
              <li>상호명 : 핀토스</li>
              <li>대표자 : 조문국</li>
              <li>사업자등록번호 : 590-95-01527</li>
              <li>통신판매업 신고번호 : 2024-부산진-1016</li>
            </ul>
          </div>

          <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-5">
            <p className="mb-3 text-[13px] font-bold text-[#111827] md:text-[16px]">
              문의 정보
            </p>
            <ul className="space-y-2 text-[12px] leading-[1.6] text-[#4B5563] md:text-[14px]">
              <li>이메일 : admin@pintoss.kr</li>
              <li>민원 담당 : 조문국</li>
              <li>연락처 : 010-9300-4202</li>
              <li>대량구매/제휴문의 : admin@pintoss.kr</li>
            </ul>
          </div>

          <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-5">
            <p className="mb-3 text-[13px] font-bold text-[#111827] md:text-[16px]">
              사업장 위치
            </p>
            <p className="text-[12px] leading-[1.7] text-[#4B5563] md:text-[14px]">
              부산광역시 부산진구 당감로17,
              <br />
              7동 906호(당감동)
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#E5E7EB] pt-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[760px] text-[11px] leading-[1.7] text-[#6B7280] md:text-[13px]">
            사이트 내 등록된 상품 및 서비스 관련 문의는 운영 정책 기준에 따라 확인 및 처리됩니다.
            결제 환경과 이용 조건에 따라 일부 서비스 제공 범위가 달라질 수 있습니다.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#4B5563] md:text-[14px]">
            <Link href="/privacy" className="hover:text-[#0565FF] hover:underline">
              개인정보 처리방침
            </Link>
            <Link href="/terms" className="hover:text-[#0565FF] hover:underline">
              이용약관
            </Link>
            <a
              href="https://www.ksdl.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0565FF] underline"
            >
              상품권 판매하기
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] text-[#9CA3AF] md:text-[13px]">
            Copyright © 핀토스. All rights reserved.
          </p>

          <img
            src="/protect-banner.png"
            alt="결제보안 인증"
            className="h-[30px] w-fit md:h-[40px]"
          />
        </div>
      </div>
    </footer>
  );
}
