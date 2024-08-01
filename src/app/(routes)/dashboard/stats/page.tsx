'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { TrendingUp } from 'lucide-react';
import { Pie, PieChart } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartConfig = {
  Forex: {
    label: 'Forex',
    color: 'hsl(var(--chart-1))',
  },
  Crypto: {
    label: 'Crypto',
    color: 'hsl(var(--chart-2))',
  },
  MutualFunds: {
    label: 'Mutual Funds',
    color: 'hsl(var(--chart-3))',
  },
  Stocks: {
    label: 'Stocks',
    color: 'hsl(var(--chart-4))',
  },
  Gold: {
    label: 'Gold',
    color: 'hsl(var(--chart-5))',
  },
  RealEstate: {
    label: 'Real Estate',
    color: 'hsl(var(--chart-6))',
  },
  FixedDeposit: {
    label: 'Fixed Deposit',
    color: 'hsl(var(--chart-7))',
  },
  Bonds: {
    label: 'Bonds',
    color: 'hsl(var(--chart-8))',
  },
  Startups: {
    label: 'Startups',
    color: 'hsl(var(--chart-9))',
  },
} satisfies ChartConfig;

interface HubData {
  Type: string;
}

interface PieChartData {
  Type: string;
  Number: number;
}

function Stats() {
  const { user } = useUser();
  const [hubs, setHubs] = useState<HubData[]>([]);
  const [pieData, setPieData] = useState<PieChartData[]>([]);

  useEffect(() => {
    const fetchHubs = async () => {
      try {
        const response = await fetch('/api/gethubdata');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API response:', data); // Log full API response

        // Aggregate the number of hubs for each type
        const typeCounts = data.hubs.reduce((acc: Record<string, number>, hub: HubData) => {
          acc[hub.Type] = (acc[hub.Type] || 0) + 1;
          return acc;
        }, {});

        // Transform aggregated data into the format required by PieChart
        const transformedData: PieChartData[] = Object.entries(typeCounts).map(([Type, Number]) => ({
          Type,
          Number: Number as number, // Explicitly cast to number
        }));
        console.log('Transformed data:', transformedData); // Log transformed data
        setPieData(transformedData);
      } catch (error) {
        console.error('Error fetching hubs: ', error);
      }
    };

    fetchHubs();
  }, []);

  return (
    <div>
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Pie Chart - Hub Types</CardTitle>
          <CardDescription>Distribution of Hub Types</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent nameKey="Type" hideLabel />}
              />
              <Pie
                data={pieData}
                dataKey="Number"
                labelLine={false}
                label={({ payload, ...props }) => {
                  return (
                    <text
                      x={props.x}
                      y={props.y}
                      textAnchor={props.textAnchor}
                      dominantBaseline={props.dominantBaseline}
                      fill="hsla(var(--foreground))"
                    >
                      {`${chartConfig[payload.Type as keyof typeof chartConfig]?.label || payload.Type} (${payload.Number})`}
                    </text>
                  );
                }}
                nameKey="Type"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing the distribution of different hub types
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Stats;
