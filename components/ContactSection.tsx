"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { HiLocationMarker, HiPhone, HiMail, HiCheckCircle } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

type FormData = {
  nombre: string; empresa: string; email: string;
  telefono: string; sector: string; mensaje: string;
};

const sectors = [
  "Agro-Alimenticia","Generación de Energía","Refinerías",
  "Acerías / Metalurgia","Alimentos y Bebidas","Nutrición Animal",
  "Industria General","Otro",
];

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (_data: FormData) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setSubmitting(false);
    reset();
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium border"
            style={{ backgroundColor: "#E8E8F8", borderColor: "#01007A", color: "#01007A" }}
          >
            Contáctenos
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-gray-900 mb-4">
            Hablemos de su{" "}
            <span className="gradient-text">Próximo Proyecto</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Nuestro equipo de ingenieros está listo para analizar sus necesidades y proponer la mejor solución.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-10 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Info lateral */}
          <div className="lg:col-span-2 space-y-5">

            {/* Venezuela */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                 style={{ borderLeftWidth: 4, borderLeftColor: "#01007A" }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🇻🇪</span>
                <div>
                  <h3 className="font-heading font-bold text-gray-900">Venezuela</h3>
                  <p className="text-gray-500 text-sm">Sede Principal</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <HiLocationMarker className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#0ADC1E" }} />
                  <span>Av. 40 entre calles 33 y 34, Edificio Elinca, Bella Vista I, Sector El Palito, Acarigua, Estado Portuguesa</span>
                </div>
                <a href="tel:+5802556218847" className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  <HiPhone className="w-4 h-4 flex-shrink-0" style={{ color: "#0ADC1E" }} />
                  +(58) 0255-6218847
                </a>
                <a href="mailto:info@elinca.net" className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  <HiMail className="w-4 h-4 flex-shrink-0" style={{ color: "#0ADC1E" }} />
                  info@elinca.net
                </a>
              </div>
            </div>

            {/* España */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                 style={{ borderLeftWidth: 4, borderLeftColor: "#01007A" }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🇪🇸</span>
                <div>
                  <h3 className="font-heading font-bold text-gray-900">España</h3>
                  <p className="text-gray-500 text-sm">Sede Internacional</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <HiLocationMarker className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#0ADC1E" }} />
                <span>Av. de la Cabrera No. 19, 28751 La Cabrera, Madrid, España</span>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/582556218847?text=Hola%20ELINCA%2C%20me%20gustar%C3%ADa%20obtener%20información%20sobre%20sus%20servicios."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-gray-100 hover:border-green-200
                         hover:shadow-md rounded-2xl p-5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <FaWhatsapp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">Contactar por WhatsApp</div>
                <div className="text-gray-500 text-xs">Respuesta rápida · Disponible ahora</div>
              </div>
            </a>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <div
              id="cotizacion"
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
              style={{ borderTopWidth: 4, borderTopColor: "#01007A" }}
            >
              <h3 className="font-heading font-bold text-gray-900 text-xl mb-6">Solicitar Cotización</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#E6FDE8" }}>
                    <HiCheckCircle className="w-10 h-10" style={{ color: "#0ADC1E" }} />
                  </div>
                  <h4 className="text-gray-900 font-heading font-bold text-xl mb-2">¡Mensaje enviado!</h4>
                  <p className="text-gray-500">Nos pondremos en contacto en las próximas 24 horas hábiles.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-sm underline" style={{ color: "#01007A" }}>
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-600 font-medium mb-1.5">Nombre completo *</label>
                      <input {...register("nombre", { required: "Requerido" })}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-800 rounded-xl
                                   px-4 py-3 text-gray-900 text-sm outline-none transition-all placeholder:text-gray-400"
                        placeholder="Juan Pérez" />
                      {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 font-medium mb-1.5">Empresa</label>
                      <input {...register("empresa")}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-800 rounded-xl
                                   px-4 py-3 text-gray-900 text-sm outline-none transition-all placeholder:text-gray-400"
                        placeholder="Mi Empresa C.A." />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 font-medium mb-1.5">Correo electrónico *</label>
                      <input {...register("email", { required: "Requerido", pattern: { value: /^\S+@\S+\.\S+$/, message: "Email inválido" } })}
                        type="email"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-800 rounded-xl
                                   px-4 py-3 text-gray-900 text-sm outline-none transition-all placeholder:text-gray-400"
                        placeholder="juan@empresa.com" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 font-medium mb-1.5">Teléfono</label>
                      <input {...register("telefono")}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-800 rounded-xl
                                   px-4 py-3 text-gray-900 text-sm outline-none transition-all placeholder:text-gray-400"
                        placeholder="+58 412 0000000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 font-medium mb-1.5">Sector Industrial</label>
                    <select {...register("sector")}
                      className="w-full bg-gray-50 border border-gray-200 focus:border-blue-800 rounded-xl
                                 px-4 py-3 text-gray-900 text-sm outline-none transition-all">
                      <option value="">Seleccionar sector...</option>
                      {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 font-medium mb-1.5">Descripción del proyecto *</label>
                    <textarea {...register("mensaje", { required: "Requerido" })} rows={4}
                      className="w-full bg-gray-50 border border-gray-200 focus:border-blue-800 rounded-xl
                                 px-4 py-3 text-gray-900 text-sm outline-none transition-all
                                 placeholder:text-gray-400 resize-none"
                      placeholder="Describa brevemente su proyecto o necesidad de automatización..." />
                    {errors.mensaje && <p className="text-red-500 text-xs mt-1">{errors.mensaje.message}</p>}
                  </div>
                  <button type="submit" disabled={submitting}
                    className="w-full text-white font-semibold py-4 rounded-xl transition-all duration-300
                               shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#01007A" }}
                    onMouseEnter={(e) => !submitting && (e.currentTarget.style.backgroundColor = "#0000A3")}
                    onMouseLeave={(e) => !submitting && (e.currentTarget.style.backgroundColor = "#01007A")}
                  >
                    {submitting ? "Enviando..." : "Enviar Solicitud de Cotización"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
