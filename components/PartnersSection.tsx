"use client";

import { useInView } from "react-intersection-observer";

const partners = [
  {
    name: "Schneider Electric",
    description: "System Integrator Certificado",
    logo: "SE",
    logoBg: "#00875A",
    since: "Partner desde 2001",
  },
  {
    name: "Siemens",
    description: "Solution Partner Certificado",
    logo: "S",
    logoBg: "#009999",
    since: "Partner desde 1998",
  },
  {
    name: "Rockwell Automation",
    description: "Allen-Bradley System Integrator",
    logo: "RA",
    logoBg: "#CC0000",
    since: "Partner desde 2003",
  },
  {
    name: "AVEVA / Wonderware",
    description: "Certified System Integrator",
    logo: "AV",
    logoBg: "#4F46E5",
    since: "Partner desde 2005",
  },
];

export default function PartnersSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6
                       text-sm font-medium border"
            style={{ backgroundColor: "#E8E8F8", borderColor: "#01007A", color: "#01007A" }}
          >
            Partners y Certificaciones
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-gray-900 mb-4">
            Respaldados por las{" "}
            <span className="gradient-text">Mejores Marcas</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Nuestras certificaciones internacionales garantizan que cada solución
            cumple los más altos estándares de la industria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`group bg-white border border-gray-100 rounded-2xl p-7 text-center
                          hover:border-transparent hover:shadow-xl transition-all duration-500
                          hover:-translate-y-1 relative overflow-hidden ${
                            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                          }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Línea superior en hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0
                           group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "#01007A" }}
              />

              {/* Logo */}
              <div className="flex justify-center mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center
                             font-heading font-black text-white text-xl shadow-lg
                             group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: partner.logoBg }}
                >
                  {partner.logo}
                </div>
              </div>

              <h3 className="font-heading font-bold text-gray-900 text-base mb-1">
                {partner.name}
              </h3>
              <p className="text-gray-500 text-sm mb-1">{partner.description}</p>
              <p className="text-gray-400 text-xs mb-4">{partner.since}</p>

              {/* Badge certificado */}
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1
                           text-xs font-semibold"
                style={{ backgroundColor: "#E6FDE8", color: "#08B819" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#0ADC1E" }} />
                Certificado · Vigente
              </div>
            </div>
          ))}
        </div>

        {/* Barra de confianza */}
        <div
          className="mt-12 rounded-2xl p-6 text-center border"
          style={{ backgroundColor: "#01007A08", borderColor: "#01007A15" }}
        >
          <p className="text-gray-600 text-sm">
            <span className="font-semibold" style={{ color: "#01007A" }}>ELINCA</span> es uno de los pocos integradores en Venezuela con{" "}
            <span className="font-semibold" style={{ color: "#01007A" }}>certificaciones simultáneas</span> de las 4 marcas líderes en automatización industrial.
          </p>
        </div>
      </div>
    </section>
  );
}
