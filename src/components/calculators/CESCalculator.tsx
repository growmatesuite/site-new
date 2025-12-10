import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Zap, Activity, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

export const CESCalculator: React.FC = () => {
    // State for inputs (raw counts for each of the 7 levels)
    // 7 = Muito Fácil, 1 = Muito Difícil
    const [level7, setLevel7] = useState<string>('80'); // Muito Fácil
    const [level6, setLevel6] = useState<string>('45'); // Fácil
    const [level5, setLevel5] = useState<string>('30'); // Algo Fácil
    const [level4, setLevel4] = useState<string>('20'); // Neutro
    const [level3, setLevel3] = useState<string>('15'); // Algo Difícil
    const [level2, setLevel2] = useState<string>('10'); // Difícil
    const [level1, setLevel1] = useState<string>('5');  // Muito Difícil

    // Calculated values
    const [cesScore, setCesScore] = useState<number>(0); // 0-100 scale (easiness %)
    const [total, setTotal] = useState<number>(0);

    const calculateCES = () => {
        const l7 = parseInt(level7) || 0;
        const l6 = parseInt(level6) || 0;
        const l5 = parseInt(level5) || 0;
        const l4 = parseInt(level4) || 0;
        const l3 = parseInt(level3) || 0;
        const l2 = parseInt(level2) || 0;
        const l1 = parseInt(level1) || 0;

        const t = l7 + l6 + l5 + l4 + l3 + l2 + l1;
        setTotal(t);

        if (t === 0) {
            setCesScore(0);
            return;
        }

        // CES "Easiness" Formula: % of Positive Responses (5, 6, 7)
        // Some methods use average, but % is more consistent with NPS/CSAT for dashboards
        const positiveResponses = l7 + l6 + l5;
        const score = (positiveResponses / t) * 100;
        setCesScore(Math.round(score));
    };

    useEffect(() => {
        calculateCES();
    }, [level7, level6, level5, level4, level3, level2, level1]);

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-cyan-400';
        if (score >= 50) return 'text-blue-400';
        return 'text-indigo-400';
    };

    const getScoreBackground = (score: number) => {
        if (score >= 80) return 'bg-cyan-500';
        if (score >= 50) return 'bg-blue-500';
        return 'bg-indigo-500';
    }

    const getSentimentLabel = (score: number) => {
        if (score >= 80) return 'Experiência Sem Atrito';
        if (score >= 50) return 'Esforço Moderado';
        return 'Alto Esforço (Risco)';
    };

    // Needles rotation (-90 to 90)
    const needleRotation = (cesScore / 100) * 180 - 90;

    const levels = [
        { val: level7, set: setLevel7, label: '7 - Muito Fácil', color: 'text-cyan-400', rangeColor: 'accent-cyan-500' },
        { val: level6, set: setLevel6, label: '6 - Fácil', color: 'text-cyan-500', rangeColor: 'accent-cyan-600' },
        { val: level5, set: setLevel5, label: '5 - Algo Fácil', color: 'text-blue-400', rangeColor: 'accent-blue-500' },
        { val: level4, set: setLevel4, label: '4 - Neutro', color: 'text-gray-400', rangeColor: 'accent-gray-500' },
        { val: level3, set: setLevel3, label: '3 - Algo Difícil', color: 'text-indigo-400', rangeColor: 'accent-indigo-500' },
        { val: level2, set: setLevel2, label: '2 - Difícil', color: 'text-purple-400', rangeColor: 'accent-purple-500' },
        { val: level1, set: setLevel1, label: '1 - Muito Difícil', color: 'text-pink-400', rangeColor: 'accent-pink-500' },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <Card glowColor={cesScore >= 50 ? 'blue' : 'purple'} className="p-8 border-gray-800 bg-black-secondary">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Input Section */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-heading font-semibold mb-2 flex items-center gap-2">
                                <Zap className="h-5 w-5 text-cyan-400" />
                                Simule seu CES
                            </h3>
                            <p className="text-gray-400 text-sm">Escala de 1 a 7: "A empresa facilitou a resolução do meu problema?"</p>
                        </div>

                        <div className="space-y-3">
                            {levels.map((item, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="flex items-center justify-between mb-1">
                                        <label className={cn("text-xs font-medium uppercase tracking-wider", item.color)}>
                                            {item.label}
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
                                            className="w-16 bg-gray-900 border border-gray-700 rounded-lg px-2 py-1 text-white text-right focus:ring-1 focus:ring-cyan-500 transition-all outline-none text-xs"
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
                            getScoreBackground(cesScore)
                        )} />

                        <div className="relative z-10 text-center flex flex-col items-center">
                            <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-6">Índice de Facilidade</h4>

                            {/* Gauge */}
                            <div className="relative w-56 h-28 mb-6 overflow-hidden">
                                {/* Semi Scale */}
                                <div className="absolute w-56 h-56 rounded-full border-[10px] border-gray-800 box-border top-0 left-0"
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>

                                {/* Active Arc */}
                                <div className={cn("absolute w-56 h-56 rounded-full border-[10px] box-border top-0 left-0 transition-all duration-700 ease-out",
                                    cesScore >= 80 ? "border-cyan-500" : cesScore >= 50 ? "border-blue-500" : "border-indigo-500")}
                                    style={{
                                        clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
                                        transform: `rotate(${cesScore * 1.8 - 180}deg)`,
                                        opacity: 0.3
                                    }}></div>

                                {/* Needle */}
                                <motion.div
                                    className="absolute bottom-0 left-1/2 w-1 h-24 bg-white origin-bottom rounded-full shadow-lg"
                                    initial={{ rotate: -90 }}
                                    animate={{ rotate: needleRotation }}
                                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                                    style={{ marginLeft: '-2px' }}
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                                </motion.div>

                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 border-2 border-white rounded-full z-20"></div>
                            </div>

                            <motion.div
                                className={cn("text-6xl font-bold tracking-tighter transition-colors duration-300", getScoreColor(cesScore))}
                                key={cesScore}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                {cesScore}
                            </motion.div>

                            <div className={cn("text-lg font-medium mt-2 transition-colors duration-300", getScoreColor(cesScore))}>
                                {getSentimentLabel(cesScore)}
                            </div>

                            <div className="mt-8 flex gap-8 items-center text-xs text-gray-400">
                                <div className="flex flex-col items-center">
                                    <Activity className="h-4 w-4 mb-1 text-cyan-500" />
                                    <span>Rápido</span>
                                </div>
                                <div className="w-px h-8 bg-gray-800"></div>
                                <div className="flex flex-col items-center">
                                    <CheckCircle className="h-4 w-4 mb-1 text-blue-500" />
                                    <span>Fácil</span>
                                </div>
                                <div className="w-px h-8 bg-gray-800"></div>
                                <div className="flex flex-col items-center">
                                    <HelpCircle className="h-4 w-4 mb-1 text-indigo-500" />
                                    <span>Intuitivo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm">
                        O cálculo: <span className="text-white font-mono bg-gray-800 px-2 py-1 rounded mx-1 text-xs">% (Notas 5, 6 e 7)</span>
                        focado na proporção de clientes que consideram a interação "Fácil".
                    </p>
                </div>
            </Card>
        </div>
    );
};
