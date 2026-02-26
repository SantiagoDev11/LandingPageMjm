'use client';
import { useState } from 'react';

const ChatMJM = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('inicio'); 

  const irAWhatsapp = (mensaje: string) => {
    // REEMPLAZA CON TU NÚMERO REAL (Incluye el 57)
    const telefono = "573000000000"; 
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  const reiniciarChat = () => {
    setStep('inicio');
    setIsOpen(false);
  };

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '160px', // <--- Subido más para evitar el choque con el otro botón
      right: '25px', 
      zIndex: 9999, 
      fontFamily: 'Arial, sans-serif' 
    }}>
      {/* Ventana del Chat */}
      {isOpen && (
        <div style={{ width: '310px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', marginBottom: '15px', overflow: 'hidden', border: '1px solid #e0e0e0' }}>
          <div style={{ background: '#004a99', color: 'white', padding: '18px', textAlign: 'center' }}>
            <strong style={{ display: 'block', fontSize: '16px' }}>MJM Cobradores</strong>
            <span style={{ fontSize: '12px', opacity: 0.9 }}>Asistencia en línea</span>
          </div>
          
          <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px', background: '#f9f9f9' }}>
            
            {step === 'inicio' ? (
              <>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>¿Cómo podemos ayudarte?</p>
                <button onClick={() => irAWhatsapp('Hola, represento a una empresa y busco servicios de cobranza.')} style={btnStyle}>1. Soy una empresa</button>
                <button onClick={() => setStep('obligacion')} style={btnStyle}>2. Tengo una obligación pendiente</button>
                <button onClick={() => irAWhatsapp('Hola, necesito asesoría jurídica o pre-jurídica.')} style={btnStyle}>3. Necesito asesoría pre jurídica o jurídica</button>
                <button onClick={() => irAWhatsapp('Hola, deseo radicar una PQRS.')} style={{...btnStyle, borderLeft: '4px solid #d9534f'}}>4. PQRS</button>
              </>
            ) : (
              <>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>Tu obligación está con:</p>
                <button onClick={() => irAWhatsapp('Hola, mi obligación está con FNA y quiero consultar mi estado.')} style={btnStyle}>1. FNA</button>
                <button onClick={() => irAWhatsapp('Hola, mi obligación está con COMFANDI y quiero consultar mi estado.')} style={btnStyle}>2. COMFANDI</button>
                <button onClick={() => irAWhatsapp('Hola, mi obligación está con CRESI y quiero consultar mi estado.')} style={btnStyle}>3. CRESI</button>
                <button onClick={() => setStep('inicio')} style={{ ...btnStyle, background: '#eee', borderLeft: '4px solid #666', marginTop: '5px', color: '#666' }}>← Volver atrás</button>
              </>
            )}

          </div>
        </div>
      )}

      {/* Botón Flotante */}
      <button 
        onClick={() => {
            if(isOpen) reiniciarChat();
            else setIsOpen(true);
        }}
        style={{ 
            background: '#004a99', 
            width: '60px', 
            height: '60px', 
            border: 'none', 
            borderRadius: '50%', 
            cursor: 'pointer', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isOpen ? (
          <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>×</span>
        ) : (
          <svg viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        )}
      </button>
    </div>
  );
};

const btnStyle = {
  padding: '12px',
  border: '1px solid #ddd',
  borderLeft: '4px solid #004a99',
  borderRadius: '4px',
  background: 'white',
  color: '#333',
  cursor: 'pointer',
  fontWeight: '500' as any,
  textAlign: 'left' as any,
  fontSize: '13px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  transition: 'background 0.2s'
};

export default ChatMJM;