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

  // --- DATOS EXTRAÍDOS DE TUS CAPTURAS ---
  const CLOUD_NAME = "dvxh04lhx";       // De tu Dashboard Cloudinary
  const UPLOAD_PRESET = "ml_default";    // De tu configuración Upload Presets
  
  const SERVICE_ID = "service_kiu5zfv";
  const TEMPLATE_ID = "template_jrbuk5n";
  const PUBLIC_KEY = "bbk-fn5M7gXuVYceL";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2097152) {
        alert("El archivo es demasiado grande. El máximo permitido es 2MB.");
        e.target.value = ""; 
        setFileName(null);
      } else {
        setFileName(file.name);
      }
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      try {
        // 1. Obtener el archivo del input
        const fileInput = form.current.elements.namedItem("mi_archivo") as HTMLInputElement;
        const file = fileInput?.files?.[0];

        if (!file) {
          alert("Por favor, adjunta tu CV en formato PDF.");
          setLoading(false);
          return;
        }

        // 2. Subida a Cloudinary usando tu preset 'ml_default'
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET); 

        const cloudinaryRes = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, 
          { method: "POST", body: formData }
        );

        if (!cloudinaryRes.ok) {
          const errorData = await cloudinaryRes.json();
          console.error("Detalle error Cloudinary:", errorData);
          throw new Error("Error al subir el archivo a la nube.");
        }
        
        const fileData = await cloudinaryRes.json();
        const fileUrl = fileData.secure_url; 

        // 3. Parámetros para tu plantilla 'template_jrbuk5n'
        const templateParams = {
          user_name: form.current.user_name.value, // Aparecerá en el asunto
          name: form.current.user_name.value,      // Aparecerá en el saludo
          email: form.current.user_email.value,    // Para el Reply To
          message: `LINK DEL CV: ${fileUrl}`        // Se enviará a hdvmarthajmejia@gmail.com
        };

        // 4. Envío a EmailJS
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

        alert("¡Postulación enviada con éxito!");
        form.current.reset();
        setFileName(null);

      } catch (err: any) {
        alert("Ocurrió un error: " + (err.message || "Error desconocido"));
      } finally {
        setLoading(false);
      }
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
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase">Nombre Completo</label>
              <input 
                name="user_name" 
                type="text" 
                required 
                className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-900" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase">Correo Electrónico</label>
              <input 
                name="user_email" 
                type="email" 
                required 
                className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-900" 
              />
            </div>

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
                  {fileName ? <span className="text-green-600">✅ {fileName}</span> : "Haz clic para subir tu PDF"}
                </div>
              </div>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-[#0d2a61] text-white py-5 rounded-full font-bold uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg disabled:opacity-50"
            >
              {loading ? "PROCESANDO ENVÍO..." : "ENVIAR POSTULACIÓN"}
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}