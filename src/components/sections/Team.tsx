"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Github, Phone } from "lucide-react";
import { TEAM_MEMBERS } from "@/lib/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionHeading } from "@/components/ui";

export default function Team() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Team"
          title="Meet With Our Creative Dedicated Team"
          description="Experts committed to delivering excellence in every project"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-[#F8F9FA] rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row"
              >
                {/* Image Container - Left Side */}
                <div className="relative w-full md:w-64 h-64 md:h-auto flex-shrink-0 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Info - Right Side */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#D4AF37] font-semibold mb-4">{member.role}</p>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4 text-[#001F3F]" />
                      <span className="text-sm">{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4 text-[#001F3F]" />
                      <span className="text-sm">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{member.altEmail}</span>
                    </div>
                  </div>

                  {/* Social Links - Always Visible */}
                  <div className="flex space-x-3">
                    <a
                      href={member.socials.linkedin}
                      className="w-10 h-10 rounded-full bg-[#001F3F] flex items-center justify-center text-white hover:bg-[#0066CC] transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      className="w-10 h-10 rounded-full bg-[#001F3F] flex items-center justify-center text-white hover:bg-[#0066CC] transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={member.socials.github}
                      className="w-10 h-10 rounded-full bg-[#001F3F] flex items-center justify-center text-white hover:bg-[#0066CC] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

