import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    containerSize?: 'sm' | 'md' | 'lg' | 'xl';
    darker?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, children, containerSize = 'lg', darker = false, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    'py-20 md:py-32 relative overflow-hidden',
                    darker ? 'bg-black-secondary/30' : 'bg-transparent',
                    className
                )}
                {...props}
            >
                <Container size={containerSize} className="relative z-10">
                    {children}
                </Container>
            </section>
        );
    }
);

Section.displayName = 'Section';
