"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  HeartPulse,
  Clock4,
  Microscope,
  Star,
  Award,
  Users,
  Stethoscope,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────── */
const stats = [
  { value: 15, suffix: "+", label: "Años de experiencia", icon: Award },
  { value: 8000, suffix: "+", label: "Pacientes atendidos", icon: Users },
  { value: 4, suffix: "", label: "Especialidades", icon: Stethoscope },
  { value: 4.6, suffix: "★", label: "Calificación promedio", icon: Star },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Profesionales Certificados",
    desc: "Todo nuestro equipo cuenta con formación continua y certificaciones vigentes.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Microscope,
    title: "Equipamiento Moderno",
    desc: "Laboratorio, ecógrafo y quirófano de última generación para diagnósticos precisos.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: HeartPulse,
    title: "Atención con Amor",
    desc: "Cada mascota recibe el mismo cuidado que le daríamos a nuestra propia familia.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: Clock4,
    title: "Abierto 24 horas",
    desc: "Guardias médicas permanentes para que puedas acudir en cualquier momento.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

/* ─── Animated counter hook ─────────────────────────────────── */
function useCounter(target: number, duration = 1400, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const isDecimal = target % 1 !== 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, triggered]);
  return count;
}

function StatCard({
  stat,
  index,
  triggered,
}: {
  stat: (typeof stats)[0];
  index: number;
  triggered: boolean;
}) {
  const count = useCounter(stat.value, 1400, triggered);
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={triggered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.2 + index * 0.1, ease: "easeOut" }}
      className="flex flex-col items-center justify-center rounded-2xl bg-background/80 backdrop-blur-sm border border-border/40 p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <Icon className="mb-1.5 h-4 w-4 text-primary" strokeWidth={1.75} />
      <span className="text-xl font-extrabold tracking-tight text-foreground">
        {count}
        {stat.suffix}
      </span>
      <span className="mt-0.5 text-center text-[11px] leading-snug text-muted-foreground">
        {stat.label}
      </span>
    </motion.div>
  );
}

/* ─── Section ─────────────────────────────────────────────────── */
export function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative bg-background py-16 sm:py-24 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Nuestra Historia
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Más de una década cuidando{" "}
            <span className="text-primary">vidas</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Un equipo apasionado que trata a cada paciente como si fuera de la familia.
          </p>
        </motion.div>

        {/* ── Main layout: image left, content right ── */}
        <div className="grid gap-8 lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr] items-start">

          {/* ── Image card ── (portrait-optimised) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/8"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src="/476233754_1142353523951187_1332328213615260029_n.jpg"
              alt="Dr. Guillermo Cura atendiendo a un paciente"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 400px"
              priority
            />

            {/* Gradient fade at bottom for badge readability */}
            <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />

            {/* Doctor info — bottom glassmorphism */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="rounded-2xl bg-zinc-900/88 backdrop-blur-lg border border-white/12 p-3.5 shadow-xl ring-1 ring-white/8">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white/95 leading-tight">
                      Dr. Guillermo Cura
                    </p>
                    <p className="text-[11px] text-white/60 mt-0.5">
                      Médico Veterinario
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-8">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Bajo la dirección del{" "}
                <strong className="font-semibold text-foreground">
                  Dr. Guillermo Cura
                </strong>
                , nuestra clínica nació con un propósito claro: tratar a cada mascota
                con la misma dedicación que a un miembro de nuestra propia familia.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Entendemos que detrás de cada consulta hay una historia de amor.
                Por eso combinamos la última tecnología médica con un trato humano y
                cálido que tus compañeros merecen.
              </p>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} triggered={inView} />
              ))}
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.35 + i * 0.09,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -4, transition: { duration: 0.18 } }}
                    className="group flex gap-3.5 rounded-2xl bg-background p-4 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow cursor-default"
                  >
                    <div
                      className={`shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl ${b.bg} ${b.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">
                        {b.title}
                      </h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        {b.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
