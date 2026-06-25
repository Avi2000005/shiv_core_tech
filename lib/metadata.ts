import { Metadata } from "next";

export function constructMetadata({
  title = "Shiv Core Tech | Best IT & Software Development Company in Chhatrapati Sambhajinagar",
  description = "Shiv Core Tech is the top IT and software development company in Chhatrapati Sambhajinagar, Maharashtra. We deliver premium custom software engineering, website development, cloud architecture, and AI chatbot integration services across India.",
  image = "/og-image.png",
  icons = "/favicon.ico",
  noIndex = false,
  path = "",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  path?: string;
} = {}): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = `https://www.shivcoretech.com${cleanPath === "/" ? "" : cleanPath}`;

  return {
    title: {
      default: title,
      template: `%s | Shiv Core Tech`,
    },
    description,
    keywords: [
      "Shivcore Tech",
      "Shivcore Technologies",
      "Best IT Company in Chhatrapati Sambhajinagar",
      "Top IT Company in Chhatrapati Sambhajinagar",
      "Software Company in Chhatrapati Sambhajinagar",
      "Website Development Company in Chhatrapati Sambhajinagar",
      "Web Design Company in Chhatrapati Sambhajinagar",
      "Mobile App Development Company in Chhatrapati Sambhajinagar",
      "AI Development Company in Chhatrapati Sambhajinagar",
      "ERP Development Company in Chhatrapati Sambhajinagar",
      "CRM Development Company in Chhatrapati Sambhajinagar",
      "SEO Company in Chhatrapati Sambhajinagar",
      "Digital Marketing Company in Chhatrapati Sambhajinagar",
      "Best IT Company in Maharashtra",
      "Best IT Company in India",
      "Software Development Company in Maharashtra",
      "Website Development Company in India",
      "SaaS Development",
      "Custom Software Development",
      "Enterprise Software Development",
      "AI Solutions",
      "AI Chatbot Development",
      "IT Consulting",
      "Cloud Solutions",
      "Business Automation",
    ],
    authors: [
      {
        name: "Shiv Core Tech",
        url: "https://www.shivcoretech.com",
      },
    ],
    creator: "Shiv Core Tech",
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: "Shiv Core Tech",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - Shiv Core Tech`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@shivcore_tech",
    },
    icons,
    metadataBase: new URL("https://www.shivcoretech.com"),
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

