import React from "react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MemberTable } from "./MemberTable";

interface Member {
  _id: string;
  name: string;
  image: string;
  status: string;
}

interface HubData {
  hubName: string;
  hubDescription: string;
  hubMembers: Member[];
  m_invest: number;
  avgReturn: number;
  risk: string;
  type:string;
}

interface HubViewProps {
  hubData: HubData;
}

export const HubView: React.FC<HubViewProps> = ({ hubData }) => {
  console.log(hubData);
  return (
    <div className="flex justify-center">
      <Card className="w-[55%] mt-10 px-4">
        <CardHeader className="flex justify-between items-start">
          <div>
            <CardTitle>
              <span className="text-4xl">
                {hubData.hubName}
              </span>
              <p >Type: {hubData.type}</p> 
            </CardTitle>
            <p className="pt-1">Hub leader: {hubData.hubMembers[0].name}</p>
            <CardDescription className="text-base t-2 text-neutral-800 pt-1">
              {hubData.hubDescription}
            </CardDescription>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">Monthly Investment: ₹ {hubData.m_invest}</p>
            <p className="text-lg font-semibold">Risk: {hubData.risk}%</p>
            <p className="text-lg font-semibold">Avg Return: {hubData.avgReturn}%</p>
          </div>
        </CardHeader>
        <CardContent>
          <MemberTable members={hubData.hubMembers} monthlyInvestment={hubData.m_invest} />
        </CardContent>
      </Card>
    </div>
  );
}

export default HubView;
