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

const colorMap: { [key: string]: string } = {
  'Forex': '#007BFF',
  'Crypto': '#0056b3',
  'MutualFunds': '#003d80',
  'Stocks': '#004085',
  'Gold': '#0056a0',
  'RealEstate': '#0069d9',
  'FixedDeposit': '#004085',
  'Bonds': '#003366',
  'Startups': '#003d79',
};

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
  fill: string;
}

function Stats() {
  const { user } = useUser();
  const [list, setList] = useState<PieChartData[]>([]);

  useEffect(() => {
    const fetchHubs = async () => {
      try {
        const response = await fetch('/api/gethubdata');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API response:', data);

        // Count the number of hubs for each type
        const typeCount: { [key: string]: number } = {};
        data.hubs.forEach((hub: HubData) => {
          if (typeCount[hub.Type]) {
            typeCount[hub.Type]++;
          } else {
            typeCount[hub.Type] = 1;
          }
        });

        // Map the types to the color map and create the final list
        const transformedData: PieChartData[] = Object.entries(typeCount).map(([type, count]) => ({
          Type: type,
          Number: count,
          fill: colorMap[type] || '#000000' // Default to black if type not found
        }));

        setList(transformedData);
        console.log('Transformed data:', transformedData);

      } catch (error) {
        console.error("Error fetching hubs: ", error);
      }
    };

    fetchHubs();
  }, []);

  return (
    <div>
      <Card className="w-44">
        <CardHeader className="items-center pb-0">
          <CardTitle>Hub Types</CardTitle>
          <CardDescription>Diverse investment Stats</CardDescription>
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
                data={list}
                dataKey="Number"
                labelLine={false}// Ensure this fill is correctly used
                label={({ payload, ...props }) => (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  >
                    {`${payload.Type} (${payload.Number})`}
                  </text>
                )}
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
            Showing distribution of hub types
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Stats;
