"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image" 

const navLinks = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#conocenos", label: "Conócenos" },
  { href: "/#porque-elegirnos", label: "¿Por qué elegirnos?" }, 
  { href: "/#servicios", label: "Servicios" },   
  { href: "/trabaja-con-nosotros", label: "Trabaja con nosotros" },     
  { href: "/empresas", label: "Empresas" },
]

// Definimos la interfaz para aceptar la prop showButton
interface HeaderProps {
  showButton?: boolean;
}

export function Header({ showButton = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#0d2a61] text-white py-1">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+576028895271" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              <span>(602) 889-5271 - (602) 485-2318</span>
            </a>
            <a href="mailto:administrador@marthajmejia.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span>servicioalcliente@marthajmejia.com</span>
            </a>
          </div>
          <p className="text-secondary/80">Más de 20 años de experiencia</p>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg" 
            : "bg-white shadow-sm"
        )}
      >
        <nav className="container mx-auto px-6 py-1">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-10 group">
              <img 
                src="/LandingPageMjm/logo7mjm.png"
                alt="Logo MJM" 
                className="w-62 h-38 object-contain group-hover:scale-110 transition-transform"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* LÓGICA DEL BOTÓN ESCRITORIO */}
            {showButton && (
              <div className="hidden lg:block">
                <Button asChild className="bg-primary hover:bg-[#0d4a8a] text-white">
                  <Link href="#contacto">Solicitar Asesoría</Link>
                </Button>
              </div>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 border-t" : "max-h-0"
          )}
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* LÓGICA DEL BOTÓN MÓVIL */}
            {showButton && (
              <Button asChild className="w-full bg-primary hover:bg-[#0d4a8a] text-white">
                <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  Solicitar Asesoría
                </Link>
              </Button>
            )}
          </div>
        </div>
      </header>
    </>
  )
}