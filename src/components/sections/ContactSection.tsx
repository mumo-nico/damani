"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionHeading, Card, Button } from "@/components/ui";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string || undefined,
      service: formData.get("service") as string || undefined,
      message: formData.get("message") as string,
      source: "Main Contact Page",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We&apos;ve received your message and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 mb-5 bg-red-50 border border-red-200 rounded-lg text-red-700"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm">{error}</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                        <input type="text" name="name" required placeholder="Nicholas Mumo" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#001F3F] focus:ring-1 focus:ring-[#001F3F] outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                        <input type="email" name="email" required placeholder="info@damaninexus.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#001F3F] focus:ring-1 focus:ring-[#001F3F] outline-none transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" name="phone" placeholder="+254 758 815 721" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#001F3F] focus:ring-1 focus:ring-[#001F3F] outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                        <select name="service" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#001F3F] focus:ring-1 focus:ring-[#001F3F] outline-none transition-colors bg-white">
                          <option value="">Select a service...</option>
                          {SERVICES.map((service) => (
                            <option key={service.id} value={service.title}>{service.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea name="message" required rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#001F3F] focus:ring-1 focus:ring-[#001F3F] outline-none transition-colors resize-none" />
                    </div>
                    <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </>
              )}
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
