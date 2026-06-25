"use client";

import React from "react";
import { usePathname } from "next/navigation";

export function StructuredData() {
  const pathname = usePathname();

  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.shivcoretech.com/#organization",
    "name": "Shiv Core Tech",
    "alternateName": "Renvora Technologies Private Limited",
    "url": "https://www.shivcoretech.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.shivcoretech.com/logo.webp",
      "caption": "Shiv Core Tech Logo"
    },
    "sameAs": [
      "https://www.linkedin.com/company/shiv-core-tech"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8983564489",
      "contactType": "customer service",
      "email": "info@shivcoretech.com",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, Auto Cars Compound, Adalat Road, Kranti Chawk",
      "addressLocality": "Chhatrapati Sambhaji Nagar",
      "addressRegion": "Maharashtra",
      "postalCode": "431001",
      "addressCountry": "IN"
    }
  };

  // 2. Local Business & Professional Service Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.shivcoretech.com/#localbusiness",
    "name": "Shiv Core Tech",
    "image": "https://www.shivcoretech.com/og-image.png",
    "url": "https://www.shivcoretech.com",
    "telephone": "+918983564489",
    "email": "info@shivcoretech.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, Auto Cars Compound, Adalat Road, Kranti Chawk",
      "addressLocality": "Chhatrapati Sambhaji Nagar",
      "addressRegion": "Maharashtra",
      "postalCode": "431001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.8703,
      "longitude": 75.3214
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/shiv-core-tech"
    ]
  };

  // 3. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.shivcoretech.com/#website",
    "name": "Shiv Core Tech",
    "url": "https://www.shivcoretech.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.shivcoretech.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // 4. Services Schema
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Solutions & Software Development Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shiv Core Tech",
      "url": "https://www.shivcoretech.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Shiv Core Tech Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development Company in Chhatrapati Sambhajinagar",
            "description": "Custom website development, dynamic React/Next.js platforms, responsive corporate web design, and search-optimized SaaS web apps."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Development Company in Chhatrapati Sambhajinagar",
            "description": "Custom enterprise software development, ERP/CRM development, inventory systems, database design, and billing software solutions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development Company in Chhatrapati Sambhajinagar",
            "description": "Cross-platform mobile apps using Flutter and React Native, and high-performance native iOS and Android apps."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Development & Chatbot Solutions",
            "description": "Next-gen AI solutions, LLM RAG pipelines, OpenAI API integrations, conversational AI chatbots, and business process automation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Consulting & Cloud Solutions",
            "description": "Expert enterprise technology strategy, cloud architecture migration, server management (AWS/Vercel), and cyber security planning."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Digital Marketing Services",
            "description": "Technical search engine optimization, local SEO, content strategy, Google Business Profile optimization, and lead generation campaigns."
          }
        }
      ]
    }
  };

  // 5. FAQ Schema (matching UI FAQs)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best IT company in Chhatrapati Sambhajinagar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shiv Core Tech is recognized as one of the best IT and custom software development companies in Chhatrapati Sambhajinagar, Maharashtra, delivering premium website development, mobile apps, ERP software, and cutting-edge AI solutions."
        }
      },
      {
        "@type": "Question",
        "name": "What web development technologies do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in modern, high-performance web development technologies including Next.js, React.js, TypeScript, Node.js, Express, Tailwind CSS, PHP, Laravel, PostgreSQL, and MongoDB."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build custom ERP or CRM software for local businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are a leading custom software development company building specialized business automation tools such as custom ERP software, CRM platforms, billing software, inventory systems, school management portals, and HRMS systems."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide AI integration and chatbot development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we build and deploy custom AI solutions, including OpenAI integration, intelligent AI chatbots, machine learning model integration, and automated semantic search engines (RAG pipelines)."
        }
      },
      {
        "@type": "Question",
        "name": "How does local SEO help my business in Chhatrapati Sambhajinagar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local SEO ensures your business ranks at the top of local search queries, Google Maps, and search terms like 'near me'. We optimize your website code, headings, loading speed, and structured schemas to dominate local rankings in Chhatrapati Sambhajinagar and Maharashtra."
        }
      }
    ]
  };

  // 6. Breadcrumb Schema List
  const breadcrumbElements = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.shivcoretech.com"
    }
  ];

  if (pathname === "/careers") {
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Careers",
      "item": "https://www.shivcoretech.com/careers"
    });
  } else if (pathname === "/privacy-policy") {
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Privacy Policy",
      "item": "https://www.shivcoretech.com/privacy-policy"
    });
  } else if (pathname === "/terms-of-service") {
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Terms of Service",
      "item": "https://www.shivcoretech.com/terms-of-service"
    });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbElements
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {pathname === "/" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
