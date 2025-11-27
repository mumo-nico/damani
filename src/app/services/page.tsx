import { Metadata } from "next";
import { Services, TechServices, IoTProducts, CTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Our Services | Damani Nexus Limited",
  description:
    "Explore our comprehensive technology solutions including ERP systems, financial software, GIS services, IoT solutions, and more.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#000D1F] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Comprehensive Technology Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Designed to transform your business operations and drive growth
          </p>
        </div>
      </section>

      <Services />
      <TechServices />
      <IoTProducts />
      <CTA />
    </div>
  );
}

