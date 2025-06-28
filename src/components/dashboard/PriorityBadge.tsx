import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle, Minus } from 'lucide-react';

interface PriorityBadgeProps {
  priority: 'critical' | 'high' | 'normal' | 'low';
  size?: 'sm' | 'md';
}

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority, size = 'sm' }) => {
  const config = {
    critical: {
      icon: AlertTriangle,
      label: 'Critique',
      className: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-500/20 dark:text-red-400 dark:border-red-500/30',
      glowClass: 'shadow-red-500/25'
    },
    high: {
      icon: AlertCircle,
      label: 'Élevée',
      className: 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30',
      glowClass: 'shadow-yellow-500/25'
    },
    normal: {
      icon: CheckCircle,
      label: 'Normale',
      className: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-500/20 dark:text-green-400 dark:border-green-500/30',
      glowClass: 'shadow-green-500/25'
    },
    low: {
      icon: Minus,
      label: 'Faible',
      className: 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-slate-500/20 dark:text-slate-400 dark:border-slate-500/30',
      glowClass: 'shadow-gray-500/25 dark:shadow-slate-500/25'
    }
  };

  const { icon: Icon, label, className, glowClass } = config[priority];
  const sizeClasses = size === 'md' ? 'px-3 py-1.5 text-sm' : 'px-2 py-1 text-xs';
  const iconSize = size === 'md' ? 'w-4 h-4' : 'w-3 h-3';

  return (
    <div className={`
      inline-flex items-center gap-1.5 rounded-full border backdrop-blur-sm
      ${className} ${sizeClasses} ${glowClass}
      ${priority === 'critical' ? 'animate-pulse' : ''}
    `}>
      <Icon className={iconSize} />
      <span className="font-medium">{label}</span>
    </div>
  );
};

export default PriorityBadge;