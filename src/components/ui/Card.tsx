"use client";

import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  glass?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, glass = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300",
          hover && "card-hover hover:bg-[#001F3F] hover:text-white [&:hover_h3]:text-white [&:hover_p]:text-gray-200 [&:hover_.text-gray-600]:text-gray-200 [&:hover_.text-gray-700]:text-gray-200",
          glass && "glass",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;

