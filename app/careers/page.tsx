import React from "react";
import { Careers } from "@/components/ui/careers";
import { Footer } from "@/components/ui/footer";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Careers | Software & Web Developer Jobs in Chhatrapati Sambhajinagar",
  description: "Join the core of innovation at Shiv Core Tech in Chhatrapati Sambhajinagar. Explore our current job openings and apply to join our engineering, custom software development, and web design teams.",
  path: "/careers",
});


export default function CareersPage() {
  return (
    <main className="relative w-full overflow-x-hidden min-h-screen bg-background text-foreground bg-dots-pattern pt-8">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(0,192,255,0.08),transparent_60%)] opacity-40 pointer-events-none" />
      <div className="absolute top-[20%] left-0 -z-10 h-[500px] w-[800px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,122,0,0.04),transparent_60%)] opacity-10 pointer-events-none" />

      {/* Premium Careers Section */}
      <Careers />

      {/* Premium Footer Section */}
      <Footer />
    </main>
  );
}
