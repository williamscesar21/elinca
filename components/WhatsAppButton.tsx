"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/582556218847?text=Hola%20ELINCA%2C%20me%20gustar%C3%ADa%20obtener%20información%20sobre%20sus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`whatsapp-btn transition-all duration-500 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </a>
  );
}
