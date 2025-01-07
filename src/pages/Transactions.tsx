import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import transactionsData from '../data/transactions.json';

export default function Transactions() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Transactions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Hash</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Block</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">From</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">To</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Value</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {transactionsData.transactions.map((tx) => (
              <tr key={tx.hash} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/tx/${tx.hash}`} className="text-yellow-500 hover:text-yellow-600">
                    {`${tx.hash.slice(0, 8)}...${tx.hash.slice(-6)}`}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/blocks/${tx.blockNumber}`} className="text-yellow-500 hover:text-yellow-600">
                    {tx.blockNumber}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                  {format(new Date(tx.timestamp), 'PPpp')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/address/${tx.from}`} className="text-yellow-500 hover:text-yellow-600">
                    {`${tx.from.slice(0, 6)}...${tx.from.slice(-4)}`}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/address/${tx.to}`} className="text-yellow-500 hover:text-yellow-600">
                    {`${tx.to.slice(0, 6)}...${tx.to.slice(-4)}`}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                  {tx.value} XTH
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}