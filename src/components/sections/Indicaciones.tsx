"use client";

import { motion } from "framer-motion";
import { ChevronDown, Cat, Droplet, Scissors } from "lucide-react";
import { useState } from "react";

type IndicacionItem = {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string | string[];
  note?: string;
};

const indicaciones: IndicacionItem[] = [
  {
    id: "gatos",
    icon: <Cat className="h-5 w-5" />,
    title: "Para traslado de gatos",
    content: [
      "Siempre dentro de una transportadora (ideal rígida), bolso o mochila. NUNCA suelto/a.",
      "Colocar dentro de la transportadora una mantita polar o similar.",
      "Traer un sobrecito de comida húmeda o su comida favorita.",
      "Colocar dentro de la transportadora el juguete favorito de tu gato/a.",
      "Cubrir la transportadora con una toalla o sabanita para que tu gato/a no pueda ver hacia afuera y sentirse amenazado/a.",
    ],
    note: "Si tu gato/a se estresa al salir de tu casa y manifiesta una conducta agresiva, avisanos previamente ya que podemos indicarle una medicación para que esté mucho más tranquilo/a al momento de la consulta.",
  },
  {
    id: "sangre",
    icon: <Droplet className="h-5 w-5" />,
    title: "Para extracción de sangre",
    content: [
      "Ayuno: 8 a 10 hs de ayuno de sólidos (agua le podés dar).",
      "En lo posible, deben venir el/la tutor/a y 1 acompañante junto con el 🐱🐶.",
      "Para 🐱: traer 1 mantita con su olor y 1 sobrecito de comida húmeda o algo que le guste mucho.",
      "Si se pone muy nervioso/a, consultar antes porque podemos indicarle una medicación para que venga tranqui y se deje extraer sangre.",
    ],
    note: "Los análisis de laboratorio se abonan EN EFECTIVO o TRANSFERENCIA.",
  },
  {
    id: "quirurgicas",
    icon: <Scissors className="h-5 w-5" />,
    title: "Pre quirúrgicas",
    content: [
      "8 horas de ayuno de sólidos (comida). El agua se la podés dejar toda la noche y se la retirás apenas te levantás para traerla a la veterinaria.",
      "Traer sus estudios prequirúrgicos. En caso de no tenerlos, solicitarlos al mail vet.delparque@hotmail.com con nombre del paciente y apellido del tutor/a.",
      "En el caso de los felinos, traerlos en su transportadora con una mantita/polar adentro.",
      "En el caso de los perros, traerles una mantita o polar para que al despertar sientan un olor conocido.",
      "Si está tomando medicación, dársela normalmente el día previo.",
    ],
    note: "Te esperamos en el horario pactado (puntual). ¡Gracias! 😊",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: IndicacionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isList = Array.isArray(item.content);

  return (
    <div className="overflow-hidden rounded-2xl bg-white border border-border shadow-sm transition-shadow hover:shadow-md">
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
          className="h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: isOpen ? (isList ? "600px" : "200px") : "0px" }}
      >
        <div className="px-6 pb-6 border-t border-border pt-4 space-y-2">
          {isList ? (
            <>
              <ul className="space-y-3">
                {(item.content as string[]).map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <span
                      className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ background: "#D6006E" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
              {item.note && (
                <p
                  className="mt-4 text-sm font-semibold pt-3 border-t border-border"
                  style={{ color: "#D6006E" }}
                >
                  {item.note}
                </p>
              )}
            </>
          ) : (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.content as string}
            </p>
          )}
        </div>
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
