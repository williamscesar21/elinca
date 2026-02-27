"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { value: 30,  suffix: "+", label: "Años de Experiencia",    description: "Desde septiembre de 1992"             },
  { value: 500, suffix: "+", label: "Proyectos Ejecutados",   description: "En múltiples sectores industriales"    },
  { value: 50,  suffix: "+", label: "Clientes Activos",       description: "Venezuela, España y LATAM"             },
  { value: 2,   suffix: "",  label: "Continentes",            description: "Presencia internacional"              },
  { value: 7,   suffix: "",  label: "Sectores Industriales",  description: "Diversidad de expertise técnico"       },
  { value: 4,   suffix: "",  label: "Marcas Certificadas",    description: "Siemens · Schneider · Rockwell · AVEVA"},
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#01007A" }}>
      {/* Tech grid overlay */}
      <div className="absolute inset-0 tech-grid" />

      {/* Glow verde */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0ADC1E 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mb-3">
            Trayectoria que
            <span className="block gradient-text-bright">Respalda Resultados</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Números que reflejan tres décadas de compromiso con la industria.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-5 rounded-2xl border border-white/10 bg-white/5
                          backdrop-blur-sm hover:bg-white/10 transition-all duration-700 ${
                            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                          }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className="font-heading font-black text-4xl sm:text-5xl mb-1"
                style={{ color: "#0ADC1E" }}
              >
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} delay={index * 0.1} suffix={stat.suffix} />
                ) : `0${stat.suffix}`}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-white/40 text-xs leading-tight">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Divisor inferior */}
      <div className="industrial-divider mt-16" />
    </section>
  );
}
