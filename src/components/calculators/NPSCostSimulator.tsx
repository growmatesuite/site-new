import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import {
    Calculator,
    DollarSign,
    Mail,
    Percent,
    Briefcase,
    TrendingDown,
    TrendingUp,
    AlertCircle
} from 'lucide-react';
import { cn } from '../../lib/utils';

export const NPSCostSimulator: React.FC = () => {
    // State for inputs
    const [monthlySends, setMonthlySends] = useState<string>('1000');
    const [monthlyFee, setMonthlyFee] = useState<string>('299');
    const [setupFee, setSetupFee] = useState<string>('500');
    const [responseRate, setResponseRate] = useState<number>(15);

    // Calculated values
    const [estimatedResponses, setEstimatedResponses] = useState<number>(0);
    const [totalMonthlyCost, setTotalMonthlyCost] = useState<number>(0);
    const [costPerResponse, setCostPerResponse] = useState<number>(0);

    const calculateCost = () => {
        const sends = parseInt(monthlySends) || 0;
        const fee = parseFloat(monthlyFee) || 0;
        const setup = parseFloat(setupFee) || 0;
        const rate = responseRate || 0;

        // Calculate expected responses
        const responses = Math.floor(sends * (rate / 100));
        setEstimatedResponses(responses);

        // Calculate total monthly cost (amortizing setup over 12 months)
        const amortizedSetup = setup / 12;
        const monthlyTotal = fee + amortizedSetup;
        setTotalMonthlyCost(monthlyTotal);

        // Calculate cost per response
        if (responses > 0) {
            setCostPerResponse(monthlyTotal / responses);
        } else {
            setCostPerResponse(0);
        }
    };

    useEffect(() => {
        calculateCost();
    }, [monthlySends, monthlyFee, setupFee, responseRate]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <Card glowColor="blue" className="p-8 border-gray-800 bg-black-secondary">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Input Section */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                    <Calculator className="h-5 w-5 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-heading font-semibold">Simulador de Investimento</h3>
                            </div>
                            <p className="text-gray-400 text-sm">Descubra quanto custará cada feedback recebido.</p>
                        </div>

                        <div className="space-y-6">
                            {/* Monthly Sends Input */}
                            <div className="relative">
                                <label className="flex items-center gap-2 text-sm font-medium mb-2 text-gray-300">
                                    <Mail className="h-4 w-4 text-blue-400" />
                                    Volume de Envios Mensais
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    value={monthlySends}
                                    onChange={(e) => setMonthlySends(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                    placeholder="Ex: 1000"
                                />
                            </div>

                            {/* Monthly Fee Input */}
                            <div className="relative">
                                <label className="flex items-center gap-2 text-sm font-medium mb-2 text-gray-300">
                                    <DollarSign className="h-4 w-4 text-green-400" />
                                    Mensalidade da Plataforma (R$)
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    value={monthlyFee}
                                    onChange={(e) => setMonthlyFee(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                                    placeholder="Ex: 299.00"
                                />
                            </div>

                            {/* Setup Fee Input */}
                            <div className="relative">
                                <label className="flex items-center gap-2 text-sm font-medium mb-2 text-gray-300">
                                    <Briefcase className="h-4 w-4 text-purple-400" />
                                    Investimento em Setup (R$)
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    value={setupFee}
                                    onChange={(e) => setSetupFee(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                                    placeholder="Ex: 500.00"
                                />
                                <p className="text-xs text-gray-500 mt-1">*Amortizado em 12 meses no cálculo</p>
                            </div>

                            {/* Response Rate Slider */}
                            <div className="relative pt-2">
                                <label className="flex items-center justify-between text-sm font-medium mb-2">
                                    <div className="flex items-center gap-2 text-yellow-400">
                                        <Percent className="h-4 w-4" />
                                        <span>Taxa de Resposta Estimada</span>
                                    </div>
                                    <span className="text-yellow-400 font-bold">{responseRate}%</span>
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value={responseRate}
                                    onChange={(e) => setResponseRate(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                                />
                                <div className="flex justify-between text-xs text-gray-600 mt-1">
                                    <span>1%</span>
                                    <span>50%</span>
                                    <span>100%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="flex flex-col h-full">
                        <div className="bg-black-primary/50 rounded-2xl border border-gray-800 p-6 flex-1 flex flex-col justify-center relative overflow-hidden">
                            {/* Ambient Glow */}
                            <div className="absolute inset-0 bg-blue-500/5 blur-3xl" />

                            <div className="relative z-10 space-y-8">
                                <div className="text-center">
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Respostas Esperadas</p>
                                    <div className="text-3xl font-bold text-white">
                                        {estimatedResponses.toLocaleString('pt-BR')}
                                        <span className="text-sm font-normal text-gray-500 ml-2">/mês</span>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-gray-800" />

                                <div className="text-center">
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Custo Efetivo por Resposta</p>
                                    <motion.div
                                        key={costPerResponse}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400"
                                    >
                                        {formatCurrency(costPerResponse)}
                                    </motion.div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Baseado no custo mensal total de {formatCurrency(totalMonthlyCost)}
                                    </p>
                                </div>

                                <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-4">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                                        <div>
                                            <h4 className="text-sm font-semibold text-blue-300 mb-1">Por que isso importa?</h4>
                                            <p className="text-xs text-blue-200/70 leading-relaxed">
                                                Muitas ferramentas cobram por envio, mas o valor real está nas respostas.
                                                Entender seu custo por resposta ajuda a calcular o ROI exato do seu programa de CX.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};
