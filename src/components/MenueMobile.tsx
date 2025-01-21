'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface MobileMenuProps {
  userId: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ userId }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div className="lg:hidden relative" ref={menuRef}>
      <button 
        onClick={toggleMenu} 
        className="focus:outline-none p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      <div 
        className={`
          absolute top-16 right-0 bg-white shadow-lg rounded-md py-2 w-56
          transform transition-all duration-200 ease-in-out
          ${menuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-2 invisible'}
        `}
      >
        {NAV_LINKS.map((link) => (
          <Link 
            href={link.href} 
            key={link.key} 
            className="block px-4 py-2 text-blue-100 hover:bg-gray-50 hover:font-bold transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        
        {userId && (
          <Link 
            href="/dashboard" 
            className="block px-4 py-2 text-blue-100 hover:bg-gray-50 hover:font-bold transition-all duration-200 mt-2 border-t border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
        )}
        
        {!userId && (
          <Link 
            href="/sign-in" 
            className="block px-4 py-2 text-blue-100 hover:bg-gray-50 hover:font-bold transition-all duration-200 mt-2 border-t border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;