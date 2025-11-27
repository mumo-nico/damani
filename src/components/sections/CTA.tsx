"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/animations";
import { Button } from "@/components/ui";

export default function CTA() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-4 py-2 bg-[#001F3F]/10 rounded-full text-[#001F3F] mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2 text-[#D4AF37]" />
            <span className="text-sm font-medium">Let&apos;s Build Something Amazing</span>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F3F] mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how Damani Nexus can help you leverage technology for
            growth and efficiency. Our team of experts is ready to bring your
            vision to life.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F] hover:text-white"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

