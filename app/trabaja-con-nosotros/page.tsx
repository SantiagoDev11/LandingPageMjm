"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Header } from "@/components/header"; // Con llaves según tu image_6f4559.png
import { Footer } from "@/components/footer"; // Con llaves según tu image_6f4559.png
import { motion } from 'framer-motion';

export default function TrabajaConNosotrosPage() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

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

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      // IMPORTANTE: Asegúrate de poner tus IDs reales aquí
      emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', form.current, 'TU_PUBLIC_KEY')
        .then(() => {
          alert("¡Postulación enviada con éxito!");
          form.current?.reset();
          setFileName(null);
        })
        .catch((err) => alert("Error al enviar: " + err.text))
        .finally(() => setLoading(false));
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
                <p className="text-blue-600 font-semibold italic">
                  {fileName ? `✅ ${fileName}` : "Haz clic o arrastra tu currículum aquí"}
                </p>
              </div>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-[#0d2a61] text-white py-5 rounded-full font-bold uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg disabled:opacity-50"
            >
              {loading ? "Procesando..." : "Enviar Postulación"}
            </button>
          </form>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}