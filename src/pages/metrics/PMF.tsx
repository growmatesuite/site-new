import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PMFCalculator } from '@/components/calculators/PMFCalculator';
import {
    Rocket,
    Heart,
    Flame,
    TrendingUp,
    Users,
    ArrowRight,
    Target,
    Zap,
    Search,
    MessageCircle,
    Globe
} from 'lucide-react';
import ExploreSuite from '@/components/sections/ExploreSuite';
import { WHATSAPP_LINK } from '@/lib/constants';

const benefits = [
    {
        title: 'Crescimento Orgânico',
        description: 'Quando você tem PMF, seus clientes vendem por você.',
        icon: <TrendingUp className="h-6 w-6" />,
        color: 'pink',
        gradient: 'from-pink-500 to-rose-400'
    },
    {
        title: 'Retenção Máxima',
        description: 'Produtos indispensáveis têm churn próximo de zero.',
        icon: <Heart className="h-6 w-6" />,
        color: 'pink',
        gradient: 'from-pink-500 to-rose-400'
    },
    {
        title: 'Escalabilidade',
        description: 'Só invista pesado em marketing depois de atingir o PMF.',
        icon: <Rocket className="h-6 w-6" />,
        color: 'pink',
        gradient: 'from-pink-500 to-rose-400'
    },
    {
        title: 'Custo de Aquisição',
        description: 'CAC cai drasticamente quando o mercado puxa seu produto.',
        icon: <Zap className="h-6 w-6" />,
        color: 'pink',
        gradient: 'from-pink-500 to-rose-400'
    },
    {
        title: 'Vantagem Competitiva',
        description: 'É difícil copiar um produto que os usuários amam.',
        icon: <Target className="h-6 w-6" />,
        color: 'pink',
        gradient: 'from-pink-500 to-rose-400'
    },
    {
        title: 'Valuation',
        description: 'Investidores buscam sinais claros de Product-Market Fit.',
        icon: <Globe className="h-6 w-6" />,
        color: 'pink',
        gradient: 'from-pink-500 to-rose-400'
    }
];

const faqs = [
    {
        question: 'O que é a regra dos 40%?',
        answer: 'Sean Ellis descobriu que se 40% ou mais dos seus usuários ficariam "muito decepcionados" sem seu produto, você tem PMF.'
    },
    {
        question: 'Devo medir PMF no lançamento?',
        answer: 'Não. Espere ter usuários ativos recorrentes que já experimentaram o valor central do produto.'
    },
    {
        question: 'O que fazer se o score for baixo?',
        answer: 'Foque nos usuários que disseram "muito decepcionado" e entenda o que eles amam. Melhore o produto para atrair mais pessoas como eles.'
    },
    {
        question: 'PMF é permanente?',
        answer: 'Não. Mercados mudam e concorrentes surgem. Você precisa monitorar e evoluir constantemente para manter o fit.'
    }
];

export default function PMF() {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <Helmet>
                <title>PMF (Product-Market Fit) | Calculadora e Guia | Growmate</title>
                <meta name="description" content="Descubra se você tem Product-Market Fit usando o teste de Sean Ellis. A métrica #1 para startups em crescimento." />
            </Helmet>

            <div className="min-h-screen bg-black text-white overflow-hidden">
                <Header />

                {/* Hero Section */}
                <section className="relative py-32 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-black to-rose-900/20"
                        style={{ y: backgroundY }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(236,72,153,0.15),transparent_40%)]" />

                    <Container size="lg" className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-3 bg-pink-900/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-pink-500/30">
                                <Flame className="h-5 w-5 text-pink-500" />
                                <span className="text-sm font-medium text-pink-200">O motor do crescimento exponencial</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                                Crie algo que as pessoas <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">simplesmente amam</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                                Product-Market Fit é quando o produto satisfaz uma forte demanda de mercado. É a diferença entre lutar por cada usuário e ter um crescimento explosivo.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 mb-12">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="lg" className="border-pink-500/50 hover:bg-pink-500/10 text-pink-400">
                                        Testar meu Produto
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 max-w-4xl mx-auto">
                                <div className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-pink-500" />
                                    <span>Sean Ellis Test</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Rocket className="h-5 w-5 text-pink-500" />
                                    <span>Escala Acelerada</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Heart className="h-5 w-5 text-pink-500" />
                                    <span>Lealdade Extrema</span>
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
                                Calculadora de <span className="text-pink-500">PMF</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Use a metodologia padrão da indústria para validar se seu produto está pronto para escalar.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <PMFCalculator />
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
                                    A única métrica <br />
                                    <span className="text-pink-500">que importa agora</span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-6">
                                    "A vida de uma startup pode ser dividida em duas partes: antes do Product-Market Fit e depois do Product-Market Fit." — Marc Andreessen
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-6 p-4 rounded-xl bg-pink-900/10 border border-pink-500/20">
                                        <div className="bg-pink-500/20 p-3 rounded-full text-pink-500">
                                            <Heart className="h-8 w-8 fill-current" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-pink-500 text-lg">Indispensável (40%+)</h4>
                                            <p className="text-sm text-gray-400">Usuários ficariam "muito decepcionados" sem você. Sinal verde para crescer.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 p-4 rounded-xl bg-gray-800/30 border border-gray-700">
                                        <div className="bg-gray-700 p-3 rounded-full text-gray-400">
                                            <Search className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-300 text-lg">Em Busca (&lt; 40%)</h4>
                                            <p className="text-sm text-gray-400">Ainda não escale. Foque em iterar o produto ouvindo seus usuários amantes.</p>
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
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 blur-3xl rounded-full" />
                                <Card glowColor="pink" className="relative p-8 border-gray-700 bg-black-secondary">
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold mb-2">O Poder do PMF</h3>
                                        <div className="w-16 h-1 bg-pink-500 mx-auto rounded-full"></div>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-white mb-1">3x</div>
                                            <p className="text-sm text-pink-300">Crescimento anual de empresas com PMF forte.</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-white mb-1">Viral</div>
                                            <p className="text-sm text-pink-300">O produto se vende sozinho através de recomendações apaixonadas.</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-white mb-1">Retenção</div>
                                            <p className="text-sm text-pink-300">A curva de retenção se estabiliza (sorriso) em vez de cair para zero.</p>
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
                                Por que buscar o <span className="text-pink-500">Fit?</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Não é apenas sobre ter um bom produto, é sobre ter o produto certo para o mercado certo.
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
                                Dúvidas <span className="text-pink-500">frequentes</span>
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
                                    <Card glowColor="pink" className="p-6 h-full">
                                        <h3 className="text-lg font-semibold mb-3 text-pink-400">
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
