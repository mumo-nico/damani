import { Metadata } from "next";
import { AboutSection, Team, CTA, IndustriesServed } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us | Damani Nexus Limited",
  description:
    "Learn about Damani Nexus Limited - your trusted technology partner in East Africa. Discover our vision, mission, and the team behind our success.",
};

export default function AboutPage() {
  return (
    <div className="pt-28">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#000D1F] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tech for Every Terrain
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Innovative solutions for modern challenges
          </p>
        </div>
      </section>

      <AboutSection />
      <IndustriesServed />
      <Team />
      <CTA />
    </div>
  );
}

