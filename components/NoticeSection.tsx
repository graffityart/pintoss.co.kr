import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { noticesQuery } from "@/sanity/lib/queries";
import type { Notice } from "@/sanity/types";

export const revalidate = 10; // 10초마다 재검증

export async function NoticeSection() {
  const notices = await client.fetch<Notice[]>(
    noticesQuery(3),
    {},
    { next: { revalidate: 10 } }
  );

  return (
    <div className="bg-[#E6F0FF] rounded-[10px] p-5 md:p-10">
      <div className="text-center mb-4 md:mb-8">
        <p className="text-[14px] font-medium text-[#0565FF] mb-1 md:text-[18px] md:mb-2">
          NOTICE
        </p>
        <p className="text-[20px] font-bold text-[#212121] md:text-[32px]">
          공지사항
        </p>
      </div>
      <div className="space-y-3 md:space-y-6">
        {notices.length > 0 ? (
          notices.map((notice) => (
            <Link
              key={notice._id}
              href={`/notice/${notice.slug}`}
              className="bg-white rounded-[12px] px-4 py-3 flex items-center gap-3 md:px-8 md:py-6 md:gap-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-[12px] font-medium text-[#0565FF] whitespace-nowrap md:text-[18px]">
                {new Date(notice.createdAt).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }).replace(/\. /g, ". ")}
              </span>
              <span className="text-[12px] font-medium text-black truncate md:text-[18px]">
                {notice.title}
              </span>
            </Link>
          ))
        ) : (
          <div className="bg-white rounded-[12px] px-4 py-3 flex items-center gap-3 md:px-8 md:py-6 md:gap-4">
            <span className="text-[12px] font-medium text-gray-400 md:text-[18px]">
              등록된 공지사항이 없습니다.
            </span>
          </div>
        )}
      </div>
      <div className="mt-4 text-center md:mt-8">
        <Link
          href="/notice"
          className="inline-block bg-[#0565FF] text-white px-6 py-3 rounded-[10px] text-[16px] font-semibold md:px-8 md:py-4 md:text-[24px] hover:bg-[#0454DD] transition-colors"
        >
          더보기
        </Link>
      </div>
    </div>
  );
}
