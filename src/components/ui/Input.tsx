import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type = 'text', label, error, fullWidth = true, id, ...props }, ref) => {
        // Generate a unique ID if none is provided but a label exists
        const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

        return (
            <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-gray-400"
                    >
                        {label}
                    </label>
                )}
                <input
                    id={inputId}
                    type={type}
                    className={cn(
                        'flex h-10 w-full rounded-md border border-gray-800 bg-black-tertiary px-3 py-2 text-sm text-white placeholder:text-gray-600',
                        'focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        'transition-colors duration-200',
                        error && 'border-red-500 focus:ring-red-500',
                        className
                    )}
                    ref={ref}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                    {...props}
                />
                {error && (
                    <p
                        id={`${inputId}-error`}
                        className="text-sm font-medium text-red-500 animate-in slide-in-from-top-1 fade-in"
                    >
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
