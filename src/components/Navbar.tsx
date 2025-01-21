'use client';

import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { UserButton, useAuth } from '@clerk/nextjs';
import { ShiftingDropDown } from './Dropdown';
import MobileMenu from './MenueMobile';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { userId } = useAuth();
  const mobileMenuUserId = userId ?? null;

  return (
    <nav className="flexBetween z-30 py-5 sticky top-0 bg-white mx-0 focus:border-b-2 border shadow-sm pr-10 pl-5">
      <Link href="/" className="relative left-0 sm:pl-4">
        <Image src="/logo-black.png" alt="logo" width={274} height={74} />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-16 justify-center flex-grow">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="text-blue-100 cursor-pointer transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <ShiftingDropDown />
      </ul>

      <MobileMenu userId={mobileMenuUserId} />

      {/* Desktop Auth Buttons */}
      {!userId && (
        <div className="hidden lg:flexCenter">
          <Link href="/sign-in">
            <Button
              type="button"
              title="Login"
              icon="/user-black.svg"
              variant="btn_light_blue"
            />
          </Link>
        </div>
      )}

      {userId && (
        <div className="hidden lg:flex items-center">
          <Link href="/dashboard" className="mr-4 regular-16 text-blue-100 cursor-pointer pb-1.5 transition-all hover:font-bold">
            Dashboard
          </Link>
          <div className='pb-0.5'>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;