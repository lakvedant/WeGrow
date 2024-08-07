// components/MobileMenu.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '../constants';

interface MobileMenuProps {
  userId: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ userId }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="lg:hidden relative">
      <button onClick={toggleMenu} className="focus:outline-none">
        <Image src="/menu.svg" alt="menu" width={32} height={32} />
      </button>
      <div className={`absolute top-16 right-0 bg-white shadow-lg rounded-md py-2 px-4 w-48 ${menuOpen ? 'block' : 'hidden'}`}>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="block px-4 py-2 text-blue-100 hover:font-bold">
            {link.label}
          </Link>
        ))}
        {userId && (
          <Link href="/dashboard" className="block px-4 py-2 text-blue-100 hover:font-bold">
            Dashboard
          </Link>
        )}
        {!userId && (
          <Link href="/sign-in" className="block px-4 py-2 text-blue-100 hover:font-bold">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
