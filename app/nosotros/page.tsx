import type { Metadata } from "next";
import { HiCheckCircle, HiLightBulb, HiUsers, HiHeart } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

export const metadata: Metadata = {
  title: "Nosotros | ELINCA - Electrónica Industrial C.A.",
  description:
    "Conoce la historia, misión, visión y valores de ELINCA. Más de 30 años como referente en automatización industrial en Venezuela y España.",
};

const values = [
  { icon: HiCheckCircle, title: "Excelencia Técnica", description: "Nos mantenemos a la vanguardia tecnológica con capacitación continua y certificaciones internacionales." },
  { icon: HiUsers, title: "Compromiso con el Cliente", description: "Construimos relaciones a largo plazo basadas en la confianza, la transparencia y los resultados." },
  { icon: HiLightBulb, title: "Innovación Continua", description: "Adoptamos las últimas tecnologías para ofrecer soluciones innovadoras y eficientes." },
  { icon: HiHeart, title: "Responsabilidad y Ética", description: "Actuamos con integridad en todos nuestros procesos, respetando a nuestros colaboradores y el medio ambiente." },
];

const certifications = [
  { marca: "Schneider Electric", nivel: "System Integrator Certificado", logoBg: "#00875A" },
  { marca: "Siemens", nivel: "Solution Partner", logoBg: "#009999" },
  { marca: "Rockwell Automation", nivel: "System Integrator", logoBg: "#CC0000" },
  { marca: "AVEVA / Wonderware", nivel: "Certified System Integrator", logoBg: "#6B21A8" },
];

const timeline = [
  { year: "1992", title: "Fundación de ELINCA", description: "Electrónica Industrial C.A. es fundada en Acarigua, Venezuela, con la visión de proveer soluciones de automatización de primer nivel." },
  { year: "1995", title: "Primeras Certificaciones", description: "Obtenemos nuestras primeras certificaciones como integradores de sistemas, consolidando alianzas con marcas líderes." },
  { year: "2000", title: "Expansión Nacional", description: "Expandimos operaciones a nivel nacional, ejecutando proyectos en los principales centros industriales de Venezuela." },
  { year: "2005", title: "100 Proyectos Exitosos", description: "Celebramos nuestro proyecto número 100, consolidando nuestra posición como referente en automatización industrial." },
  { year: "2010", title: "Incorporación de Robótica", description: "Ampliamos nuestro portafolio con soluciones de robótica industrial, atendiendo la creciente demanda del mercado." },
  { year: "2015", title: "Presencia Internacional", description: "Apertura de la sede en Madrid, España, iniciando nuestra expansión internacional." },
  { year: "2020", title: "Transformación Digital", description: "Incorporamos soluciones IIoT, Cloud Industrial y Analítica de Datos, adaptándonos a la Industria 4.0." },
  { year: "2024", title: "+30 Años de Trayectoria", description: "Superamos los 500 proyectos ejecutados y seguimos creciendo con el mismo compromiso de calidad." },
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #0ADC1E 0%, transparent 70%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium border"
            style={{ backgroundColor: "#E6FDE8", borderColor: "#0ADC1E", color: "#08B819" }}
          >
            Nuestra Historia
          </div>
          <h1 className="font-heading font-black text-5xl sm:text-6xl text-gray-900 mb-6">
            30 Años <span className="gradient-text">Impulsando</span>
            <br />la Industria
          </h1>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto">
            Desde 1992, ELINCA ha sido el socio de confianza de las principales
            industrias de Venezuela y el mundo, brindando soluciones de
            automatización que transforman procesos y maximizan la productividad.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section id="historia" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm" style={{ borderLeftWidth: 4, borderLeftColor: "#0ADC1E" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl" style={{ backgroundColor: "#E6FDE8" }}>
                🎯
              </div>
              <h2 className="font-heading font-bold text-gray-900 text-2xl mb-4">Misión</h2>
              <p className="text-gray-600 leading-relaxed">
                Proveer soluciones integrales de automatización y control industrial que optimicen
                los procesos productivos de nuestros clientes, garantizando eficiencia, confiabilidad
                y el más alto estándar de calidad.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm" style={{ borderLeftWidth: 4, borderLeftColor: "#0ADC1E" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl" style={{ backgroundColor: "#E6FDE8" }}>
                🌟
              </div>
              <h2 className="font-heading font-bold text-gray-900 text-2xl mb-4">Visión</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser reconocidos como la empresa líder en integración de sistemas de automatización
                industrial en Latinoamérica, expandiendo nuestra presencia internacional y
                manteniéndonos a la vanguardia tecnológica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-4xl text-gray-900 mb-4">
              Nuestros <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Los principios que guían cada decisión y proyecto.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E6FDE8" }}>
                    <Icon className="w-6 h-6" style={{ color: "#0ADC1E" }} />
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 text-base mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-4xl text-gray-900 mb-4">
              Historia de <span className="gradient-text">ELINCA</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: "#0ADC1E" }} />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 border-2 bg-white shadow-sm"
                    style={{ borderColor: "#0ADC1E" }}
                  >
                    <span className="font-mono font-bold text-xs text-center leading-tight" style={{ color: "#0ADC1E" }}>
                      {item.year}
                    </span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-5 flex-1 mt-2 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-gray-900 font-heading font-bold text-base mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section id="certificaciones" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-4xl text-gray-900 mb-4">
              Nuestras <span className="gradient-text">Certificaciones</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Respaldados por las principales marcas mundiales en automatización industrial.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.marca} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-black text-white text-2xl mx-auto mb-4 shadow-md"
                  style={{ backgroundColor: cert.logoBg }}
                >
                  {cert.marca.charAt(0)}
                </div>
                <h3 className="text-gray-900 font-heading font-bold text-base mb-1">{cert.marca}</h3>
                <p className="text-gray-500 text-sm mb-3">{cert.nivel}</p>
                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: "#E6FDE8", color: "#08B819" }}
                >
                  <MdVerified className="w-3.5 h-3.5" />
                  Vigente
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
