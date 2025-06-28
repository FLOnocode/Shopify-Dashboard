
import React from 'react';
import PriorityBadge from './PriorityBadge';
import { ShopifyEvent } from '../../types/dashboard';
import { ShoppingCart, Users, Package, DollarSign, ShoppingBag, Archive } from 'lucide-react';

interface EventCardProps {
  event: ShopifyEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'orders': return ShoppingCart;
      case 'customers': return Users;
      case 'products': return Package;
      case 'refunds': return DollarSign;
      case 'checkouts': return ShoppingBag;
      case 'inventory': return Archive;
      default: return Package;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'orders': return 'from-blue-400 to-cyan-600';
      case 'customers': return 'from-purple-400 to-violet-600';
      case 'products': return 'from-green-400 to-emerald-600';
      case 'refunds': return 'from-yellow-400 to-orange-600';
      case 'checkouts': return 'from-pink-400 to-rose-600';
      case 'inventory': return 'from-orange-400 to-red-600';
      default: return 'from-gray-400 to-slate-600';
    }
  };

  const Icon = getEventIcon(event.type);
  const colorGradient = getEventColor(event.type);
  const timeAgo = getTimeAgo(event.timestamp);

  return (
    <div className="group relative p-4 bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-lg hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300 cursor-pointer">
      {/* Priority Indicator */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg ${
        event.priority === 'critical' ? 'bg-red-500' :
        event.priority === 'high' ? 'bg-yellow-500' : 
        event.priority === 'normal' ? 'bg-green-500' : 'bg-slate-500'
      }`} />

      <div className="flex items-start gap-4 pl-3">
        {/* Icon */}
        <div className={`flex-shrink-0 p-2 bg-gradient-to-br ${colorGradient} rounded-lg shadow-lg`}>
          <Icon className="w-4 h-4 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200 truncate">
                {event.title}
              </h4>
              <p className="text-sm text-slate-400 mt-1 line-clamp-2">
                {event.description}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <PriorityBadge priority={event.priority} />
              <span className="text-xs text-slate-500">{timeAgo}</span>
            </div>
          </div>

          {/* Metadata */}
          {event.metadata && (
            <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
              {Object.entries(event.metadata).slice(0, 3).map(([key, value]) => (
                <span key={key} className="flex items-center gap-1">
                  <span className="capitalize">{key}:</span>
                  <span className="text-slate-400 font-medium">{String(value)}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

// Utility function
function getTimeAgo(timestamp: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - timestamp.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  
  if (diffMins < 1) return 'À l\'instant';
  if (diffMins < 60) return `Il y a ${diffMins}min`;
  
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `Il y a ${diffHours}h`;
  
  const diffDays = Math.floor(diffHours / 24);
  return `Il y a ${diffDays}j`;
}

export default EventCard;
