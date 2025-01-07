import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Activity, TrendingUp, Users } from 'lucide-react';

export const mockData = {
  transactions: [
    { date: '2024-03-08', count: 15000 },
    { date: '2024-03-09', count: 18000 },
    { date: '2024-03-10', count: 16500 },
    { date: '2024-03-11', count: 19000 },
    { date: '2024-03-12', count: 17500 },
    { date: '2024-03-13', count: 20000 },
    { date: '2024-03-14', count: 22000 }
  ],
  gasPrice: [
    { time: '00:00', price: 20 },
    { time: '04:00', price: 22 },
    { time: '08:00', price: 25 },
    { time: '12:00', price: 23 },
    { time: '16:00', price: 21 },
    { time: '20:00', price: 24 }
  ]
};

export const MoreMockData = {
  price: [
    {  date: '2024-03-14',time: '00:00', price: 100 },
    {  date: '2024-03-14',time: '01:00', price: 122 },
    {  date: '2024-03-14',time: '02:00', price: 145 },
    {  date: '2024-03-14',time: '03:00', price: 163 },
    { date: '2024-03-14', time: '04:00', price: 171 },
    { date: '2024-03-14', time: '05:00', price: 180 },
    { date: '2024-03-14', time: '06:00', price: 192 },
    { date: '2024-03-14', time: '07:00', price: 195 },
    { date: '2024-03-14', time: '08:00', price: 203 },
    {  date: '2024-03-14',time: '09:00', price: 207 },
    { date: '2024-03-14', time: '10:00', price: 250 },
    {  date: '2024-03-14',time: '11:00', price: 259 },
    {  date: '2024-03-14',time: '12:00', price: 260 },
    {  date: '2024-03-14',time: '13:00', price: 261 },
    {  date: '2024-03-14',time: '14:00', price: 263 },
    {  date: '2024-03-14',time: '15:00', price: 339 },
    {  date: '2024-03-14',time: '16:00', price: 336 },
    {  date: '2024-03-14',time: '17:00', price: 335 },
    {  date: '2024-03-14',time: '18:00', price: 333 },
    {  date: '2024-03-14',time: '19:00', price: 300 },
    {  date: '2024-03-14',time: '20:00', price: 220 },
    {  date: '2024-03-14',time: '21:00', price: 140 },
    {  date: '2024-03-14',time: '22:00', price: 150 },
    {  date: '2024-03-14',time: '23:00', price: 190 },
    {  date: '2024-03-14',time: '24:00', price: 550 }
  ]
};

const stats = [
  { name: 'Total Transactions', value: '1.2M', icon: Activity },
  { name: 'Average Gas Price', value: '22 Gwei', icon: TrendingUp },
  { name: 'Active Accounts', value: '45.2K', icon: Users }
];

export  function LineCartOfPrice() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Token Price (24h)</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MoreMockData.price}>
                <CartesianGrid strokeDasharray="4000 4000" />
                <XAxis dataKey="time" />
                <YAxis dataKey="price"/>
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#F0B90B" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
  );
}

export default function Stats() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Network Statistics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-md bg-blue-500 bg-opacity-10">
                <stat.icon className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Daily Transactions</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData.transactions}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Gas Price (24h)</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData.gasPrice}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#3B82F6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}