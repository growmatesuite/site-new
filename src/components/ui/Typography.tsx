import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    variant?: 'h1' | 'h2' | 'h3';
    gradient?: boolean;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, as, variant = 'h2', gradient = false, children, ...props }, ref) => {
        const Component = as || (variant as any);

        const variants = {
            h1: 'text-5xl md:text-7xl font-heading font-bold leading-tight',
            h2: 'text-3xl md:text-4xl font-heading font-bold leading-tight',
            h3: 'text-2xl md:text-3xl font-heading font-bold leading-snug',
        };

        return (
            <Component
                ref={ref}
                className={cn(
                    variants[variant],
                    gradient && 'text-transparent bg-clip-text bg-gradient-to-r from-green-primary to-purple-primary',
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Heading.displayName = 'Heading';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    as?: 'p' | 'span' | 'div';
    variant?: 'lg' | 'md' | 'sm' | 'caption';
    muted?: boolean;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
    ({ className, as = 'p', variant = 'md', muted = false, children, ...props }, ref) => {
        const Component = as as any;

        const variants = {
            lg: 'text-xl leading-relaxed',
            md: 'text-base leading-relaxed',
            sm: 'text-sm leading-relaxed',
            caption: 'text-xs leading-relaxed',
        };

        return (
            <Component
                ref={ref}
                className={cn(
                    variants[variant],
                    muted ? 'text-gray-400' : 'text-gray-200',
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Text.displayName = 'Text';
