"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { value: 30, suffix: "+", label: "Años de Experiencia", description: "Desde septiembre de 1992" },
  { value: 500, suffix: "+", label: "Proyectos Ejecutados", description: "En múltiples sectores" },
  { value: 50, suffix: "+", label: "Clientes Activos", description: "Venezuela, España y LATAM" },
  { value: 2, suffix: "", label: "Continentes", description: "Presencia internacional" },
  { value: 7, suffix: "", label: "Sectores Industriales", description: "Diversidad de expertise" },
  { value: 4, suffix: "", label: "Marcas Certificadas", description: "Siemens, Schneider, Rockwell, AVEVA" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#0ADC1E" }}
    >
      {/* Subtle dot overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mb-3">
            Tres Décadas de Excelencia
          </h2>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            Números que respaldan nuestra experiencia y compromiso industrial.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-5 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="font-heading font-black text-4xl sm:text-5xl text-white mb-1">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} delay={index * 0.1} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-white font-semibold text-sm mb-0.5">{stat.label}</div>
              <div className="text-green-100 text-xs leading-tight">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
