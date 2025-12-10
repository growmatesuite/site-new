import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CESCalculator } from '@/components/calculators/CESCalculator';
import {
    Zap,
    Clock,
    Target,
    BarChart3,
    Brain,
    ArrowRight,
    CheckCircle,
    Activity,
    Layers,
    Smile,
    Shield,
    Users
} from 'lucide-react';
import ExploreSuite from '@/components/sections/ExploreSuite';
import { WHATSAPP_LINK } from '@/lib/constants';

const benefits = [
    {
        title: 'Redução de Atrito',
        description: 'Identifique onde seu cliente tem dificuldade e simplifique processos.',
        icon: <Layers className="h-6 w-6" />,
        color: 'cyan',
        gradient: 'from-cyan-500 to-blue-400'
    },
    {
        title: 'Previsão de Lealdade',
        description: 'Experiências fáceis geram lealdade maior do que experiências "encantadoras".',
        icon: <Target className="h-6 w-6" />,
        color: 'cyan',
        gradient: 'from-cyan-500 to-blue-400'
    },
    {
        title: 'Eficiência Operacional',
        description: 'Reduza o tempo de atendimento e custos de suporte.',
        icon: <Clock className="h-6 w-6" />,
        color: 'cyan',
        gradient: 'from-cyan-500 to-blue-400'
    },
    {
        title: 'Aumento de Conversão',
        description: 'Checkouts e formulários mais simples convertem muito mais.',
        icon: <Zap className="h-6 w-6" />,
        color: 'cyan',
        gradient: 'from-cyan-500 to-blue-400'
    },
    {
        title: 'Menor Custo de Serviço',
        description: 'Clientes que resolvem problemas sozinhos (self-service) custam menos.',
        icon: <BarChart3 className="h-6 w-6" />,
        color: 'cyan',
        gradient: 'from-cyan-500 to-blue-400'
    },
    {
        title: 'Experiência do Usuário',
        description: 'Melhore a usabilidade do seu site, app ou produto.',
        icon: <Brain className="h-6 w-6" />,
        color: 'cyan',
        gradient: 'from-cyan-500 to-blue-400'
    }
];

const faqs = [
    {
        question: 'O que é Customer Effort Score?',
        answer: 'CES é uma métrica que avalia o "nível de esforço" que um cliente teve para resolver um problema, comprar um produto ou interagir com sua empresa.'
    },
    {
        question: 'Quando devo usar o CES?',
        answer: 'O ideal é enviar logo após uma interação específica, como fechar um ticket de suporte, finalizar uma compra ou usar uma nova funcionalidade.'
    },
    {
        question: 'CES substitui o NPS?',
        answer: 'Não. O CES é tático (mede atrito em processos específicos), enquanto o NPS é estratégico (mede lealdade geral). Eles se complementam.'
    },
    {
        question: 'Qual a escala ideal?',
        answer: 'A escala padrão moderna (CES 2.0) vai de 1 (Muito Difícil) a 7 (Muito Fácil), permitindo maior precisão na análise.'
    }
];

export default function CES() {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <Helmet>
                <title>CES (Customer Effort Score) | Calculadora e Guia | Growmate</title>
                <meta name="description" content="Domine o CES (Customer Effort Score). Descubra como reduzir o atrito na jornada do cliente e aumentar a lealdade com experiências simples." />
            </Helmet>

            <div className="min-h-screen bg-black text-white overflow-hidden">
                <Header />

                {/* Hero Section */}
                <section className="relative py-32 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20"
                        style={{ y: backgroundY }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_40%)]" />

                    <Container size="lg" className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-3 bg-cyan-900/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-cyan-500/30">
                                <Zap className="h-5 w-5 text-cyan-400" />
                                <span className="text-sm font-medium text-cyan-200">Simplifique a Jornada</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                                Menos esforço, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">mais resultados</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                                (CES) Customer Effort Score mede a facilidade de interação com sua marca. Porque o melhor serviço é aquele que não dá trabalho.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 mb-12">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="lg" className="border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400">
                                        Reduzir Atrito
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 max-w-4xl mx-auto">
                                <div className="flex items-center gap-2">
                                    <Activity className="h-5 w-5 text-cyan-400" />
                                    <span>Agilidade</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Layers className="h-5 w-5 text-cyan-400" />
                                    <span>Processos Simples</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-cyan-400" />
                                    <span>Resolução Rápida</span>
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
                                Calculadora de <span className="text-cyan-400">CES</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Identifique se seus processos estão jogando a favor ou contra sua empresa.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <CESCalculator />
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
                                    A pergunta que define <br />
                                    <span className="text-cyan-400">a fluidez</span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-6">
                                    "A empresa tornou fácil para mim resolver meu problema?"
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-6 p-4 rounded-xl bg-cyan-900/10 border border-cyan-500/20">
                                        <div className="bg-cyan-500/20 p-3 rounded-full text-cyan-400">
                                            <CheckCircle className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-cyan-400 text-lg">Baixo Esforço (5-7)</h4>
                                            <p className="text-sm text-gray-400">Experiência fluida. O cliente resolveu o que precisava sem barreiras.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 p-4 rounded-xl bg-indigo-900/10 border border-indigo-500/20">
                                        <div className="bg-indigo-500/20 p-3 rounded-full text-indigo-400">
                                            <Layers className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-indigo-400 text-lg">Esforço Moderado (4)</h4>
                                            <p className="text-sm text-gray-400">Processo funcional, mas burocrático ou com etapas desnecessárias.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 p-4 rounded-xl bg-pink-900/10 border border-pink-500/20">
                                        <div className="bg-pink-500/20 p-3 rounded-full text-pink-400">
                                            <Target className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-pink-400 text-lg">Alto Esforço (1-3)</h4>
                                            <p className="text-sm text-gray-400">Fricção total. O cliente teve que repetir informações ou fazer muito esforço.</p>
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
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full" />
                                <Card glowColor="blue" className="relative p-8 border-gray-700 bg-black-secondary">
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold mb-2">Por que CES importa?</h3>
                                        <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-white mb-1">94%</div>
                                            <p className="text-sm text-cyan-300">Dos clientes com interações de "baixo esforço" recompram da empresa.</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-white mb-1">81%</div>
                                            <p className="text-sm text-cyan-300">Dos clientes com "alto esforço" espalham boca a boca negativo.</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-white mb-1">Custo</div>
                                            <p className="text-sm text-cyan-300">Interações de alto esforço aumentam custos operacionais em até 37%.</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
                    </Container>
                </section>

                {/* Benefits Grid */}
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
                                Benefícios de <span className="text-cyan-400">Simplificar</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Transforme a facilidade em sua maior vantagem competitiva.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Card
                                        glowColor={benefit.color as any}
                                        hoverable
                                        className="h-full group"
                                    >
                                        <div className="p-8">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`p-3 bg-gradient-to-r ${benefit.gradient} rounded-xl text-white group-hover:scale-110 transition-transform`}>
                                                    {benefit.icon}
                                                </div>
                                                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                                            </div>
                                            <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
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
                                Dúvidas <span className="text-cyan-400">frequentes</span>
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
                                    <Card glowColor="cyan" className="p-6 h-full">
                                        <h3 className="text-lg font-semibold mb-3 text-cyan-300">
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
