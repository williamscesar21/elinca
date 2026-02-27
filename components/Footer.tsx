import Link from "next/link";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const footerLinks = {
  empresa: [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/nosotros#historia", label: "Historia" },
    { href: "/nosotros#valores", label: "Misión y Valores" },
    { href: "/nosotros#certificaciones", label: "Certificaciones" },
    { href: "/proyectos", label: "Proyectos" },
  ],
  servicios: [
    { href: "/servicios#automatizacion", label: "Automatización Industrial" },
    { href: "/servicios#integracion", label: "Integración de Sistemas" },
    { href: "/servicios#plc-hmi-scada", label: "PLC / HMI / SCADA" },
    { href: "/servicios#robotica", label: "Robótica Industrial" },
    { href: "/servicios#tableros", label: "Tableros Eléctricos" },
    { href: "/servicios#instrumentacion", label: "Instrumentación" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-2xl font-heading"
              >
               <img src="/images/image.png" alt="Logo" />
              </div>
              <div>
                <div className="text-white font-heading font-black text-2xl leading-none">ELINCA</div>
                <div className="text-gray-400 text-xs mt-0.5">Electrónica Industrial C.A.</div>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Más de 30 años planificando y ejecutando proyectos de automatización
              industrial en Venezuela, España y Latinoamérica con el más alto
              estándar de calidad.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaFacebook, href: "#", label: "Facebook" },
                { icon: FaTwitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-2 text-gray-400 text-sm">
                  <HiLocationMarker className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#0ADC1E" }} />
                  <div>
                    <div className="text-green-400 font-medium text-xs mb-0.5">Venezuela 🇻🇪</div>
                    <span>Av. 40 entre calles 33 y 34, Edif. Elinca, Acarigua, Portuguesa</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-400 text-sm">
                  <HiLocationMarker className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#0ADC1E" }} />
                  <div>
                    <div className="text-green-400 font-medium text-xs mb-0.5">España 🇪🇸</div>
                    <span>Av. de la Cabrera No. 19, 28751 La Cabrera, Madrid</span>
                  </div>
                </div>
              </li>
              <li>
                <a href="tel:+5802556218847" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                  <HiPhone className="w-4 h-4" style={{ color: "#0ADC1E" }} />
                  +(58) 0255-6218847
                </a>
              </li>
              <li>
                <a href="mailto:info@elinca.net" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                  <HiMail className="w-4 h-4" style={{ color: "#0ADC1E" }} />
                  info@elinca.net
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} ELINCA - Electrónica Industrial C.A. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-3 text-gray-600 text-xs">
              <span>Certificado:</span>
              <span className="text-gray-400">Schneider · Siemens · Rockwell · AVEVA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
