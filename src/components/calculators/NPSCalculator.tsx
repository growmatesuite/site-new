import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { AlertTriangle, Minus, ThumbsUp, RefreshCw } from 'lucide-react';
import { cn } from '../../lib/utils';

export const NPSCalculator: React.FC = () => {
    // State for inputs (raw counts)
    const [promoters, setPromoters] = useState<string>('50');
    const [passives, setPassives] = useState<string>('30');
    const [detractors, setDetractors] = useState<string>('12');

    // Calculated values
    const [npsScore, setNpsScore] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [promoterPct, setPromoterPct] = useState<number>(0);
    const [passivePct, setPassivePct] = useState<number>(0);
    const [detractorPct, setDetractorPct] = useState<number>(0);

    const calculateNPS = () => {
        const p = parseInt(promoters) || 0;
        const n = parseInt(passives) || 0;
        const d = parseInt(detractors) || 0;
        const t = p + n + d;

        setTotal(t);

        if (t === 0) {
            setNpsScore(0);
            setPromoterPct(0);
            setPassivePct(0);
            setDetractorPct(0);
            return;
        }

        const pPct = (p / t) * 100;
        const nPct = (n / t) * 100;
        const dPct = (d / t) * 100;

        setPromoterPct(Math.round(pPct));
        setPassivePct(Math.round(nPct));
        setDetractorPct(Math.round(dPct));

        // NPS Formula: % Promoters - % Detractors
        // (Note: use raw percentage calculation not rounded for score to be precise, or follow standard which is usually floor/round integers)
        // Usually: ((Promoters - Detractors) / Total) * 100
        const score = ((p - d) / t) * 100;
        setNpsScore(Math.round(score));
    };

    useEffect(() => {
        calculateNPS();
    }, [promoters, passives, detractors]);

    const getScoreColor = (score: number) => {
        if (score >= 75) return 'text-green-400'; // Zona de Excelência
        if (score >= 50) return 'text-green-300'; // Zona de Qualidade
        if (score >= 0) return 'text-yellow-400'; // Zona de Aperfeiçoamento
        return 'text-red-400'; // Zona Crítica
    };

    const getZoneLabel = (score: number) => {
        if (score >= 75) return 'Zona de Excelência';
        if (score >= 50) return 'Zona de Qualidade';
        if (score >= 0) return 'Zona de Aperfeiçoamento';
        return 'Zona Crítica';
    };

    const getScoreBackground = (score: number) => {
        if (score >= 75) return 'bg-green-500';
        if (score >= 50) return 'bg-green-600';
        if (score >= 0) return 'bg-yellow-500';
        return 'bg-red-500';
    }

    // Gauge needle rotation: Map -100 to 100 score to -90deg to 90deg
    const needleRotation = (npsScore / 100) * 90;

    return (
        <div className="max-w-4xl mx-auto">
            <Card glowColor={npsScore >= 50 ? 'green' : npsScore >= 0 ? 'orange' : 'purple'} className="p-8 border-gray-800 bg-black-secondary">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Input Section */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-heading font-semibold mb-2">Simule seu NPS</h3>
                            <p className="text-gray-400 text-sm">Insira a quantidade de respostas para calcular.</p>
                        </div>

                        <div className="space-y-6">
                            {/* Promoters Input */}
                            <div className="relative">
                                <label className="flex items-center justify-between text-sm font-medium mb-2">
                                    <div className="flex items-center gap-2 text-green-400">
                                        <ThumbsUp className="h-4 w-4" />
                                        <span>Promotores (9-10)</span>
                                    </div>
                                    <span className="text-green-400 font-bold">{promoterPct}%</span>
                                </label>
                                <div className="flex gap-4 items-center">
                                    <input
                                        type="number"
                                        min="0"
                                        value={promoters}
                                        onChange={(e) => setPromoters(e.target.value)}
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                                        placeholder="Qtd"
                                    />
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={promoters}
                                    onChange={(e) => setPromoters(e.target.value)}
                                    className="w-full mt-3 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                                />
                            </div>

                            {/* Passives Input */}
                            <div className="relative">
                                <label className="flex items-center justify-between text-sm font-medium mb-2">
                                    <div className="flex items-center gap-2 text-yellow-400">
                                        <Minus className="h-4 w-4" />
                                        <span>Neutros (7-8)</span>
                                    </div>
                                    <span className="text-yellow-400 font-bold">{passivePct}%</span>
                                </label>
                                <div className="flex gap-4 items-center">
                                    <input
                                        type="number"
                                        min="0"
                                        value={passives}
                                        onChange={(e) => setPassives(e.target.value)}
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none"
                                        placeholder="Qtd"
                                    />
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={passives}
                                    onChange={(e) => setPassives(e.target.value)}
                                    className="w-full mt-3 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                                />
                            </div>

                            {/* Detractors Input */}
                            <div className="relative">
                                <label className="flex items-center justify-between text-sm font-medium mb-2">
                                    <div className="flex items-center gap-2 text-red-400">
                                        <AlertTriangle className="h-4 w-4" />
                                        <span>Detratores (0-6)</span>
                                    </div>
                                    <span className="text-red-400 font-bold">{detractorPct}%</span>
                                </label>
                                <div className="flex gap-4 items-center">
                                    <input
                                        type="number"
                                        min="0"
                                        value={detractors}
                                        onChange={(e) => setDetractors(e.target.value)}
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all outline-none"
                                        placeholder="Qtd"
                                    />
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={detractors}
                                    onChange={(e) => setDetractors(e.target.value)}
                                    className="w-full mt-3 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Visualization Section */}
                    <div className="flex flex-col items-center justify-center p-8 bg-black-primary/50 rounded-2xl border border-gray-800 relative overflow-hidden">
                        {/* Background Glow based on score */}
                        <div className={cn(
                            "absolute inset-0 opacity-20 blur-3xl transition-colors duration-500",
                            getScoreBackground(npsScore)
                        )} />

                        <div className="relative z-10 text-center">
                            <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Seu NPS Score</h4>

                            <div className="relative w-64 h-32 mb-4 overflow-hidden">
                                {/* Gauge Arc Background */}
                                <div className="absolute w-64 h-64 rounded-full border-[12px] border-gray-800 box-border top-0 left-0"
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>

                                {/* Gauge Arc Active - Simplified visualization using CSS conic-gradient or SVG would be better, 
                                    but for simplicity using a semi-circle border and calculating color */}
                                <div className={cn("absolute w-64 h-64 rounded-full border-[12px] box-border top-0 left-0 transition-all duration-700 ease-out",
                                    npsScore >= 75 ? "border-green-500" : npsScore >= 0 ? "border-yellow-500" : "border-red-500")}
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>

                                {/* Needle */}
                                <motion.div
                                    className="absolute bottom-0 left-1/2 w-1 h-28 bg-white origin-bottom rounded-full shadow-lg"
                                    initial={{ rotate: -90 }}
                                    animate={{ rotate: needleRotation }}
                                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                                    style={{ marginLeft: '-2px' }}
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                                </motion.div>

                                {/* Center Pivot */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 border-2 border-white rounded-full z-20"></div>
                            </div>

                            <motion.div
                                className={cn("text-6xl font-bold transition-colors duration-300", getScoreColor(npsScore))}
                                key={npsScore}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                            >
                                {npsScore}
                            </motion.div>

                            <div className={cn("text-lg font-medium mt-2 transition-colors duration-300", getScoreColor(npsScore))}>
                                {getZoneLabel(npsScore)}
                            </div>

                            <div className="mt-8 flex gap-4 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div> -100 a -1
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div> 0 a 49
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div> 50 a 100
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm">
                        O cálculo: <span className="text-white font-mono bg-gray-800 px-2 py-1 rounded mx-1">({promoterPct}% - {detractorPct}%) = {npsScore}</span>
                        (Desconsiderando os Neutros)
                    </p>
                </div>
            </Card>
        </div>
    );
};
