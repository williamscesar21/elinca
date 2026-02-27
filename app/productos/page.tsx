import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Productos | ELINCA - Control Industrial",
  description: "Catálogo de productos de control industrial: contactores, guardamotores, relés de protección, tableros, gabinetes y más.",
};

const categories = [
  {
    id: "contactores", name: "Contactores",
    description: "Contactores de potencia TeSys D, Easy TVS y líneas especializadas.",
    products: [
      { name: "Contactores TeSys D", specs: "9A a 800A, hasta 690V", marca: "Schneider" },
      { name: "Contactores Easy TVS", specs: "Supresores de transitorios integrados", marca: "Schneider" },
      { name: "Contactores para Condensadores", specs: "Corrección factor de potencia", marca: "Schneider" },
      { name: "Contactores de Inversión", specs: "Reversible, interlocked", marca: "Schneider" },
    ],
  },
  {
    id: "guardamotores", name: "Guardamotores",
    description: "Protección integral de motores contra sobrecargas, cortocircuitos y fallos de fase.",
    products: [
      { name: "Guardamotor TeSys E", specs: "0.1A a 100A, clase 10/20", marca: "Schneider" },
      { name: "Guardamotor TeSys GV3", specs: "40A a 115A, ajuste magnético", marca: "Schneider" },
      { name: "Guardamotor TeSys GV7", specs: "Hasta 800A, diferencial integrado", marca: "Schneider" },
      { name: "Protectores 3RV / 3VU", specs: "Línea completa", marca: "Siemens" },
    ],
  },
  {
    id: "reles", name: "Relés de Protección",
    description: "Soluciones avanzadas de protección para motores, transformadores y sistemas de distribución.",
    products: [
      { name: "Relé LTMR (TeSys T)", specs: "Control inteligente de motores", marca: "Schneider" },
      { name: "Relé LTMCU (TeSys U)", specs: "Control avanzado de motores", marca: "Schneider" },
      { name: "Relés de Secuencia de Fase", specs: "Protección trifásica", marca: "Varios" },
      { name: "Relés 7RW/7UT", specs: "Protección de transformadores", marca: "Siemens" },
    ],
  },
  {
    id: "seccionadores", name: "Seccionadores y Disyuntores",
    description: "Dispositivos de maniobra y protección para sistemas de baja y media tensión.",
    products: [
      { name: "Seccionador Vario", specs: "Corte visible, 3/4 polos", marca: "Schneider" },
      { name: "Seccionador Interpact INS/INV", specs: "100A a 2500A", marca: "Schneider" },
      { name: "Disyuntor Compact NSX", specs: "100A a 630A", marca: "Schneider" },
      { name: "Disyuntor 3WL/3VA", specs: "Línea completa", marca: "Siemens" },
    ],
  },
  {
    id: "tableros", name: "Tableros y Gabinetes",
    description: "Envolventes industriales para protección de equipos eléctricos y electrónicos.",
    products: [
      { name: "Gabinete Spacial S3D", specs: "IP55/IP66, acero galvanizado", marca: "Schneider" },
      { name: "Gabinete Prisma iP", specs: "Distribución, modular", marca: "Schneider" },
      { name: "Tablero de Control ELINCA", specs: "Diseño a medida", marca: "ELINCA" },
      { name: "Armario RITTAL", specs: "Línea completa", marca: "Rittal" },
    ],
  },
  {
    id: "borneras", name: "Borneras y Accesorios",
    description: "Terminales de conexión, canaletas, rieles DIN y accesorios para tableros.",
    products: [
      { name: "Borneras Viking 3", specs: "Conexión a tornillo, push-in", marca: "Schneider" },
      { name: "Borneras Linergy", specs: "Distribución de energía", marca: "Schneider" },
      { name: "Canaletas DKD/DLX", specs: "Organización de cableado", marca: "Schneider" },
      { name: "Identificadores y Accesorios", specs: "Marcadores, tapas, separadores", marca: "Varios" },
    ],
  },
];

const brands = [
  { name: "Schneider Electric", logo: "SE", logoBg: "#00875A", products: "Contactores, tableros, PLCs, relés" },
  { name: "Siemens", logo: "S", logoBg: "#009999", products: "PLCs, HMIs, variadores, protecciones" },
  { name: "Rockwell / Allen-Bradley", logo: "RA", logoBg: "#CC0000", products: "ControlLogix, CompactLogix, Kinetix" },
  { name: "AVEVA / Wonderware", logo: "AV", logoBg: "#6B21A8", products: "SCADA, MES, Historian" },
];

export default function ProductosPage() {
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
            Catálogo de Productos
          </div>
          <h1 className="font-heading font-black text-5xl sm:text-6xl text-gray-900 mb-6">
            Productos de{" "}
            <span className="gradient-text">Control Industrial</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto">
            Distribuimos los mejores equipos de automatización y control industrial de las marcas más reconocidas a nivel mundial.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 font-heading font-bold text-2xl mb-8">Marcas que Distribuimos</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {brands.map((brand) => (
              <div key={brand.name} className="bg-white border border-gray-100 hover:border-green-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-heading font-black text-white text-lg mx-auto mb-3 shadow-md"
                  style={{ backgroundColor: brand.logoBg }}
                >
                  {brand.logo}
                </div>
                <h3 className="text-gray-900 font-semibold text-sm mb-1">{brand.name}</h3>
                <p className="text-gray-500 text-xs">{brand.products}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="catalogo" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {categories.map((cat) => (
            <div id={cat.id} key={cat.id} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-gray-900 mb-1">{cat.name}</h2>
                  <p className="text-gray-500 text-sm">{cat.description}</p>
                </div>
                <div
                  className="w-2 h-12 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#0ADC1E" }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.products.map((product) => (
                  <div key={product.name} className="bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-green-200 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-gray-900 font-medium text-sm leading-snug flex-1">{product.name}</h4>
                      <span className="text-xs text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full ml-2 flex-shrink-0">{product.marca}</span>
                    </div>
                    <p className="text-gray-500 text-xs font-mono">{product.specs}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-black text-3xl text-gray-900 mb-4">¿Necesita un producto específico?</h2>
          <p className="text-gray-500 mb-8">
            Si no encuentra lo que busca, contáctenos. Gestionamos la importación y suministro de cualquier equipo.
          </p>
          <Link
            href="/contacto#cotizacion"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl shadow-md"
            style={{ backgroundColor: "#0ADC1E" }}
          >
            Solicitar Cotización de Productos
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
