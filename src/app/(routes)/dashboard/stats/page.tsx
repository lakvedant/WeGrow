'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import PieChart from '@/components/PieChart';
import BarChart from '@/components/Barchart';  // Import your BarChart component
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface InvestmentTypeCount {
  Type: string;
  Number: number;
}

interface HubData {
  Type: string;
  AmountInvested: number; // Add this field to hold the amount invested
}

const ParentComponent: React.FC = () => {
  const { user } = useUser();
  const [pieChartData, setPieChartData] = useState<InvestmentTypeCount[]>([]);
  const [barChartData, setBarChartData] = useState<{ types: string[], amounts: number[] }>({ types: [], amounts: [] });

  useEffect(() => {
    const fetchUserJoinedHubs = async () => {
      try {
        if (user) {
          const response = await fetch(`/api/gethubdata`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();

          // Count the number of hubs for each type
          const typeCount: { [key: string]: number } = {};
          const typeInvestment: { [key: string]: number } = {};

          data.hubs.forEach((hub: HubData) => {
            // Count the number of hubs for each type
            typeCount[hub.Type] = (typeCount[hub.Type] || 0) + 1;
            
            // Accumulate total amount invested for each type
            typeInvestment[hub.Type] = (typeInvestment[hub.Type] || 0) + hub.AmountInvested;
          });

          // Convert the counts to the format expected by the PieChart component
          const pieFormattedData: InvestmentTypeCount[] = Object.entries(typeCount).map(([type, count]) => ({
            Type: type,
            Number: count,
          }));

          setPieChartData(pieFormattedData);

          // Prepare data for the BarChart component
          const barFormattedData = {
            types: Object.keys(typeInvestment),
            amounts: Object.values(typeInvestment),
          };

          setBarChartData(barFormattedData);
        }
      } catch (error) {
        console.error('Error fetching user joined hubs:', error);
      }
    };

    fetchUserJoinedHubs();
  }, [user]);

  // Prepare labels and series for the PieChart component
  const pieLabels = pieChartData.map(item => item.Type);
  const pieSeries = pieChartData.map(item => item.Number);

  // Prepare labels and series for the BarChart component
  const barLabels = barChartData.types;
  const barSeries = barChartData.amounts;

  return (
    <div className='p-10'>
      <Card className='mb-10'>
        <CardHeader>
          <CardTitle>Hub Types Distribution</CardTitle>
          <CardDescription>Visual representation of hub types and their distribution</CardDescription>
        </CardHeader>
        <CardContent>
          <PieChart labels={pieLabels} series={pieSeries} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Investment by Hub Type</CardTitle>
          <CardDescription>Visual representation of the total amount invested in each hub type</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChart types={barLabels} amounts={barSeries} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ParentComponent;