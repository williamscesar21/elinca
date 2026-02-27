"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 3 + 1,
        opacity: Math.random() * 0.3 + 0.05,
      });
    }

    let animId: number;
    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10, 220, 30, ${p.opacity})`;
        ctx.fill();

        particles.forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(10, 220, 30, ${0.08 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Canvas particles (muy sutiles) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* Fondo con manchas de color suaves */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 z-0"
        style={{ background: "radial-gradient(circle, #0ADC1E 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 z-0"
        style={{ background: "radial-gradient(circle, #0ADC1E 0%, transparent 70%)" }}
      />

      {/* Dot grid pattern */}
      <div className="absolute inset-0 z-0 dot-grid opacity-60" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-sm font-medium border"
          style={{
            backgroundColor: "#E6FDE8",
            borderColor: "#0ADC1E",
            color: "#08B819",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#0ADC1E" }}
          />
          System Integrator Certificado · Desde 1992
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 leading-[0.92] mb-6 max-w-5xl">
          ELECTRÓNICA{" "}
          <span className="gradient-text">INDUSTRIAL</span>
          <span className="block text-4xl sm:text-5xl md:text-6xl font-light text-gray-400 mt-2">
            C.A.
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-xl sm:text-2xl text-gray-600 mb-4 font-light max-w-3xl">
          Automatizamos el Futuro de tu Industria
        </p>
        <p className="font-body text-gray-500 text-base sm:text-lg mb-12 max-w-2xl">
          Más de 3 décadas integrando tecnología de automatización y control
          industrial en Venezuela, España y América Latina.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mb-12">
          {[
            { value: "+30", label: "Años de experiencia" },
            { value: "+500", label: "Proyectos ejecutados" },
            { value: "+50", label: "Clientes activos" },
            { value: "2", label: "Continentes" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="font-heading font-black text-4xl sm:text-5xl mb-0.5"
                style={{ color: "#0ADC1E" }}
              >
                {value}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm font-body uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/servicios"
            className="group flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg text-base"
            style={{ backgroundColor: "#0ADC1E" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#08B819")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0ADC1E")
            }
          >
            Ver Servicios
            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contacto#cotizacion"
            className="group flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-300 border-2 text-base"
            style={{ borderColor: "#0ADC1E", color: "#08B819" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#E6FDE8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Solicitar Cotización
            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex flex-col items-center pb-8 animate-bounce">
        <span className="text-gray-400 text-xs mb-2 font-body">Descubrir más</span>
        <HiChevronDown className="w-5 h-5 text-gray-400" />
      </div>
    </section>
  );
}
