"use client"

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

interface MemberCountProps {
  totalMembers: number;
  currentMembers: number;
}

// Chart configuration
const chartConfig = {
  members: {
    label: "members",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function MemberCount({ totalMembers, currentMembers }: MemberCountProps) {
  // Sample data
  const chartData = [
    { browser: "safari", members: totalMembers, fill: "#309BDC", currmembers: currentMembers },
  ]

  // Calculate end angle based on the current members and total members
  const endAngle = (currentMembers / totalMembers) * 360;

  return (
    <div className="">
        <ChartContainer
          config={chartConfig}

        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={endAngle}
            innerRadius={30}
            outerRadius={50}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="currmembers" background cornerRadius={10} fill={chartData[0].fill} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-base font-bold p-0"
                        >
                          {currentMembers.toLocaleString()}/{totalMembers.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 13}
                          className="fill-muted-foreground text-[8px]"
                        >
                          Members
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        </div>

  )
}
