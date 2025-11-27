"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#001F3F] text-white py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* Left - Contact Info */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a 
              href="tel:+254758815721" 
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+254 758 815 721</span>
            </a>
            <a 
              href="mailto:info@damaninexus.com" 
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">info@damaninexus.com</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          {/* Right - Support Hours */}
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>24/7 Support Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}

