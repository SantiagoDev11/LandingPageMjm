"use client"

import { CheckCircle, Scale, BarChart3, Briefcase, Shield, Clock, Award, Users } from "lucide-react"
import Image from "next/image"

const advantages = [
  {
    icon: Clock,
    title: "Experiencia Comprobada",
    description: "Más de 20 años recuperando cartera con un historial probado de éxito y profesionalismo.",
    highlight: "20+ años"
  },
  {
    icon: Scale,
    title: "Enfoque Ético y Legal",
    description: "Cumplimos todas las normativas vigentes, garantizando un trato respetuoso al consumidor.",
    highlight: "100% legal"
  },
  {
    icon: BarChart3,
    title: "Reportes Detallados",
    description: "Sistema de seguimiento y reportes en tiempo real para mantenerlo informado.",
    highlight: "Tiempo real"
  }
]

const stats = [
  { value: "20+", label: "Años de experiencia", icon: Award },
  { value: "95%", label: "Tasa de recuperación", icon: CheckCircle },
  { value: "1000+", label: "Clientes satisfechos", icon: Users },
]

export function AdvantagesSection() {
  return (
    <section id="porque-elegirnos" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/LandingPageMjm/imagen4.jpg" 
          alt="Fondo"
          fill
          className="object-cover opacity-60" 
          priority
        />
      </div>

      <div className="absolute inset-0 bg-blue-850/30" />
     
      <div className="container mx-auto px-10 relative z-20">
        <div className="max-w-3xl mx-auto text-center mb-15">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6 text-balance">
            ¿Por Qué Elegirnos?
          </h2>
        </div>

        {/* --- CAMBIO AQUÍ: justify-center, mx-auto y max-w-max para centrar --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 justify-center mx-auto max-w-max">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group relative bg-muted rounded-2xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden max-w-[350px]"
            >
              <div className="absolute top-4 right-4">
                <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">
                  {advantage.highlight}
                </span>
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-5 transition-all duration-300">
                <advantage.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-black mb-3">
                {advantage.title}
              </h3>
              
              <p className="text-black text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-4 md:p-6 shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-950/20 flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-950" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.value}</p>
                <p className="text-black/90 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
