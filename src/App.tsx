import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Blocks from './pages/Blocks';
import BlockDetails from './pages/BlockDetails';
import Transactions from './pages/Transactions';
import TransactionDetails from './pages/TransactionDetails';
import Account from './pages/Account';
import Tokens from './pages/Tokens';
import NFTs from './pages/NFTs';
import Stats from './pages/Stats';
import TokenPrices from './pages/Tokens';
import TransactionStats from './pages/Stats';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="blocks" element={<Blocks />} />
            <Route path="blocks/:blockNumber" element={<BlockDetails />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="tx/:txHash" element={<TransactionDetails />} />
            <Route path="address/:address" element={<Account />} />
            <Route path="tokens" element={<Tokens />} />
            <Route path="nfts" element={<NFTs />} />
            <Route path="stats" element={<Stats />} />
            <Route path="token-prices" element={<TokenPrices />} />
            <Route path="transaction-stats" element={<TransactionStats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}