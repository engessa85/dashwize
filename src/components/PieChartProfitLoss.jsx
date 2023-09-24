import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function PieChartProfitLoss({percentage}) {
  const data = [
    { name: "A", value: percentage, color: percentage !== 100 ? "#22C55E" : "#FF2E2E" },
    { name: "B", value: 100 - percentage, color: percentage === 0 || percentage === 100 ? "#FF2E2E":"#2A3342" },
  ];

  

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={500}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={130}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartProfitLoss;
