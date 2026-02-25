"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  BarChart3, 
  Phone, 
  Mail, 
  MessageSquare, 
  FileText, 
  Scale,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "Objetivos Estratégicos",
    description: "Personal altamente capacitado y calificado para la recuperación de cartera a partir de diferentes estrategias de gestión.",
    features: ["Maximizar la recuperación de cartera asignada", "Reducir indicadores de edades de mora", "Garantizar la legalidad en los procesos de cobranza", "Consolidar la rentabilidad de la cobranza", "Optimizar las herramientas tecnológicas y el recurso humano"]
  },
  {
    icon: MessageSquare,
    title: "Comunicaciones",
    description: "Nuestra empresa utiliza medios de comunicación internos que facilitan la coordinación, el seguimiento de objetivos y la oportuna toma de decisiones. Además, contamos con una comunicación externa realizada mediante canales formales y autorizados, garantizando un trato respetuoso y oportuno para los usuarios.",
    features: ["Llamadas Telefónicas", "Correo Electrónico", "SMS y Chat", "Chatbot inteligente con API de Whatsapp"]
  },
  {
    icon: Scale,
    title: "Asesoría Legal",
    description: "Nuestra empresa cuenta con asesoría legal especializada que respalda los procesos de cobranza, asegurando el cumplimiento de las disposiciones legales y la correcta debida gestión de cobro.",
    features: ["Análisis de Casos", "Estrategias Legales", "Procesos Judiciales", "Seguimiento Continuo"]
  }
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-muted/50 scroll-mt-24">
      <div className="container mx-auto px-6">
        {/* Header de la Sección */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Soluciones Integrales de Cobranza
          </h2>
          {/* Subtexto del header en negro */}
          <p className="text-black text-lg leading-relaxed">
            Ofrecemos un servicio completo de recuperación de cartera, desde la gestión 
            persuasiva hasta el acompañamiento jurídico especializado.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-border/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              {/* Descripción del servicio en negro */}
              <p className="text-black mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    {/* Items de la lista en negro */}
                    <span className="text-black text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
