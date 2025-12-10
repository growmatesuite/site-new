import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CSATCalculator } from '@/components/calculators/CSATCalculator';
import {
    Heart,
    Star,
    MessageSquare,
    Zap,
    ArrowRight,
    TrendingUp,
    Shield,
    Users,
    CheckCircle,
    Activity,
    Smile,
    Meh,
    Frown
} from 'lucide-react';
import ExploreSuite from '@/components/sections/ExploreSuite';
import { WHATSAPP_LINK } from '@/lib/constants';

const metrics = [
    {
        title: 'Net Promoter Score',
        description: 'Mensure a lealdade de longo prazo dos seus clientes.',
        icon: <TrendingUp className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400',
        path: '/nps'
    },
    {
        title: 'Customer Effort Score',
        description: 'Avalie a facilidade de uso do seu produto ou serviço.',
        icon: <Zap className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400',
        path: '/ces'
    },
    {
        title: 'Indicadores de Qualidade',
        description: 'Monitore SLA, FCR (First Contact Resolution) e outros KPIs.',
        icon: <Activity className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-violet-400'
    },
    {
        title: 'Voice of Customer',
        description: 'Programas estruturados para ouvir a voz do cliente em todos os canais.',
        icon: <MessageSquare className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400'
    },
    {
        title: 'Retenção e Churn',
        description: 'Estratégias baseadas em dados para manter seus clientes.',
        icon: <Shield className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400'
    },
    {
        title: 'Customer Lifetime Value',
        description: 'Maximize o valor gerado por cada cliente ao longo do tempo.',
        icon: <Users className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400'
    }
];

const faqs = [
    {
        question: 'Qual a diferença entre CSAT e NPS?',
        answer: 'CSAT mede a satisfação de uma interação específica (curto prazo), enquanto NPS mede a lealdade geral com a marca (longo prazo).'
    },
    {
        question: 'Quando devo enviar o CSAT?',
        answer: 'Imediatamente após uma interação, como um atendimento de suporte, uma compra ou a finalização de um projeto.'
    },
    {
        question: 'Qual é um bom score de CSAT?',
        answer: 'Geralmente, benchmarks de mercado consideram pontuações acima de 75-80% como excelentes.'
    },
    {
        question: 'Devo usar escala de 1-5 ou 1-10?',
        answer: 'A escala de 1-5 (estrelas ou emoticons) é a mais comum para CSAT por ser rápida e intuitiva para o cliente.'
    }
];

export default function CSAT() {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <Helmet>
                <title>CSAT (Customer Satisfaction Score) | Calculadora e Guia | Growmate</title>
                <meta name="description" content="Domine o CSAT (Customer Satisfaction Score). Use nossa calculadora interativa e aprenda a medir a satisfação dos seus clientes em tempo real." />
            </Helmet>

            <div className="min-h-screen bg-black text-white overflow-hidden">
                <Header />

                {/* Hero Section */}
                <section className="relative py-32 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-purple-900/20"
                        style={{ y: backgroundY }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,197,94,0.15),transparent_40%)]" />

                    <Container size="lg" className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-3 bg-green-900/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-green-500/30">
                                <Heart className="h-5 w-5 text-green-400" />
                                <span className="text-sm font-medium text-green-200">Experiência do Cliente em Tempo Real</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                                Clientes felizes <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">crescem com você</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                                (CSAT) Customer Satisfaction Score é a medida exata da felicidade do seu cliente em cada interação.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 mb-12">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="lg" className="border-green-500/50 hover:bg-green-500/10 text-green-400">
                                        Monitorar Satisfação
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 max-w-4xl mx-auto">
                                <div className="flex items-center gap-2">
                                    <Zap className="h-5 w-5 text-green-400" />
                                    <span>Feedback Instantâneo</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="h-5 w-5 text-green-400" />
                                    <span>Avaliação 5 Estrelas</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Activity className="h-5 w-5 text-green-400" />
                                    <span>Correção Rápida</span>
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
                                Calculadora de <span className="text-green-400">CSAT</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Descubra o índice de satisfação do seu negócio simulando a distribuição de avaliações.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <CSATCalculator />
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
                                    Entenda os <br />
                                    <span className="text-green-400">níveis de satisfação</span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-6">
                                    "Como você avaliaria a sua satisfação com o nosso serviço hoje?"
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-6 p-4 rounded-xl bg-green-900/10 border border-green-500/20">
                                        <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                                            <Smile className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-green-400 text-lg">Satisfeitos (4-5)</h4>
                                            <p className="text-sm text-gray-400">Cliente teve suas expectativas atendidas ou superadas. Experiência sem atrito.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 p-4 rounded-xl bg-yellow-900/10 border border-yellow-500/20">
                                        <div className="bg-yellow-500/20 p-3 rounded-full text-yellow-400">
                                            <Meh className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-yellow-400 text-lg">Indiferentes (3)</h4>
                                            <p className="text-sm text-gray-400">O serviço funcionou, mas não encantou. Risco de churn se houver opção melhor.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 p-4 rounded-xl bg-red-900/10 border border-red-500/20">
                                        <div className="bg-red-500/20 p-3 rounded-full text-red-400">
                                            <Frown className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-red-400 text-lg">Insatisfeitos (1-2)</h4>
                                            <p className="text-sm text-gray-400">Problemas não resolvidos ou experiência frustrante. Requer ação imediata.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </section>

                {/* Much More Than a Score Section (New) */}
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
                                Muito além de <span className="text-green-400">uma nota</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Porque monitorar a satisfação é estratégico para o seu negócio
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <motion.div whileHover={{ y: -5 }} className="h-full">
                                <Card glowColor="green" className="p-8 h-full bg-black-secondary border-green-900/30">
                                    <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-6 text-green-400">
                                        <TrendingUp className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Retenção de Clientes</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Identifique clientes insatisfeitos antes que eles saiam. Reduza o churn agindo proativamente nos feedbacks negativos.
                                    </p>
                                </Card>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="h-full">
                                <Card glowColor="green" className="p-8 h-full bg-black-secondary border-green-900/30">
                                    <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-6 text-green-400">
                                        <MessageSquare className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Feedback Loop</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Crie um canal direto de escuta. Entenda exatamente onde seu produto ou serviço precisa melhorar.
                                    </p>
                                </Card>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="h-full">
                                <Card glowColor="green" className="p-8 h-full bg-black-secondary border-green-900/30">
                                    <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-6 text-green-400">
                                        <Star className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Reputação de Marca</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Experiências positivas geram promotores. Clientes felizes atraem novos clientes organicamente.
                                    </p>
                                </Card>
                            </motion.div>
                        </div>
                    </Container>
                </section>

                <ExploreSuite />

                <Footer />
            </div>
        </>
    );
}
