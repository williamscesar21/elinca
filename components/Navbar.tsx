"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  {
    href: "/servicios",
    label: "Servicios",
    children: [
      { href: "/servicios#automatizacion", label: "Automatización Industrial" },
      { href: "/servicios#integracion", label: "Integración de Sistemas" },
      { href: "/servicios#plc-hmi-scada", label: "PLC / HMI / SCADA" },
      { href: "/servicios#robotica", label: "Robótica Industrial" },
      { href: "/servicios#tableros", label: "Tableros Eléctricos" },
    ],
  },
  { href: "/productos", label: "Productos" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-lg font-heading shadow-md transition-shadow duration-300 group-hover:shadow-lg"
                style={{ backgroundColor: "#0ADC1E" }}
              >
                E
              </div>
            </div>
            <div>
              <div className="text-gray-900 font-heading font-black text-xl leading-none">
                ELINCA
              </div>
              <div className="text-gray-500 text-xs font-body leading-none mt-0.5">
                Electrónica Industrial C.A.
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname === link.href
                      ? "text-verde-principal bg-verde-claro"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  style={
                    pathname === link.href
                      ? { color: "#0ADC1E", backgroundColor: "#E6FDE8" }
                      : {}
                  }
                >
                  {link.label}
                  {link.children && (
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.href ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.href && (
                  <div className="absolute top-full left-0 mt-1 w-60 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors duration-150"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contacto#cotizacion"
              className="text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
              style={{ backgroundColor: "#0ADC1E" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#08B819")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#0ADC1E")
              }
            >
              Solicitar Cotización
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 mb-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-6 py-4 text-sm font-medium border-b border-gray-50 transition-colors ${
                    pathname === link.href
                      ? "text-verde-principal bg-verde-claro"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  style={
                    pathname === link.href
                      ? { color: "#0ADC1E", backgroundColor: "#E6FDE8" }
                      : {}
                  }
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-10 pr-6 py-3 text-xs text-gray-500 hover:text-gray-700 border-b border-gray-50 transition-colors bg-gray-50/50"
                  >
                    → {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="p-4">
              <Link
                href="/contacto#cotizacion"
                className="block text-center text-white text-sm font-semibold px-5 py-3 rounded-xl"
                style={{ backgroundColor: "#0ADC1E" }}
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
