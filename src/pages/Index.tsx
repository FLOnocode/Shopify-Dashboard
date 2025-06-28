import React, { useState } from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from '../components/dashboard/AppSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import ControlTower from '../components/dashboard/ControlTower';
import EventTimeline from '../components/dashboard/EventTimeline';
import MetricsGrid from '../components/dashboard/MetricsGrid';
import ThemeToggle from '../components/ui/theme-toggle';
import { useTheme } from '../hooks/useTheme';
import { DashboardFilters } from '../types/dashboard';

const Index = () => {
  const [filters, setFilters] = useState<DashboardFilters>({
    dateRange: '24h',
    priority: 'all',
    eventType: 'all',
    searchQuery: ''
  });

  const { isDark, toggleTheme } = useTheme();

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-background text-gray-900 dark:text-foreground w-full flex transition-colors duration-200">
        {/* Background Pattern - adapté au thème */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <AppSidebar />
        
        <SidebarInset className="flex-1">
          {/* Header avec trigger sidebar et theme toggle */}
          <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b border-gray-200 dark:border-border bg-white/80 dark:bg-background/80 backdrop-blur-sm px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-gray-600 hover:text-gray-900 dark:text-muted-foreground dark:hover:text-foreground" />
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 dark:from-primary dark:to-primary/70 rounded-full" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-foreground dark:to-muted-foreground bg-clip-text text-transparent">
                  Control Tower
                </h1>
              </div>
            </div>
            
            {/* Theme Toggle */}
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </header>

          <div className="relative z-10">
            <DashboardHeader filters={filters} onFiltersChange={setFilters} />
            
            <main className="container mx-auto px-6 py-8 space-y-8">
              {/* Control Tower - Vue d'ensemble */}
              <section className="space-y-6">
                <ControlTower filters={filters} />
              </section>

              {/* Timeline & Métriques */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Timeline des événements */}
                <div className="xl:col-span-2 space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-foreground flex items-center gap-2">
                    📊 Timeline des événements
                    <span className="text-sm text-gray-600 dark:text-muted-foreground font-normal">Temps réel</span>
                  </h2>
                  <EventTimeline filters={filters} />
                </div>

                {/* Métriques détaillées */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-foreground">
                    📈 Métriques détaillées
                  </h2>
                  <MetricsGrid filters={filters} />
                </div>
              </div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;