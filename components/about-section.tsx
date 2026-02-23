"use client"

import { Building2, Target, Eye, Users, Award } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Misión",
    description: "Brindar solución de cobranza persuasiva y jurídica con agilidad, oportunidad, confidencialidad y seguridad de la información, permitiéndonos afianzar un flujo de caja sustentable que potencialice la rentabilidad de nuestros clientes."
  },
  {
    icon: Eye,
    title: "Visión",
    description: "Liderar el sector de cobranza como el mejor socio estratégico, acreditado por su efectividad, ética profesional e innovación tecnológica, que busca constantemente transformar la cobranza en una experiencia positiva que ratifique la sostenibilidad financiera de nuestros clientes."
  },
  {
    icon: Building2,
    title: "Infraestructura",
    description: "Nuestra empresa cuenta con una infraestructura sólida, con instalaciones físicas adecuadas, tecnología especializada para la gestión y control de la cartera y equipo humano capacitado."
  },
  {
    icon: Users,
    title: "Recurso Humano",
    description: "Nuestra empresa cuenta con personal altamente calificado, capacitado y especializado en la gestión de recuperación de cartera, estructurado por equipos de gestores y coordinadores."
  }
]

const keyPoints = [
  "Cobranza Persuasiva",
  "Gestión Jurídica Especializada",
  "Alta Efectividad",
  "Ética y Confidencialidad"
]

export function AboutSection() {
  return (
    <section id="conocenos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4">
            Conócenos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
            Más de 20 Años de Experiencia en Recuperación de Cartera
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Especialistas en la gestión integral de activos, transformando la recuperación de cartera en una ventaja competitiva para su negocio.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left - Card Visual */}
          <div className="relative">
            <div className="aspect-[5/3] rounded-2xl bg-gradient-to-br from-[#0d2a61] to-[#1264ad] overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Award className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
                  <h3 className="font-serif text-3xl font-bold mb-4">
                    Compromiso y Excelencia
                  </h3>
                  <p className="text-white/90 max-w-md">
                    Resultados respaldados por una trayectoria de integridad y profesionalismo en el sector legal y financiero.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-tr-full" />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                ¿Quiénes Somos?
              </h3>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  <strong>Martha Janeth Mejía Castaño & Cía. Ltda. Abogados Asociados</strong> es una empresa especializada en la recuperación de cartera vencida al sector financiero, comercial público y privado, mediante el cobro prejudicial y Judicial, con los más altos estándares de calidad.
                </p>
                <p>
                  Nos preciamos de poseer una vasta experiencia en el sector, respaldada por más de 20 años de trayectoria, caracterizándonos principalmente por aplicar una cobranza empática, respetuosa y sólida que cumple arduamente con las necesidades de nuestros clientes y exigencias de Ley.
                </p>
                <p>
                  Nuestros servicios de cobranza tienen cobertura principal en la ciudad de Cali y demás ciudades a nivel nacional.
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4">
              {keyPoints.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-slate-800 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-slate-50 rounded-2xl p-6 hover:bg-blue-50 hover:shadow-xl transition-all duration-500 border border-transparent hover:border-blue-100"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center mb-5 transition-colors">
                <feature.icon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" />
              </div>

              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}