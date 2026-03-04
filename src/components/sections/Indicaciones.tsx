"use client";

import { motion } from "framer-motion";
import { ChevronDown, Cat, Droplet, Scissors } from "lucide-react";
import { useState } from "react";

const indicaciones = [
  {
    id: "gatos",
    icon: <Cat className="h-5 w-5" />,
    title: "Para traslado de gatos",
    content:
      "Próximamente aquí encontrarás las indicaciones detalladas para el traslado de tu gato de forma segura y sin estrés.",
  },
  {
    id: "sangre",
    icon: <Droplet className="h-5 w-5" />,
    title: "Para extracción de sangre",
    content:
      "Próximamente aquí encontrarás los pasos a seguir antes de traer a tu mascota para la extracción de muestras de sangre.",
  },
  {
    id: "quirurgicas",
    icon: <Scissors className="h-5 w-5" />,
    title: "Pre quirúrgicas",
    content:
      "Próximamente aquí encontrarás las indicaciones preoperatorias que debés seguir antes de una cirugía programada.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof indicaciones)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="overflow-hidden rounded-2xl bg-white border border-border shadow-sm transition-shadow hover:shadow-md"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl text-white flex-shrink-0"
            style={{ background: "linear-gradient(135deg,#D6006E,#b5005c)" }}
          >
            {item.icon}
          </div>
          <span className="font-semibold text-foreground text-base">{item.title}</span>
        </div>
        <ChevronDown
          className="h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "200px" : "0px" }}
      >
        <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
          {item.content}
        </p>
      </div>
    </div>
  );
}

export function Indicaciones() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="indicaciones" className="py-20">
      <div className="container mx-auto px-4 md:px-6">

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
            Guías para dueños
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Indicaciones
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Preparate antes de tu visita. Seguí estas guías para que todo salga perfecto.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {indicaciones.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <AccordionItem
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
