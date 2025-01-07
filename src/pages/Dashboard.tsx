import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Blocks as BlocksIcon, ArrowRightLeft } from 'lucide-react';
import {LineChart, Line } from 'recharts';
import { mockData } from './Stats';
import { LineCartOfPrice } from './Stats';


//---

const stats = [
  { name: 'Latest Block', value: '1,000,000', icon: BlocksIcon },
  { name: 'Transactions (24h)', value: '2.5M', icon: ArrowRightLeft },
  { name: 'Average Gas Price', value: '5 Gwei', icon: Activity },
];

const transactionData = [
  { name: '00:00', value: 1500 },
  { name: '04:00', value: 2200 },
  { name: '08:00', value: 3000 },
  { name: '12:00', value: 2800 },
  { name: '16:00', value: 3500 },
  { name: '20:00', value: 2900 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <stat.icon className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br />

      <div className="always-flex">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="h-80">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Transaction History (24h)</h2>
          
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#F0B90B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
        <LineCartOfPrice />
        </div>
        </div>
    </div>
  );
}