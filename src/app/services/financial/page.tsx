"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Banknote, CheckCircle, CreditCard, Smartphone, BarChart3, ShieldCheck, Users, FileText } from "lucide-react";
import { ContactForm } from "@/components/forms";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionHeading } from "@/components/ui";

const FEATURES = [
  {
    title: "SACCO Core Banking Systems",
    bullets: ["Complete member management", "Share capital tracking"],
    icon: Banknote
  },
  {
    title: "Loan Management & Processing",
    bullets: ["Automated loan approval", "Repayment scheduling"],
    icon: CreditCard
  },
  {
    title: "Mobile Banking Integration",
    bullets: ["USSD & mobile apps", "M-Pesa integration"],
    icon: Smartphone
  },
  {
    title: "Financial Reporting & Analytics",
    bullets: ["Regulatory reports", "Custom dashboards"],
    icon: BarChart3
  },
];

const BENEFITS = [
  { title: "Compliance Ready", description: "Meet all regulatory requirements", icon: ShieldCheck },
  { title: "Member Self-Service", description: "Mobile & web access for members", icon: Users },
  { title: "Automated Processes", description: "Reduce manual errors significantly", icon: FileText },
  { title: "Real-time Reports", description: "Instant financial insights", icon: BarChart3 },
];

export default function FinancialPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#000D1F] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ScrollReveal direction="left" className="flex-1 text-white">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-white/10 text-white">
                Financial Systems
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Financial & SACCO Systems
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Comprehensive financial management solutions designed for SACCOs, microfinance institutions, and cooperative societies.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="flex-1">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                alt="Financial Systems"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Core Features"
            title="Complete Financial Solutions"
            description="Everything your financial institution needs to thrive"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-[#001F3F] hover:border-[#001F3F] transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 group-hover:bg-white/10 flex items-center justify-center flex-shrink-0 transition-colors">
                      <feature.icon className="w-7 h-7 text-[#D4AF37] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#001F3F] group-hover:text-white mb-3 transition-colors">
                        {feature.title}
                      </h3>
                      <ul className="space-y-2">
                        {feature.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600 group-hover:text-gray-200 transition-colors">
                            <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                            <span className="text-sm">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Key Benefits"
            title="Why Choose Our Solutions"
            description="Trusted by leading financial institutions"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:bg-[#001F3F] hover:border-[#001F3F] transition-all duration-300 cursor-pointer text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 group-hover:bg-white/10 flex items-center justify-center mx-auto mb-4 transition-colors">
                    <benefit.icon className="w-7 h-7 text-[#D4AF37] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[#001F3F] group-hover:text-white mb-2 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200 text-sm transition-colors">
                    {benefit.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Portfolio"
            title="Financial Solutions"
            description="Powering financial institutions across East Africa"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" alt="Financial Analysis" width={400} height={300} className="w-full h-56 object-cover" />
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80" alt="Banking" width={400} height={300} className="w-full h-56 object-cover" />
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" alt="Mobile Banking" width={400} height={300} className="w-full h-56 object-cover" />
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Get Started"
            title="Request a Consultation"
            description="Let us help you modernize your financial operations."
          />
          <ScrollReveal>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <ContactForm serviceName="Financial & SACCO Systems" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

