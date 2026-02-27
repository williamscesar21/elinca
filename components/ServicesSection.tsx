"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  HiCog,
  HiChip,
  HiCode,
  HiLightningBolt,
  HiWifi,
  HiShieldCheck,
} from "react-icons/hi";
import { MdPrecisionManufacturing } from "react-icons/md";

const services = [
  {
    icon: HiCog,
    title: "Automatización Industrial",
    description:
      "Diseño e implementación de sistemas completos de automatización para optimizar sus procesos productivos.",
    href: "/servicios#automatizacion",
  },
  {
    icon: HiChip,
    title: "Integración de Sistemas",
    description:
      "System Integrator certificado para Siemens, Schneider Electric, Rockwell Automation y AVEVA/Wonderware.",
    href: "/servicios#integracion",
  },
  {
    icon: HiCode,
    title: "PLC / HMI / SCADA",
    description:
      "Programación de controladores lógicos, interfaces hombre-máquina y sistemas de supervisión y control.",
    href: "/servicios#plc-hmi-scada",
  },
  {
    icon: MdPrecisionManufacturing,
    title: "Robótica Industrial",
    description:
      "Integración de células robotizadas y soluciones de robótica para automatizar tareas de manufactura.",
    href: "/servicios#robotica",
  },
  {
    icon: HiLightningBolt,
    title: "Tableros Eléctricos",
    description:
      "Diseño y ensamblaje de tableros de control, CCM/MCC y paneles de distribución eléctrica.",
    href: "/servicios#tableros",
  },
  {
    icon: HiWifi,
    title: "Redes Industriales",
    description:
      "Diseño, puesta en marcha y diagnóstico de redes de comunicación industrial.",
    href: "/servicios#redes",
  },
  {
    icon: HiShieldCheck,
    title: "Instrumentación",
    description:
      "Instalación, calibración y configuración de sensores, transmisores y elementos de medición industrial.",
    href: "/servicios#instrumentacion",
  },
  {
    icon: HiShieldCheck,
    title: "Soporte Técnico",
    description:
      "Servicio técnico especializado, mantenimiento preventivo y correctivo de sistemas de automatización.",
    href: "/servicios#soporte",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`service-card transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <Link href={service.href}>
        <div className="group h-full bg-white border border-gray-100 hover:border-green-200 rounded-2xl p-6 cursor-pointer hover:shadow-lg hover:shadow-green-100 transition-all duration-300">
          {/* Icono */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm"
            style={{ backgroundColor: "#E6FDE8" }}
          >
            <Icon className="w-7 h-7" style={{ color: "#0ADC1E" }} />
          </div>

          <h3 className="font-heading font-bold text-gray-900 text-lg mb-3 group-hover:text-green-600 transition-colors duration-200">
            {service.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {service.description}
          </p>

          <div
            className="mt-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
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
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium border"
            style={{
              backgroundColor: "#E6FDE8",
              borderColor: "#0ADC1E",
              color: "#08B819",
            }}
          >
            Nuestros Servicios
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-gray-900 mb-4">
            Soluciones Integrales en{" "}
            <span className="gradient-text">Automatización</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Desde el diseño hasta la puesta en marcha, cubrimos todo el ciclo
            de vida de sus sistemas industriales con tecnología de vanguardia.
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
            className="inline-flex items-center gap-2 border-2 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-green-50"
            style={{ borderColor: "#0ADC1E", color: "#08B819" }}
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
