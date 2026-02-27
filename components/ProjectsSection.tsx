"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { HiArrowRight } from "react-icons/hi";

const projects = [
  {
    id: 1,
    title: "Sistema SCADA para Planta Agroindustrial",
    sector: "Agro-Alimenticia",
    description:
      "Implementación de sistema SCADA con Wonderware/AVEVA para monitoreo y control de planta procesadora de cereales. Integración con 15 PLCs Siemens S7-1500.",
    tags: ["AVEVA", "Siemens", "SCADA", "S7-1500"],
  },
  {
    id: 2,
    title: "Automatización de Línea de Embotellado",
    sector: "Alimentos y Bebidas",
    description:
      "Sistema de automatización para línea de embotellado con control de calidad, dosificación y codificación. Más de 20,000 botellas/hora.",
    tags: ["Allen-Bradley", "PLC", "HMI", "Visión Artificial"],
  },
  {
    id: 3,
    title: "Centro de Control de Motores (MCC)",
    sector: "Industria General",
    description:
      "Diseño, ensamblaje e instalación de Centro de Control de Motores con 48 arrancadores, protecciones y sistema de monitoreo remoto.",
    tags: ["Schneider Electric", "CCM", "Tableros", "LTMR"],
  },
  {
    id: 4,
    title: "Sistema de Batching – Nutrición Animal",
    sector: "Nutrición Animal",
    description:
      "Sistema de dosificación y batching automatizado para planta de alimento balanceado. Control de 12 materias primas con pesaje automático.",
    tags: ["Rockwell", "Batch", "PLC", "HMI"],
  },
  {
    id: 5,
    title: "Modernización de Planta de Energía",
    sector: "Generación de Energía",
    description:
      "Migración de sistema obsoleto a plataforma moderna con DCS y SCADA integrado, mejorando disponibilidad al 99.8%.",
    tags: ["DCS", "SCADA", "Siemens", "Modernización"],
  },
  {
    id: 6,
    title: "Redes Industriales Profinet/Profibus",
    sector: "Acerías",
    description:
      "Diseño e implementación de infraestructura de red industrial para planta siderúrgica. Integración de 60+ dispositivos de campo.",
    tags: ["Profinet", "Profibus", "Redes", "Siemens"],
  },
];

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium border"
            style={{ backgroundColor: "#E6FDE8", borderColor: "#0ADC1E", color: "#08B819" }}
          >
            Portfolio de Proyectos
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-gray-900 mb-4">
            Proyectos que{" "}
            <span className="gradient-text">Hablan por Sí Solos</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Más de 500 proyectos ejecutados exitosamente en diferentes sectores
            industriales a lo largo de tres décadas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white border border-gray-100 hover:border-green-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-green-50 hover:-translate-y-1 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Sector badge */}
              <div
                className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium mb-4"
                style={{ backgroundColor: "#E6FDE8", color: "#08B819" }}
              >
                {project.sector}
              </div>

              <h3 className="font-heading font-bold text-gray-900 text-lg mb-3 leading-tight group-hover:text-green-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-lg font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
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
