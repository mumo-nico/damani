import { Metadata } from "next";
import { ContactSection, CTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact Us | Damani Nexus Limited",
  description:
    "Get in touch with Damani Nexus Limited. Contact us for consultations, project inquiries, or to learn more about our technology solutions.",
};

export default function ContactPage() {
  return (
    <div className="pt-28">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#000D1F] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business with technology? We&apos;re here to help.
          </p>
        </div>
      </section>

      <ContactSection />
      <CTA />
    </div>
  );
}

