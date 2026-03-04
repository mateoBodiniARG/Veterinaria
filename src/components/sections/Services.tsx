"use client";

import { motion } from "framer-motion";
import { Stethoscope, Scissors, Scan, Heart, Zap, Microscope, Brain, Droplets, Activity, Syringe, FileText, PawPrint } from "lucide-react";

const services = [
  { icon: <PawPrint className="h-6 w-6" />, name: "Medicina Felina", desc: "Especialistas en la salud integral de tus gatos." },
  { icon: <Scissors className="h-6 w-6" />, name: "Cirugía", desc: "Procedimientos quirúrgicos con tecnología de punta." },
  { icon: <Scan className="h-6 w-6" />, name: "Dermatología", desc: "Diagnóstico y tratamiento de enfermedades de la piel." },
  { icon: <Zap className="h-6 w-6" />, name: "Ecografía", desc: "Estudios por imagen para un diagnóstico preciso." },
  { icon: <Heart className="h-6 w-6" />, name: "Cardiología", desc: "Control y atención del corazón de tu mascota." },
  { icon: <Scan className="h-6 w-6" />, name: "Radiología", desc: "Radiografías digitales para diagnósticos rápidos." },
  { icon: <Brain className="h-6 w-6" />, name: "Etología", desc: "Manejo del comportamiento animal con enfoque positivo." },
  { icon: <Droplets className="h-6 w-6" />, name: "Nefrourología", desc: "Cuidado del sistema renal y urinario." },
  { icon: <Activity className="h-6 w-6" />, name: "Oncología", desc: "Acompañamiento y tratamiento oncológico integral." },
  { icon: <Syringe className="h-6 w-6" />, name: "Toma de Muestras", desc: "Análisis de laboratorio con resultados confiables." },
  { icon: <FileText className="h-6 w-6" />, name: "Doc. para Viajar", desc: "Documentación para traslado de mascotas al exterior." },
  { icon: <Stethoscope className="h-6 w-6" />, name: "Clínica General", desc: "Atención de pequeños animales y no convencionales." },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Services() {
  return (
    <section id="servicios" className="py-20 relative">
      {/* Section bg accent */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, #E8C5D0 0%, transparent 60%)" }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div
            className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{ background: "#fdf0f5", color: "#D6006E" }}
          >
            <Stethoscope className="h-3.5 w-3.5" />
            Especialidades
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Nuestros Servicios
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Contamos con un equipo multidisciplinario para el cuidado completo de tu mascota.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.name}
              variants={cardVariants}
              className="group flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm transition-transform group-hover:scale-105"
                style={{ background: "linear-gradient(135deg,#D6006E,#b5005c)" }}
              >
                {svc.icon}
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">{svc.name}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
