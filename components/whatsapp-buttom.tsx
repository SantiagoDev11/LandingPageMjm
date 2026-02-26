"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const whatsappUrl = "https://wa.me/573225135833?text=Hola,%20deseo%20solicitar%20información%20sobre%20sus%20servicios%20de%20cobranza"

  return (
    <>
      {/* Tooltip */}
      {showTooltip && (
        <div 
          className={cn(
            "fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-xl p-4 max-w-xs transition-all duration-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          )}
        >
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-3 h-3 text-gray-600" />
          </button>
          <p className="text-foreground text-sm font-medium mb-1">¿Necesita ayuda?</p>
          <p className="text-muted-foreground text-xs">
            Escríbanos por WhatsApp y le atenderemos de inmediato.
          </p>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25d366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        )}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        
        {/* Pulse animation */}
        <span className="absolute w-full h-full rounded-full bg-[#25d366] animate-ping opacity-30" />
      </a>
    </>
  )
}
