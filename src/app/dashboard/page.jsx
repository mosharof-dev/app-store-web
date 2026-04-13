'use client';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer, Cell } from 'recharts';



import { AppsContext } from '@/Context/AppsProvider';
import useApps from '@/Hooks/useApps';

const Dashboard = () => {
  const { apps } = useApps();
  const { installing } = useContext(AppsContext);
  
  const uninstalledAppsCount = (apps?.length || 0) - (installing?.length || 0);

  const data = [
    { name: 'Installed Apps', value: installing?.length || 0, color: '#06b6d4' }, 
    { name: 'Uninstalled Apps', value: uninstalledAppsCount, color: '#10b981' }, 
  ];

  return (
   
    <div className=' container mx-auto  md:px-6 lg:px-8 min-h-[calc(100vh-80px)] w-full flex flex-col items-center py-10 px-4 sm:px-6'>
      
      
      <div className=' flex flex-col items-center w-full  bg-white border border-slate-200 shadow-sm rounded-3xl p-8 md:p-12'>
        
        <h2 className='text-3xl md:text-4xl font-extrabold text-slate-800 mb-10 tracking-tight text-center'>
          Installation Status
        </h2>

      
        <div className='w-full max-w-120 aspect-square relative'>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius="70%"
                outerRadius="90%"
                cornerRadius={12}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' 
                }} 
              />
              <Legend 
                iconType="circle" 
                wrapperStyle={{ bottom: '-10px' }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;