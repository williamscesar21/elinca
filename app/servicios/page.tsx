import type { Metadata } from "next";
import Link from "next/link";
import { HiCog, HiChip, HiCode, HiLightningBolt, HiWifi, HiShieldCheck, HiArrowRight } from "react-icons/hi";
import { MdPrecisionManufacturing } from "react-icons/md";

export const metadata: Metadata = {
  title: "Servicios | ELINCA - Automatización Industrial",
  description: "Servicios de automatización industrial, integración de sistemas PLC/HMI/SCADA, robótica, instrumentación, tableros eléctricos y redes industriales.",
};

const services = [
  {
    id: "automatizacion", icon: HiCog,
    title: "Automatización Industrial",
    tagline: "Optimice sus procesos con tecnología de punta",
    description: "Diseñamos e implementamos sistemas completos de automatización para transformar sus procesos productivos. Desde el análisis de requerimientos hasta la puesta en marcha, garantizamos soluciones llave en mano que maximizan la eficiencia y rentabilidad.",
    features: ["Análisis y diagnóstico de procesos industriales", "Diseño de arquitecturas de control", "Sistemas de batching y dosificación", "Control de calidad automatizado", "Integración con sistemas ERP/MES", "Puesta en marcha y comisionamiento"],
  },
  {
    id: "integracion", icon: HiChip,
    title: "Integración de Sistemas",
    tagline: "System Integrator certificado a nivel internacional",
    description: "Como integradores certificados por Siemens, Schneider Electric, Rockwell Automation y AVEVA, contamos con el expertise para diseñar, implementar y mantener soluciones complejas que integran múltiples tecnologías.",
    features: ["Integración multiplataforma (Siemens, Schneider, Rockwell, AVEVA)", "Migración y modernización de sistemas legacy", "Integración OT con IT", "Soluciones IIoT y Cloud Industrial", "Ciberseguridad industrial", "Soporte y mantenimiento 24/7"],
  },
  {
    id: "plc-hmi-scada", icon: HiCode,
    title: "PLC / HMI / SCADA",
    tagline: "Programación y configuración de sistemas de control",
    description: "Nuestro equipo domina los principales lenguajes de programación (Ladder, FBD, SFC, ST, IL) y las plataformas SCADA más reconocidas, ofreciendo soluciones personalizadas de control y supervisión.",
    features: ["Siemens S7-300/400/1200/1500", "Allen-Bradley ControlLogix / CompactLogix", "Schneider Electric Modicon M340/M580", "HMIs: WinCC, FactoryTalk, InTouch", "SCADA: Wonderware/AVEVA, Ignition", "Historizadores y reportes de producción"],
  },
  {
    id: "robotica", icon: MdPrecisionManufacturing,
    title: "Robótica Industrial",
    tagline: "Integración de células robotizadas",
    description: "Implementamos soluciones de robótica para automatizar tareas de manufactura, ensamble, paletizado, soldadura y manipulación de materiales, aumentando la productividad y mejorando las condiciones de trabajo.",
    features: ["Integración de robots industriales", "Diseño de células robotizadas", "Programación de trayectorias y movimientos", "Visión artificial para control de calidad", "Colaboración humano-robot (cobots)", "Mantenimiento predictivo de sistemas robóticos"],
  },
  {
    id: "tableros", icon: HiLightningBolt,
    title: "Tableros y Paneles Eléctricos",
    tagline: "Diseño y ensamblaje de alta calidad",
    description: "Diseñamos y ensamblamos tableros de control, CCM/MCC y paneles de distribución según normas NEC, IEC, NEMA, ATEX, garantizando seguridad y confiabilidad en todas las instalaciones.",
    features: ["Centros de Control de Motores (CCM/MCC)", "Tableros de control y potencia", "Paneles de distribución eléctrica", "Tableros para zonas clasificadas (ATEX)", "Diseño con EPLAN/AutoCAD Electrical", "Pruebas FAT (Factory Acceptance Test)"],
  },
  {
    id: "redes", icon: HiWifi,
    title: "Redes Industriales",
    tagline: "Conectividad y comunicación confiable",
    description: "Diseñamos, instalamos y mantenemos infraestructuras de comunicación industrial que garantizan la conectividad confiable entre todos los dispositivos, desde el campo hasta el nivel corporativo.",
    features: ["Profibus DP/PA y Profinet", "DeviceNet y EtherNet/IP", "Modbus RTU/TCP", "OPC-UA y protocolos modernos", "Fibra óptica industrial", "Diagnóstico y troubleshooting de redes"],
  },
  {
    id: "instrumentacion", icon: HiShieldCheck,
    title: "Instrumentación Industrial",
    tagline: "Medición y control de procesos precisos",
    description: "Suministramos, instalamos y calibramos instrumentos de medición y control para garantizar la precisión y confiabilidad de sus procesos industriales.",
    features: ["Transmisores de presión, temperatura y flujo", "Analizadores de proceso", "Calibración HART, FOUNDATION Fieldbus", "Válvulas de control y actuadores", "Sistemas de seguridad SIL", "Mantenimiento y calibración certificada"],
  },
  {
    id: "soporte", icon: HiShieldCheck,
    title: "Soporte Técnico Especializado",
    tagline: "Respaldo continuo para su operación",
    description: "Contratos de soporte y mantenimiento que aseguran la continuidad operativa de sus sistemas, con tiempos de respuesta garantizados y personal altamente calificado.",
    features: ["Contratos de mantenimiento preventivo", "Soporte remoto y en sitio", "Gestión de repuestos críticos", "Auditorías de sistemas de control", "Capacitación al personal del cliente", "Gestión de actualizaciones y upgrades"],
  },
];

export default function ServiciosPage() {
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
            Nuestros Servicios
          </div>
          <h1 className="font-heading font-black text-5xl sm:text-6xl text-gray-900 mb-6">
            Soluciones Completas en{" "}
            <span className="gradient-text">Automatización</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto mb-8">
            Cubrimos todo el ciclo de vida de sus sistemas industriales, desde el diseño conceptual hasta el soporte post-implementación.
          </p>
          <Link
            href="/contacto#cotizacion"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl shadow-md text-base"
            style={{ backgroundColor: "#0ADC1E" }}
          >
            Solicitar Cotización
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                id={service.id}
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
              >
                {/* Content */}
                <div className={isEven ? "" : "lg:col-start-2"}>
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium border"
                    style={{ backgroundColor: "#E6FDE8", borderColor: "#0ADC1E", color: "#08B819" }}
                  >
                    <Icon className="w-4 h-4" />
                    {service.title}
                  </div>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-2">
                    {service.title}
                  </h2>
                  <p className="font-medium mb-4" style={{ color: "#0ADC1E" }}>{service.tagline}</p>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#0ADC1E" }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/contacto#cotizacion"
                      className="inline-flex items-center gap-2 border-2 font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:bg-green-50"
                      style={{ borderColor: "#0ADC1E", color: "#08B819" }}
                    >
                      Consultar sobre este servicio
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Visual */}
                <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                  <div
                    className="border rounded-3xl p-10 flex items-center justify-center min-h-64"
                    style={{ borderColor: "#CDFBD0", backgroundColor: "#F0FDF4" }}
                  >
                    <div
                      className="w-32 h-32 rounded-3xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "#0ADC1E" }}
                    >
                      <Icon className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
