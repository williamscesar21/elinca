"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { HiArrowRight } from "react-icons/hi";

const projects = [
  {
    id: 1,
    title: "Sistema SCADA — Complejo Agroindustrial",
    sector: "Agro-Alimenticia",
    description: "SCADA centralizado con AVEVA InTouch para monitoreo de planta procesadora. Integración con 15 PLCs Siemens S7-1500 y control de calidad automatizado.",
    tags: ["AVEVA", "Siemens S7-1500", "PROFINET", "OPC-UA"],
    image: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=700&q=80",
    result: "+30% productividad",
  },
  {
    id: 2,
    title: "Línea de Embotellado 20K/hora",
    sector: "Alimentos y Bebidas",
    description: "Automatización completa con Allen-Bradley, visión artificial Cognex para control de calidad y dosificación automática en tiempo real.",
    tags: ["Allen-Bradley", "FactoryTalk", "Cognex Vision", "Ethernet/IP"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
    result: "Rechazo <0.1%",
  },
  {
    id: 3,
    title: "MCC de 48 Arrancadores",
    sector: "Industria General",
    description: "Centro de Control de Motores con relés LTMR, monitoreo remoto vía Modbus TCP/IP y sistema SCADA de supervisión centralizada.",
    tags: ["Schneider TeSys", "LTMR", "Modbus TCP", "EPLAN"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=80",
    result: "Disponibilidad 100%",
  },
  {
    id: 4,
    title: "Batching Automatizado — Nutrición Animal",
    sector: "Nutrición Animal",
    description: "Dosificación de 12 materias primas con precisión ±0.3%, gestión de recetas y trazabilidad completa integrada a ERP.",
    tags: ["Siemens S7-300", "WinCC", "PROFIBUS DP", "SAP"],
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=700&q=80",
    result: "Mermas −35%",
  },
  {
    id: 5,
    title: "Modernización Planta de Energía",
    sector: "Generación de Energía",
    description: "Migración de panel analógico obsoleto a Siemens PCS7 con SCADA moderno, acceso remoto seguro y gestión avanzada de alarmas.",
    tags: ["Siemens PCS7", "WinCC OA", "OPC-UA", "VPN Industrial"],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=700&q=80",
    result: "Disponibilidad 99.8%",
  },
  {
    id: 6,
    title: "Red Industrial — Planta Siderúrgica",
    sector: "Acerías",
    description: "Infraestructura Profinet/Profibus para 60+ dispositivos de campo, fibra óptica industrial y diagnóstico centralizado Scalance.",
    tags: ["PROFINET", "PROFIBUS DP", "Scalance", "Fibra Óptica"],
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=700&q=80",
    result: "Latencia <5ms",
  },
];

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-24" style={{ backgroundColor: "#01007A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6
                       text-sm font-medium border border-green-400/30"
            style={{ backgroundColor: "rgba(10,220,30,0.1)", color: "#0ADC1E" }}
          >
            Portfolio de Proyectos
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mb-4">
            Proyectos que
            <span className="block gradient-text-bright">Hablan por Sí Solos</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Más de 500 proyectos exitosos en tres décadas avalan nuestra experiencia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white/5 border border-white/10 rounded-2xl overflow-hidden
                          hover:bg-white/10 hover:border-white/20 hover:-translate-y-1
                          transition-all duration-500 ${
                            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                          }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Imagen */}
              <div className="relative h-44 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay navy */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(1,0,122,0.85) 0%, rgba(1,0,122,0.2) 100%)" }}
                />
                {/* Sector badge */}
                <div
                  className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: "rgba(10,220,30,0.9)", color: "#fff" }}
                >
                  {project.sector}
                </div>
                {/* Resultado badge */}
                <div
                  className="absolute bottom-3 right-3 rounded-xl px-3 py-1 text-xs font-bold
                             bg-white/10 backdrop-blur-sm text-white border border-white/20"
                >
                  {project.result}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-white text-base mb-2 leading-tight
                               group-hover:text-green-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-lg font-mono"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-white font-semibold
                       px-8 py-3 rounded-xl transition-all duration-300"
            style={{ backgroundColor: "#0ADC1E" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#08B819")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0ADC1E")}
          >
            Ver todos los proyectos
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
