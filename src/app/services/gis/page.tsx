"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Map, CheckCircle, Globe, Database, Navigation, Layers, Eye, MapPin } from "lucide-react";
import { ContactForm } from "@/components/forms";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionHeading } from "@/components/ui";

const FEATURES = [
  {
    title: "Spatial Data Collection & Management",
    bullets: ["Field data collection", "Cloud-based storage"],
    icon: Database
  },
  {
    title: "Interactive Web Mapping",
    bullets: ["Custom map applications", "Real-time updates"],
    icon: Globe
  },
  {
    title: "Land Use & Urban Planning",
    bullets: ["Zoning analysis", "Development planning"],
    icon: Layers
  },
  {
    title: "Asset Management & Tracking",
    bullets: ["Infrastructure mapping", "Location tracking"],
    icon: MapPin
  },
];

const BENEFITS = [
  { title: "Visual Insights", description: "See your data on interactive maps", icon: Eye },
  { title: "Better Decisions", description: "Location-based intelligence", icon: Navigation },
  { title: "Efficient Operations", description: "Optimize routes & resources", icon: Map },
  { title: "Data Integration", description: "Combine spatial & business data", icon: Database },
];

export default function GISPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#000D1F] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ScrollReveal direction="left" className="flex-1 text-white">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-white/10 text-white">
                GIS Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Geographic Information Systems
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Unlock the power of location intelligence with our comprehensive GIS solutions for mapping, analysis, and spatial decision-making.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="flex-1">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="GIS Mapping"
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
            title="GIS Capabilities"
            description="Advanced spatial solutions for modern challenges"
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
            title="Why GIS Matters"
            description="Transform your decision-making with spatial intelligence"
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
            title="GIS Applications"
            description="Real-world mapping solutions in action"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&q=80" alt="Map Analysis" width={400} height={300} className="w-full h-56 object-cover" />
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?w=600&q=80" alt="Satellite View" width={400} height={300} className="w-full h-56 object-cover" />
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" alt="Earth Data" width={400} height={300} className="w-full h-56 object-cover" />
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
            title="Start Your GIS Project"
            description="Tell us about your spatial data needs."
          />
          <ScrollReveal>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <ContactForm serviceName="GIS Services" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

