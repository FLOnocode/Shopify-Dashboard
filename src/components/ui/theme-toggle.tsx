
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './button';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      className="w-9 h-9 p-0 rounded-full hover:bg-accent transition-colors"
      title={isDark ? "Basculer en mode clair" : "Basculer en mode sombre"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-yellow-500" />
      ) : (
        <Moon className="w-4 h-4 text-blue-600" />
      )}
    </Button>
  );
};

export default ThemeToggle;
