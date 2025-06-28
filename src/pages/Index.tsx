
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
      <div className="min-h-screen bg-background text-foreground w-full flex transition-colors duration-200">
        {/* Background Pattern - adapté au thème */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <AppSidebar />
        
        <SidebarInset className="flex-1">
          {/* Header avec trigger sidebar et theme toggle */}
          <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b border-border bg-background/80 backdrop-blur-sm px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/70 rounded-full" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
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
                  <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    📊 Timeline des événements
                    <span className="text-sm text-muted-foreground font-normal">Temps réel</span>
                  </h2>
                  <EventTimeline filters={filters} />
                </div>

                {/* Métriques détaillées */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">
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
