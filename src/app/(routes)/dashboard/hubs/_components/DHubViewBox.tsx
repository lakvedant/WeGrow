import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
  Pencil,
  Trash2,
} from "lucide-react";

function formatIndianNumber(num: number): string {
  return num.toLocaleString('en-IN');
}
interface HubProps {
  hub: {
    _id: string;
    hubName: string;
    hubDescription: string;
    people: number;
    m_invest: number;
    invest_period: number;
    Type: string;
    HubOwner: string;
    AvgReturn?: number;
    Risk?: number;
    imgurl?: string;
  };
}

export function DHubViewBox({ hub }: HubProps) {
  return (
    <Card className="w-[375px] h-[270px] bg-gray-100 relative transition-all duration-500 hover:scale-105">
      <CardHeader className="inline-block w-full p-2 justify-between">
        <div className="inline-block ">
          <CardTitle className="absolute p-3 text-2xl top-6 left-4">{hub.hubName}</CardTitle>
        </div>
        <div className="absolute right-1 inline-block p-1 mr-3 ">
          <Image src={hub.imgurl || '/group.png'} alt='group' width={70} height={70} />
        </div>
      </CardHeader>
      <p className="px-7 mt-14">{hub.hubDescription}</p>
      <h2 className="pl-9 absolute bottom-[74px] font-bold text-primary text-2xl"> ₹{formatIndianNumber(hub.m_invest)}</h2>
      <CardFooter className="flex justify-center items-center pb-0.5 absolute bottom-3 ml-[28%]">
        <div className="flex gap-12 items-center w-full">
          <Pencil className='w-7 h-7 inline-block'></Pencil> 
          <AlertDialog>
            <AlertDialogTrigger>
            <Trash2 className='w-7 h-7 inline-block'></Trash2> 
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardFooter>
    </Card>
  );
}
