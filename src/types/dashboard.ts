
export interface DashboardFilters {
  dateRange: '1h' | '24h' | '7d' | '30d';
  priority: 'all' | 'critical' | 'high' | 'normal' | 'low';
  eventType: 'all' | 'orders' | 'refunds' | 'checkouts' | 'customers' | 'products' | 'inventory';
  searchQuery: string;
}

export interface ShopifyEvent {
  id: string;
  type: 'orders' | 'refunds' | 'checkouts' | 'customers' | 'products' | 'inventory';
  subtype: 'create' | 'update' | 'paid' | 'cancelled' | 'fulfilled' | 'levels_update';
  title: string;
  description: string;
  priority: 'critical' | 'high' | 'normal' | 'low';
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface Metric {
  title: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down' | 'stable';
  icon: string;
}

export interface ChartDataPoint {
  time: string;
  value: number;
  [key: string]: any;
}

export interface SidebarSection {
  id: string;
  title: string;
  icon: string;
  badge?: number;
  priority?: 'critical' | 'high' | 'normal' | 'low';
}
