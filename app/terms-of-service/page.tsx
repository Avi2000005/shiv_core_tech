import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Terms of Service | Shiv Core Tech",
  description: "Terms of Service for Renvora Technologies Private Limited (Shiv Core Tech) governing the provision of custom software development, IT consulting, and website design services in India.",
  path: "/terms-of-service",
});


const sections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing, engaging with, or utilizing any services offered by
        Renvora Technologies Private Limited (&quot;Company,&quot; &quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;), you (&quot;Client&quot; or
        &quot;you&quot;) agree to be bound by these Terms of Service. If you do
        not agree, you must discontinue use of our services immediately.
      </p>
    ),
  },
  {
    id: "scope",
    number: "02",
    title: "Scope of Services",
    content: (
      <p>
        Renvora Technologies Private Limited provides technology-driven
        solutions including web and software development, digital consulting, IT
        services, and related offerings. The specific scope, timelines, and
        deliverables for each engagement shall be defined in a separate project
        agreement or statement of work executed between both parties.
      </p>
    ),
  },
  {
    id: "obligations",
    number: "03",
    title: "Client Obligations",
    content: (
      <>
        <p>You agree to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            Provide accurate, complete, and timely information necessary for
            service delivery.
          </li>
          <li>
            Ensure that all content, materials, and assets submitted to the
            Company do not infringe upon any third-party rights.
          </li>
          <li>
            Refrain from using our services for any unlawful, harmful, or
            fraudulent purpose.
          </li>
          <li>Comply with all applicable laws and regulations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ip",
    number: "04",
    title: "Intellectual Property",
    content: (
      <p>
        All methodologies, tools, frameworks, and proprietary technology
        developed by Renvora Technologies Private Limited remain the exclusive
        property of the Company. Upon receipt of full payment, the Client is
        granted a non-exclusive license to use the agreed deliverables as
        specified in the project agreement. Client-provided content and
        materials remain the property of the Client at all times.
      </p>
    ),
  },
  {
    id: "payment",
    number: "05",
    title: "Payment Terms",
    content: (
      <p>
        Fees and payment schedules are as outlined in the project proposal or
        invoice. The Company reserves the right to suspend services in the event
        of non-payment. All fees are exclusive of applicable GST and statutory
        levies, which shall be charged in accordance with prevailing Indian tax
        laws.
      </p>
    ),
  },
  {
    id: "confidentiality",
    number: "06",
    title: "Confidentiality",
    content: (
      <p>
        Both parties agree to hold all non-public, proprietary, or sensitive
        information exchanged during the engagement in strict confidence.
        Neither party shall disclose such information to any third party without
        prior written consent. This obligation survives the conclusion of any
        engagement.
      </p>
    ),
  },
  {
    id: "liability",
    number: "07",
    title: "Limitation of Liability",
    content: (
      <p>
        To the fullest extent permitted by law, Renvora Technologies Private
        Limited shall not be liable for any indirect, incidental, or
        consequential damages. Total liability shall in no event exceed the fees
        paid by the Client in the three (3) months preceding the claim.
      </p>
    ),
  },
  {
    id: "disclaimer",
    number: "08",
    title: "Disclaimer",
    content: (
      <p>
        All services are provided on an &quot;as is&quot; basis. The Company
        makes no warranties, express or implied, beyond what is explicitly
        stated in a signed project agreement.
      </p>
    ),
  },
  {
    id: "termination",
    number: "09",
    title: "Termination",
    content: (
      <p>
        Either party may terminate an engagement with written notice as
        specified in the applicable agreement. Upon termination, the Client
        shall settle all outstanding dues. The Company reserves the right to
        immediately terminate services in cases of breach, misconduct, or
        non-payment.
      </p>
    ),
  },
  {
    id: "law",
    number: "10",
    title: "Governing Law",
    content: (
      <p>
        These Terms are governed by the laws of India. Any disputes shall be
        subject to the exclusive jurisdiction of the courts in Pune, Maharashtra,
        India.
      </p>
    ),
  },
  {
    id: "amendments",
    number: "11",
    title: "Amendments",
    content: (
      <p>
        The Company reserves the right to update these Terms at any time.
        Clients will be notified of material changes in writing. Continued
        engagement with our services constitutes acceptance of the revised
        Terms.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="relative w-full overflow-x-hidden min-h-screen bg-background text-foreground bg-dots-pattern py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(0,192,255,0.08),transparent_60%)] opacity-40 pointer-events-none" />
      <div className="absolute top-[20%] left-0 -z-10 h-[500px] w-[800px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,122,0,0.04),transparent_60%)] opacity-10 pointer-events-none" />

      <Container size="sm" className="relative z-10 space-y-10">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          aria-label="Go back to home"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 border-b border-border/10 pb-8 text-left">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase">Legal</span>
          <h1 className="typography-h1 font-heading text-foreground">Terms of Service</h1>
          <p className="text-base text-muted-foreground">Renvora Technologies Private Limited</p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground font-mono">
            <span>Effective Date: June 10, 2026</span>
            <span>•</span>
            <span>Last Updated: June 10, 2026</span>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10 text-left font-sans">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="space-y-3 pt-8 border-t border-border/10 first:border-t-0 first:pt-0"
            >
              <h2 className="typography-h2 text-foreground font-heading text-xl md:text-2xl flex items-center gap-4">
                <span className="text-primary font-mono text-sm">{section.number}</span>
                {section.title}
              </h2>
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="space-y-6 text-left font-sans border-t border-border/10 pt-10">
          <h2 className="typography-h2 text-foreground font-heading text-xl md:text-2xl flex items-center gap-4">
            <span className="text-primary font-mono text-sm">12</span>
            Contact
          </h2>
          <div className="bg-muted/30 border border-border/50 rounded-2xl p-6 space-y-4">
            <p className="font-bold text-foreground">
              Renvora Technologies Private Limited
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex gap-2">
                <span className="font-semibold text-foreground w-16">Email:</span>
                <a href="mailto:info@shivcoretech.com" className="text-primary hover:underline">
                  info@shivcoretech.com
                </a>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-foreground w-16">Phone:</span>
                <a href="tel:+918983564489" className="text-primary hover:underline">
                  +91 89835 64489
                </a>
              </div>
              <div className="flex gap-2 items-start">
                <span className="font-semibold text-foreground w-16 shrink-0">Address:</span>
                <span className="leading-relaxed">
                 1st Floor, Auto Cars Compound, Adalat Road, Kranti Chawk, Chhatrapati Sambhaji Nagar, Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-xs text-muted-foreground/60 italic text-center pt-8 border-t border-border/5">
          By engaging our services, you confirm that you have read and agreed to
          these Terms of Service.
        </p>
      </Container>
    </main>
  );
}