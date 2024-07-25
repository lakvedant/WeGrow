import { NAV_LINKS } from "../constants"
import Image from "next/image"
import Link from "next/link"
import React from "react";
import Button from "./Button"
import { redirect } from "next/dist/server/api-utils";
import { UserButton} from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { ShiftingDropDown } from "./Dropdown";

const Navbar = () => {
  const { userId } = auth();

  return (
    <nav className="flexBetween padding-container z-30 py-5 sticky top-0 bg-white px-0 mx-0 focus:border-b-2">
        <Link href="/" className="relative right-6 sm:pl-4 ">
          <Image src="/logo-black.png" alt="logo" width={274} height={74} />
        </Link>
       <ul className="hidden h-full gap-14 lg:flex top-1.5 relative left-32">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-blue-100 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
          <div className=" pb-2">
          <ShiftingDropDown />
          </div>
      </ul>

      {!userId && (
        <>
          <div className="absolute right-10">
            <div className="lg:flexCenter hidden">
              <Link href='/sign-in'>
                <Button 
                  type="button"
                  title="Login"
                  icon="/user-black.svg"
                  variant="btn_light_blue"
                />
              </Link>
            </div>

            <Image 
              src="menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
            /> 
          </div>
        </>
      )}
      {userId && (
          <div className="ml-96">
            <Link href='profile' className="regular-16 text-blue-100 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              Profile
            </Link>
          </div>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
    </nav>
  )
}

export default Navbar