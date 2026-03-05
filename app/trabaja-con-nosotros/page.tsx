"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Header } from "@/components/header"; 
import { Footer } from "@/components/footer"; 
import { motion } from 'framer-motion';

export default function TrabajaConNosotrosPage() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);

  // CONFIGURACIÓN DE APIS
  const CLOUD_NAME = "dhwdravjt";
  const UPLOAD_PRESET = "ml_default";
  const SERVICE_ID = "service_xunw9un";
  const TEMPLATE_ID = "template_beycgcv";
  const PUBLIC_KEY = "PlWVzn1p1OgZG6lre";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2097152) {
        alert("El archivo es demasiado grande. Máximo 2MB.");
        e.target.value = ""; 
        setFileName(null);
      } else {
        setFileName(file.name);
      }
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // 1. VALIDACIÓN DE TELÉFONO (Solo números, entre 7 y 15 caracteres)
    const phoneValue = form.current.user_phone.value;
    const phoneRegex = /^[0-9+ ]{7,15}$/;

    if (!phoneRegex.test(phoneValue)) {
      alert("Por favor, ingresa un número de teléfono válido (mínimo 7 dígitos).");
      return;
    }

    setLoading(true);
    setIsSent(false);

    try {
      const fileInput = form.current.elements.namedItem("mi_archivo") as HTMLInputElement;
      const file = fileInput?.files?.[0];

      if (!file) {
        alert("Por favor adjunta tu CV.");
        setLoading(false);
        return;
      }

      // 2. SUBIDA A CLOUDINARY
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET); 

      const cloudinaryRes = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`, 
        { method: "POST", body: formData }
      );

      if (!cloudinaryRes.ok) throw new Error("Error en la subida a la nube.");
      
      const fileData = await cloudinaryRes.json();
      const fileUrl = fileData.secure_url; 

      // 3. PARÁMETROS PARA EMAILJS
      const templateParams = {
        user_name: form.current.user_name.value,
        name: form.current.user_name.value,
        email: form.current.user_email.value,
        phone: phoneValue,
        message: `TELÉFONO DE CONTACTO: ${phoneValue}\n\nLINK DEL CV: ${fileUrl}` 
      };

      // 4. ENVÍO CON EMAILJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // ÉXITO
      form.current.reset();
      setFileName(null);
      setIsSent(true); 

    } catch (err: any) {
      console.error("Error detallado:", err);
      alert("Hubo un problema al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header /> 
      
      <div className="flex-grow pt-32 pb-20 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white p-10 rounded-[40px] shadow-xl border border-slate-200"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-6 uppercase text-center">
            Trabaja con nosotros
          </h1>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* NOMBRE */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase">Nombre Completo</label>
              <input 
                name="user_name" 
                type="text" 
                required 
                className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-900" 
              />
            </div>

            {/* CELULAR (CON VALIDACIÓN DE TECLAS) */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase">Celular / WhatsApp</label>
              <input 
                name="user_phone" 
                type="tel" 
                placeholder="Ej: 3101234567"
                required 
                inputMode="tel"
                onKeyPress={(e) => {
                  // Solo permite números, el signo + y espacios
                  if (!/[0-9\s+]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-900" 
              />
            </div>

            {/* CORREO */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase">Correo Electrónico</label>
              <input 
                name="user_email" 
                type="email" 
                required 
                className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-900" 
              />
            </div>

            {/* ARCHIVO CV */}
            <div className="space-y-2 text-center">
              <label className="text-sm font-bold text-slate-700 uppercase block mb-4">Adjuntar CV (PDF Máx 2MB)</label>
              <div className="border-2 border-dashed border-blue-200 rounded-3xl p-10 hover:bg-blue-50 transition-all relative">
                <input 
                  type="file" 
                  name="mi_archivo" 
                  accept=".pdf" 
                  required 
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="text-blue-600 font-semibold italic">
                  {fileName ? (
                    <span className="text-green-600 font-bold">✅ {fileName}</span>
                  ) : (
                    "Haz clic para subir tu PDF"
                  )}
                </div>
              </div>
            </div>

            {/* MENSAJE DE ÉXITO */}
            {isSent && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-green-600 font-bold text-center bg-green-50 py-2 rounded-xl"
              >
                ¡Postulación enviada correctamente!
              </motion.p>
            )}

            {/* BOTÓN DE ENVÍO */}
            <button 
              disabled={loading}
              className="w-full bg-[#0d2a61] text-white py-5 rounded-full font-bold uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg disabled:opacity-50"
            >
              {loading ? "PROCESANDO..." : "ENVIAR POSTULACIÓN"}
            </button>
          </form>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}