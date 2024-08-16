import React, { useEffect } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  User,
  ReceiptText,
  ShieldCheck,
  BarChart2,
  House,
  Bookmark
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Your Hubs",
      icon: House,
      path: "/dashboard/hubs",
    },
    {
      id: 3,
      name: "Stats",
      icon: BarChart2,
      path: "/dashboard/stats",
    },
    {
      id: 4,
      name: "Bookmarks",
      icon: Bookmark,
      path: "/dashboard/bookmark",
    },
    {
      id: 5,
      name: "Edit Profile",
      icon: User,
      path: "/dashboard/edit-profile",
    },
    {
      id: 6,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);
  return (
    <div className="h-screen p-5 border shadow-sm border-t-0">
      {/* <Image src={'/logo.svg'}
        alt='logo'
        width={160}
        height={100}
        /> */}
      <div className="mt-5">
        {menuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2
              className={`flex gap-2 items-center
                    text-black font-semibold
                    mb-3
                    p-4 cursor-pointer rounded-full hover:bg-blue-20
                    ${path == menu.path && "text-primary bg-blue-20"}
                    `}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;