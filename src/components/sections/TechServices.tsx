"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Globe,
  Server,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { TECH_SERVICES } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Card, SectionHeading } from "@/components/ui";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  Globe,
  Server,
  Headphones,
};

export default function TechServices() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Why Choose Damani Nexus?"
          title="Technology Services That Drive Growth"
          description="Comprehensive digital solutions tailored for businesses in Nairobi and beyond"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || MessageSquare;
            return (
              <StaggerItem key={service.title}>
                <Card className="h-full text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#001F3F] to-[#0066CC] flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="inline-flex items-center text-[#001F3F] text-sm font-medium group/link"
                  >
                    Learn more
                    <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

