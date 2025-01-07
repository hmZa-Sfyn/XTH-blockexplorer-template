import React from 'react';
import { Grid3X3 } from 'lucide-react';

const mockNFTs = [
  {
    id: 1,
    name: 'XTH Punk #1',
    collection: 'XTH Punks',
    image: '/images/image.png',
    price: '1.5 XTH',
    owner: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
  },
  {
    id: 2,
    name: 'XTH Art #42',
    collection: 'XTH Art',
    image: '/images/image.png',
    price: '2000.0 XTH',
    owner: '0x123d35Cc6634C0532925a3b844Bc454e4438f123'
  }
];

export default function NFTs() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">NFTs</h1>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <Grid3X3 className="h-4 w-4 mr-2" />
            View All Collections
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNFTs.map((nft) => (
          <div key={nft.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{nft.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{nft.collection}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-medium text-blue-500">{nft.price}</span>
                <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}