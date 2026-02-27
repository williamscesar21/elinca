"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  HiCog, HiChip, HiCode, HiLightningBolt, HiWifi, HiShieldCheck,
} from "react-icons/hi";
import { MdPrecisionManufacturing } from "react-icons/md";

const services = [
  { icon: HiCog,                    title: "Automatización Industrial",  description: "Diseño e implementación de sistemas completos para optimizar sus procesos productivos con tecnología de punta.",             href: "/servicios#automatizacion" },
  { icon: HiChip,                   title: "Integración de Sistemas",    description: "System Integrator certificado para Siemens, Schneider Electric, Rockwell Automation y AVEVA/Wonderware.",                    href: "/servicios#integracion"    },
  { icon: HiCode,                   title: "PLC / HMI / SCADA",          description: "Programación de PLCs, interfaces hombre-máquina y sistemas SCADA de supervisión y control en tiempo real.",                  href: "/servicios#plc-hmi-scada"  },
  { icon: MdPrecisionManufacturing, title: "Robótica Industrial",        description: "Integración de células robotizadas para automatizar ensamble, soldadura y manipulación de materiales.",                      href: "/servicios#robotica"       },
  { icon: HiLightningBolt,          title: "Tableros Eléctricos",        description: "Diseño y ensamblaje de tableros de control, CCM/MCC y paneles de distribución según normas IEC/NEC/NEMA.",                  href: "/servicios#tableros"       },
  { icon: HiWifi,                   title: "Redes Industriales",         description: "Profibus, Profinet, EtherNet/IP, Modbus TCP — diseño, instalación y diagnóstico de redes de comunicación industrial.",        href: "/servicios#redes"          },
  { icon: HiShieldCheck,            title: "Instrumentación",            description: "Instalación, calibración y configuración de transmisores, analizadores y elementos de medición industrial.",                  href: "/servicios#instrumentacion"},
  { icon: HiShieldCheck,            title: "Soporte Técnico",            description: "Contratos de mantenimiento preventivo/correctivo y soporte remoto con tiempos de respuesta garantizados.",                   href: "/servicios#soporte"        },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = service.icon;
  return (
    <div
      ref={ref}
      className={`service-card transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <Link href={service.href}>
        <div
          className="group h-full bg-white border border-gray-100 hover:border-transparent
                     rounded-2xl p-6 cursor-pointer transition-all duration-300
                     hover:shadow-xl relative overflow-hidden"
        >
          {/* Acento izquierdo navy que aparece en hover */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300
                       opacity-0 group-hover:opacity-100"
            style={{ backgroundColor: "#01007A" }}
          />

          {/* Icono */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-5
                       transition-all duration-300 group-hover:scale-110 shadow-sm"
            style={{ backgroundColor: "#E8E8F8" }}
          >
            <Icon className="w-7 h-7" style={{ color: "#01007A" }} />
          </div>

          <h3
            className="font-heading font-bold text-gray-900 text-lg mb-3
                       group-hover:text-azul-marino transition-colors duration-200"
            style={{ color: "inherit" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#01007A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
          >
            {service.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>

          <div
            className="mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100
                       transition-opacity duration-200 flex items-center gap-1"
            style={{ color: "#0ADC1E" }}
          >
            Ver más →
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decoración esquina */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8E8F8 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6
                       text-sm font-medium border"
            style={{ backgroundColor: "#E8E8F8", borderColor: "#01007A", color: "#01007A" }}
          >
            Nuestros Servicios
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-gray-900 mb-4">
            Soluciones Integrales en{" "}
            <span className="gradient-text">Automatización</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Cubrimos todo el ciclo de vida de sus sistemas industriales con tecnología de vanguardia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 border-2 font-semibold
                       px-8 py-3 rounded-xl transition-all duration-300 hover:bg-blue-50"
            style={{ borderColor: "#01007A", color: "#01007A" }}
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
