'use client';
import { useState } from 'react';
import { useEffect } from 'react';

const ChatMJM = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('inicio');
  const [entidadSel, setEntidadSel] = useState<any>(null);

  /*Animación*/
useEffect(() => {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes rippleEffect {
      0% {
        box-shadow: 0 0 0 0 rgba(0,74,153, 0.5);
      }
      70% {
        box-shadow: 0 0 0 18px rgba(0,74,153, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(0,74,153, 0);
      }
    }
  `;
  document.head.appendChild(style);

  return () => {
    document.head.removeChild(style);
  };
}, []);

  const contactosMJM = {
    comercial: {
      correo1: 'servicioalcliente@marthajemjia.com',
      tel: '6028895271 - 6024852318'
    },
    juridico: {
      correo: 'juridico5@marthajmejia.com',
      tel: '6028895271 - 6024852318',
      ext: '8'
    },
    whatsappGeneral: '573000000000'
  };

  const datosEntidades: any = {
    'FNA': { tel: '6028895271 - 6024852318', ext: '5', correo: 'fna@marthajmejia.com', whatsapp: 'No disponible' },
    'COMFANDI': { tel: '6028895271 - 6024852318', ext: '4', correo: 'comfandi@marthajmejia.com', whatsapp: 'No disponible' },
    'CRESI': { tel: '6028895271 - 6024852318', ext: '2', correo: 'cresi@marthajmejia.com', whatsapp: '320 565 3978' },
    'BANCO AV VILLAS': { tel: '6028895271 - 6024852318', ext: '8', correo: 'juridico5@marthajmejia.com',  },    
  };

  const reiniciarChat = () => {
    setStep('inicio');
    setEntidadSel(null);
    setIsOpen(false);
  };

  return (
    <div style={containerStyle}>
      {isOpen && (
        <div style={chatWindowStyle}>
          {/* HEADER FIJO */}
          <div style={headerStyle}>
            <strong style={{ display: 'block', fontSize: '15px' }}>Asistente Martha Janeth Mejia</strong>
            <span style={{ fontSize: '11px', opacity: 0.9 }}>Atención Especializada</span>
          </div>
          
          {/* CUERPO CON SCROLL INTERNO */}
          <div style={bodyStyle}>
            
            {/* MENU INICIAL */}
            {step === 'inicio' && (
              <>
                <p style={textStyle}>Bienvenido. ¿En qué área podemos asesorarte hoy?</p>
                <button onClick={() => setStep('info-empresa')} style={btnStyle}>1. Soy una empresa</button>
                <button onClick={() => setStep('obligacion')} style={btnStyle}>2. Tengo una obligación pendiente</button>
                <button onClick={() => setStep('info-juridico')} style={btnStyle}>3. Asesoría jurídica</button>
                <button onClick={() => setStep('pqrs')} style={{...btnStyle, borderLeft: '4px solid #d7d94f'}}>4. PQRS</button>
              </>
            )}

            {/* INFO EMPRESAS - UNIFICADO */}
            {step === 'info-empresa' && (
              <>
                <div style={infoBoxStyle}>
                  <strong style={titleStyle}>Departamento Comercial</strong>
                  <p style={descStyle}>Ofrecemos soluciones corporativas integrales para la recuperación de cartera preventiva y jurídica, adaptadas a las necesidades de su organización.</p>
                  <div style={contactSectionStyle}>
                    📞 Tel: <strong>{contactosMJM.comercial.tel}</strong><br />
                    ✉️ <a href={`mailto:${contactosMJM.comercial.correo1}`} style={linkStyle}>{contactosMJM.comercial.correo1}</a>
                  </div>
                </div>
                <button onClick={() => setStep('inicio')} style={backStyle}>← Volver</button>
              </>
            )}

            {/* INFO JURÍDICA - UNIFICADO */}
            {step === 'info-juridico' && (
              <>
                <div style={infoBoxStyle}>
                  <strong style={titleStyle}>Asesoría Jurídica</strong>
                  <p style={descStyle}>Ofrecemos un acompañamiento integral a nuestros clientes en derecho civil y comercial.</p>
                  <div style={contactSectionStyle}>
                    📞 Tel: <a href={`tel:${contactosMJM.juridico.tel}`} style={linkStyle}>{contactosMJM.juridico.tel}</a><br />
                    🏢 Ext: <strong>{contactosMJM.juridico.ext}</strong><br />
                    ✉️ <a href={`mailto:${contactosMJM.juridico.correo}`} style={linkStyle}>{contactosMJM.juridico.correo}</a>
                  </div>
                </div>
                <button onClick={() => setStep('inicio')} style={backStyle}>← Volver</button>
              </>
            )}

            {/* OBLIGACIONES - UNIFICADO */}
            {step === 'obligacion' && (
              <>
                <div style={{ marginBottom: '10px' }}>
                   <p style={textStyle}>Contamos con canales dedicados para cada entidad. Selecciona la tuya para continuar:</p>
                </div>
                <button onClick={() => { setEntidadSel({nombre: 'FNA', ...datosEntidades['FNA']}); setStep('info-entidad'); }} style={btnStyle}>FNA</button>
                <button onClick={() => { setEntidadSel({nombre: 'COMFANDI', ...datosEntidades['COMFANDI']}); setStep('info-entidad'); }} style={btnStyle}>COMFANDI</button>
                <button onClick={() => { setEntidadSel({nombre: 'CRESI', ...datosEntidades['CRESI']}); setStep('info-entidad'); }} style={btnStyle}>CRESI</button>
                <button onClick={() => { setEntidadSel({nombre: 'BANCO AV VILLAS', ...datosEntidades['BANCO AV VILLAS']}); setStep('info-entidad'); }} style={btnStyle}>BANCO AV VILLAS</button>                
                <button onClick={() => setStep('inicio')} style={backStyle}>← Volver</button>
              </>
            )}

            {/* PQRS - TAL CUAL SOLICITADO */}
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

            {/* INFO ENTIDAD SELECCIONADA */}
            {step === 'info-entidad' && entidadSel && (
              <>
                <div style={infoBoxStyle}>
                  <strong style={titleStyle}>Gestión {entidadSel.nombre}</strong>
                  <p style={descStyle}>Canales oficiales para la consulta de estado de cuenta y acuerdos de pago con {entidadSel.nombre}.</p>
                  <div style={contactSectionStyle}>
                    📞 Tel: <a href={`tel:${entidadSel.tel}`} style={linkStyle}>{entidadSel.tel}</a><br />
                    🏢 Ext: <strong>{entidadSel.ext}</strong><br />
                    ✉️ <a href={`mailto:${entidadSel.correo}`} style={linkStyle}>{entidadSel.correo}</a><br />
                    💬 Whatsapp: <strong>{entidadSel.whatsapp}</strong>
                  </div>
                </div>
                <button onClick={() => setStep('obligacion')} style={backStyle}>← Cambiar entidad</button>
              </>
            )}

          </div>
        </div>
      )}

      {/* BURBUJA FLOTANTE */}
        <button
         onClick={() => (isOpen ? reiniciarChat() : setIsOpen(true))}
        style={{
         ...bubbleStyle,
        animation: !isOpen ? 'rippleEffect 2.5s infinite' : 'none'
     }}
>   
        {isOpen ? <span style={{ color: 'white', fontSize: '24px' }}>×</span> : <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>}
      </button>
    </div>
  );
};

// --- ESTILOS MEJORADOS ---


const containerStyle = { 
  position: 'fixed' as const, 
  bottom: '30px', 
  right: '25px', 
  zIndex: 9999, 
  fontFamily: '"Segoe UI", Roboto, Arial, sans-serif' 
};

const chatWindowStyle = { 
  width: '320px', 
  height: '480px', // Altura fija
  background: 'white', 
  borderRadius: '16px', 
  boxShadow: '0 12px 28px rgba(0,0,0,0.22)', 
  marginBottom: '15px', 
  overflow: 'hidden', 
  border: '1px solid #e0e0e0',
  display: 'flex',
  flexDirection: 'column' as const
};

const headerStyle = { 
  background: '#004a99', 
  color: 'white', 
  padding: '20px 15px', 
  textAlign: 'center' as const,
  flexShrink: 0 
};

const bodyStyle = { 
  padding: '15px', 
  background: '#f8f9fa', 
  flexGrow: 1, 
  overflowY: 'auto' as const, // Scroll si el contenido excede la altura fija
  display: 'flex', 
  flexDirection: 'column' as const, 
  gap: '12px' 
};

const titleStyle = { color: '#004a99', fontSize: '14px', display: 'block', marginBottom: '8px' };

const descStyle = { fontSize: '12px', color: '#555', margin: '0 0 10px 0', lineHeight: '1.4' };

const contactSectionStyle = { borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '5px', fontSize: '12px' };

const btnStyle = { 
  padding: '12px 15px', 
  border: '1px solid #ddd', 
  borderLeft: '4px solid #004a99', 
  borderRadius: '6px', 
  background: 'white', 
  color: '#333', 
  cursor: 'pointer', 
  fontWeight: '500' as any, 
  textAlign: 'left' as any, 
  fontSize: '13px',
  transition: 'background 0.2s'
};

const backStyle = { 
  ...btnStyle, 
  background: '#f1f1f1', 
  borderLeft: '4px solid #6c757d', 
  marginTop: '5px', 
  color: '#444', 
  textAlign: 'center' as any 
};

const textStyle = { fontSize: '13px', color: '#444', marginBottom: '8px', lineHeight: '1.4' };

const infoBoxStyle = { 
  fontSize: '13px', 
  color: '#333', 
  lineHeight: '1.6', 
  background: '#fff', 
  padding: '15px', 
  borderRadius: '10px', 
  border: '1px solid #eaeaea',
  boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
};

const bubbleStyle = { 
  background: '#004a99', 
  width: '60px', 
  height: '60px', 
  border: 'none', 
  borderRadius: '50%', 
  cursor: 'pointer', 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  boxShadow: '0 4px 12px rgba(0,74,153,0.4)',
  marginLeft: 'auto'
};

const linkStyle = { color: '#004a99', textDecoration: 'none', fontWeight: '600' as any };

export default ChatMJM;
