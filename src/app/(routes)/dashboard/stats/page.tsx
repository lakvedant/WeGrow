'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import dynamic from 'next/dynamic';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const PieChart = dynamic(() => import('@/components/PieChart'), {
  ssr: false,
});


interface InvestmentTypeCount {
  Type: string;
  Number: number;
}

interface HubData {
  Type: string;
  AmountInvested: number;
}

const ParentComponent: React.FC = () => {
  const { user } = useUser();
  const [pieChartData, setPieChartData] = useState<InvestmentTypeCount[]>([]);
  const [barChartData, setBarChartData] = useState<{ Type: string, AmountInvested: number }[]>([]);

  useEffect(() => {
    const fetchUserJoinedHubs = async () => {
      try {
        if (user) {
          const response = await fetch('/api/gethubdata');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();

          console.log('Fetched Data:', data);

          const typeCount: { [key: string]: number } = {};
          const investmentAmounts: { [key: string]: number } = {};

          data.hubs.forEach((hub: HubData) => {
            typeCount[hub.Type] = (typeCount[hub.Type] || 0) + 1;
            investmentAmounts[hub.Type] = (investmentAmounts[hub.Type] || 0) + hub.AmountInvested;
          });

          console.log('Type Count:', typeCount);
          console.log('Investment Amounts:', investmentAmounts);

          const pieFormattedData: InvestmentTypeCount[] = Object.entries(typeCount).map(([type, count]) => ({
            Type: type,
            Number: count,
          }));


          setPieChartData(pieFormattedData);

          console.log('Pie Chart Data:', pieFormattedData);
        }
      } catch (error) {
        console.error('Error fetching user joined hubs:', error);
      }
    };

    fetchUserJoinedHubs();
  }, [user]);

  const pieLabels = pieChartData.map(item => item.Type);
  const pieSeries = pieChartData.map(item => item.Number);



  return (
    <div className='p-10 inline-block'>
      <Card className='mb-10'>
        <CardHeader>
          <CardTitle>Hub Types Distribution</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <PieChart labels={pieLabels} series={pieSeries} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ParentComponent;
