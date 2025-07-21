import React from 'react';

const SectionTitle = ({ title, subtitle, variant = 'default', centered = true, size = 'lg' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl', 
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl'
  };

  const variantStyles = {
    default: {
      title: 'text-gray-900',
      underline: 'bg-gradient-to-r from-blue-500 to-green-500'
    },
    primary: {
      title: 'text-blue-900',
      underline: 'bg-gradient-to-r from-blue-600 to-blue-400'
    },
    secondary: {
      title: 'text-green-900', 
      underline: 'bg-gradient-to-r from-green-600 to-green-400'
    },
    accent: {
      title: 'text-orange-900',
      underline: 'bg-gradient-to-r from-orange-500 to-yellow-500'
    }
  };

  const currentVariant = variantStyles[variant] || variantStyles.default;
  const alignmentClass = centered ? 'text-center' : 'text-left';

  return (
    <div className={`w-full ${alignmentClass} mb-6`}>
      <h2 className={`${sizeClasses[size]} font-bold ${currentVariant.title} mb-3 leading-tight`}>
        {title}
      </h2>
      
      {/* Línea decorativa */}
      <div className={`relative ${centered ? 'mx-auto' : ''}`}>
        <div className={`h-1 w-20 ${currentVariant.underline} rounded-full shadow-sm`}></div>
        <div className={`h-0.5 w-12 ${currentVariant.underline} rounded-full mt-1 opacity-60 ${centered ? 'mx-auto' : ''}`}></div>
      </div>
      
      {/* Subtítulo opcional */}
      {subtitle && (
        <p className="text-gray-600 mt-4 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Componente con variantes predefinidas para casos específicos
export const MainTitle = ({ title, subtitle }) => (
  <SectionTitle 
    title={title} 
    subtitle={subtitle}
    variant="primary" 
    size="2xl" 
    centered={true} 
  />
);

export const SubsectionTitle = ({ title, subtitle }) => (
  <SectionTitle 
    title={title} 
    subtitle={subtitle}
    variant="secondary" 
    size="lg" 
    centered={false} 
  />
);

export const AccentTitle = ({ title, subtitle }) => (
  <SectionTitle 
    title={title} 
    subtitle={subtitle}
    variant="accent" 
    size="xl" 
    centered={true} 
  />
);

export default SectionTitle;