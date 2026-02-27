"use client";

import { useInView } from "react-intersection-observer";

const partners = [
  { name: "Schneider Electric", description: "System Integrator certificado", logo: "SE", logoBg: "#00875A" },
  { name: "Siemens", description: "Partner tecnológico", logo: "S", logoBg: "#009999" },
  { name: "Rockwell Automation", description: "Allen-Bradley partner", logo: "RA", logoBg: "#CC0000" },
  { name: "AVEVA / Wonderware", description: "System integrator certificado", logo: "AV", logoBg: "#6B21A8" },
];

export default function PartnersSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium border"
            style={{ backgroundColor: "#E6FDE8", borderColor: "#0ADC1E", color: "#08B819" }}
          >
            Partners y Certificaciones
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-gray-900 mb-4">
            Integrador Certificado por las{" "}
            <span className="gradient-text">Mejores Marcas</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Trabajamos con los líderes mundiales en automatización industrial,
            ofreciendo las mejores soluciones tecnológicas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`group bg-white border border-gray-100 hover:border-green-200 rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-green-50 transition-all duration-500 hover:-translate-y-1 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-black text-white text-xl shadow-md group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: partner.logoBg }}
                >
                  {partner.logo}
                </div>
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-base mb-1">
                {partner.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{partner.description}</p>
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: "#E6FDE8", color: "#08B819" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#0ADC1E" }} />
                Certificado
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
