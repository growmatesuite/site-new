import React from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: 'green' | 'purple' | 'coral' | 'whatsapp' | 'pink' | 'orange' | 'blue' | 'none';
  hoverable?: boolean;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glowColor = 'none', hoverable = false, children, ...props }, ref) => {
    const glowClasses = {
      green: 'shadow-glow-green hover:shadow-glow-green/70',
      purple: 'shadow-glow-purple hover:shadow-glow-purple/70',
      coral: 'shadow-glow-coral hover:shadow-glow-coral/70',
      whatsapp: 'shadow-glow-whatsapp hover:shadow-glow-whatsapp/70',
      pink: 'shadow-glow-pink hover:shadow-glow-pink/70',
      orange: 'shadow-glow-orange hover:shadow-glow-orange/70',
      blue: 'shadow-glow-blue hover:shadow-glow-blue/70',
      none: '',
    } as const;

    return (
      <div
        ref={ref}
        className={cn(
          'glass-effect p-6 rounded-xl transition-all duration-300',
          glowClasses[glowColor],
          hoverable && 'hover:scale-105 hover:-translate-y-1 cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
