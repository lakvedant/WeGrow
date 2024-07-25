"use client";
import React, { useEffect } from "react";
import SideNav from "./_components/SideNav";
import { connect } from "@/lib/db";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block ">
        <SideNav />
      </div>
      <div className="md:ml-64 ">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;