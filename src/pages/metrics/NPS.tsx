import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NPSCalculator } from '@/components/calculators/NPSCalculator';
import { NPSCostSimulator } from '@/components/calculators/NPSCostSimulator';
import {
    TrendingUp,
    Users,
    Target,
    BarChart3,
    Brain,
    Zap,
    ArrowRight,
    CheckCircle,
    Clock,
    Shield,
    MessageCircle,
    Award,
    ThumbsUp,
    AlertTriangle,
    Minus,
    Smartphone,
    Globe,
    Activity
} from 'lucide-react';
import ExploreSuite from '@/components/sections/ExploreSuite';
import { WHATSAPP_LINK } from '@/lib/constants';

const metrics = [
    {
        title: 'Satisfação do Cliente',
        description: 'Entenda se seus clientes estão felizes com seu produto ou serviço.',
        icon: <ThumbsUp className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400'
    },
    {
        title: 'Lealdade de Marca',
        description: 'Identifique quem são os defensores da sua marca no mercado.',
        icon: <Award className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400'
    },
    {
        title: 'Retenção (Churn)',
        description: 'Preveja e evite cancelamentos antes que eles aconteçam.',
        icon: <Shield className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-violet-400'
    },
    {
        title: 'Benchmarking',
        description: 'Compare seu desempenho com os líderes do seu setor.',
        icon: <BarChart3 className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400'
    },
    {
        title: 'Feedbacks Qualitativos',
        description: 'Vá além da nota e entenda os "porquês" com análise de texto.',
        icon: <MessageCircle className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400'
    },
    {
        title: 'Predição de Receita',
        description: 'Correlacione a satisfação dos clientes com o crescimento financeiro.',
        icon: <TrendingUp className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400'
    }
];

const faqs = [
    {
        question: 'O que é uma boa nota de NPS?',
        answer: 'Geralmente, acima de 50 é excelente e acima de 75 é classe mundial. Porém, varia muito por indústria.'
    },
    {
        question: 'Com que frequência devo medir?',
        answer: 'Recomendamos pesquisas trimestrais para B2B e transacionais (após compra/atendimento) para B2C.'
    },
    {
        question: 'Como aumentar meu NPS?',
        answer: 'Focando no "Fechamento do Loop": tratando detratores rapidamente e ativando promotores para indicações.'
    },
    {
        question: 'Posso usar NPS junto com CSAT?',
        answer: 'Sim! NPS mede lealdade (longo prazo) e CSAT mede satisfação pontual (curto prazo). São complementares.'
    }
];

export default function NPS() {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);


    return (
        <>
            <Helmet>
                <title>NPS (Net Promoter Score) | Calculadora e Guia | Growmate</title>
                <meta name="description" content="Tudo sobre NPS (Net Promoter Score). Use nossa calculadora interativa e descubra como medir a lealdade dos seus clientes." />
            </Helmet>

            <div className="min-h-screen bg-black text-white overflow-hidden">
                <Header />

                {/* Hero Section */}
                <section className="relative py-32 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-purple-700/30"
                        style={{ y: backgroundY }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.25),transparent_50%)]" />

                    <Container size="lg" className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-3 bg-purple-900/30 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-purple-500/30">
                                <TrendingUp className="h-5 w-5 text-purple-400" />
                                <span className="text-sm font-medium text-purple-200">A Métrica Definitiva de Lealdade</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                                Transforme clientes em <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">fãs da sua marca</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                                Net Promoter Score (NPS) é o padrão global para medir lealdade e prever crescimento.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 mb-12">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="lg">
                                        Começar a Medir
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 max-w-4xl mx-auto">
                                <div className="flex items-center gap-2">
                                    <Brain className="h-5 w-5 text-purple-400" />
                                    <span>Análise com IA</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="h-5 w-5 text-purple-400" />
                                    <span>Multicanal</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Activity className="h-5 w-5 text-purple-400" />
                                    <span>Resultados Reais</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-purple-400" />
                                    <span>Dados Seguros</span>
                                </div>
                            </div>
                        </motion.div>
                    </Container>
                </section>

                {/* Calculator Section */}
                <section className="py-20 bg-black-secondary/50 relative border-y border-gray-900">
                    <Container size="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                                Calculadora de <span className="text-purple-400">NPS</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Faça uma simulação rápida: insira o número de clientes em cada categoria e descubra seu score.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <NPSCalculator />
                        </motion.div>
                    </Container>
                </section>

                {/* Cost Simulator Section */}
                <section className="py-20 bg-black-secondary/30 relative border-b border-gray-900">
                    <Container size="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                                Quanto custa <span className="text-blue-400">ouvir seu cliente?</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Entenda o retorno sobre o investimento (ROI) e o custo real de cada feedback coletado.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <NPSCostSimulator />
                        </motion.div>
                    </Container>
                </section>

                {/* Methodology Section */}
                <section className="py-20">
                    <Container size="lg">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                    A pergunta certa no <br />
                                    <span className="text-purple-400">momento certo</span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-6">
                                    "Em uma escala de 0 a 10, o quanto você recomendaria a [Sua Empresa] para um amigo?"
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-green-900/10 border border-green-500/20">
                                        <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                                            <ThumbsUp className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-green-400 text-lg">Promotores (9-10)</h4>
                                            <p className="text-sm text-gray-400">Seus clientes mais leais. Compram mais, ficam mais tempo e indicam novos clientes.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-yellow-900/10 border border-yellow-500/20">
                                        <div className="bg-yellow-500/20 p-2 rounded-lg text-yellow-400">
                                            <Minus className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-yellow-400 text-lg">Neutros (7-8)</h4>
                                            <p className="text-sm text-gray-400">Satisfeitos mas vulneráveis à concorrência. Não ajudam a crescer sua marca.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-red-900/10 border border-red-500/20">
                                        <div className="bg-red-500/20 p-2 rounded-lg text-red-400">
                                            <AlertTriangle className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-red-400 text-lg">Detratores (0-6)</h4>
                                            <p className="text-sm text-gray-400">Insatisfeitos. Podem prejudicar sua marca com boca a boca negativo.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-full" />
                                <Card glowColor="purple" className="relative p-8 border-gray-700">
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold mb-2">Por que medir NPS?</h3>
                                        <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-white mb-1">2x</div>
                                            <p className="text-sm text-purple-300">Mais valor no ciclo de vida (LTV) de um Promotor vs Detrator</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-white mb-1">5x</div>
                                            <p className="text-sm text-purple-300">Mais barato reter um cliente do que adquirir um novo</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-white mb-1">Word of Mouth</div>
                                            <p className="text-sm text-purple-300">80% do crescimento vem de indicações</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
                    </Container>
                </section>

                {/* Metrics Grid */}
                <section className="py-20 bg-black-secondary/30">
                    <Container size="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                Muito além de <span className="text-purple-400">uma nota</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Transforme dados em estratégias de crescimento com nossa plataforma
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {metrics.map((metric, index) => (
                                <motion.div
                                    key={metric.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Card
                                        glowColor={metric.color as any}
                                        hoverable
                                        className="h-full group"
                                    >
                                        <div className="p-8">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`p-3 bg-gradient-to-r ${metric.gradient} rounded-xl text-white group-hover:scale-110 transition-transform`}>
                                                    {metric.icon}
                                                </div>
                                                <h3 className="text-xl font-semibold">{metric.title}</h3>
                                            </div>
                                            <p className="text-gray-300 leading-relaxed">{metric.description}</p>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* FAQ Section */}
                <section className="py-20">
                    <Container size="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                Dúvidas <span className="text-purple-400">frequentes</span>
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card glowColor="purple" className="p-6 h-full">
                                        <h3 className="text-lg font-semibold mb-3 text-purple-300">
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </section>

                <ExploreSuite />

                <Footer />
            </div>
        </>
    );
}
