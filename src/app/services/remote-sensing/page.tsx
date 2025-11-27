"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Satellite, CheckCircle, Camera, Scan, Mountain, Leaf, Clock, Target } from "lucide-react";
import { ContactForm } from "@/components/forms";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionHeading } from "@/components/ui";

const FEATURES = [
  {
    title: "Drone/UAV Aerial Surveys",
    bullets: ["High-res orthophotos", "3D terrain models"],
    icon: Camera
  },
  {
    title: "Satellite Imagery Processing",
    bullets: ["Multi-spectral analysis", "Time-series analysis"],
    icon: Satellite
  },
  {
    title: "Crop Health Monitoring (NDVI)",
    bullets: ["Vegetation indices", "Yield prediction"],
    icon: Leaf
  },
  {
    title: "Topographic Surveys",
    bullets: ["Contour mapping", "Volume calculations"],
    icon: Mountain
  },
];

const BENEFITS = [
  { title: "High Resolution", description: "Capture detailed aerial imagery", icon: Scan },
  { title: "Cost Effective", description: "Reduce traditional survey costs", icon: Target },
  { title: "Quick Turnaround", description: "Faster data collection & processing", icon: Clock },
  { title: "Accurate Data", description: "Precision mapping & measurements", icon: Camera },
];

export default function RemoteSensingPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#000D1F] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ScrollReveal direction="left" className="flex-1 text-white">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-white/10 text-white">
                Remote Sensing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Remote Sensing & Drone Surveys
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Capture the complete picture from above with our advanced drone surveys and satellite imagery analysis services.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="flex-1">
              <Image
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80"
                alt="Drone Survey"
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
            title="Our Services"
            description="Advanced aerial and satellite solutions for every need"
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
            title="Advantages"
            description="Why choose our remote sensing services"
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
            title="Survey Examples"
            description="See our aerial mapping work in action"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=600&q=80" alt="Drone" width={400} height={300} className="w-full h-56 object-cover" />
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" alt="Aerial View" width={400} height={300} className="w-full h-56 object-cover" />
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80" alt="Satellite" width={400} height={300} className="w-full h-56 object-cover" />
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
            title="Request a Survey"
            description="Get in touch for aerial survey solutions."
          />
          <ScrollReveal>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <ContactForm serviceName="Remote Sensing & Drone Surveys" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

