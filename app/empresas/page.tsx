"use client"

import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { motion } from "framer-motion"
import { 
  Headset, 
  LineChart, 
  Server,
  Building2,
  Briefcase
} from "lucide-react"
import Image from "next/image"

export default function EmpresasPage() {
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

  return (
    <main className="min-h-screen bg-white relative">
      <Header />

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
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight uppercase">
                MARCO ESTRATÉGICO
              </h1>
              <p className="text-xl text-slate-800 max-w-3xl mx-auto leading-relaxed font-bold">
                Nuestros servicios son ejecutados por un equipo profesional capacitado, bajo funciones operativas y legales claramente establecidas.
              </p>
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
                <p>Contamos con un Departamento de Sistemas altamente calificado, encargado de la implementación, monitoreo, soporte, mantenimiento y auditoría de seguridad informática de toda nuestra infraestructura tecnológica.</p>
                <p>Garantizamos el óptimo funcionamiento, la estabilidad y la protección de nuestras plataformas tecnológicas.</p>
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

          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 1. ÁREA COMERCIAL */}
            <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-3xl text-center flex flex-col items-center shadow-lg hover:bg-white transition-all duration-300">
              <div className="bg-[#009688] p-4 rounded-full mb-6 shadow-md">
                <Headset className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-slate-900 text-lg font-bold uppercase mb-1">Área Comercial</h3> 
              <p className="text-slate-800 text-sm font-medium leading-relaxed">Empleamos diversos medios de comunicación con tecnología segura.</p>
            </div>

            {/* 2. MONITOREO */}
            <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-3xl text-center flex flex-col items-center shadow-lg hover:bg-white transition-all duration-300">
              <div className="bg-[#8ecae6] p-4 rounded-full mb-6 shadow-md">
                <LineChart className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-slate-900 text-lg font-bold uppercase mb-1">Seguimiento en tiempo real</h3>
              <p className="text-slate-800 text-sm font-medium leading-relaxed">Disponemos de herramientas de análisis de datos.</p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </main>
  )
}