
import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import ControlTower from '../components/dashboard/ControlTower';
import EventTimeline from '../components/dashboard/EventTimeline';
import MetricsGrid from '../components/dashboard/MetricsGrid';
import { DashboardFilters } from '../types/dashboard';

const Index = () => {
  const [filters, setFilters] = useState<DashboardFilters>({
    dateRange: '24h',
    priority: 'all',
    eventType: 'all',
    searchQuery: ''
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10">
        <DashboardHeader filters={filters} onFiltersChange={setFilters} />
        
        <main className="container mx-auto px-6 py-8 space-y-8">
          {/* Control Tower - Vue d'ensemble */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Control Tower
              </h1>
            </div>
            <ControlTower filters={filters} />
          </section>

          {/* Timeline & Métriques */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Timeline des événements */}
            <div className="xl:col-span-2 space-y-4">
              <h2 className="text-xl font-semibold text-slate-200 flex items-center gap-2">
                📊 Timeline des événements
                <span className="text-sm text-slate-400 font-normal">Temps réel</span>
              </h2>
              <EventTimeline filters={filters} />
            </div>

            {/* Métriques détaillées */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-200">
                📈 Métriques détaillées
              </h2>
              <MetricsGrid filters={filters} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
