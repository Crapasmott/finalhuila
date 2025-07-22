'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps): React.JSX.Element {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center space-x-1 text-sm text-gray-600 ${className}`}
    >
      {/* Icono de inicio */}
      <Link 
        href="/" 
        className="flex items-center hover:text-blue-600 transition-colors"
        aria-label="Ir al inicio"
      >
        <Home size={16} />
      </Link>
      
      {/* Separador después de inicio */}
      {items.length > 0 && (
        <ChevronRight size={14} className="text-gray-400" />
      )}
      
      {/* Items del breadcrumb */}
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href && !item.active ? (
            <Link 
              href={item.href} 
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span 
              className={`${item.active ? 'text-blue-600 font-medium' : 'text-gray-500'}`}
              aria-current={item.active ? 'page' : undefined}
            >
              {item.label}
            </span>
          )}
          
          {/* Separador entre items */}
          {index < items.length - 1 && (
            <ChevronRight size={14} className="text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}