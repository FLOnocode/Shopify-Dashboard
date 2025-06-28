
export interface DashboardFilters {
  dateRange: '1h' | '24h' | '7d' | '30d';
  priority: 'all' | 'critical' | 'high' | 'normal';
  eventType: 'all' | 'order' | 'customer' | 'inventory' | 'refund' | 'payment';
  searchQuery: string;
}

export interface ShopifyEvent {
  id: string;
  type: 'order' | 'customer' | 'inventory' | 'refund' | 'payment';
  title: string;
  description: string;
  priority: 'critical' | 'high' | 'normal';
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
