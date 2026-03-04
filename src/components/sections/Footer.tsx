"use client";

import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WA_LINK = "https://api.whatsapp.com/send?phone=5493416152828";
const IG_LINK = "https://www.instagram.com/vet.delparque/";
const FB_LINK = "https://www.facebook.com/vetdelparque?mibextid=PtKPJ9";
const CAFECITO_LINK = "https://cafecito.app/vetdelparque1288";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden py-16 text-white"
      style={{ background: "linear-gradient(135deg,#2d1f2a 0%,#1a0e18 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-10 blur-3xl"
        style={{ background: "#D6006E" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full opacity-10 blur-3xl"
        style={{ background: "#E8C5D0" }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full text-xl font-bold shadow-lg"
                style={{ background: "linear-gradient(135deg,#D6006E,#b5005c)" }}
              >
                🐾
              </div>
              <div>
                <p className="text-lg font-bold">Veterinaria del Parque</p>
                <p className="text-xs font-semibold" style={{ color: "#E8C5D0" }}>
                  @vet.delparque
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm text-white/70 leading-relaxed">
              Clínica general de pequeños animales en Rosario, comprometida con
              el bienestar y la salud de tus mascotas.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 flex-wrap">
              {[
                { href: IG_LINK, icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { href: FB_LINK, icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { href: WA_LINK, icon: <WhatsAppIcon className="h-5 w-5" />, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110"
                  style={{
                    background: "rgba(214,0,110,0.15)",
                    border: "1px solid rgba(214,0,110,0.3)",
                  }}
                >
                  {s.icon}
                </a>
              ))}
              {/* Cafecito donation */}
              <a
                href={CAFECITO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nos tomamos un cafecito"
                title="Nos tomamos un cafecito ☕"
                className="flex h-10 items-center justify-center gap-1.5 rounded-full px-3 text-sm font-semibold transition-all hover:scale-105"
                style={{
                  background: "rgba(214,0,110,0.15)",
                  border: "1px solid rgba(214,0,110,0.3)",
                  color: "#E8C5D0",
                }}
              >
                ☕ <span className="text-xs">Cafecito</span>
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
              Contacto
            </h3>
            <a
              href="tel:3416152828"
              className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0"
                style={{ background: "rgba(214,0,110,0.15)" }}
              >
                <Phone className="h-4 w-4" style={{ color: "#D6006E" }} />
              </span>
              341-6152828
            </a>
            <a
              href="mailto:vet.delparque@hotmail.com"
              className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0"
                style={{ background: "rgba(214,0,110,0.15)" }}
              >
                <Mail className="h-4 w-4" style={{ color: "#D6006E" }} />
              </span>
              vet.delparque@hotmail.com
            </a>
            <div
              className="flex items-start gap-3 text-sm"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 mt-0.5"
                style={{ background: "rgba(214,0,110,0.15)" }}
              >
                <MapPin className="h-4 w-4" style={{ color: "#D6006E" }} />
              </span>
              <span>
                Necochea 1288<br />
                Rosario, Santa Fe
              </span>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
              Horarios
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0"
                  style={{ background: "rgba(214,0,110,0.15)" }}
                >
                  <Clock className="h-4 w-4" style={{ color: "#D6006E" }} />
                </span>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  <p className="font-semibold text-white">Lunes a Viernes</p>
                  <p>9:00 – 12:30 / 16:30 – 20:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0"
                  style={{ background: "rgba(214,0,110,0.15)" }}
                >
                  <Clock className="h-4 w-4" style={{ color: "#D6006E" }} />
                </span>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  <p className="font-semibold text-white">Sábados</p>
                  <p>9:30 – 12:30</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row text-sm"
          style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}
        >
          <p>© {new Date().getFullYear()} Veterinaria del Parque. Todos los derechos reservados.</p>
          <p style={{ color: "#E8C5D0" }}>Hecho con 🩷 en Rosario</p>
        </div>
      </div>
    </footer>
  );
}
