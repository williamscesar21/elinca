"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { HiCheckCircle, HiArrowRight } from "react-icons/hi";

const differentiators = [
  "Integrador de sistemas certificado a nivel internacional",
  "Soluciones llave en mano (turnkey) completas",
  "Equipo multidisciplinario de ingenieros especializados",
  "Presencia en Venezuela, España y proyectos en LATAM",
  "30+ años de experiencia en sectores críticos",
  "Soporte técnico post-implementación garantizado",
];

export default function IndustrialAboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="overflow-hidden" style={{ backgroundColor: "#01007A" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

          {/* ── Imagen izquierda ───────────────────── */}
          <div className="relative order-2 lg:order-1 min-h-64">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
              alt="Ingenieros trabajando en automatización industrial"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay navy lateral */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(1,0,122,0.0) 0%, rgba(1,0,122,0.85) 100%)",
              }}
            />
            {/* Badge flotante */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center
                               font-bold text-white font-heading text-lg flex-shrink-0"
                    style={{ backgroundColor: "#0ADC1E" }}
                  >
                    E
                  </div>
                  <div>
                    <div className="text-white font-heading font-bold text-sm">
                      ELINCA — Fundada en 1992
                    </div>
                    <div className="text-white/60 text-xs">
                      Acarigua, Venezuela · Madrid, España
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Contenido derecho ──────────────────── */}
          <div
            ref={ref}
            className={`order-1 lg:order-2 flex flex-col justify-center px-8 sm:px-12 py-16
                        tech-grid transition-all duration-700 ${
                          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6
                         text-xs font-medium uppercase tracking-wider border border-green-400/30"
              style={{ backgroundColor: "rgba(10,220,30,0.1)", color: "#0ADC1E" }}
            >
              ¿Por qué ELINCA?
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-3 leading-tight">
              Tres Décadas de
              <span className="block gradient-text-bright">Excelencia Industrial</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              No somos solo proveedores de equipos — somos ingenieros que entienden
              su proceso y diseñamos soluciones que funcionan en el mundo real.
            </p>

            <ul className="space-y-3 mb-10">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <HiCheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#0ADC1E" }}
                  />
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3
                         rounded-xl border-2 transition-all duration-300 self-start
                         hover:text-white active:scale-95"
              style={{ borderColor: "#0ADC1E", color: "#0ADC1E" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(10,220,30,0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Conocer más sobre ELINCA
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Barra divisora verde */}
      <div className="industrial-divider" />
    </section>
  );
}
