
import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';

interface PriorityBadgeProps {
  priority: 'critical' | 'high' | 'normal';
  size?: 'sm' | 'md';
}

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority, size = 'sm' }) => {
  const config = {
    critical: {
      icon: AlertTriangle,
      label: 'Critique',
      className: 'bg-red-500/20 text-red-400 border-red-500/30',
      glowClass: 'shadow-red-500/25'
    },
    high: {
      icon: AlertCircle,
      label: 'Élevée',
      className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      glowClass: 'shadow-yellow-500/25'
    },
    normal: {
      icon: CheckCircle,
      label: 'Normale',
      className: 'bg-green-500/20 text-green-400 border-green-500/30',
      glowClass: 'shadow-green-500/25'
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
