"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";

const stats = [
  { value: "+30",  label: "Años",        sublabel: "desde 1992"   },
  { value: "+500", label: "Proyectos",   sublabel: "ejecutados"   },
  { value: "+50",  label: "Clientes",    sublabel: "activos"      },
  { value: "2",    label: "Continentes", sublabel: "de presencia" },
];

export default function HeroSection() {
  /* ── refs para manipulación directa del DOM (sin re-renders) ── */
  const bgRef      = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const h1Ref      = useRef<HTMLDivElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);
  const animRef    = useRef<number>();
  const target     = useRef({ x: 0, y: 0 });
  const cur        = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const tick = () => {
      cur.current.x = lerp(cur.current.x, target.current.x, 0.055);
      cur.current.y = lerp(cur.current.y, target.current.y, 0.055);
      const { x, y } = cur.current;

      /* parallax background — se aleja del cursor */
      if (bgRef.current)
        bgRef.current.style.transform =
          `scale(1.14) translate(${x * -28}px, ${y * -20}px)`;

      /* tilt 3-D del contenido — sigue levemente al cursor */
      if (contentRef.current)
        contentRef.current.style.transform =
          `rotateX(${y * -5}deg) rotateY(${x * 7}deg)`;

      /* sombra 3-D dinámica en el headline */
      if (h1Ref.current)
        h1Ref.current.style.textShadow =
          `${x * -3}px ${y * 3}px 0 rgba(1,0,122,.9),
           ${x * -6}px ${y * 6}px 0 rgba(1,0,122,.55),
           ${x * -10}px ${y * 10}px 0 rgba(1,0,122,.25)`;

      /* glow verde sigue al cursor */
      if (glowRef.current)
        glowRef.current.style.transform =
          `translate(calc(-50% + ${x * 80}px), calc(-50% + ${y * 50}px))`;

      animRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    animRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden select-none"
      style={{ perspective: "1100px", backgroundColor: "#01007A" }}
    >
      {/* ── 1. Imagen de fondo industrial ─────────────────────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={bgRef}
        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "scale(1.14)", willChange: "transform" }}
      />

      {/* ── 2. Capas de overlay ────────────────────────────────── */}
      {/* Navy profundo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg,rgba(1,0,122,.94) 0%,rgba(0,0,60,.86) 55%,rgba(0,0,0,.90) 100%)",
        }}
      />
      {/* Tech-grid verde */}
      <div className="absolute inset-0 tech-grid" />
      {/* Viñeta perimetral */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,40,.65) 100%)",
        }}
      />
      {/* Scanlines sutiles */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.04) 3px,rgba(0,0,0,.04) 4px)",
        }}
      />

      {/* ── 3. Glow verde que sigue al mouse ──────────────────── */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(10,220,30,.13) 0%, transparent 68%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          willChange: "transform",
        }}
      />

      {/* ── 4. Corchetes de esquina industriales ──────────────── */}
      {[
        "top-[88px] left-5 sm:left-8",
        "top-[88px] right-5 sm:right-8",
        "bottom-16 left-5 sm:left-8",
        "bottom-16 right-5 sm:right-8",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute w-8 h-8 pointer-events-none ${pos}`}
          style={{
            borderTop:    i < 2 ? "2px solid rgba(10,220,30,.45)" : "none",
            borderBottom: i >= 2 ? "2px solid rgba(10,220,30,.45)" : "none",
            borderLeft:   i % 2 === 0 ? "2px solid rgba(10,220,30,.45)" : "none",
            borderRight:  i % 2 === 1 ? "2px solid rgba(10,220,30,.45)" : "none",
          }}
        />
      ))}

      {/* Puntos de luz decorativos */}
      {[
        { top: "22%", left: "8%",  delay: "0s"    },
        { top: "55%", left: "4%",  delay: "1.2s"  },
        { top: "30%", right: "7%", delay: "0.6s"  },
        { top: "68%", right: "5%", delay: "1.8s"  },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full pointer-events-none animate-pulse"
          style={{
            ...pos,
            backgroundColor: "#0ADC1E",
            boxShadow: "0 0 8px #0ADC1E",
            animationDelay: pos.delay,
          }}
        />
      ))}

      {/* ── 5. Contenedor 3-D con preserve-3d ────────────────── */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center flex-1
                   text-center px-4 sm:px-6 lg:px-8 pt-24 pb-8"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(0deg) rotateY(0deg)",
          willChange: "transform",
        }}
      >
        {/* Badge — capa Z más alta */}
        <div style={{ transform: "translateZ(70px)" }} className="mb-8">
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2
                       text-sm font-semibold backdrop-blur-sm"
            style={{
              background: "rgba(10,220,30,.12)",
              border: "1px solid rgba(10,220,30,.40)",
              color: "#0ADC1E",
              boxShadow: "0 0 24px rgba(10,220,30,.2)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#0ADC1E" }}
            />
            System Integrator Certificado · Desde 1992
          </div>
        </div>

        {/* Headline — Z media-alta con sombra 3D dinámica */}
        <div
          ref={h1Ref}
          style={{ transform: "translateZ(45px)", willChange: "text-shadow" }}
          className="mb-4"
        >
          <span
            className="block font-heading font-black text-white leading-none"
            style={{ fontSize: "clamp(3rem,9vw,7.5rem)" }}
          >
            ELECTRÓNICA
          </span>
          <span
            className="block font-heading font-black leading-none gradient-text-bright"
            style={{
              fontSize: "clamp(3rem,9vw,7.5rem)",
              filter: "drop-shadow(0 0 32px rgba(10,220,30,.45))",
            }}
          >
            INDUSTRIAL
          </span>
          <span
            className="block font-heading font-light text-white/35 tracking-[.45em] mt-2"
            style={{ fontSize: "clamp(1.2rem,2.8vw,2.6rem)" }}
          >
            C.A.
          </span>
        </div>

        {/* Tagline */}
        <div style={{ transform: "translateZ(28px)" }} className="mb-8">
          <p className="text-lg sm:text-2xl text-white/65 font-light max-w-2xl mx-auto">
            Automatizamos el Futuro de tu Industria
          </p>
          {/* Divisor con punto verde */}
          <div className="mt-5 flex items-center justify-center gap-4 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-white/10" />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#0ADC1E", boxShadow: "0 0 12px #0ADC1E" }}
            />
            <div className="flex-1 h-px bg-white/10" />
          </div>
        </div>

        {/* ── Stats flotantes a diferentes profundidades ──────── */}
        <div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
          style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative text-center px-5 sm:px-6 py-4 rounded-2xl
                         backdrop-blur-md transition-all duration-300
                         hover:scale-105 cursor-default"
              style={{
                background: "rgba(255,255,255,.055)",
                border: "1px solid rgba(255,255,255,.10)",
                transform: `translateZ(${18 + i * 10}px)`,
                boxShadow: `
                  0 ${10 + i * 5}px ${24 + i * 8}px rgba(0,0,0,.45),
                  inset 0 1px 0 rgba(255,255,255,.08),
                  0 0 0 1px rgba(10,220,30,.06)
                `,
                minWidth: "88px",
              }}
            >
              {/* Línea superior verde */}
              <div
                className="absolute top-0 left-3 right-3 h-px rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg,transparent,rgba(10,220,30,.7),transparent)",
                }}
              />
              <div
                className="font-heading font-black leading-none mb-1"
                style={{
                  fontSize: "clamp(1.6rem,3vw,2.2rem)",
                  color: "#0ADC1E",
                  textShadow: "0 0 20px rgba(10,220,30,.5)",
                }}
              >
                {stat.value}
              </div>
              <div className="text-white text-xs font-bold uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-white/30 text-xs mt-0.5">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4"
          style={{ transform: "translateZ(55px)" }}
        >
          <Link
            href="/servicios"
            className="group flex items-center gap-2 text-white font-bold
                       px-8 py-4 rounded-xl text-base transition-all duration-300 active:scale-95"
            style={{
              backgroundColor: "#0ADC1E",
              boxShadow:
                "0 0 0 0 rgba(10,220,30,.35), 0 8px 22px rgba(10,220,30,.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#08B819";
              e.currentTarget.style.boxShadow =
                "0 0 0 8px rgba(10,220,30,.12), 0 12px 32px rgba(10,220,30,.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0ADC1E";
              e.currentTarget.style.boxShadow =
                "0 0 0 0 rgba(10,220,30,.35), 0 8px 22px rgba(10,220,30,.35)";
            }}
          >
            Ver Servicios
            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contacto#cotizacion"
            className="group flex items-center gap-2 font-bold px-8 py-4 rounded-xl
                       text-base text-white border border-white/25
                       hover:bg-white/10 hover:border-white/50
                       transition-all duration-300 active:scale-95 backdrop-blur-sm"
          >
            Solicitar Cotización
            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ── 6. Grilla de perspectiva 3D (piso) ───────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
        style={{ height: "320px", zIndex: 5 }}
      >
        {/* Grid que converge hacia el horizonte */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "-30%",
            right: "-30%",
            height: "560px",
            backgroundImage: `
              linear-gradient(rgba(10,220,30,.22) 1px, transparent 1px),
              linear-gradient(90deg, rgba(10,220,30,.22) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
            transform: "rotateX(72deg)",
            transformOrigin: "bottom center",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.5) 35%, black 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.5) 35%, black 75%)",
          }}
        />

        {/* Línea de horizonte */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "2px",
            height: "1px",
            background:
              "linear-gradient(90deg,transparent 5%,rgba(10,220,30,.5) 30%,rgba(10,220,30,.8) 50%,rgba(10,220,30,.5) 70%,transparent 95%)",
          }}
        />

        {/* Línea de escaneo animada */}
        <div
          className="absolute left-0 right-0 h-px hero-scan"
          style={{
            background:
              "linear-gradient(90deg,transparent 10%,rgba(10,220,30,.6) 35%,rgba(10,220,30,1) 50%,rgba(10,220,30,.6) 65%,transparent 90%)",
          }}
        />
      </div>

      {/* ── 7. Barra de partners ──────────────────────────────── */}
      <div
        className="relative z-10 border-t backdrop-blur-sm"
        style={{
          borderColor: "rgba(255,255,255,.08)",
          backgroundColor: "rgba(1,0,80,.65)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <span className="text-white/25 text-xs uppercase tracking-widest hidden sm:block">
              Certificado por
            </span>
            {[
              "Schneider Electric",
              "Siemens",
              "Rockwell Automation",
              "AVEVA / Wonderware",
            ].map((p) => (
              <span
                key={p}
                className="text-white/45 text-sm font-medium hover:text-white/80 transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center py-3 animate-bounce">
        <HiChevronDown className="w-5 h-5 text-white/25" />
      </div>
    </section>
  );
}
