"use client";

import Link from "next/link";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";

const partners = ["Schneider Electric", "Siemens", "Rockwell Automation", "AVEVA / Wonderware"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Imagen de fondo industrial ───────────────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80"
        alt="Planta de automatización industrial"
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />

      {/* ── Overlay navy + degradado verde ───────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(1,0,122,0.90) 0%, rgba(1,0,122,0.78) 55%, rgba(1,0,80,0.88) 100%)",
        }}
      />

      {/* Tech-grid sobre overlay */}
      <div className="absolute inset-0 tech-grid opacity-100" />

      {/* Acento verde bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0ADC1E 0%, transparent 70%)" }}
      />

      {/* ── Contenido ────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1
                      text-center px-4 sm:px-6 lg:px-8 pt-28 pb-16">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-5 py-1.5 mb-8
                     text-sm font-medium border border-green-400/40 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(10,220,30,0.12)", color: "#0ADC1E" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          System Integrator Certificado · Desde 1992
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black leading-[0.9] mb-6 max-w-5xl
                       text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
          ELECTRÓNICA{" "}
          <span className="block gradient-text-bright">INDUSTRIAL</span>
          <span className="block text-3xl sm:text-4xl md:text-5xl font-light text-white/60 mt-3">
            C.A.
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-white/80 font-light mb-3 max-w-3xl">
          Automatizamos el Futuro de tu Industria
        </p>
        <p className="text-white/50 text-base sm:text-lg mb-12 max-w-2xl">
          Tres décadas integrando tecnología de automatización y control industrial
          en Venezuela, España y América Latina.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-12">
          {[
            { value: "+30", label: "Años" },
            { value: "+500", label: "Proyectos" },
            { value: "+50", label: "Clientes" },
            { value: "2", label: "Continentes" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="font-heading font-black text-4xl sm:text-5xl mb-0.5"
                style={{ color: "#0ADC1E" }}
              >
                {value}
              </div>
              <div className="text-white/50 text-xs uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/servicios"
            className="group flex items-center gap-2 text-white font-bold
                       px-8 py-4 rounded-xl text-base transition-all duration-300
                       shadow-lg hover:shadow-xl active:scale-95"
            style={{ backgroundColor: "#0ADC1E" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#08B819")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0ADC1E")}
          >
            Ver Servicios
            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contacto#cotizacion"
            className="group flex items-center gap-2 font-bold px-8 py-4 rounded-xl
                       text-base transition-all duration-300 border-2 border-white/40
                       text-white hover:border-white hover:bg-white/10 active:scale-95"
          >
            Solicitar Cotización
            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ── Barra de partners ────────────────────────── */}
      <div
        className="relative z-10 border-t border-white/10 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(1,0,122,0.6)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
            <span className="text-white/40 text-xs uppercase tracking-widest mr-4 hidden sm:block">
              Certificado por
            </span>
            {partners.map((p) => (
              <span key={p} className="text-white/60 text-sm font-medium hover:text-white transition-colors">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex flex-col items-center py-5 animate-bounce">
        <HiChevronDown className="w-6 h-6 text-white/30" />
      </div>
    </section>
  );
}
