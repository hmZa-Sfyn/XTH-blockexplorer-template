import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import blocksData from '../data/blocks.json';

export default function BlockDetails() {
  const { blockNumber } = useParams();
  const block = blocksData.blocks.find(b => b.number === parseInt(blockNumber || '0'));

  if (!block) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Block not found</h2>
      </div>
    );
  }

  const details = [
    { label: 'Block Height', value: block.number },
    { label: 'Timestamp', value: format(new Date(block.timestamp), 'PPpp') },
    { label: 'Transactions', value: block.transactions },
    { label: 'Miner', value: block.miner, isAddress: true },
    { label: 'Size', value: `${block.size.toLocaleString()} bytes` },
    { label: 'Gas Used', value: `${(block.gasUsed / 1000000).toFixed(2)}M (${((block.gasUsed / block.gasLimit) * 100).toFixed(2)}%)` },
    { label: 'Gas Limit', value: `${(block.gasLimit / 1000000).toFixed(2)}M` },
    { label: 'Hash', value: block.hash },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Block #{block.number}</h1>
      
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Block Details</h3>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700">
          <dl>
            {details.map((detail, index) => (
              <div key={detail.label} className={`${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{detail.label}</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                  {detail.isAddress ? (
                    <Link to={`/address/${detail.value}`} className="text-yellow-500 hover:text-yellow-600">
                      {detail.value}
                    </Link>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}