import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from "@/components/ui/use-toast"

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

export function HubViewBox({ hub }: HubProps) {
  const { toast } = useToast()
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
      <CardFooter className="flex justify-center items-center pb-0.5 absolute bottom-4 ml-3">
        <div className="">
          <Button asChild>
            <Link href={`/hub/${hub._id}`} className="bg-blue-50 text-blue-100 mr-16 text-semibold">Know More</Link>
          </Button>
          <Button
      onClick={() => {
        toast({
          description: "You have joined the hub 🎉.",
        })
      }}
      className="bg-blue-50 text-blue-100 ml-10 text-semibold"
    >
      Join Hub
    </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
