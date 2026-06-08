import { Metadata } from "next";

export function constructMetadata({
  title = "ShivCore Technologies | Enterprise IT Solutions & Consulting",
  description = "ShivCore Technologies delivers premium enterprise IT solutions, custom software engineering, cloud architecture, and cybersecurity services to power digital acceleration.",
  image = "/og-image.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ShivCore Technologies`,
    },
    description,
    keywords: [
      "Enterprise IT Solutions",
      "Software Development",
      "Cloud Architecture",
      "Cybersecurity",
      "IT Consulting",
      "Digital Transformation",
      "Custom Software",
      "Tech Integration",
    ],
    authors: [
      {
        name: "ShivCore Technologies",
        url: "https://shivcore.tech",
      },
    ],
    creator: "ShivCore Technologies",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://shivcore.tech",
      title,
      description,
      siteName: "ShivCore Technologies",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "ShivCore Technologies - Premium Enterprise IT Solutions",
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
    metadataBase: new URL("https://shivcore.tech"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
