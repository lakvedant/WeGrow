import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { useToast } from "@/components/ui/use-toast"
import { MemberCount } from './MemberCount';
function formatIndianNumber(num: number): string {
  return num.toLocaleString('en-IN');
}

interface HubOwner {
  firstName: string;
  lastName: string;
  photo: string;
}

interface HubProps {
  hub: {
    _id: string;
    hubName: string;
    hubDescription: string;
    people: number;
    currpeople: number;
    m_invest: number;
    invest_period: number;
    Type: string;
    HubOwner: HubOwner;
    AvgReturn?: number;
    Risk?: number;
    imgurl?: string;
  };
}

export function HubViewBox({ hub }: HubProps) {
  const { toast } = useToast()
  return (
    <Card className="w-[375px] h-[300px] bg-gray-100 relative transition-all duration-500 hover:scale-105">
      <CardHeader className="inline-block w-full p-2 justify-between">
        <div className="inline-block ">
          <CardTitle className="absolute p-3 text-2xl top-6 left-4">{hub.hubName}</CardTitle>
        </div>
        <div className="absolute right-1 inline-block p-1 mr-3 ">
          <Image src={hub.imgurl || '/group.png'} alt='group' width={65} height={65} />
        </div>
      </CardHeader>
      <div className='inline-block'>
        <p className="pl-7 mt-14 inline-block  w-64 h-24 pb-1">{hub.hubDescription}</p>
        <div className='inline-block w-40 h-40 absolute left-60 top-24'>
        <MemberCount currentMembers={hub.currpeople} totalMembers={hub.people} />
        </div>
      </div>
      <h2 className="pl-9 absolute left-[2px] bottom-[74px] font-bold text-primary text-2xl inline-block"> ₹{formatIndianNumber(hub.m_invest)}</h2>
      <div className="flex items-center mt-2 ml-9 absolute bottom-[78px] right-6">
        <Image src={hub.HubOwner.photo || '/user-black.svg'} height={20} width={20} alt='Hub Owner' className="rounded-full" />
        <p className="ml-2 text-neutral-500 text-base">{hub.HubOwner.firstName} {hub.HubOwner.lastName}</p>
      </div>
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
