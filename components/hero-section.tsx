"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Scale, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden scroll-mt-24">
     {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/LandingPageMjm/cobranzas.jpg" /* reemplace con imagen requerida  */
            alt="Fondo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/80" />
        </div>

      <div className="container relative mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Más de 20 años de experiencia</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Recuperación de Cartera con{" "}
              <span className="text-accent">Excelencia</span> y{" "}
              <span className="text-accent">Ética</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
             Somos especialistas en gestión de cobranza y recaudo de cartera vencida del sector financiero y comercial público o privado, mediante el cobro prejudicial y Judicial, garantizando en todo momento la aplicación de la normatividad Legal vigente que rige nuestra misión. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                 <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-6 text-lg"
              >
                <Link href="#conocenos">Conocer Más</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">100%</p>
                <p className="text-sm text-white/70">Compromiso ético</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">1000+</p>
                <p className="text-sm text-white/70">Casos resueltos</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <Scale className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-serif font-semibold text-white text-lg mb-2">Gestión Pre jurídica y Jurídica</h3>
                <p className="text-white/70 text-sm">Acompañamiento Legal especializado en procesos de cobranza desde la etapa persuasiva hasta la etapa Judicial.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <Shield className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-serif font-semibold text-white text-lg mb-2">Seguridad Legal</h3>
                <p className="text-white/70 text-sm">Garantizamos el cumplimiento de todas las normativas vigentes.</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <Users className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-serif font-semibold text-white text-lg mb-2">Equipo Experto</h3>
                <p className="text-white/70 text-sm">Profesionales capacitados y en constante actualización legal.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <p className="font-serif font-bold text-white text-2xl mb-2">¿Necesita recuperar su cartera?</p>
                <p className="text-white text-sm mb-4">Contáctenos hoy mismo</p>
                <Button asChild variant="secondary" className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-6 text-lg">
                  <Link href="#contacto">Contactar</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
      <svg 
        viewBox="0 0 1440 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
      <path 
        d="M0 120H1440V90C1380 90 1320 90 1200 85C1080 80 960 70 840 65C720 60 600 60 480 70C360 80 240 100 120 110C60 115 0 120 0 120Z" 
       fill="white"
      />
          </svg>
        </div>
    </section>
  )
}
