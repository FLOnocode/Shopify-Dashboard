
import React, { useState } from 'react';
import { 
  ShoppingCart, 
  DollarSign, 
  ShoppingBag, 
  Users, 
  Package, 
  Archive,
  Bell,
  Settings,
  ChevronRight,
  Dot
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

interface SidebarSectionData {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  badge?: number;
  priority?: 'critical' | 'high' | 'normal' | 'low';
  subsections?: Array<{
    id: string;
    title: string;
    count?: number;
    priority?: 'critical' | 'high' | 'normal' | 'low';
  }>;
}

const sidebarSections: SidebarSectionData[] = [
  {
    id: 'orders',
    title: 'Orders',
    icon: ShoppingCart,
    badge: 24,
    priority: 'high',
    subsections: [
      { id: 'orders-create', title: 'Nouvelles commandes', count: 8, priority: 'normal' },
      { id: 'orders-updated', title: 'Modifications', count: 3, priority: 'normal' },
      { id: 'orders-paid', title: 'Paiements validés', count: 12, priority: 'high' },
      { id: 'orders-cancelled', title: 'Annulées', count: 1, priority: 'high' },
      { id: 'orders-fulfilled', title: 'Expédiées', count: 15, priority: 'normal' },
    ]
  },
  {
    id: 'refunds',
    title: 'Refunds',
    icon: DollarSign,
    badge: 3,
    priority: 'high',
    subsections: [
      { id: 'refunds-create', title: 'Nouveaux remboursements', count: 3, priority: 'high' },
    ]
  },
  {
    id: 'abandoned-carts',
    title: 'Abandoned Carts',
    icon: ShoppingBag,
    badge: 47,
    priority: 'normal',
    subsections: [
      { id: 'checkouts-create', title: 'Paniers abandonnés', count: 35, priority: 'normal' },
      { id: 'checkouts-update', title: 'Mises à jour', count: 12, priority: 'low' },
    ]
  },
  {
    id: 'customers',
    title: 'Customers',
    icon: Users,
    badge: 18,
    priority: 'normal',
    subsections: [
      { id: 'customers-create', title: 'Nouveaux clients', count: 12, priority: 'normal' },
      { id: 'customers-update', title: 'Modifications', count: 6, priority: 'low' },
    ]
  },
  {
    id: 'products',
    title: 'Products',
    icon: Package,
    badge: 7,
    priority: 'normal',
    subsections: [
      { id: 'products-create', title: 'Nouveaux produits', count: 2, priority: 'normal' },
      { id: 'products-update', title: 'Modifications', count: 5, priority: 'low' },
    ]
  },
  {
    id: 'inventory',
    title: 'Inventory',
    icon: Archive,
    badge: 5,
    priority: 'critical',
    subsections: [
      { id: 'inventory-levels-update', title: 'Stock modifié', count: 5, priority: 'critical' },
    ]
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const [expandedSections, setExpandedSections] = useState<string[]>(['orders', 'inventory']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getPriorityColor = (priority?: 'critical' | 'high' | 'normal' | 'low') => {
    switch (priority) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'high': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'normal': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'low': return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <Sidebar className="bg-slate-950 border-slate-800">
      <SidebarHeader className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-white">Shopify Control</h2>
            <p className="text-xs text-slate-400">Dashboard Premium</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 text-xs font-medium mb-2">
            ÉVÉNEMENTS TEMPS RÉEL
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {sidebarSections.map((section) => {
                const isExpanded = expandedSections.includes(section.id);
                const Icon = section.icon;
                
                return (
                  <SidebarMenuItem key={section.id}>
                    <SidebarMenuButton
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <Icon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-sm text-slate-200 group-hover:text-white transition-colors">
                          {section.title}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {section.badge && (
                          <Badge 
                            variant="outline" 
                            className={`text-xs px-2 py-0.5 ${getPriorityColor(section.priority)}`}
                          >
                            {section.badge}
                          </Badge>
                        )}
                        <ChevronRight 
                          className={`w-3 h-3 text-slate-500 transition-transform ${
                            isExpanded ? 'rotate-90' : ''
                          }`} 
                        />
                      </div>
                    </SidebarMenuButton>

                    {/* Subsections */}
                    {isExpanded && section.subsections && (
                      <div className="ml-4 mt-2 space-y-1">
                        {section.subsections.map((subsection) => (
                          <div
                            key={subsection.id}
                            className="flex items-center justify-between p-2 rounded-md hover:bg-slate-800/30 transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              <Dot className="w-3 h-3 text-slate-500" />
                              <span className="text-xs text-slate-300">
                                {subsection.title}
                              </span>
                            </div>
                            {subsection.count && (
                              <Badge 
                                variant="outline" 
                                className={`text-xs px-1.5 py-0.5 ${getPriorityColor(subsection.priority)}`}
                              >
                                {subsection.count}
                              </Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-2">
          <SidebarMenuButton className="flex-1 justify-start">
            <Bell className="w-4 h-4" />
            <span className="text-sm">Notifications</span>
          </SidebarMenuButton>
          <SidebarMenuButton>
            <Settings className="w-4 h-4" />
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
