import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Search, Moon, Sun, Menu, Activity, Clock } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import SearchBar from './SearchBar';

export default function Layout() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          {/* Top Stats Bar */}
          <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-10 text-sm">
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <Activity className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400">Latest Block: 1,000,000</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400">Avg Block Time: 3s</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">API</a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">Docs</a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <span className="text-xl font-bold text-blue-500">XTH BlockExplorer</span>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to="/" className="text-gray-900 dark:text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </Link>
                  <Link to="/blocks" className="text-gray-900 dark:text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                    Blocks
                  </Link>
                  <Link to="/transactions" className="text-gray-900 dark:text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                    Transactions
                  </Link>
                  <Link to="/tokens" className="text-gray-900 dark:text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                    Tokens
                  </Link>
                  <Link to="/nfts" className="text-gray-900 dark:text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                    NFTs
                  </Link>
                  <Link to="/stats" className="text-gray-900 dark:text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                    Stats
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <SearchBar />
                <button
                  onClick={toggleTheme}
                  className="ml-3 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
              <div className="flex items-center sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Explorer</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/blocks" className="text-base text-gray-500 hover:text-blue-500">
                      Blocks
                    </Link>
                  </li>
                  <li>
                    <Link to="/transactions" className="text-base text-gray-500 hover:text-blue-500">
                      Transactions
                    </Link>
                  </li>
                  <li>
                    <Link to="/tokens" className="text-base text-gray-500 hover:text-blue-500">
                      Tokens
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-blue-500">
                      API Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-blue-500">
                      Knowledge Base
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-blue-500">
                      Status
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-blue-500">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-blue-500">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-blue-500">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Connect</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-blue-500">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-blue-500">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-blue-500">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
              <p className="text-base text-gray-400 text-center">
                © 2024 XTH BlockExplorer. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}