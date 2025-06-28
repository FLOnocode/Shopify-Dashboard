import React from 'react';
import { Search, Bell, Settings, Filter, Calendar } from 'lucide-react';
import { DashboardFilters } from '../../types/dashboard';

interface DashboardHeaderProps {
  filters: DashboardFilters;
  onFiltersChange: (filters: DashboardFilters) => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ filters, onFiltersChange }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 dark:bg-slate-950/80 dark:border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-cyan-400 dark:to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 dark:shadow-cyan-500/25">
              🛍️
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Shopify Command Center</h1>
              <p className="text-sm text-gray-600 dark:text-slate-400">Dashboard eCommerce Premium</p>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher des événements..."
                value={filters.searchQuery}
                onChange={(e) => onFiltersChange({ ...filters, searchQuery: e.target.value })}
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 dark:bg-slate-800/50 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent transition-all duration-200 w-64"
              />
            </div>

            {/* Time Range Filter */}
            <select
              value={filters.dateRange}
              onChange={(e) => onFiltersChange({ ...filters, dateRange: e.target.value as any })}
              className="bg-gray-50 border border-gray-200 dark:bg-slate-800/50 dark:border-slate-700 rounded-lg px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500"
            >
              <option value="1h">Dernière heure</option>
              <option value="24h">24 heures</option>
              <option value="7d">7 jours</option>
              <option value="30d">30 jours</option>
            </select>

            {/* Priority Filter */}
            <select
              value={filters.priority}
              onChange={(e) => onFiltersChange({ ...filters, priority: e.target.value as any })}
              className="bg-gray-50 border border-gray-200 dark:bg-slate-800/50 dark:border-slate-700 rounded-lg px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500"
            >
              <option value="all">Toutes priorités</option>
              <option value="critical">🔴 Critique</option>
              <option value="high">🟡 Élevée</option>
              <option value="normal">🟢 Normale</option>
            </select>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 ml-4">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200 relative">
                <Bell className="w-5 h-5 text-gray-600 dark:text-slate-300" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200">
                <Settings className="w-5 h-5 text-gray-600 dark:text-slate-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;