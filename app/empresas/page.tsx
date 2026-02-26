"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import {
  Headset,
  LineChart,
  Scale,
  Gavel,
  MessageCircle,
  Server,
  Building2,
  Briefcase,
} from "lucide-react"

export default function EmpresasPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true)
      else setIsVisible(false)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const cardGestures = {
    whileHover: { scale: 1.02, y: -5 },
    whileTap: { scale: 0.98 }
  }

  const whatsappNumber = "573117719474"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola,%20solicito%20información%20sobre%20el%20Marco%20Estratégico.`

  return (
    <main className="min-h-screen bg-white relative">
      <Header />

      {/* BOTÓN WHATSAPP CORPORATIVO */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#1264ad] hover:bg-[#0d2a61] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        )}
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute w-full h-full rounded-full bg-[#1264ad] animate-ping opacity-30 pointer-events-none" />
      </a>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/LandingPageMjm/descarga.jpg"
            alt="Fondo"
            fill
            priority
            className="object-cover"
            quality={75}
          />
          <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 pt-32 pb-20">
          <motion.div {...fadeInUp} className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight uppercase">
              MARCO ESTRATÉGICO
            </h1>
            <p className="text-xl text-slate-800 max-w-3xl mx-auto leading-relaxed font-bold">
              Nuestros servicios son ejecutados por un equipo profesional capacitado,
              bajo funciones operativas y legales claramente establecidas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INFRAESTRUCTURA IT */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-4 mb-6">
              <Server className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900 uppercase">
                Infraestructura de Informática y Telecomunicaciones
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Contamos con un Departamento de Sistemas altamente calificado,
              encargado de la implementación, monitoreo y seguridad informática.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="relative h-[450px] rounded-[50px] overflow-hidden shadow-2xl">
            <Image
              src="/LandingPageMjm/imagen5.jpg"
              alt="Infraestructura IT"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* INFRAESTRUCTURA OPERATIVA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="relative h-[400px] rounded-[50px] overflow-hidden shadow-2xl">
            <Image
              src="/LandingPageMjm/imagen6.jpg"
              alt="Infraestructura Operativa"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-4 mb-6">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900 uppercase">
                Infraestructura Operativa
              </h2>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed">
              Disponemos de una infraestructura seccionada para nuestro centro de contacto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INFRAESTRUCTURA JURÍDICA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900 uppercase">
                Infraestructura Prejurídica y Jurídica
              </h2>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed">
              Infraestructura especializada para nuestro equipo jurídico y prejurídico.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="relative h-[400px] rounded-[50px] overflow-hidden shadow-2xl">
            <Image
              src="/LandingPageMjm/imagen7.jpg"
              alt="Infraestructura Jurídica"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}