"use client";

import { useInView } from "react-intersection-observer";

const sectors = [
  {
    name: "Agro-Alimenticia",
    description: "Silos, molinos, plantas de procesamiento y conservación de alimentos.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Generación de Energía",
    description: "Plantas generadoras, subestaciones y sistemas de distribución eléctrica.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Refinerías de Aceite",
    description: "Refinación, procesamiento de aceites vegetales y derivados del petróleo.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Acerías",
    description: "Industria siderúrgica y metalúrgica: laminadoras, hornos de fusión.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Alimentos y Bebidas",
    description: "Cervecerías, embotelladoras y líneas de procesamiento de alimentos.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Nutrición Animal",
    description: "Plantas de alimento balanceado, dosificación y mezclado automatizado.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Industria General",
    description: "Manufactura, ensamble, líneas de producción y automatización de planta.",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=600&q=80",
  },
];

export default function SectorsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6
                       text-sm font-medium border"
            style={{ backgroundColor: "#E8E8F8", borderColor: "#01007A", color: "#01007A" }}
          >
            Sectores que Atendemos
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-gray-900 mb-4">
            Experiencia en{" "}
            <span className="gradient-text">Múltiples Industrias</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Adaptamos nuestras soluciones a las necesidades específicas de cada proceso y sector industrial.
          </p>
        </div>

        {/* Grid con imagen de fondo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sectors.map((sector, index) => (
            <div
              key={sector.name}
              className={`group relative rounded-2xl overflow-hidden cursor-default
                          transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                          }`}
              style={{ transitionDelay: `${index * 70}ms`, minHeight: "220px" }}
            >
              {/* Imagen de fondo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sector.image}
                alt={sector.name}
                className="absolute inset-0 w-full h-full object-cover
                           transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay: navy degradado desde abajo */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(to top, rgba(1,0,122,0.92) 0%, rgba(1,0,122,0.55) 60%, rgba(1,0,122,0.20) 100%)",
                }}
              />

              {/* Línea verde superior en hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300
                           opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: "#0ADC1E" }}
              />

              {/* Contenido */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading font-bold text-white text-base mb-1.5 leading-tight">
                  {sector.name}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed
                              max-h-0 overflow-hidden group-hover:max-h-20
                              transition-all duration-500">
                  {sector.description}
                </p>
                <div
                  className="mt-2 text-xs font-semibold opacity-0 group-hover:opacity-100
                             transition-opacity duration-300"
                  style={{ color: "#0ADC1E" }}
                >
                  Ver proyectos →
                </div>
              </div>
            </div>
          ))}

          {/* Card "Y más" */}
          <div
            className="relative rounded-2xl overflow-hidden flex flex-col items-center
                       justify-center text-center p-6 border-2 border-dashed min-h-[220px]
                       hover:-translate-y-1 transition-all duration-300"
            style={{ borderColor: "#01007A20", backgroundColor: "#F8F8FD" }}
          >
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="font-heading font-bold text-gray-700 text-base mb-1">
              Y muchos más
            </h3>
            <p className="text-gray-400 text-sm">
              Adaptamos nuestras soluciones a cualquier sector industrial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
