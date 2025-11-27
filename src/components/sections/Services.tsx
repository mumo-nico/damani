"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor,
  Building2,
  Banknote,
  Map,
  Satellite,
  Cpu,
  Sun,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Card, SectionHeading } from "@/components/ui";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Building2,
  Banknote,
  Map,
  Satellite,
  Cpu,
  Sun,
};

function ServiceCard({ service, isWide = false }: { service: typeof SERVICES[0]; isWide?: boolean }) {
  const Icon = iconMap[service.icon] || Monitor;
  return (
    <Card className={`h-full group cursor-pointer ${isWide ? 'md:col-span-1' : ''}`}>
      <div className="flex flex-col h-full">
        <div className="w-14 h-14 rounded-xl bg-[#001F3F]/10 flex items-center justify-center mb-5 group-hover:bg-[#001F3F] transition-colors">
          <Icon className="w-7 h-7 text-[#001F3F] group-hover:text-white transition-colors" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#001F3F] transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-600 mb-5 flex-grow">
          {service.description}
        </p>

        <ul className="space-y-2 mb-5">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center text-sm text-gray-700"
            >
              <span className="w-1.5 h-1.5 bg-[#001F3F] rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href={`/services/${service.id}`}
          className="inline-flex items-center text-[#D4AF37] font-medium group/link"
        >
          Learn more
          <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}

export default function Services() {
  // Split services for 2-3-2 layout
  const topRow = SERVICES.slice(0, 2);      // First 2
  const middleRow = SERVICES.slice(2, 5);   // Next 3
  const bottomRow = SERVICES.slice(5, 7);   // Last 2

  return (
    <section className="py-12 md:py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Services"
          title="Comprehensive Technology Solutions"
          description="Designed to transform your business operations and drive growth"
        />

        <div className="space-y-6">
          {/* Top Row - 2 Cards (wider) */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topRow.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} isWide />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Middle Row - 3 Cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {middleRow.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Bottom Row - 2 Cards (wider) */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bottomRow.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} isWide />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

