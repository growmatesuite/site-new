import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/Card';
import { Star, Smile, Frown, Meh, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';

export const CSATCalculator: React.FC = () => {
    // State for star inputs (raw counts)
    const [stars5, setStars5] = useState<string>('120');
    const [stars4, setStars4] = useState<string>('45');
    const [stars3, setStars3] = useState<string>('20');
    const [stars2, setStars2] = useState<string>('10');
    const [stars1, setStars1] = useState<string>('5');

    // Calculated values
    const [csatScore, setCsatScore] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    const calculateCSAT = () => {
        const s5 = parseInt(stars5) || 0;
        const s4 = parseInt(stars4) || 0;
        const s3 = parseInt(stars3) || 0;
        const s2 = parseInt(stars2) || 0;
        const s1 = parseInt(stars1) || 0;

        const t = s5 + s4 + s3 + s2 + s1;
        setTotal(t);

        if (t === 0) {
            setCsatScore(0);
            return;
        }

        // CSAT Formula: ((Satisfied Customers (4 & 5 stars)) / Total Responses) * 100
        const positiveResponses = s5 + s4;
        const score = (positiveResponses / t) * 100;
        setCsatScore(Math.round(score));
    };

    useEffect(() => {
        calculateCSAT();
    }, [stars5, stars4, stars3, stars2, stars1]);

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-green-400';
        if (score >= 60) return 'text-yellow-400';
        return 'text-red-400';
    };

    const getScoreBackground = (score: number) => {
        if (score >= 80) return 'bg-green-500';
        if (score >= 60) return 'bg-yellow-500';
        return 'bg-red-500';
    }

    // Dynamic Icon based on score
    const getSentimentIcon = (score: number) => {
        if (score >= 85) return <Heart className="w-24 h-24 text-green-400 fill-green-400/20" />;
        if (score >= 70) return <Smile className="w-24 h-24 text-green-400" />;
        if (score >= 50) return <Meh className="w-24 h-24 text-yellow-400" />;
        return <Frown className="w-24 h-24 text-red-400" />;
    };

    return (
        <div className="max-w-4xl mx-auto">
            <Card glowColor={csatScore >= 60 ? 'green' : csatScore >= 40 ? 'orange' : 'purple'} className="p-8 border-gray-800 bg-black-secondary">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Input Section */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-heading font-semibold mb-2">Simule seu CSAT</h3>
                            <p className="text-gray-400 text-sm">Distribua as respostas entre as avaliações (1 a 5).</p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { val: stars5, set: setStars5, label: '5 Estrelas', color: 'text-green-400', rangeColor: 'accent-green-500', icon: Star, fill: true },
                                { val: stars4, set: setStars4, label: '4 Estrelas', color: 'text-green-300', rangeColor: 'accent-green-400', icon: Star, fill: true },
                                { val: stars3, set: setStars3, label: '3 Estrelas', color: 'text-yellow-400', rangeColor: 'accent-yellow-500', icon: Star, fill: true },
                                { val: stars2, set: setStars2, label: '2 Estrelas', color: 'text-orange-400', rangeColor: 'accent-orange-500', icon: Star, fill: true },
                                { val: stars1, set: setStars1, label: '1 Estrela', color: 'text-red-400', rangeColor: 'accent-red-500', icon: Star, fill: true },
                            ].map((item, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="flex items-center justify-between mb-1">
                                        <label className={cn("flex items-center gap-2 text-sm font-medium", item.color)}>
                                            <div className="flex">
                                                {Array.from({ length: 5 - idx }).map((_, i) => (
                                                    <item.icon key={i} className={cn("h-3 w-3", item.fill || i < 1 ? "fill-current" : "")} />
                                                ))}
                                            </div>
                                            <span>{item.label}</span>
                                        </label>
                                        <span className="text-xs text-gray-500 font-mono">
                                            {total > 0 ? Math.round((parseInt(item.val || '0') / total) * 100) : 0}%
                                        </span>
                                    </div>

                                    <div className="flex gap-4 items-center">
                                        <input
                                            type="range"
                                            min="0"
                                            max="200"
                                            value={item.val}
                                            onChange={(e) => item.set(e.target.value)}
                                            className={cn(
                                                "flex-grow h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer",
                                                item.rangeColor
                                            )}
                                        />
                                        <input
                                            type="number"
                                            min="0"
                                            value={item.val}
                                            onChange={(e) => item.set(e.target.value)}
                                            className="w-20 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1 text-white text-right focus:ring-1 focus:ring-green-500 transition-all outline-none text-sm"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visualization Section */}
                    <div className="flex flex-col items-center justify-center p-8 bg-black-primary/50 rounded-2xl border border-gray-800 relative overflow-hidden">
                        {/* Background Glow */}
                        <div className={cn(
                            "absolute inset-0 opacity-20 blur-3xl transition-colors duration-500",
                            getScoreBackground(csatScore)
                        )} />

                        <div className="relative z-10 text-center flex flex-col items-center">
                            <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-6">Índice de Satisfação</h4>

                            <div className="relative mb-6">
                                <motion.div
                                    key={csatScore} // trigger animation on change
                                    initial={{ scale: 0.8, rotate: -10 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                >
                                    {getSentimentIcon(csatScore)}
                                </motion.div>

                                {/* Pulse Effect */}
                                <motion.div
                                    className={cn("absolute inset-0 rounded-full opacity-30 blur-md z-[-1]", getScoreBackground(csatScore))}
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>

                            <motion.div
                                className={cn("text-7xl font-bold tracking-tighter transition-colors duration-300", getScoreColor(csatScore))}
                                key={csatScore}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                {csatScore}%
                            </motion.div>

                            <div className={cn("text-lg font-medium mt-2 transition-colors duration-300", getScoreColor(csatScore))}>
                                {csatScore >= 80 ? 'Clientes Encantados' : csatScore >= 60 ? 'Satisfação Moderada' : 'Atenção Necessária'}
                            </div>

                            <div className="mt-8 w-full bg-gray-900 rounded-full h-4 overflow-hidden relative">
                                <motion.div
                                    className={cn("h-full", getScoreBackground(csatScore))}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${csatScore}%` }}
                                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                                />
                                {/* Markers */}
                                <div className="absolute top-0 left-[60%] w-0.5 h-full bg-black/50" title="Meta Mínima"></div>
                                <div className="absolute top-0 left-[80%] w-0.5 h-full bg-black/50" title="Excelência"></div>
                            </div>
                            <div className="flex justify-between w-full text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                                <span>Crítico</span>
                                <span>Bom</span>
                                <span>Excelente</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm">
                        O cálculo: <span className="text-white font-mono bg-gray-800 px-2 py-1 rounded mx-1">((4★ + 5★) ÷ Total) × 100</span>
                        Consideramos clientes "Satisfeitos" apenas aqueles que avaliaram com 4 ou 5 estrelas.
                    </p>
                </div>
            </Card>
        </div>
    );
};
