'use client';

import React from 'react';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';
import FloatingContactButton from './FloatingContactButton';
import GlobalFloatingPaymentButton from './GlobalFloatingPaymentButton';

// Importaciones condicionales para componentes opcionales
let AccessibilityPanel: React.ComponentType | null = null;
let AutogeneradoresCard: React.ComponentType | null = null;

try {
  AccessibilityPanel = require('./AccessibilityPanel').default;
} catch (error) {
  console.log('AccessibilityPanel no encontrado, saltando...');
}

try {
  AutogeneradoresCard = require('./AutogeneradoresCard').default;
} catch (error) {
  console.log('AutogeneradoresCard no encontrado, saltando...');
}

export default function ClientComponents(): React.JSX.Element {
  return (
    <>
      {/* Componentes principales que sabemos que existen */}
      <FloatingWhatsAppButton />
      <FloatingContactButton />
      
      {/* 🆕 BOTÓN GLOBAL DE PAGO DE FACTURAS */}
      <GlobalFloatingPaymentButton />
      
      {/* Componentes opcionales */}
      {AccessibilityPanel && <AccessibilityPanel />}
      
      {/* AutogeneradoresCard oculto si existe */}
      {AutogeneradoresCard && (
        <div className="autogeneradores-floating-container" style={{ display: 'none' }}>
          <AutogeneradoresCard />
        </div>
      )}
    </>
  );
}