"use client";

import { motion } from "framer-motion";
import { Calendar, Instagram, Facebook, Mail, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";

const TURNO_LINK = "https://gestion.mascotamas.com/j14pV5f0zz3BzHoFedQ5/turno?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
const WA_LINK = "https://api.whatsapp.com/send?phone=5493416152828";
const IG_LINK = "https://www.instagram.com/vet.delparque/";
const FB_LINK = "https://www.facebook.com/vetdelparque?mibextid=PtKPJ9";

const quickLinks = [
  {
    icon: <Calendar className="h-5 w-5" />,
    label: "Pedir Turno",
    href: TURNO_LINK,
    external: true,
    accent: true,
  },
  {
    icon: <WhatsAppIcon className="h-5 w-5" />,
    label: "WhatsApp",
    href: WA_LINK,
    external: true,
    whatsapp: true,
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
    href: IG_LINK,
    external: true,
  },
  {
    icon: <Facebook className="h-5 w-5" />,
    label: "Facebook",
    href: FB_LINK,
    external: true,
  },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-28 pt-20">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl" style={{ background: "#D6006E" }} />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl" style={{ background: "#E8C5D0" }} />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center gap-6">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold ring-1"
            style={{ background: "#fdf0f5", color: "#D6006E", "--tw-ring-color": "#D6006E33" } as React.CSSProperties}
          >
            <span className="flex h-2 w-2 rounded-full animate-pulse" style={{ background: "#D6006E" }} />
            Clínica general de pequeños animales
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-normal sm:text-6xl md:text-7xl"
          >
            <span style={{ color: "#4a2d3e" }}>Veterinaria</span>{" "}
            <span
              className="relative inline-block"
              style={{ color: "#D6006E" }}
            >
              del Parque
              <span
                className="absolute -bottom-1 left-0 h-1 w-full rounded-full opacity-40"
                style={{ background: "#D6006E" }}
              />
            </span>
          </motion.h1>

          {/* Handle + subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-1"
          >
            <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary hover:underline underline-offset-2 transition-all">@vet.delparque</a>
            <p className="max-w-xl text-lg text-muted-foreground">
              Tu clínica de confianza en Rosario, especializada en el cuidado integral
              de tus mascotas con amor y profesionalismo. 🐱🐶
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-2"
          >
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-all hover:scale-105 hover:shadow-md"
                style={
                  link.accent
                    ? { background: "#D6006E", color: "#fff" }
                    : (link as { whatsapp?: boolean }).whatsapp
                    ? { background: "#25D366", color: "#fff" }
                    : { background: "#fff", color: "#D6006E", border: "1.5px solid #E8C5D0" }
                }
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
