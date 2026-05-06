import type { Metadata } from "next";
import { Toaster } from "sonner";

import { QueryProvider } from "@/lib/providers/query-provider";
import { AuthProvider } from "@/components/auth";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo";

import { pretendard } from "../lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pintoss.kr"),
  title: {
    default: "소액결제 현금화 | 상품권 구매후 판매하는 방법",
    template: "%s | 핀토스몰",
  },
  description:
    "소액결제 현금화 과정에서 상품권 구매와 판매가 어떤 구조로 이어지는지 전체 흐름을 중심으로 정리했습니다. 단계별 진행 방식과 함께 이용 전 확인해야 할 주요 기준까지 이해할 수 있습니다.",
  keywords: [
    "소액결제 현금화",
    "소액결제현금화",
    "휴대폰 소액결제",
    "핸드폰 소액결제",
    "상품권소액결제",
    "상품권 소액결제",
    "소액결제 상품권",
    "휴대폰소액결제 상품권",
    "핸드폰소액결제 상품권",
    "상품권카드결제",
    "상품권 카드결제",
    "상품권 휴대폰결제",
    "핸드폰 상품권 구매",
    "휴대폰 상품권 구매",
    "컬쳐랜드",
    "문화상품권",
    "도서문화상품권",
    "구글기프트카드",
    "상품권 자동발송",
    "상품권 실시간 구매",
    "신용카드 상품권결제",
    "휴대폰 상품권결제",
    "핀토스몰",
    "상품권",
    "기프트카드",
    "모바일상품권",
    "온라인상품권",
    "기프티콘",
    "선물하기",
    "소액결제 현금화",
    "휴대폰결제 상품권",
  ],
  authors: [{ name: "핀토스몰" }],
  creator: "핀토스몰",
  publisher: "핀토스몰",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://pintoss.kr",
  },
  verification: {
    google: "Ufn_qRw-2khputRFhjfnA1opJ5zGk3NuUvhJYn6KO2E",
    other: {
      "naver-site-verification": "939e1d010661dc030c56e6c5ce520f51527e5efd",
    },
  },
  openGraph: {
    title: "소액결제 현금화 | 상품권 구매후 판매하는 방법",
    description:
      "소액결제 현금화 과정에서 상품권 구매와 판매가 어떤 구조로 이어지는지 전체 흐름을 중심으로 정리했습니다. 단계별 진행 방식과 함께 이용 전 확인해야 할 주요 기준까지 이해할 수 있습니다.",
    url: "https://pintoss.kr",
    siteName: "핀토스몰 PinToss Mall",
    images: [
      {
        url: "https://pintoss.kr/og-image.png",
        width: 1200,
        height: 630,
        alt: "핀토스몰 - 상품권 전문 판매몰",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "소액결제 현금화 | 상품권 구매후 판매하는 방법",
    description:
      "소액결제 현금화 과정에서 상품권 구매와 판매가 어떤 구조로 이어지는지 전체 흐름을 중심으로 정리했습니다. 단계별 진행 방식과 함께 이용 전 확인해야 할 주요 기준까지 이해할 수 있습니다.",
    images: ["https://pintoss.kr/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Hero 이미지 preload (LCP 최적화) */}
        <link
          rel="preload"
          as="image"
          href="/Group 14.png"
          type="image/png"
          fetchPriority="high"
        />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className={`${pretendard.variable}`}>
        <div className="flex min-h-screen flex-col">
          <QueryProvider>
            <AuthProvider>
              {children}
              <Toaster position="top-center" richColors offset={80} />
            </AuthProvider>
          </QueryProvider>
        </div>
      </body>
    </html>
  );
}
