import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

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
  return (
    <Card className="w-[375px] h-[300px] bg-gray-100 relative">
      <CardHeader className="inline-block relative p-2">
        <div className="inline-block ml-6 top-0">
          <CardTitle className="=mt-7">{hub.hubName}</CardTitle>
        </div>
        <div className="inline-block relative ml-32 pt-2">
          <Image src={hub.imgurl || '/group.png'} alt='group' width={60} height={60} />
        </div>
      </CardHeader>
      <p className="px-6">{hub.hubDescription}</p>
      <CardFooter className="flex justify-center items-center pb-0.5 absolute bottom-4 ml-3">
        <div className="">
          <Button asChild>
            <Link href={`/hub/${hub._id}`} className="bg-blue-50 text-blue-100 mr-16">Know More</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-50 text-blue-100">Request to Join</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when done.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardFooter>
    </Card>
  );
}
