import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contacto | ELINCA - Electrónica Industrial C.A.",
  description: "Contáctenos para cotizaciones y consultas. Sedes en Acarigua Venezuela y Madrid España.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #0ADC1E 0%, transparent 70%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium border"
            style={{ backgroundColor: "#E6FDE8", borderColor: "#0ADC1E", color: "#08B819" }}
          >
            Estamos aquí para ayudarte
          </div>
          <h1 className="font-heading font-black text-5xl sm:text-6xl text-gray-900 mb-6">
            Hablemos de su <span className="gradient-text">Proyecto</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">
            Nuestro equipo de ingenieros especializados está listo para atenderle
            y proponer la solución más adecuada para sus necesidades.
          </p>
        </div>
      </section>

      <ContactSection />

      {/* Mapa */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                <span className="text-xl">🇻🇪</span>
                <div>
                  <h3 className="text-gray-900 font-heading font-bold">Venezuela</h3>
                  <p className="text-gray-500 text-sm">Acarigua, Estado Portuguesa</p>
                </div>
              </div>
              <div className="h-56 bg-gray-50 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="text-sm leading-relaxed">
                    Av. 40 entre calles 33 y 34<br />
                    Edificio Elinca, Bella Vista I<br />
                    Sector El Palito, Acarigua
                  </p>
                  <a
                    href="https://maps.google.com/?q=Acarigua,Portuguesa,Venezuela"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm underline"
                    style={{ color: "#0ADC1E" }}
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                <span className="text-xl">🇪🇸</span>
                <div>
                  <h3 className="text-gray-900 font-heading font-bold">España</h3>
                  <p className="text-gray-500 text-sm">La Cabrera, Madrid</p>
                </div>
              </div>
              <div className="h-56 bg-gray-50 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="text-sm leading-relaxed">
                    Av. de la Cabrera No. 19<br />
                    28751 La Cabrera<br />
                    Madrid, España
                  </p>
                  <a
                    href="https://maps.google.com/?q=La+Cabrera,Madrid,España"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm underline"
                    style={{ color: "#0ADC1E" }}
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
