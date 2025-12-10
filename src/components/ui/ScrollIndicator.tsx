import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { cn } from '../../lib/utils';

interface ScrollIndicatorProps {
    className?: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className }) => {
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <motion.div
            className={cn("flex justify-center p-4 z-10", className)}
            animate={{
                y: [0, 10, 0],
            }}
            transition={{
                duration: prefersReducedMotion ? 0.01 : 2,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
        </motion.div>
    );
};
