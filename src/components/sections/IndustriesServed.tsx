"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Heart,
  Wheat,
  Landmark,
  GraduationCap,
  Users,
  HandHeart,
  Store,
  Factory,
  Plane,
  Hotel,
  Church,
  ShieldCheck,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionHeading } from "@/components/ui";

const INDUSTRIES = [
  // Row 1 - 4 cards
  { name: "Small & Medium Enterprises", icon: Store, description: "Custom solutions for growing businesses" },
  { name: "Healthcare Institutions", icon: Heart, description: "Secure patient & facility management" },
  { name: "Agricultural Organizations", icon: Wheat, description: "Farm & supply chain management" },
  { name: "Government Agencies", icon: Landmark, description: "E-government & public services" },
  // Row 2 - 5 cards
  { name: "Educational Institutions", icon: GraduationCap, description: "School management systems" },
  { name: "NGOs", icon: Users, description: "Project & donor management" },
  { name: "CBOs", icon: HandHeart, description: "Community-based solutions" },
  { name: "Financial Services", icon: Building2, description: "Banking & SACCO systems" },
  { name: "Manufacturing", icon: Factory, description: "Production & inventory control" },
  // Row 3 - 4 cards
  { name: "Hospitality & Tourism", icon: Hotel, description: "Booking & guest management" },
  { name: "Transport & Logistics", icon: Plane, description: "Fleet & delivery tracking" },
  { name: "Religious Organizations", icon: Church, description: "Membership & contribution systems" },
  { name: "Security Firms", icon: ShieldCheck, description: "Surveillance & access control" },
];

function IndustryCard({ industry }: { industry: typeof INDUSTRIES[0] }) {
  const Icon = industry.icon;
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center group cursor-pointer hover:bg-[#001F3F] hover:border-[#001F3F] transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-[#001F3F]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
        <Icon className="w-6 h-6 text-[#001F3F] group-hover:text-white transition-colors" />
      </div>
      <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-white transition-colors">
        {industry.name}
      </h3>
      <p className="text-gray-500 text-xs group-hover:text-gray-200 transition-colors">
        {industry.description}
      </p>
    </motion.div>
  );
}

export default function IndustriesServed() {
  // Split into rows: 4-5-4
  const row1 = INDUSTRIES.slice(0, 4);
  const row2 = INDUSTRIES.slice(4, 9);
  const row3 = INDUSTRIES.slice(9, 13);

  return (
    <section className="py-12 md:py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Who We Serve"
          title="Industries We Serve"
          description="Delivering tailored technology solutions across diverse sectors"
        />

        <div className="space-y-6 max-w-6xl mx-auto">
          {/* Row 1 - 4 cards (larger to align with 5 cards row) */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 px-[calc((100%-80%)/2)] md:px-0 md:mx-[10%]">
            {row1.map((industry) => (
              <StaggerItem key={industry.name}>
                <IndustryCard industry={industry} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Row 2 - 5 cards */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {row2.map((industry) => (
              <StaggerItem key={industry.name}>
                <IndustryCard industry={industry} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Row 3 - 4 cards (larger to align with 5 cards row) */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 px-[calc((100%-80%)/2)] md:px-0 md:mx-[10%]">
            {row3.map((industry) => (
              <StaggerItem key={industry.name}>
                <IndustryCard industry={industry} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

