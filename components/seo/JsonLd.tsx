// Organization Schema - 회사/웹사이트 정보
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "핀토스몰",
    alternateName: "PinToss Mall",
    url: "https://pin-toss.com",
    logo: "https://pin-toss.com/logo.png",
    description:
      "상품권소액결제, 상품권카드결제를 이용해 컬쳐랜드 문화상품권 구글기프트카드 등 다양한 상품권을 24시간 빠르게 구매할 수 있는 상품권 전문 판매몰",
    address: {
      "@type": "PostalAddress",
      streetAddress: "당감로17, 7동 906호(당감동)",
      addressLocality: "부산진구",
      addressRegion: "부산광역시",
      postalCode: "47190",
      addressCountry: "KR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+82-10-9300-4202",
      email: "admin@pin-toss.com",
      contactType: "customer service",
      availableLanguage: "Korean",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "10:00",
        closes: "18:00",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebSite Schema - 사이트 검색 기능
export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "핀토스몰",
    alternateName: "PinToss Mall",
    url: "https://pin-toss.com",
    description:
      "상품권 휴대폰 소액결제, 신용 카드결제로 24시간 빠르게 구매할 수 있는 상품권 전문몰",
    publisher: {
      "@type": "Organization",
      name: "핀토스몰",
    },
    inLanguage: "ko-KR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Product Schema - 상품 페이지용
interface ProductJsonLdProps {
  name: string;
  description: string;
  image: string;
  sku?: string;
  brand?: string;
  url: string;
  /** 단일 가격 (Offer용) */
  price?: number;
  /** 최저 가격 (AggregateOffer용) */
  lowPrice?: number;
  /** 최고 가격 (AggregateOffer용) */
  highPrice?: number;
  /** 상품 개수 (AggregateOffer용) */
  offerCount?: number;
}

export function ProductJsonLd({
  name,
  description,
  image,
  sku,
  brand = "핀토스몰",
  url,
  price,
  lowPrice,
  highPrice,
  offerCount,
}: ProductJsonLdProps) {
  // AggregateOffer 또는 Offer 결정
  const hasMultipleOffers = lowPrice !== undefined && highPrice !== undefined;

  // 가격 유효 기간 설정 (1년 후)
  const priceValidUntil = new Date();
  priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);
  const priceValidUntilStr = priceValidUntil.toISOString().split('T')[0];

  const offers = hasMultipleOffers
    ? {
        "@type": "AggregateOffer",
        url,
        priceCurrency: "KRW",
        lowPrice: lowPrice.toString(),
        highPrice: highPrice.toString(),
        offerCount: offerCount || 1,
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "핀토스몰",
        },
      }
    : {
        "@type": "Offer",
        url,
        priceCurrency: "KRW",
        price: price?.toString() || "10000",
        priceValidUntil: priceValidUntilStr,
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "핀토스몰",
        },
      };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    sku,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema - FAQ 페이지용
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList Schema - 빵 부스러기 네비게이션
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// LocalBusiness Schema - 지역 비즈니스 정보 (온라인 스토어)
export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": "https://pin-toss.com/#organization",
    name: "핀토스몰",
    url: "https://pin-toss.com",
    image: "https://pin-toss.com/logo.png",
    description:
      "상품권 휴대폰 소액결제, 신용카드 결제로 24시간 빠르게 구매할 수 있는 상품권 전문몰",
    address: {
      "@type": "PostalAddress",
      streetAddress: "당감로17, 7동 906호(당감동)",
      addressLocality: "부산진구",
      addressRegion: "부산광역시",
      postalCode: "47190",
      addressCountry: "KR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+82-10-9300-4202",
      email: "admin@pin-toss.com",
      contactType: "customer service",
      availableLanguage: "Korean",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
    currenciesAccepted: "KRW",
    paymentAccepted: "Credit Card, Mobile Payment",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
