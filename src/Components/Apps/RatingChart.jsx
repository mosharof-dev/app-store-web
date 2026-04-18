'use client'; 

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  Tooltip, 
  Legend 
} from 'recharts';


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-4 py-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
        <p className="font-semibold text-slate-800 mb-1">{label}</p>
        <p className="text-sm text-slate-600">
          Ratings: <span className="font-bold text-orange-500">{payload[0].value.toLocaleString()}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function RatingChart({ ratings }) {
  const chartData = [...ratings].reverse();

  return (
   <>
    
    <div className="w-full h-75 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 0, right: 20, left: -20, bottom: 0 }}
        >
          <XAxis 
            type="number" 
            tickLine={false} 
            axisLine={false}
            tick={{ fill: '#9ca3af', fontSize: 12 }} 
          />
          
          <YAxis 
            dataKey="name" 
            type="category" 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: '#475569', fontSize: 13, fontWeight: 500 }}
          />
          
          {/* Custom Tooltip add kora holo */}
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ fill: '#f8fafc', radius: 8 }} 
          />

          {/* Legend add  */}
          <Legend 
            iconType="circle" // square er bodole circle icon
            wrapperStyle={{ paddingTop: '20px', fontSize: '13px', color: '#64748b' }}
          />
          
          <Bar 
            dataKey="count" 
            name="Total Ratings" 
            fill="#f97316" 
            barSize={16} 
            radius={[0, 4, 4, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
   
   </>
  );
}