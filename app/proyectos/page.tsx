import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Proyectos | ELINCA - Portfolio de Automatización Industrial",
  description: "Portfolio de proyectos de automatización industrial ejecutados por ELINCA. Más de 500 proyectos en Venezuela, España y Latinoamérica.",
};

const projects = [
  {
    id: 1, title: "Sistema SCADA Integral para Complejo Agroindustrial",
    cliente: "Planta procesadora de cereales, Venezuela", sector: "Agro-Alimenticia", year: "2023",
    description: "Sistema SCADA con Wonderware/AVEVA InTouch para monitoreo en tiempo real. Integración con 15 PLCs Siemens S7-1500, gestión de recetas, control de calidad automatizado y reportes de producción.",
    tecnologias: ["AVEVA InTouch", "Siemens S7-1500", "PROFINET", "SQL Server", "OPC-UA"],
    resultados: ["30% aumento en productividad", "Reducción de desperdicios en 25%", "Diagnóstico más rápido 60%"],
  },
  {
    id: 2, title: "Centro de Control de Motores (MCC)",
    cliente: "Industria manufacturera, Estado Carabobo", sector: "Industria General", year: "2023",
    description: "Diseño, ensamblaje e instalación de MCC con 48 arrancadores, protección con relés LTMR, monitoreo remoto vía Modbus TCP/IP y sistema SCADA de supervisión.",
    tecnologias: ["Schneider TeSys", "LTMR", "Modbus TCP", "InduSoft", "EPLAN"],
    resultados: ["100% disponibilidad operativa", "Paradas no planificadas -80%", "Monitoreo remoto 24/7"],
  },
  {
    id: 3, title: "Automatización de Línea de Embotellado Premium",
    cliente: "Empresa de bebidas, Venezuela", sector: "Alimentos y Bebidas", year: "2022",
    description: "Automatización de línea de embotellado a 20,000 botellas/hora con Allen-Bradley, HMI FactoryTalk y visión artificial para control de calidad.",
    tecnologias: ["Allen-Bradley ControlLogix", "FactoryTalk View", "Cognex Vision", "Ethernet/IP", "Kinetix"],
    resultados: ["Capacidad aumentada 40%", "Rechazo de calidad <0.1%", "ROI en 18 meses"],
  },
  {
    id: 4, title: "Sistema de Batching Automatizado – Nutrición Animal",
    cliente: "Planta de alimento balanceado, Portuguesa", sector: "Nutrición Animal", year: "2022",
    description: "Dosificación y mezcla automatizada para 12 materias primas con precisión de ±0.5 kg, gestión de recetas y trazabilidad completa del proceso.",
    tecnologias: ["Siemens S7-300", "WinCC", "PROFIBUS DP", "Mettler Toledo", "SAP Interface"],
    resultados: ["Precisión dosificación ±0.3%", "Trazabilidad 100%", "Mermas reducidas 35%"],
  },
  {
    id: 5, title: "Modernización de Planta de Generación Eléctrica",
    cliente: "Empresa de energía, Venezuela", sector: "Generación de Energía", year: "2021",
    description: "Migración de panel analógico obsoleto a Siemens PCS7 con SCADA moderno, acceso remoto seguro y sistema de gestión de alarmas.",
    tecnologias: ["Siemens PCS7", "WinCC OA", "OPC-DA/UA", "Historian", "VPN Industrial"],
    resultados: ["Disponibilidad 99.8%", "Alarmas reducidas 70%", "Acceso remoto seguro"],
  },
  {
    id: 6, title: "Red Industrial Profinet/Profibus en Acería",
    cliente: "Planta siderúrgica, Venezuela", sector: "Acerías", year: "2021",
    description: "Infraestructura completa de red industrial para planta siderúrgica con 60+ dispositivos de campo, fibra óptica industrial y diagnóstico centralizado.",
    tecnologias: ["PROFINET", "PROFIBUS DP", "Scalance X/W", "Fibra Óptica", "Sinema Remote"],
    resultados: ["60+ dispositivos integrados", "Latencia <5ms", "Diagnóstico remoto activo"],
  },
  {
    id: 7, title: "Integración IIoT – Industria 4.0",
    cliente: "Planta industrial, España", sector: "Manufactura", year: "2024",
    description: "Solución Industrial IoT para monitoreo predictivo de activos con Edge Computing, Azure IoT Hub y dashboards en tiempo real con modelos ML.",
    tecnologias: ["Azure IoT Hub", "Edge Computing", "Power BI", "Machine Learning", "OPC-UA"],
    resultados: ["Paradas reducidas 45%", "Mantenimiento predictivo activo", "KPIs en tiempo real"],
  },
  {
    id: 8, title: "Celdas Robóticas para Ensamblaje",
    cliente: "Industria automotriz, Venezuela", sector: "Manufactura", year: "2020",
    description: "Diseño e integración de 3 celdas robóticas para ensamblaje, soldadura MIG y manipulación de piezas con visión para posicionamiento.",
    tecnologias: ["ABB Robots", "RobotStudio", "Cognex Vision", "Allen-Bradley", "Profinet"],
    resultados: ["Producción +60%", "0 accidentes post-implementación", "Calidad soldadura +95%"],
  },
];

const stats = [
  { value: "+500", label: "Proyectos ejecutados" },
  { value: "+30", label: "Años de experiencia" },
  { value: "7", label: "Sectores industriales" },
  { value: "2", label: "Continentes" },
];

export default function ProyectosPage() {
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
            Portfolio de Proyectos
          </div>
          <h1 className="font-heading font-black text-5xl sm:text-6xl text-gray-900 mb-6">
            Proyectos que <span className="gradient-text">Hablan</span>
            <br />por Sí Solos
          </h1>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto">
            Más de 500 proyectos exitosos en Venezuela, España y toda Latinoamérica avalan nuestra trayectoria de 30 años.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-black text-3xl gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-100 hover:border-green-200 rounded-2xl p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium"
                      style={{ backgroundColor: "#E6FDE8", color: "#08B819" }}
                    >
                      {project.sector}
                    </span>
                    <span className="text-gray-400 text-xs font-mono">{project.year}</span>
                  </div>
                  <h2 className="font-heading font-bold text-gray-900 text-xl sm:text-2xl mb-1 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4">Cliente: {project.cliente}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tecnologias.map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-lg font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resultados */}
                <div className="lg:w-64">
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                    <h3
                      className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider"
                      style={{ color: "#0ADC1E" }}
                    >
                      Resultados
                    </h3>
                    <ul className="space-y-2.5">
                      {project.resultados.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: "#0ADC1E" }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-black text-3xl text-gray-900 mb-4">¿Listo para iniciar su proyecto?</h2>
          <p className="text-gray-500 mb-8">
            Contáctenos y cuéntenos su necesidad. Nuestros ingenieros le propondrán la mejor solución.
          </p>
          <Link
            href="/contacto#cotizacion"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl shadow-md"
            style={{ backgroundColor: "#0ADC1E" }}
          >
            Iniciar mi Proyecto
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
