import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
    return (
        <nav aria-label="Breadcrumb" className={cn('flex', className)}>
            <ol className="flex items-center space-x-2">
                <li>
                    <Link
                        to="/"
                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                        aria-label="Home"
                    >
                        <Home className="h-4 w-4" />
                    </Link>
                </li>

                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-gray-600 mx-1" aria-hidden="true" />
                            {isLast ? (
                                <span
                                    className="text-sm font-medium text-white"
                                    aria-current="page"
                                >
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    to={item.href || '#'}
                                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
