import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import transactionsData from '../data/transactions.json';

export default function TransactionDetails() {
  const { txHash } = useParams();
  const transaction = transactionsData.transactions.find(tx => tx.hash === txHash);

  if (!transaction) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Transaction not found</h2>
      </div>
    );
  }

  const details = [
    { label: 'Transaction Hash', value: transaction.hash },
    { label: 'Status', value: transaction.status, isStatus: true },
    { label: 'Block', value: transaction.blockNumber, isBlock: true },
    { label: 'Timestamp', value: format(new Date(transaction.timestamp), 'PPpp') },
    { label: 'From', value: transaction.from, isAddress: true },
    { label: 'To', value: transaction.to, isAddress: true },
    { label: 'Value', value: `${transaction.value} XTH` },
    { label: 'Gas Price', value: `${transaction.gasPrice} Gwei` },
    { label: 'Gas Used', value: transaction.gasUsed },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Transaction Details</h1>
      
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
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
                  ) : detail.isBlock ? (
                    <Link to={`/blocks/${detail.value}`} className="text-yellow-500 hover:text-yellow-600">
                      {detail.value}
                    </Link>
                  ) : detail.isStatus ? (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      detail.value === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {detail.value}
                    </span>
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