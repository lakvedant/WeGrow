import * as React from 'react';
import { useState } from 'react';
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
} from "@/components/ui/alert-dialog";

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
  onDelete: (id: string) => void; // Add this prop to handle deletion
}

export function DHubViewBox({ hub, onDelete }: HubProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/hubs/${hub._id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        onDelete(hub._id); // Call onDelete to update the parent component's state
      } else {
        console.error('Failed to delete hub');
      }
    } catch (error) {
      console.error('Error deleting hub:', error);
    } finally {
      setIsDeleting(false);
    }
  };

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
          <Pencil className='w-7 h-7 inline-block' />
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Trash2 className='w-7 h-7 inline-block cursor-pointer' />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your hub and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>
                  {isDeleting ? 'Deleting...' : 'Continue'}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardFooter>
    </Card>
  );
}
