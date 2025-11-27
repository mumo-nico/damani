"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Lock,
  Camera,
  Car,
  Zap,
  KeyRound,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { IOT_PRODUCTS } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Card, SectionHeading } from "@/components/ui";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lock,
  Camera,
  Car,
  Zap,
  KeyRound,
  ShieldCheck,
};

export default function IoTProducts() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Hardware & IoT"
          title="Smart Security Solutions"
          description="Enhance connectivity and safeguard your environment with our cutting-edge IoT products"
        />

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {IOT_PRODUCTS.map((product, index) => {
            const Icon = iconMap[product.icon] || Lock;
            return (
              <StaggerItem key={product.title}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center group cursor-pointer hover:shadow-lg hover:bg-[#001F3F] hover:border-[#001F3F] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#001F3F]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#001F3F] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-white transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-xs group-hover:text-gray-200 transition-colors">{product.description}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal direction="up" delay={0.3} className="text-center mt-8">
          <Link
            href="/services/hardware-iot"
            className="inline-flex items-center px-6 py-3 bg-[#D4AF37] text-white rounded-full font-medium hover:bg-[#C5A028] transition-all group"
          >
            View All IoT Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

