import React from 'react';
import { NAV_LINKS } from '../constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { ShiftingDropDown } from './Dropdown';
import MobileMenu from './MenueMobile';

const Navbar: React.FC = () => {
  const { userId } = auth();

  return (
    <nav className="flexBetween padding-container z-30 py-5 sticky top-0 bg-white px-0 mx-0 focus:border-b-2 border shadow-sm">
      <Link href="/" className="relative left-0 sm:pl-4">
        <Image src="/logo-black.png" alt="logo" width={274} height={74} />
      </Link>
      <ul className="hidden h-full gap-14 lg:flex top-1.5 relative left-32">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-blue-100 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
        <div className="pb-2">
          <ShiftingDropDown />
        </div>
      </ul>

      <MobileMenu userId={userId} />

      {!userId && (
        <div className="absolute right-10 lg:flexCenter hidden">
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
        <div className="ml-auto hidden lg:flex items-center">
          <Link href="/dashboard" className="mr-4 regular-16 text-blue-100 cursor-pointer pb-1.5 transition-all hover:font-bold">
            Dashboard
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
