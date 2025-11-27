"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Clock,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionHeading, Card, Button } from "@/components/ui";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert("Message sent successfully!");
  };

  return (
    <section className="section-padding bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Contact Us"
          title="Ready to Transform Your Business?"
          description="Let's talk about how technology can drive your growth"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <ScrollReveal direction="left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            </ScrollReveal>

            <StaggerContainer className="space-y-4">
              <StaggerItem>
                <Card className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#001F3F]/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#001F3F]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">{COMPANY_INFO.address}</p>
                  </div>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#001F3F]/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#001F3F]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Call Us</p>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#001F3F] hover:underline">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#001F3F]/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#001F3F]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email Us</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#001F3F] hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="flex items-center space-x-4 bg-green-50 border-green-100 hover:bg-green-100 transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">Chat with us for quick responses</p>
                    </div>
                  </Card>
                </a>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <Card hover={false} className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#001F3F] focus:ring-1 focus:ring-[#001F3F] outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                    <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#001F3F] focus:ring-1 focus:ring-[#001F3F] outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" placeholder="+254 700 000 000" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#001F3F] focus:ring-1 focus:ring-[#001F3F] outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#001F3F] focus:ring-1 focus:ring-[#001F3F] outline-none transition-colors">
                      <option value="">Select a service...</option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.id}>{service.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea required rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#001F3F] focus:ring-1 focus:ring-[#001F3F] outline-none transition-colors resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
