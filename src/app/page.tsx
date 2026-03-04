import { Hero } from "@/components/sections/Hero";
import { Horarios } from "@/components/sections/Horarios";
import { Services } from "@/components/sections/Services";
import { Reviews } from "@/components/sections/Reviews";
import { Ubicacion } from "@/components/sections/Ubicacion";
import { Indicaciones } from "@/components/sections/Indicaciones";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Horarios />
      <Services />
      <Reviews />
      <Ubicacion />
      <Indicaciones />
      <Footer />
    </div>
  );
}
