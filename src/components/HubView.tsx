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
}

interface HubViewProps {
  hubData: HubData;
}

export const HubView: React.FC<HubViewProps> = ({ hubData }) => {
  return (
    <div className="flex justify-center">
      <Card className="w-[55%] mt-10 px-4">
        <CardHeader className="inline-block">
          <div className="inline-block">
            <CardTitle>
              <span className="text-4xl bg-blue-400 rounded-xl">
                {hubData.hubName}
              </span>
            </CardTitle>
            <p>Hub leader : {hubData.hubMembers[0].name}</p>
            <CardDescription className="text-xl mt-2 text-neutral-800">
              {hubData.hubDescription}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <MemberTable members={hubData.hubMembers} monthlyInvestment={hubData.m_invest} />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default HubView;
