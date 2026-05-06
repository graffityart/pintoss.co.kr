import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { faqsQuery } from "@/sanity/lib/queries";
import type { FAQ } from "@/sanity/types";

export const revalidate = 10; // 10초마다 재검증

export async function FAQSection() {
  const faqs = await client.fetch<FAQ[]>(
    faqsQuery(3),
    {},
    { next: { revalidate: 10 } }
  );

  return (
    <div className="bg-[#FAFAFA] rounded-[10px] p-5 md:p-10">
      <div className="text-center mb-4 md:mb-8">
        <p className="text-[14px] font-medium text-[#03C3FF] mb-1 md:text-[18px] md:mb-2">
          FAQ
        </p>
        <p className="text-[20px] font-bold text-[#212121] md:text-[32px]">
          자주 묻는 질문
        </p>
      </div>
      <div className="space-y-3 md:space-y-6">
        {faqs.length > 0 ? (
          faqs.map((faq) => (
            <Link
              key={faq._id}
              href={`/faq/${faq.slug?.current || faq._id}`}
              className="bg-white rounded-[12px] px-4 py-3 flex items-center gap-3 md:px-8 md:py-6 md:gap-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-[12px] font-medium text-[#03C3FF] md:text-[18px]">
                Q.
              </span>
              <span className="text-[12px] font-medium text-black truncate md:text-[18px]">
                {faq.question}
              </span>
            </Link>
          ))
        ) : (
          <div className="bg-white rounded-[12px] px-4 py-3 flex items-center gap-3 md:px-8 md:py-6 md:gap-4">
            <span className="text-[12px] font-medium text-gray-400 md:text-[18px]">
              등록된 FAQ가 없습니다.
            </span>
          </div>
        )}
      </div>
      <div className="mt-4 text-center md:mt-8">
        <Link
          href="/faq"
          className="inline-block bg-[#03C3FF] text-white px-6 py-3 rounded-[10px] text-[16px] font-semibold md:px-8 md:py-4 md:text-[24px] hover:bg-[#02AEDF] transition-colors"
        >
          더보기
        </Link>
      </div>
    </div>
  );
}
