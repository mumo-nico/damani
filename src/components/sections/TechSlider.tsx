"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui";

const TECHNOLOGIES = [
  { name: "Next.js", logo: "/tech/nextjs.svg" },
  { name: "React", logo: "/tech/react.svg" },
  { name: "Django", logo: "/tech/django.svg" },
  { name: "Python", logo: "/tech/python.svg" },
  { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
  { name: "Node.js", logo: "/tech/nodejs.svg" },
  { name: "React Native", logo: "/tech/react.svg" },
  { name: "AWS", logo: "/tech/aws.svg" },
  { name: "Docker", logo: "/tech/docker.svg" },
  { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
  { name: "ArcGIS", logo: "/tech/arcgis.svg" },
  { name: "MongoDB", logo: "/tech/mongodb.svg" },
  { name: "MySQL", logo: "/tech/mysql.svg" },
  { name: "Firebase", logo: "/tech/firebase.svg" },
  { name: "Kubernetes", logo: "/tech/kubernetes.svg" },
  { name: "Flutter", logo: "/tech/flutter.svg" },
  { name: "QGIS", logo: "/tech/qgis.svg" },
  { name: "AutoCAD", logo: "/tech/autocad.svg" },
];

export default function TechSlider() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedTechs = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="py-16 md:py-20 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          subtitle="Our Stack"
          title="Cutting-Edge Technologies"
          description="We leverage the latest technologies to build robust solutions"
        />
      </div>

      {/* Infinite Scrolling Slider */}
      <div className="relative">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -50 * TECHNOLOGIES.length * 8],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center gap-3 w-32"
            >
              <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-[#001F3F] text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8F9FA] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8F9FA] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}

