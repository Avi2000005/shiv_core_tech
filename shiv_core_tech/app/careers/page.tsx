import React from "react";
import { Careers } from "@/components/ui/careers";
import { Footer } from "@/components/ui/footer";

export const metadata = {
  title: "Careers | Shiv Core Tech",
  description: "Join the core of innovation at Shiv Core Tech. Explore our current job openings and apply to join our engineering and design teams.",
};

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
