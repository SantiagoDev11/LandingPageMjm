'use client';
import { useState } from 'react';

const ChatMJM = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('inicio');
  const [entidadSel, setEntidadSel] = useState<any>(null);

  // CONFIGURACIÓN CONTACTOS ÁREAS FIJAS
  const contactosMJM = {
    comercial: {
      correo1: 'servicioalcliente@marthajemjia.com',
      tel: '6028895271 - 6024852318'
    },
    juridico: {
      correo: 'juridico@marthajmejia.com', 
      tel: '6028895271 - 6024852318',     
      ext: '3'                             
    },
    whatsappGeneral: '573000000000'
  };

  // CONFIGURACIÓN DE DATOS POR ENTIDAD
  const datosEntidades: any = {
    'FNA': { tel: '6028895271 - 6024852318', ext: '5', correo: 'fna@marthajmejia.com', whatsapp: 'No disponible' },
    'COMFANDI': { tel: '6028895271 - 6024852318', ext: '4', correo: 'comfandi@marthajmejia.com', whatsapp: 'No disponible' },
    'CRESI': { tel: '6028895271 - 6024852318', ext: '2', correo: 'cresi@marthajmejia.com', whatsapp: '320 565 3978' }
  };

  const irAWhatsapp = (mensaje: string) => {
    const url = `https://wa.me/${contactosMJM.whatsappGeneral}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  const reiniciarChat = () => {
    setStep('inicio');
    setEntidadSel(null);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '160px', right: '25px', zIndex: 9999, fontFamily: 'Arial, sans-serif' }}>
      {isOpen && (
        <div style={{ width: '320px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', marginBottom: '15px', overflow: 'hidden', border: '1px solid #e0e0e0' }}>
          <div style={{ background: '#004a99', color: 'white', padding: '18px', textAlign: 'center' }}>
            <strong style={{ display: 'block', fontSize: '16px' }}>Asistente Martha Janeth Mejia Castaño</strong>
            <span style={{ fontSize: '12px', opacity: 0.9 }}>Atención Especializada</span>
          </div>
          
          <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px', background: '#f9f9f9', maxHeight: '450px', overflowY: 'auto' }}>
            
            {/* MENU INICIAL */}
            {step === 'inicio' && (
              <>
                <p style={textStyle}>¿Cómo podemos ayudarte hoy?</p>
                <button onClick={() => setStep('info-empresa')} style={btnStyle}>1. Soy una empresa</button>
                <button onClick={() => setStep('obligacion')} style={btnStyle}>2. Tengo una obligación pendiente</button>
                <button onClick={() => setStep('info-juridico')} style={btnStyle}>3. Asesoría jurídica/pre-jurídica</button>
                <button onClick={() => setStep('pqrs')} style={{...btnStyle, borderLeft: '4px solid #d7d94f'}}>4. PQRS</button>
              </>
            )}

            {/* INFO EMPRESAS */}
            {step === 'info-empresa' && (
              <>
                <div style={infoBoxStyle}>
                  <strong style={{ color: '#004a99' }}>Departamento Comercial</strong><br /><br />
                  Soluciones corporativas para la recuperación de cartera.<br /><br />
                  📞 Tel: <strong>{contactosMJM.comercial.tel}</strong><br />
                  ✉️ <a href={`mailto:${contactosMJM.comercial.correo1}`} style={linkStyle}>{contactosMJM.comercial.correo1}</a>
                </div>
                <button onClick={() => setStep('inicio')} style={backStyle}>← Volver</button>
              </>
            )}

            {/* INFO JURÍDICA */}
            {step === 'info-juridico' && (
              <>
                <div style={infoBoxStyle}>
                  <strong style={{ color: '#004a99' }}>Asesoría Jurídica y Pre-jurídica</strong><br /><br />
                  📞 Tel: <a href={`tel:${contactosMJM.juridico.tel}`} style={linkStyle}>{contactosMJM.juridico.tel}</a><br />
                  🏢 Ext: <strong>{contactosMJM.juridico.ext}</strong><br />
                  ✉️ <a href={`mailto:${contactosMJM.juridico.correo}`} style={linkStyle}>{contactosMJM.juridico.correo}</a>
                </div>
                <button onClick={() => setStep('inicio')} style={backStyle}>← Volver</button>
              </>
            )}

            {/* INFO PQRS (AHORA DENTRO DEL CONTENEDOR) */}
            {step === 'pqrs' && (
              <>
                <div style={infoBoxStyle}>
                  <strong style={{ color: '#d9534f' }}>Atención de PQRS</strong><br /><br />
                  Envíe un correo formal para radicar su solicitud:<br /><br />
                  <strong>Requisitos:</strong>
                  <ul style={{ paddingLeft: '15px', marginTop: '5px', fontSize: '12px' }}>
                    <li>Nombre y Cédula.</li>
                    <li>Hechos y pruebas.</li>
                  </ul>
                  ✉️ <a href="mailto:servicioalcliente@marthajmejia.com" style={{color: '#d9534f', textDecoration: 'none'}}><strong>servicioalcliente@marthajmejia.com</strong></a><br /><br />
                  <small><em>Respuesta en hasta 15 días hábiles.</em></small>
                </div>
                <button onClick={() => setStep('inicio')} style={backStyle}>← Volver</button>
              </>
            )}

            {/* SELECCIÓN OBLIGACIÓN */}
            {step === 'obligacion' && (
              <>
                <p style={textStyle}>Selecciona tu entidad:</p>
                <button onClick={() => { setEntidadSel({nombre: 'FNA', ...datosEntidades['FNA']}); setStep('info-entidad'); }} style={btnStyle}>FNA</button>
                <button onClick={() => { setEntidadSel({nombre: 'COMFANDI', ...datosEntidades['COMFANDI']}); setStep('info-entidad'); }} style={btnStyle}>COMFANDI</button>
                <button onClick={() => { setEntidadSel({nombre: 'CRESI', ...datosEntidades['CRESI']}); setStep('info-entidad'); }} style={btnStyle}>CRESI</button>
                <button onClick={() => setStep('inicio')} style={backStyle}>← Volver</button>
              </>
            )}

            {/* INFO ENTIDAD */}
            {step === 'info-entidad' && entidadSel && (
              <>
                <div style={infoBoxStyle}>
                  <strong style={{ color: '#004a99' }}>Información {entidadSel.nombre}</strong><br /><br />
                  📞 Tel: <a href={`tel:${entidadSel.tel}`} style={linkStyle}>{entidadSel.tel}</a><br />
                  🏢 Ext: <strong>{entidadSel.ext}</strong><br />
                  ✉️ <a href={`mailto:${entidadSel.correo}`} style={linkStyle}>{entidadSel.correo}</a><br />
                  💬 Whatsapp: <strong>{entidadSel.whatsapp}</strong>
                </div>
                <button onClick={() => setStep('obligacion')} style={backStyle}>← Cambiar entidad</button>
              </>
            )}

          </div>
        </div>
      )}

      {/* BURBUJA FLOTANTE */}
      <button onClick={() => (isOpen ? reiniciarChat() : setIsOpen(true))} style={bubbleStyle}>
        {isOpen ? <span style={{ color: 'white', fontSize: '24px' }}>×</span> : <svg viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>}
      </button>
    </div>
  );
};

// ESTILOS
const btnStyle = { padding: '12px', border: '1px solid #ddd', borderLeft: '4px solid #004a99', borderRadius: '4px', background: 'white', color: '#333', cursor: 'pointer', fontWeight: '500' as any, textAlign: 'left' as any, fontSize: '13px' };
const backStyle = { ...btnStyle, background: '#eee', borderLeft: '4px solid #666', marginTop: '5px', color: '#666', textAlign: 'center' as any };
const textStyle = { fontSize: '13px', color: '#666', marginBottom: '5px' };
const infoBoxStyle = { fontSize: '13px', color: '#333', lineHeight: '1.6', background: '#fff', padding: '12px', borderRadius: '8px', border: '1px solid #eee' };
const bubbleStyle = { background: '#004a99', width: '60px', height: '60px', border: 'none', borderRadius: '50%', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' };
const linkStyle = { color: '#004a99', textDecoration: 'none' };

export default ChatMJM;