"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WorkWithUs() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-xl border border-blue-50"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Únete al Equipo</h2>
        <p className="text-gray-500 mb-8">Buscamos abogados y colaboradores apasionados.</p>

        <form className="space-y-5">
          <input type="text" placeholder="Nombre" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
          <input type="email" placeholder="Correo" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
          
          <div className="relative border-2 border-dashed border-blue-200 rounded-xl p-10 text-center hover:bg-blue-50 transition-colors cursor-pointer">
            <input 
              type="file" 
              accept=".pdf" 
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="absolute inset-0 opacity-0 cursor-pointer" 
            />
            <p className="text-blue-600 font-medium">
              {file ? `✅ ${file.name}` : "Arrastra tu CV (PDF) o haz clic aquí"}
            </p>
            <span className="text-xs text-gray-400">Tamaño máximo: 2MB</span>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition"
          >
            Enviar Postulación
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}