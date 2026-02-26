"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button" 
import Image from "next/image"
import { 
  Headset, 
  LineChart, 
  Scale, 
  Gavel, 
  ShieldCheck,
  MessageCircle,
  GraduationCap,
  Monitor,
  ArrowRight,
  Server,
  Building2,
  Briefcase,
  FileText, 
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

      {/* BOTÓN WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25d366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        )}
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute w-full h-full rounded-full bg-[#25d366] animate-ping opacity-30 pointer-events-none" />
      </a>

      {/* --- SECCIÓN UNIFICADA CON FONDO (HERO + CUADROS) --- */}
      <section className="relative overflow-hidden">
         <div className="absolute inset-0 z-0">
          <Image
            src="/LandingPageMjm/descarga.jpg" 
            alt="Fondo"
            fill
            priority
            className="w-full h-full object-cover opacity-100" 
            quality={75}
          />
          <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10">
          <div className="pt-32 pb-16">
            <motion.div {...fadeInUp} className="container mx-auto px-6 text-center">
              <div className="">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight uppercase">
                  MARCO ESTRATÉGICO
                </h1>
                <p className="text-xl text-slate-800 max-w-3xl mx-auto leading-relaxed font-bold">
                  Nuestros servicios son ejecutados por un equipo profesional capacitado, bajo funciones operativas y legales claramente establecidas.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="pb-20">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* ÁREA COMERCIAL - CONTACTO */}
                <motion.div {...fadeInUp} {...cardGestures} className="group bg-white/95 backdrop-blur-md hover:bg-[#0d2a61] p-8 rounded-[40px] border border-slate-200 shadow-xl transition-all duration-500 cursor-pointer">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-500 rounded-full flex items-center justify-center shrink-0 transition-colors">
                      <Headset className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <h3 className="font-bold text-black group-hover:text-white text-xl tracking-tight uppercase">ÁREA COMERCIAL - CONTACTO</h3>
                  </div>
                  <ul className="space-y-4 text-black group-hover:text-blue-50 mb-8">
                    <li className="flex gap-3 text-sm">• <span>Contacto personalizado y directo a cada consumidor.</span></li>
                    <li className="flex gap-3 text-sm">• <span>Acuerdos de pago efectivos.</span></li>
                    <li className="flex gap-3 text-sm">• <span>Monitoreo en tiempo real de gestiones con retroalimentación inmediata.</span></li>
                  </ul>
                </motion.div>

                {/* ÁREA COMERCIAL - SEGUIMIENTO */}
                <motion.div {...fadeInUp} {...cardGestures} transition={{ delay: 0.1 }} className="group bg-white/95 backdrop-blur-md hover:bg-[#0d2a61] p-8 rounded-[40px] border border-slate-200 shadow-xl transition-all duration-500 cursor-pointer">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-500 rounded-full flex items-center justify-center shrink-0 transition-colors">
                      <LineChart className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <h3 className="font-bold text-black group-hover:text-white text-xl tracking-tight uppercase">ÁREA COMERCIAL - SEGUIMIENTO</h3>
                  </div>
                  <ul className="space-y-4 text-black group-hover:text-blue-50 mb-8">
                    <li className="flex gap-3 text-sm">• <span>Control de pagos, indicadores de efectividad e ingresos por gestor.</span></li>
                    <li className="flex gap-3 text-sm">• <span>Verificación diaria de reportes de cobro.</span></li>
                    <li className="flex gap-3 text-sm">• <span>Control exhaustivo de correspondencia efectiva.</span></li>
                  </ul>
                </motion.div>

                {/* ÁREA PREJURÍDICA */}
                <motion.div {...fadeInUp} {...cardGestures} transition={{ delay: 0.2 }} className="group bg-white/95 backdrop-blur-md hover:bg-[#0d2a61] p-8 rounded-[40px] border border-slate-200 shadow-xl transition-all duration-500 cursor-pointer">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-500 rounded-full flex items-center justify-center shrink-0 transition-colors">
                      <Scale className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <h3 className="font-bold text-black group-hover:text-white text-xl tracking-tight uppercase">ÁREA PREJURÍDICA</h3>
                  </div>
                  <ul className="space-y-4 text-black group-hover:text-blue-50 mb-8">
                    <li className="flex gap-3 text-sm">• <span>Cobranza en franjas administrativa, prejurídica y castigada.</span></li>
                    <li className="flex gap-3 text-sm">• <span>Control de compromisos, incumplimientos y perfiles.</span></li>
                    <li className="flex gap-3 text-sm">• <span>Programación de brigadas especiales y control de mora.</span></li>
                  </ul>
                </motion.div>

                {/* ÁREA JURÍDICA */}
                <motion.div {...fadeInUp} {...cardGestures} transition={{ delay: 0.3 }} className="group bg-white/95 backdrop-blur-md hover:bg-[#0d2a61] p-8 rounded-[40px] border border-slate-200 shadow-xl transition-all duration-500 cursor-pointer">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-500 rounded-full flex items-center justify-center shrink-0 transition-colors">
                      <Gavel className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <h3 className="font-bold text-black group-hover:text-white text-xl tracking-tight uppercase">ÁREA JURÍDICA</h3>
                  </div>
                  <ul className="space-y-4 text-black group-hover:text-blue-50 mb-8">
                    <li className="flex gap-3 text-sm">• <span>Asesoría legal, recuperación de cartera vencida mediante vías legales.</span></li>
                    <li className="flex gap-3 text-sm">• <span>Representación judicial y extrajudicial en asuntos de derecho comercial.</span></li>
                    <li className="flex gap-3 text-sm">• <span>Acompañamiento en trámite concursal de insolvencia económica de persona natural no comerciante y empresarial.</span></li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. INFRAESTRUCTURA INFORMÁTICA */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <Server className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 uppercase">INFRAESTRUCTURA DE INFORMÁTICA Y TELECOMUNICACIONES</h2>
              </div>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>Contamos con un **Departamento de Sistemas altamente calificado, encargado de la implementación, monitoreo, soporte, mantenimiento y auditoría de seguridad informática de toda nuestra infraestructura tecnológica, tanto de software como de hardware.</p>
                <p>Gracias a una gestión integral y a procesos permanentes de auditoría informática, garantizamos el óptimo funcionamiento, la estabilidad y la protección de nuestras plataformas tecnológicas, lo que nos permite brindar un servicio eficiente, confiable y seguro.</p>
                <p>
Nuestra infraestructura informática está respaldada por sólidos sistemas de contingencia y planes de continuidad operativa, asegurando la disponibilidad del servicio ante cualquier eventualidad o falla técnica.</p>
               </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="order-1 lg:order-2 relative h-[500px] rounded-[60px] overflow-hidden shadow-2xl">
              <Image 
                src="/LandingPageMjm/imagen5.jpg" 
                alt="Infraestructura IT" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INFRAESTRUCTURA OPERATIVA */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="relative h-[400px] rounded-[60px] overflow-hidden shadow-2xl">
              <Image 
                src="/LandingPageMjm/imagen6.jpg" 
                alt="Infraestructura Operativa" 
                fill 
                className="object-cover"
              />
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 uppercase">INFRAESTRUCTURA OPERATIVA</h2>
              </div>
              <p className="text-xl text-slate-700 leading-relaxed">
                Disponemos de una infraestructura seccionada para la ubicación de nuestro centro de contacto.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. INFRAESTRUCTURA PREJURÍDICA Y JURÍDICA */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <Briefcase className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 uppercase">INFRAESTRUCTURA PREJURÍDICA Y JURÍDICA</h2>
              </div>
              <p className="text-xl text-slate-700 leading-relaxed">
                Disponemos de infraestructura seccionada para nuestro equipo prejurídico y jurídico.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative h-[400px] rounded-[60px] overflow-hidden shadow-2xl">
              <Image 
                src="/LandingPageMjm/imagen7.jpg" 
                alt="Archivo Jurídico" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: RECURSO HUMANO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/LandingPageMjm/imagen4.jpg"
            alt="Fondo Talento Humano"
            fill
            className="object-cover opacity-150"
            quality={90}
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Talento Humano Especializado
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {/* 1. ÁREA COMERCIAL */}
            <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-3xl text-center flex flex-col items-center shadow-lg hover:bg-white transition-all duration-300">
              <div className="bg-[#009688] p-4 rounded-full mb-6 shadow-md">
                <Headset className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-slate-900 text-lg font-bold uppercase mb-1">Área Comercial</h3> 
              <h4 className="text-blue-700 text-md font-semibold mb-4 invisible md:block">&nbsp;</h4>             
              <p className="text-slate-800 text-sm font-medium leading-relaxed">Empleamos diversos medios de comunicación con tecnología segura.</p>
            </div>

            {/* 2. MONITOREO */}
            <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-3xl text-center flex flex-col items-center shadow-lg hover:bg-white transition-all duration-300">
              <div className="bg-[#8ecae6] p-4 rounded-full mb-6 shadow-md">
                <LineChart className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-slate-900 text-lg font-bold uppercase mb-1">Seguimiento en tiempo real</h3>
              <h4 className="text-blue-700 text-md font-semibold mb-4 invisible md:block">&nbsp;</h4>            
              <p className="text-slate-800 text-sm font-medium leading-relaxed">Disponemos de herramientas de análisis de datos.</p>
            </div>

            {/* 3. ÁREA PREJURÍDICA */}
            <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-3xl text-center flex flex-col items-center shadow-lg hover:bg-white transition-all duration-300">
              <div className="bg-[#3f51b5] p-4 rounded-full mb-6 shadow-md">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-slate-900 text-lg font-bold uppercase mb-1">Área Prejurídica</h3>
              <h4 className="text-blue-700 text-md font-semibold mb-4 invisible md:block">&nbsp;</h4>
              <p className="text-slate-800 text-sm font-medium leading-relaxed">Control tecnológico de procesos y personal profesional.</p>
            </div>

            {/* 4. ÁREA JURÍDICA */}
            <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-3xl text-center flex flex-col items-center shadow-lg hover:bg-white transition-all duration-300">
              <div className="bg-[#00e5ff] p-4 rounded-full mb-6 shadow-md">
                <Gavel className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-slate-900 text-lg font-bold uppercase mb-1">Área Jurídica</h3>
              <h4 className="text-blue-700 text-md font-semibold mb-4 invisible md:block">&nbsp;</h4>
              <p className="text-slate-800 text-sm font-medium leading-relaxed">Dirección de procesos jurídicos y administrativos.</p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </main>
  )
}
