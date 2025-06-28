
import React from 'react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { DashboardFilters } from '../../types/dashboard';

interface MetricsGridProps {
  filters: DashboardFilters;
}

const MetricsGrid: React.FC<MetricsGridProps> = ({ filters }) => {
  // Mock data pour les graphiques
  const salesData = [
    { time: '00h', sales: 1200 },
    { time: '04h', sales: 800 },
    { time: '08h', sales: 2400 },
    { time: '12h', sales: 3200 },
    { time: '16h', sales: 2800 },
    { time: '20h', sales: 1600 }
  ];

  const categoryData = [
    { name: 'Electronics', value: 45, color: '#06b6d4' },
    { name: 'Fashion', value: 30, color: '#8b5cf6' },
    { name: 'Home', value: 15, color: '#f59e0b' },
    { name: 'Books', value: 10, color: '#ef4444' }
  ];

  const orderStatusData = [
    { status: 'Pending', count: 45 },
    { status: 'Processing', count: 78 },
    { status: 'Shipped', count: 234 },
    { status: 'Delivered', count: 456 }
  ];

  return (
    <div className="space-y-6">
      {/* Sales Trend */}
      <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          📈 Évolution des ventes
          <span className="text-sm text-slate-400 font-normal">(24h)</span>
        </h3>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#06b6d4"
                strokeWidth={2}
                fill="url(#salesGradient)"
              />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#f1f5f9'
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Categories Distribution */}
      <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-4">🎯 Répartition par catégorie</h3>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={65}
                paddingAngle={2}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#f1f5f9'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {categoryData.map((item) => (
            <div key={item.name} className="flex items-center gap-2 text-sm">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-slate-300">{item.name}</span>
              <span className="text-slate-400 ml-auto">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Order Status */}
      <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-4">📦 Statut des commandes</h3>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={orderStatusData} layout="horizontal">
              <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <YAxis type="category" dataKey="status" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <Bar dataKey="count" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#f1f5f9'
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-4">⚡ Actions rapides</h3>
        <div className="grid grid-cols-1 gap-3">
          {[
            { label: 'Exporter les données', action: '📊' },
            { label: 'Configurer alertes', action: '🔔' },
            { label: 'Rapport détaillé', action: '📋' }
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-3 p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors duration-200 text-left"
            >
              <span className="text-lg">{item.action}</span>
              <span className="text-slate-300">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsGrid;
