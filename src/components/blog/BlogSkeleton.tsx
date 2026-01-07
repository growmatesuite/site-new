
import React from 'react';
import { motion } from 'framer-motion';

export function BlogSkeleton() {
    return (
        <div className="space-y-24">
            {/* Featured Card Skeleton */}
            <div className="w-full h-[500px] bg-black-secondary/50 rounded-[2rem] border border-white/5 animate-pulse overflow-hidden">
                <div className="grid md:grid-cols-5 h-full">
                    <div className="md:col-span-3 bg-white/5" />
                    <div className="md:col-span-2 p-12 space-y-6">
                        <div className="h-4 w-24 bg-white/10 rounded-full" />
                        <div className="h-10 w-full bg-white/10 rounded-xl" />
                        <div className="h-20 w-full bg-white/5 rounded-xl" />
                        <div className="flex items-center gap-4 pt-12">
                            <div className="w-12 h-12 rounded-full bg-white/10" />
                            <div className="space-y-2">
                                <div className="h-4 w-32 bg-white/10 rounded" />
                                <div className="h-3 w-24 bg-white/5 rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid Skeleton */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex flex-col h-full bg-black-secondary/50 rounded-[2.5rem] border border-white/5 animate-pulse">
                        <div className="aspect-[16/10] bg-white/5 rounded-t-[2.5rem]" />
                        <div className="p-8 space-y-4 flex-1">
                            <div className="h-4 w-24 bg-white/10 rounded-full" />
                            <div className="h-8 w-full bg-white/10 rounded-xl" />
                            <div className="h-16 w-full bg-white/5 rounded-xl" />
                            <div className="pt-6 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10" />
                                <div className="h-4 w-32 bg-white/10 rounded" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
