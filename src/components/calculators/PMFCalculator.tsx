import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Rocket, Heart, AlertTriangle, CheckCircle, Flame } from 'lucide-react';
import { cn } from '../../lib/utils';

export const PMFCalculator: React.FC = () => {
    // State for inputs (raw counts)
    const [veryDisappointed, setVeryDisappointed] = useState<string>('45'); // The key metric
    const [somewhatDisappointed, setSomewhatDisappointed] = useState<string>('30');
    const [notDisappointed, setNotDisappointed] = useState<string>('25');

    // Calculated values
    const [pmfScore, setPmfScore] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [hasPMF, setHasPMF] = useState<boolean>(false);

    const calculatePMF = () => {
        const v = parseInt(veryDisappointed) || 0;
        const s = parseInt(somewhatDisappointed) || 0;
        const n = parseInt(notDisappointed) || 0;

        const t = v + s + n;
        setTotal(t);

        if (t === 0) {
            setPmfScore(0);
            setHasPMF(false);
            return;
        }

        // PMF Formula: % of "Very Disappointed"
        const score = (v / t) * 100;
        setPmfScore(Math.round(score));
        setHasPMF(score >= 40);
    };

    useEffect(() => {
        calculatePMF();
    }, [veryDisappointed, somewhatDisappointed, notDisappointed]);

    const getScoreColor = (score: number) => {
        if (score >= 40) return 'text-pink-500'; // PMF Achieved
        return 'text-gray-400';
    };

    return (
        <div className="max-w-4xl mx-auto">
            <Card glowColor={hasPMF ? 'pink' : 'none'} className={cn(
                "p-8 border-gray-800 bg-black-secondary transition-all duration-500",
                hasPMF ? "border-pink-500/30" : ""
            )}>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Input Section */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-heading font-semibold mb-2 flex items-center gap-2">
                                <Rocket className="h-5 w-5 text-pink-500" />
                                Sean Ellis Test
                            </h3>
                            <p className="text-gray-400 text-sm">
                                "Como você se sentiria se não pudesse mais usar esse produto?"
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Very Disappointed Input (The one that matters) */}
                            <div className="relative">
                                <label className="flex items-center justify-between text-sm font-medium mb-2">
                                    <div className="flex items-center gap-2 text-pink-500">
                                        <Heart className="h-4 w-4 fill-current" />
                                        <span>Muito Decepcionado</span>
                                    </div>
                                    <span className="text-pink-500 font-bold">
                                        {total > 0 ? Math.round((parseInt(veryDisappointed) / total) * 100) : 0}%
                                    </span>
                                </label>
                                <div className="flex gap-4 items-center">
                                    <input
                                        type="range"
                                        min="0"
                                        max="500"
                                        value={veryDisappointed}
                                        onChange={(e) => setVeryDisappointed(e.target.value)}
                                        className="flex-grow h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
                                    />
                                    <input
                                        type="number"
                                        min="0"
                                        value={veryDisappointed}
                                        onChange={(e) => setVeryDisappointed(e.target.value)}
                                        className="w-20 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1 text-white text-right focus:ring-1 focus:ring-pink-500 transition-all outline-none text-sm"
                                    />
                                </div>
                                <p className="text-xs text-pink-500/60 mt-1">
                                    *Esta é a métrica chave. Precisa ser ≥ 40%.
                                </p>
                            </div>

                            {/* Somewhat Disappointed */}
                            <div className="relative">
                                <label className="flex items-center justify-between text-sm font-medium mb-2">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <span>Pouco Decepcionado</span>
                                    </div>
                                    <span className="text-gray-500 font-mono">
                                        {total > 0 ? Math.round((parseInt(somewhatDisappointed) / total) * 100) : 0}%
                                    </span>
                                </label>
                                <div className="flex gap-4 items-center">
                                    <input
                                        type="range"
                                        min="0"
                                        max="500"
                                        value={somewhatDisappointed}
                                        onChange={(e) => setSomewhatDisappointed(e.target.value)}
                                        className="flex-grow h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-gray-500"
                                    />
                                    <input
                                        type="number"
                                        min="0"
                                        value={somewhatDisappointed}
                                        onChange={(e) => setSomewhatDisappointed(e.target.value)}
                                        className="w-20 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1 text-white text-right focus:ring-1 focus:ring-gray-500 transition-all outline-none text-sm"
                                    />
                                </div>
                            </div>

                            {/* Not Disappointed */}
                            <div className="relative">
                                <label className="flex items-center justify-between text-sm font-medium mb-2">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <span>Não ficaria Decepcionado</span>
                                    </div>
                                    <span className="text-gray-500 font-mono">
                                        {total > 0 ? Math.round((parseInt(notDisappointed) / total) * 100) : 0}%
                                    </span>
                                </label>
                                <div className="flex gap-4 items-center">
                                    <input
                                        type="range"
                                        min="0"
                                        max="500"
                                        value={notDisappointed}
                                        onChange={(e) => setNotDisappointed(e.target.value)}
                                        className="flex-grow h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-gray-500"
                                    />
                                    <input
                                        type="number"
                                        min="0"
                                        value={notDisappointed}
                                        onChange={(e) => setNotDisappointed(e.target.value)}
                                        className="w-20 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1 text-white text-right focus:ring-1 focus:ring-gray-500 transition-all outline-none text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visualization Section */}
                    <div className="flex flex-col items-center justify-center p-8 bg-black-primary/50 rounded-2xl border border-gray-800 relative overflow-hidden">
                        {/* Background Glow */}
                        <div className={cn(
                            "absolute inset-0 opacity-20 blur-3xl transition-colors duration-500",
                            hasPMF ? "bg-pink-500" : "bg-gray-800"
                        )} />

                        <div className="relative z-10 text-center flex flex-col items-center w-full">
                            <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-8">Score de PMF</h4>

                            <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                                {/* Circular Progress Background */}
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="96"
                                        cy="96"
                                        r="88"
                                        className="stroke-gray-800"
                                        strokeWidth="16"
                                        fill="none"
                                    />
                                    <motion.circle
                                        cx="96"
                                        cy="96"
                                        r="88"
                                        className={cn(
                                            "stroke-current transition-colors duration-500",
                                            hasPMF ? "text-pink-500" : "text-gray-600"
                                        )}
                                        strokeWidth="16"
                                        fill="none"
                                        strokeLinecap="round"
                                        initial={{ strokeDasharray: "0 1000" }}
                                        animate={{
                                            strokeDasharray: `${(pmfScore / 100) * 553} 1000` // 2 * PI * 88 ~= 553
                                        }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    />
                                </svg>

                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <motion.span
                                        className={cn("text-6xl font-bold tracking-tighter", getScoreColor(pmfScore))}
                                        key={pmfScore}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                    >
                                        {pmfScore}%
                                    </motion.span>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                key={hasPMF ? 'pmf' : 'no-pmf'}
                                className="flex flex-col items-center"
                            >
                                {hasPMF ? (
                                    <div className="flex items-center gap-2 text-pink-400 bg-pink-500/10 px-4 py-2 rounded-full border border-pink-500/20">
                                        <Flame className="h-5 w-5 fill-current" />
                                        <span className="font-bold">Product Market Fit!</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                                        <AlertTriangle className="h-4 w-4" />
                                        <span className="font-medium">Ainda não chegou lá</span>
                                    </div>
                                )}
                            </motion.div>

                            <div className="mt-8 w-full">
                                <div className="flex justify-between text-xs text-gray-500 mb-2 font-mono">
                                    <span>0%</span>
                                    <span className="text-pink-500 font-bold">META: 40%</span>
                                    <span>100%</span>
                                </div>
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden relative">
                                    <motion.div
                                        className={cn("h-full", hasPMF ? "bg-pink-500" : "bg-gray-600")}
                                        animate={{ width: `${pmfScore}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    {/* 40% Marker */}
                                    <div className="absolute top-0 left-[40%] w-0.5 h-full bg-white/50 z-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm">
                        O cálculo: <span className="text-white font-mono bg-gray-800 px-2 py-1 rounded mx-1 text-xs">% (Muito Decepcionado)</span>
                        focado nos usuários que consideram o produto indispensável.
                    </p>
                </div>
            </Card>
        </div>
    );
};
