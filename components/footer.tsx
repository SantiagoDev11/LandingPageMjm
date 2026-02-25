"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, FileText, ExternalLink } from "lucide-react"

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#conocenos", label: "Conócenos" },
  { href: "#porque-elegirnos", label: "¿Por qué elegirnos?" }, 
  { href: "/#servicios", label: "Servicios" },       
  { href: "/empresas", label: "Empresas" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white scroll-mt-24">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand - Logo Corregido */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <img 
                src="/LandingPageMjm/logomjmgris.png" 
                alt="Logo MJM" 
                className="w-62 h-38 object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-white/50 text-sm">
              Operamos con total apego a la ley y compromiso ético.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal - Con enlace al PDF real */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/politica-datos.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-blue-500" />
                  Tratamiento de Datos
                </a>
              </li>
              <li>                
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+576028895271" className="flex items-start gap-3 text-white/70 hover:text-blue-400 transition-colors text-sm">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" />
                  <div>
                    <p>(602) 889-5271</p>
                    <p>(602) 485-2318</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:administrador@marthajmejia.com" className="flex items-center gap-3 text-white/70 hover:text-blue-400 transition-colors text-sm">
                  <Mail className="w-5 h-5 flex-shrink-0 text-blue-500" />
                  <span>servicioalcliente@marthajmejia.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" />
                  <p>Cali, Valle del Cauca, Colombia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-6 py-6 text-center md:text-left">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} MARTHA JANETH MEJÍA CASTAÑO & CIA LTDA.ABOGADOS ASOCIADOS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
