"use client";

import { motion } from "framer-motion";
import { Check, Target, Lightbulb, BookOpen } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionHeading, Card } from "@/components/ui";
import { STATS } from "@/lib/constants";

const coreValues = [
  "Innovation in every solution",
  "Client-focused approach",
  "Quality and reliability",
  "Sustainable technology practices",
];

const techDomains = [
  "Web & Business Systems",
  "GIS & Remote Sensing",
  "Hardware & IoT",
  "Health Informatics",
  "Agriculture Technology",
];


export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="About Damani Nexus"
          title="Tech for Every Terrain"
          description="Innovative solutions for modern challenges"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision & Mission */}
          <div className="space-y-8">
            <ScrollReveal direction="left">
              <Card className="bg-gradient-to-br from-[#001F3F] to-[#0066CC] text-white">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                    <p className="text-white/90 leading-relaxed">
                      To be the leading technology partner for businesses across Africa,
                      providing innovative solutions that drive growth and efficiency.
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#001F3F]/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-[#001F3F]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We deliver cutting-edge technology solutions tailored to the unique
                      needs of SMEs, agriculture, healthcare, and government sectors.
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#001F3F]/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-[#001F3F]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Story</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Founded with a vision to bridge the technology gap in emerging
                      markets, Damani Nexus combines deep technical expertise with local
                      market understanding to deliver solutions that truly work.
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Values & Domains */}
          <div className="space-y-8">
            <ScrollReveal direction="right">
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Values</h3>
                <ul className="space-y-3">
                  {coreValues.map((value) => (
                    <li key={value} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Domains</h3>
                <ul className="space-y-3">
                  {techDomains.map((domain) => (
                    <li key={domain} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#001F3F]" />
                      <span className="text-gray-700">{domain}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>


          </div>
        </div>
      </div>
    </section>
  );
}
