"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfonos",
    details: ["(602) 889-5271", "(602) 485-2318"],
    action: { href: "tel:+576028895271", label: "Llamar ahora" }
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    details: ["servicioalcliente@marthajmejia.com"],
    action: { href: "mailto:servicioalcliente@marthajmejia.com", label: "Enviar correo" }
  },
  {
    icon: MapPin,
    title: "Ubicación",
    details: ["Carrera 9 # 9-49", "Piso 11", "Cali, Valle del Cauca"],
    action: { href: "#", label: "Ver mapa" }
  },
  {
    icon: Clock,
    title: "Horario de Atención",
    details: [
      "Lunes a Miércoles",
      "9:00 AM - 6:00 PM",
      "Jueves a Viernes",
      "8:30 AM - 6:00 PM",
      "Sabados 8:00 AM - 11:00 AM"
    ],
    action: null
  }
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      // 1. CAMBIO DE CORREO DESTINO AQUÍ
      const response = await fetch("https://formsubmit.co/ajax/servicioalcliente@marthajmejia.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      // 2. CORRECCIÓN DE LA VALIDACIÓN DE ÉXITO
      if (response.ok || result.success === "true") {
        setIsSubmitted(true)
        e.currentTarget.reset()
      } else {
        throw new Error("No se pudo procesar el envío.")
      }
    } catch (err) {
      setError("Hubo un problema al enviar su mensaje. Por favor, inténtelo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-8 bg-gradient-to-br from-[#0d2a61] via-[#164191] to-[#1264ad] text-white relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 max-w-5xl relative">

        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="inline-block text-accent font-semibold tracking-wider uppercase text-xs mb-3">
            Contacto
          </span>

          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Estamos Aquí Para Ayudarle
          </h2>

          <p className="text-white/80 text-base leading-relaxed">
            Contáctenos hoy mismo para una asesoría personalizada.
            Estamos comprometidos con encontrar la mejor solución para usted.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center mb-2">
                    <info.icon className="w-4 h-4 text-accent" />
                  </div>

                  <h3 className="font-serif font-bold text-sm mb-1">
                    {info.title}
                  </h3>

                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-white/80 text-xs">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-gray-700">
                  Gracias por contactarnos. Le responderemos en la brevedad posible.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="outline" 
                  className="mt-6 text-blue-700 border-blue-700"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-black mb-1">
                    Envíenos un Mensaje
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Respuesta garantizada en menos de 24 horas.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="_captcha" value="false" />
                  
                  {/* 3. MENSAJE DE ERROR SUTIL */}
                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}

                  <div className="space-y-1">
                    <Label className="text-xs font-bold uppercase text-gray-800">
                      Nombre Completo *
                    </Label>
                    <Input
                      name="nombre"
                      required
                      className="h-10 border-gray-300 text-black focus:border-blue-500"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label className="text-xs font-bold uppercase text-gray-800">
                        Teléfono *
                      </Label>
                      <Input
                        name="telefono"
                        required
                        className="h-10 border-gray-300 text-black"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs font-bold uppercase text-gray-800">
                        Correo *
                      </Label>
                      <Input
                        name="email"
                        type="email"
                        required
                        className="h-10 border-gray-300 text-black"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs font-bold uppercase text-gray-800">
                      Mensaje
                    </Label>
                    <Textarea
                      name="mensaje"
                      rows={4}
                      className="resize-none border-gray-300 text-black"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-sm font-bold bg-blue-700 hover:bg-blue-800 text-white transition-colors"
                  >
                    {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}