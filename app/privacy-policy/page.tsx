import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Privacy Policy | Shiv Core Tech",
  description: "Privacy Policy for Renvora Technologies Private Limited (Shiv Core Tech). Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative w-full overflow-x-hidden min-h-screen bg-background text-foreground bg-dots-pattern py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(0,192,255,0.08),transparent_60%)] opacity-40 pointer-events-none" />
      <div className="absolute top-[20%] left-0 -z-10 h-[500px] w-[800px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,122,0,0.04),transparent_60%)] opacity-10 pointer-events-none" />

      <Container size="sm" className="relative z-10 space-y-10">

        {/* Back Arrow */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </Link>
        
        {/* Title Header */}
        <div className="space-y-4 border-b border-border/10 pb-8 text-left">
          <h1 className="typography-h1 font-heading text-foreground">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground font-mono">
            Effective Date: 8th day of June, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-4 text-left font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
          <p>
            At Renvora Technologies Private Limited (&quot;Renvora Technologies Private Limited&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p>
            By accessing or using our website, you agree to the practices described in this Privacy Policy. If you do not agree with this Policy, please do not use our website or services.
          </p>
        </div>

        {/* Section: Information We Collect */}
        <div className="space-y-4 text-left font-sans">
          <h2 className="typography-h2 text-foreground font-heading text-xl md:text-2xl">
            Information We Collect
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            We may collect personal information that you voluntarily provide to us, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Project requirements and inquiries</li>
            <li>Any other information you choose to provide through our contact forms or communications</li>
          </ul>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
            We may also automatically collect certain non-personal information such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website addresses</li>
          </ul>
        </div>

        {/* Section: How We Use Your Information */}
        <div className="space-y-4 text-left font-sans">
          <h2 className="typography-h2 text-foreground font-heading text-xl md:text-2xl">
            How We Use Your Information
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            We may use the information collected for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li>To respond to inquiries and provide customer support</li>
            <li>To communicate regarding our services and project discussions</li>
            <li>To improve our website, services, and user experience</li>
            <li>To send service-related updates and important notices</li>
            <li>To analyze website traffic and usage trends</li>
            <li>To comply with legal obligations and enforce our policies</li>
            <li>To send promotional communications, newsletters, or updates, where permitted by law</li>
          </ul>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
            You may opt out of marketing communications at any time by following the unsubscribe instructions included in such communications.
          </p>
        </div>

        {/* Section: Cookies and Tracking Technologies */}
        <div className="space-y-4 text-left font-sans">
          <h2 className="typography-h2 text-foreground font-heading text-xl md:text-2xl">
            Cookies and Tracking Technologies
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Our website may use cookies and similar technologies to enhance user experience, analyze website performance, and understand visitor preferences.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            You may choose to disable cookies through your browser settings; however, doing so may affect certain functionalities of the website.
          </p>
        </div>

        {/* Section: Data Sharing and Disclosure */}
        <div className="space-y-4 text-left font-sans">
          <h2 className="typography-h2 text-foreground font-heading text-xl md:text-2xl">
            Data Sharing and Disclosure
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Renvora Technologies Private Limited does not sell, rent, or trade your personal information to third parties.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            We may share your information with trusted service providers or partners solely for business operations, including website hosting, analytics, communication tools, or legal compliance, provided they maintain appropriate confidentiality and security standards.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            We may also disclose information if required by applicable law, regulation, court order, or governmental request.
          </p>
        </div>

        {/* Section: Data Security */}
        <div className="space-y-4 text-left font-sans">
          <h2 className="typography-h2 text-foreground font-heading text-xl md:text-2xl">
            Data Security
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.
          </p>
        </div>

        {/* Section: Data Retention */}
        <div className="space-y-4 text-left font-sans">
          <h2 className="typography-h2 text-foreground font-heading text-xl md:text-2xl">
            Data Retention
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
          </p>
        </div>

        {/* Section: Third-Party Links */}
        <div className="space-y-4 text-left font-sans">
          <h2 className="typography-h2 text-foreground font-heading text-xl md:text-2xl">
            Third-Party Links
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such websites. We encourage you to review their privacy policies before providing any personal information.
          </p>
        </div>

        {/* Section: Your Rights */}
        <div className="space-y-4 text-left font-sans">
          <h2 className="typography-h2 text-foreground font-heading text-xl md:text-2xl">
            Your Rights
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Subject to applicable laws, you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict certain processing activities</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
            To exercise any of these rights, please contact us using the details provided below.
          </p>
        </div>

        {/* Section: Children's Privacy */}
        <div className="space-y-4 text-left font-sans">
          <h2 className="typography-h2 text-foreground font-heading text-xl md:text-2xl">
            Children&apos;s Privacy
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Our services are not directed toward individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that such information has been collected, we will take reasonable steps to delete it.
          </p>
        </div>

        {/* Section: Changes to This Privacy Policy */}
        <div className="space-y-4 text-left font-sans">
          <h2 className="typography-h2 text-foreground font-heading text-xl md:text-2xl">
            Changes to This Privacy Policy
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Renvora Technologies Private Limited reserves the right to update or modify this Privacy Policy at any time to reflect changes in legal requirements, business practices, or technological developments.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Any updates will be posted on this page along with the revised effective date.
          </p>
        </div>

        {/* Section: Contact Us */}
        <div className="space-y-4 text-left font-sans border-t border-border/10 pt-8">
          <h2 className="typography-h2 text-foreground font-heading text-xl md:text-2xl">
            Contact Us
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            If you have any questions regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="font-bold text-foreground">Renvora Technologies Private Limited</p>
            <p>Email: <a href="mailto:info@shivcoretech.com" className="text-primary hover:underline">info@shivcoretech.com</a></p>
            <p>Website: <a href="https://www.shivcoretech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.shivcoretech.com</a></p>
            <p>
              Address: 1st Floor, Auto Cars Compound, Adalat Road, Kranti Chawk, Chhatrapati Sambhaji Nagar, Maharashtra, India
            </p>
          </div>
          <p className="text-xs text-muted-foreground/60 italic pt-4">
            By using our website and services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
          </p>
        </div>

      </Container>
    </main>
  );
}
