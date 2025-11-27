import { Metadata } from "next";
import Link from "next/link";
import { FileText, PenTool, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Damani Nexus Limited",
  description:
    "Read insights, tutorials, and industry news from our expert bloggers. Stay updated with the latest in technology and business.",
};

export default function BlogPage() {
  return (
    <div className="pt-28">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#000D1F] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Insights & Industry News
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert articles from our community of tech professionals and bloggers
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 rounded-full bg-[#001F3F]/10 flex items-center justify-center mx-auto mb-8">
            <FileText className="w-12 h-12 text-[#001F3F]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog Coming Soon
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;re creating a platform for tech enthusiasts and industry
            experts to share their knowledge. Coming soon!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-[#F8F9FA] rounded-2xl p-6 text-left">
              <PenTool className="w-10 h-10 text-[#001F3F] mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                For Bloggers
              </h3>
              <p className="text-gray-600 mb-4">
                Want to write for our platform? Join our community of tech
                bloggers and share your expertise.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-[#001F3F] font-medium group"
              >
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-[#F8F9FA] rounded-2xl p-6 text-left">
              <FileText className="w-10 h-10 text-[#001F3F] mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                For Readers
              </h3>
              <p className="text-gray-600 mb-4">
                Subscribe to get notified when we launch and receive the latest
                articles in your inbox.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-[#001F3F] font-medium group"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

