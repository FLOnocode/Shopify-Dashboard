
import React from 'react';
import EventCard from './EventCard';
import { DashboardFilters, ShopifyEvent } from '../../types/dashboard';

interface EventTimelineProps {
  filters: DashboardFilters;
}

const EventTimeline: React.FC<EventTimelineProps> = ({ filters }) => {
  // Mock data - remplacé par des vraies données Shopify en production
  const events: ShopifyEvent[] = [
    {
      id: '1',
      type: 'order',
      title: 'Nouvelle commande #SO-2024-001',
      description: 'Commande de €234.99 - iPhone 15 Pro Max',
      priority: 'normal',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      metadata: { orderId: 'SO-2024-001', amount: 234.99, customer: 'Marie Dubois' }
    },
    {
      id: '2',
      type: 'inventory',
      title: 'Stock critique - iPhone 15 Pro',
      description: 'Plus que 3 unités en stock',
      priority: 'critical',
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      metadata: { productId: 'iphone-15-pro', stock: 3, threshold: 10 }
    },
    {
      id: '3',
      type: 'customer',
      title: 'Nouveau client VIP',
      description: 'Client avec historique d\'achat élevé',
      priority: 'high',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      metadata: { customerId: 'customer-456', lifetime_value: 1250 }
    },
    {
      id: '4',
      type: 'refund',
      title: 'Demande de remboursement',
      description: 'Remboursement partiel de €45.00',
      priority: 'normal',
      timestamp: new Date(Date.now() - 45 * 60 * 1000),
      metadata: { orderId: 'SO-2024-000', amount: 45.00, reason: 'Produit défectueux' }
    },
    {
      id: '5',
      type: 'order',
      title: 'Commande expédiée #SO-2023-998',
      description: 'Tracking: FR123456789',
      priority: 'normal',
      timestamp: new Date(Date.now() - 60 * 60 * 1000),
      metadata: { orderId: 'SO-2023-998', tracking: 'FR123456789', carrier: 'La Poste' }
    }
  ];

  const filteredEvents = events.filter(event => {
    if (filters.priority !== 'all' && event.priority !== filters.priority) return false;
    if (filters.eventType !== 'all' && event.type !== filters.eventType) return false;
    if (filters.searchQuery && !event.title.toLowerCase().includes(filters.searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Timeline Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-slate-400">
            {filteredEvents.length} événement(s) • Mise à jour temps réel
          </span>
        </div>
        <div className="text-xs text-slate-500">
          Dernière sync: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600">
        {filteredEvents.map((event, index) => (
          <div
            key={event.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <EventCard event={event} />
          </div>
        ))}
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Aucun événement ne correspond aux filtres sélectionnés</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventTimeline;
