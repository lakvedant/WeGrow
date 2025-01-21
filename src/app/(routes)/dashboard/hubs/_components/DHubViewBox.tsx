/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  const [editHubData, setEditHubData] = useState(hub);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/hubs/${hub._id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        onDelete(hub._id); // Call onDelete to update the parent component's state
        window.location.reload(); // Refresh the page after deletion
      } else {
        console.error('Failed to delete hub');
      }
    } catch (error) {
      console.error('Error deleting hub:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setEditHubData((prev) => ({ ...prev, [id]: value }));
  };

  const handleEditSubmit = async () => {
    try {
      const response = await fetch(`/api/hubs/${hub._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editHubData),
      });
      if (response.ok) {
        window.location.reload(); // Refresh the page after editing
      } else {
        console.error('Failed to update hub');
      }
    } catch (error) {
      console.error('Error updating hub:', error);
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
          <Sheet>
            <SheetTrigger asChild>
              <Pencil className='w-7 h-7 inline-block cursor-pointer' />
            </SheetTrigger>
            <SheetContent className='bg-white text-black w-[850px]'>
              <SheetHeader>
                <SheetTitle>Edit Hub</SheetTitle>
                <SheetDescription>
                  Make changes to your Hub here. Click save when you're done.
                  </SheetDescription>
                </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="hubName" className="text-right">
                    Name
                  </Label>
                  <Input id="hubName" className="col-span-3 text-black" value={editHubData.hubName} onChange={handleEditChange} />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="hubDescription" className="text-right">
                    Description
                  </Label>
                  <Input id="hubDescription" className="col-span-3 text-black" value={editHubData.hubDescription} onChange={handleEditChange} />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="people" className="text-right">
                    People
                  </Label>
                  <Input id="people" type="number" className="col-span-3 text-black" value={editHubData.people} onChange={handleEditChange} />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="m_invest" className="text-right">
                    Invest Amount
                  </Label>
                  <Input id="m_invest" type="number" className="col-span-3 text-black" value={editHubData.m_invest} onChange={handleEditChange} />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="invest_period" className="text-right">
                    Invest Period
                  </Label>
                  <Input id="invest_period" className="col-span-3 text-black" value={editHubData.invest_period} onChange={handleEditChange} />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Type" className="text-right">
                    Investment Type
                  </Label>
                  <select id="Type" className="col-span-3 text-black" value={editHubData.Type} onChange={handleEditChange}>
                    <option value="Forex">Forex</option>
                    <option value="Gold">Gold</option>
                    <option value="Crypto">Crypto</option>
                    <option value="Startups">Startups</option>
                    <option value="Mutual Funds">Mutual Funds</option>
                    <option value="Bonds">Bonds</option>
                    <option value="Fixed Deposit">Fixed Deposit</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Stocks">Stocks</option>
                  </select>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" className='border-black' onClick={handleEditSubmit}>Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Trash2 className='w-7 h-7 inline-block cursor-pointer' />
            </AlertDialogTrigger>
            <AlertDialogContent className='bg-white text-black ' >
              <AlertDialogHeader >
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
