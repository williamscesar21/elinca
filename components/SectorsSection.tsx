"use client";

import { useInView } from "react-intersection-observer";
import { GiWheat, GiBeerStein, GiCow } from "react-icons/gi";
import { MdFactory, MdOutlineOilBarrel } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import { FaIndustry } from "react-icons/fa";

const sectors = [
  { icon: GiWheat, name: "Agro-Alimenticia", description: "Plantas de procesamiento y conservación de alimentos, silos, molinos y agroindustria." },
  { icon: HiLightningBolt, name: "Generación de Energía", description: "Plantas de generación eléctrica, subestaciones y sistemas de distribución de energía." },
  { icon: MdOutlineOilBarrel, name: "Refinerías de Aceite", description: "Plantas de refinación, procesamiento de aceites vegetales y derivados del petróleo." },
  { icon: FaIndustry, name: "Acerías", description: "Industria siderúrgica y metalúrgica: laminadoras, hornos de fusión y líneas de producción." },
  { icon: GiBeerStein, name: "Alimentos y Bebidas", description: "Cervecerías, embotelladoras, procesadoras de alimentos y bebidas." },
  { icon: GiCow, name: "Nutrición Animal", description: "Plantas de alimento balanceado para animales, dosificación y mezclado automatizado." },
  { icon: MdFactory, name: "Industria General", description: "Manufactura, producción industrial, ensamble y líneas de producción automatizadas." },
];

export default function SectorsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium border"
            style={{ backgroundColor: "#E6FDE8", borderColor: "#0ADC1E", color: "#08B819" }}
          >
            Sectores que Atendemos
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-gray-900 mb-4">
            Experiencia en{" "}
            <span className="gradient-text">Múltiples Industrias</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Nuestra experiencia abarca los principales sectores industriales,
            garantizando soluciones adaptadas a cada proceso.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.name}
                className={`group bg-white border border-gray-100 hover:border-green-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-green-50 transition-all duration-500 hover:-translate-y-1 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#E6FDE8" }}
                >
                  <Icon style={{ color: "#0ADC1E" }} />
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-base mb-2">
                  {sector.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            );
          })}

          {/* Y más */}
          <div className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="font-heading font-bold text-gray-700 text-base mb-1">Y muchos más</h3>
            <p className="text-gray-400 text-sm">Adaptamos nuestras soluciones a cualquier sector industrial.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
