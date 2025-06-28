import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package } from 'lucide-react';
import { DashboardFilters } from '../../types/dashboard';

interface ControlTowerProps {
  filters: DashboardFilters;
}

const ControlTower: React.FC<ControlTowerProps> = ({ filters }) => {
  const metrics = [
    {
      title: 'Revenus aujourd\'hui',
      value: '€47,832',
      change: '+12.3%',
      trend: 'up',
      icon: DollarSign,
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      title: 'Commandes actives',
      value: '284',
      change: '+8 nouvelle(s)',
      trend: 'up',
      icon: ShoppingCart,
      gradient: 'from-blue-400 to-cyan-600'
    },
    {
      title: 'Nouveaux clients',
      value: '47',
      change: '+23% vs hier',
      trend: 'up',
      icon: Users,
      gradient: 'from-purple-400 to-violet-600'
    },
    {
      title: 'Alertes stock',
      value: '12',
      change: '3 critiques',
      trend: 'down',
      icon: Package,
      gradient: 'from-red-400 to-rose-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={metric.title}
          className="group relative p-6 bg-white border border-gray-200 dark:bg-slate-900/50 dark:border-slate-800 rounded-xl hover:border-gray-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-cyan-500/10 backdrop-blur-sm"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-5 dark:opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300`} />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 bg-gradient-to-br ${metric.gradient} rounded-lg shadow-lg`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {metric.change}
              </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-gray-600 dark:text-slate-400">{metric.title}</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
            </div>

            {/* Mini sparkline placeholder */}
            <div className="mt-4 h-8 flex items-end gap-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 bg-gradient-to-t ${metric.gradient} opacity-60 rounded-full`}
                  style={{ height: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ControlTower;