"use client";

import { ScrollReveal } from "@/components/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl mb-12 md:mb-16", alignClass[align], className)}>
      <ScrollReveal direction="up">
        {subtitle && (
          <span
            className={cn(
              "inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4",
              dark
                ? "bg-white/10 text-white"
                : "bg-[#001F3F]/10 text-[#001F3F]"
            )}
          >
            {subtitle}
          </span>
        )}
        <h2
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
            dark ? "text-white" : "text-gray-900"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "text-lg md:text-xl leading-relaxed",
              dark ? "text-gray-300" : "text-gray-600"
            )}
          >
            {description}
          </p>
        )}
      </ScrollReveal>
    </div>
  );
}

