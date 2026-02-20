import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ExploreSuite from '@/components/sections/ExploreSuite';
import {
    ShieldCheck,
    Zap,
    Lock,
    Server,
    AlertTriangle,
    CheckCircle,
    Smartphone,
    TrendingUp,
    MessageSquare,
    Globe,
    Award,
    RefreshCw,
    Users,
    LayoutDashboard
} from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

const benefits = [
    {
        title: 'Zero Risco de Banimento',
        description: 'Blinde sua operação. Com a API Oficial Business, você opera 100% dentro das regras da Meta, sem o medo constante de perder seu número.',
        icon: <ShieldCheck className="h-6 w-6" />,
        color: 'green'
    },
    {
        title: 'Alta Entregabilidade',
        description: 'Pare de perder vendas por mensagens não entregues. Nossa infraestrutura garante que sua oferta chegue na mão do cliente.',
        icon: <MessageSquare className="h-6 w-6" />,
        color: 'green'
    },
    {
        title: 'Selo de Verificação',
        description: 'Passe credibilidade instantânea. Com a API Oficial, sua empresa pode solicitar o cobiçado selo verde de verificação.',
        icon: <CheckCircle className="h-6 w-6" />,
        color: 'green'
    },
    {
        title: 'Escalabilidade Real',
        description: 'Envie campanhas para milhares de contatos sem travar seu celular. A API foi feita para aguentar o tranco de grandes operações.',
        icon: <TrendingUp className="h-6 w-6" />,
        color: 'green'
    }
];

const coexFeatures = [
    {
        title: 'O Melhor dos Dois Mundos',
        description: 'Seus vendedores continuam usando o app do WhatsApp que já amam, enquanto você ganha controle total.',
        icon: <RefreshCw className="h-6 w-6 text-purple-400" />
    },
    {
        title: 'Gestão Centralizada',
        description: 'O gestor visualiza todas as conversas de todos os números em um único painel administrativo.',
        icon: <LayoutDashboard className="h-6 w-6 text-purple-400" />
    },
    {
        title: 'Sem Curva de Aprendizado',
        description: 'Como a equipe continua no app nativo, não há necessidade de treinamentos complexos ou resistência à mudança.',
        icon: <Smartphone className="h-6 w-6 text-purple-400" />
    }
];

const painPoints = [
    {
        problem: 'O Pesadelo do Banimento',
        description: 'Acordar e ver seu número principal banido é o fim da sua operação de vendas. Não corra esse risco.',
        icon: <AlertTriangle className="h-5 w-5 text-red-500" />
    },
    {
        problem: 'Caixa Preta',
        description: 'Sem a API oficial, você não sabe se seus vendedores estão respondendo ou se as mensagens estão chegando.',
        icon: <AlertTriangle className="h-5 w-5 text-red-500" />
    },
    {
        problem: 'Conexão Instável',
        description: 'Depender de QR Codes que desconectam toda hora faz sua equipe perder tempo e vendas.',
        icon: <AlertTriangle className="h-5 w-5 text-red-500" />
    }
];

const faqs = [
    {
        question: 'O que é o modo Coexistence (COEX)?',
        answer: 'É uma nova tecnologia da Meta que permite que sua empresa use a API Oficial (para gestão, bots e métricas) E o aplicativo do WhatsApp Business no celular simultaneamente. É a liberdade do app com a potência da API.'
    },
    {
        question: 'Por que não usar ferramentas "baratas" não oficiais?',
        answer: 'O barato sai caro. Ferramentas não oficiais (baseadas em emuladores) são instáveis e violam os termos da Meta, levando ao banimento do seu número. A GrowConnect oferece segurança e estabilidade profissional.'
    },
    {
        question: 'Posso migrar meu número atual?',
        answer: 'Sim! Fazemos a portabilidade do seu número atual para a API Oficial com total segurança, preservando seu ativo mais importante.'
    },
    {
        question: 'Serve para times de vendas?',
        answer: 'Perfeito para isso. Com o COEX, seu time vende pelo celular como sempre fez, e você monitora tudo pelo painel. Sem atrito, com total controle.'
    }
];

export default function GrowCOEX() {
    return (
        <>
            <Helmet>
                <title>GrowCOEX - API Oficial + WhatsApp App | Aumente suas Vendas</title>
                <meta name="description" content="A revolução do atendimento: Use a API Oficial da Meta mantendo o WhatsApp Business no celular. Gestão total para você, liberdade para sua equipe. Sem banimentos." />
            </Helmet>

            <div className="min-h-screen bg-black text-white">
                <Header />

                {/* Hero Section - Conversion Focused */}
                <section className="relative py-32 overflow-hidden">
                    {/* Dynamic background with brand colors */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-purple-900/20"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-green-500/10 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/10 blur-[100px] rounded-full"></div>

                    <Container size="lg" className="relative z-10">


                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/10 hover:border-green-500/50 transition-colors">
                                <Award className="h-4 w-4 text-green-500" />
                                <span className="text-sm font-medium text-gray-200">Parceiro Tech Provider Oficial Meta</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
                                Controle Total <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Sem Mudar a Rotina</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                                A única solução que une a <strong>potência da API Oficial</strong> com a <strong>praticidade do App</strong> no celular.
                                <br />Venda mais, sem risco de banimento e com gestão absoluta.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    <Button variant="whatsapp" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-lg shadow-green-900/20">
                                        Quero Vender Mais com Segurança
                                    </Button>
                                </a>
                                <a href="#coex" className="inline-flex">
                                    <Button variant="tertiary" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                                        Entenda o Modo Híbrido (COEX)
                                    </Button>
                                </a>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-gray-800 pt-8">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white mb-1">Zero</div>
                                    <div className="text-sm text-gray-400">Risco de Banimento</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white mb-1">100%</div>
                                    <div className="text-sm text-gray-400">Legalizado Meta</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white mb-1">Híbrido</div>
                                    <div className="text-sm text-gray-400">App + API Juntos</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                                    <div className="text-sm text-gray-400">Suporte Especializado</div>
                                </div>
                            </div>
                        </motion.div>
                    </Container>
                </section>

                {/* COEX Feature Section - The "New" Thing */}
                <section id="coex" className="py-24 bg-black-secondary relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full -translate-y-1/2"></div>

                    <Container size="lg" className="relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 text-purple-400 font-semibold mb-4 tracking-wider uppercase text-sm">
                                    <Zap className="h-4 w-4" />
                                    Nova Tecnologia Meta
                                </div>
                                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                                    Conheça o <span className="text-purple-500">Modo Coexistence</span> (COEX)
                                </h2>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                    É o fim da escolha difícil entre "dar liberdade" ou "ter controle". Agora você tem os dois.
                                    Seus vendedores continuam usando o WhatsApp Business no celular que eles já conhecem, enquanto você audita e gerencia tudo por trás.
                                </p>

                                <div className="space-y-6">
                                    {coexFeatures.map((feature, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-900/20 flex items-center justify-center border border-purple-500/20">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                                                <p className="text-gray-400 leading-snug">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                {/* Conceptual Visual of COEX */}
                                <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-black shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-green-900/10"></div>
                                    <div className="p-8 md:p-12 relative z-10 text-center">

                                        <div className="flex justify-center items-center gap-8 mb-8">
                                            <div className="relative">
                                                <div className="w-24 h-48 border-4 border-gray-700 rounded-3xl bg-black flex flex-col items-center justify-center relative z-10">
                                                    <Smartphone className="h-8 w-8 text-green-500 mb-2" />
                                                    <span className="text-[10px] text-gray-400">Vendedor<br />(Celular)</span>
                                                </div>
                                                <div className="absolute -bottom-4 -right-4 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-full">Online</div>
                                            </div>

                                            <div className="h-1 w-16 bg-gradient-to-r from-gray-700 to-purple-500 rounded-full"></div>

                                            <div className="relative">
                                                <div className="w-64 h-40 border-4 border-purple-900/50 rounded-lg bg-black/80 backdrop-blur-md flex flex-col items-center justify-center relative z-10 shadow-glow-purple">
                                                    <LayoutDashboard className="h-10 w-10 text-purple-500 mb-2" />
                                                    <span className="text-xs text-purple-200 font-medium">Painel do Gestor<br />(Visão Total)</span>
                                                </div>
                                                <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full z-20 shadow-lg">Sync Real-time</div>
                                            </div>
                                        </div>

                                        <p className="text-lg font-medium text-white mb-2">Sincronização Perfeita</p>
                                        <p className="text-sm text-gray-400">Tudo o que acontece no celular aparece no painel instantaneamente.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </section>

                {/* Problem/Agitation Section */}
                <section className="py-24 bg-gradient-to-b from-black to-black-secondary border-y border-gray-900">
                    <Container size="lg">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                Você ainda "brinca" de vender no WhatsApp?
                            </h2>
                            <p className="text-xl text-gray-400">
                                Usar emuladores, ferramentas piratas (como Evolution API e outras) é colocar seu faturamento em risco todos os dias.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {painPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="p-8 border-red-900/20 bg-red-950/5 hover:bg-red-950/10 transition-colors h-full">
                                        <div className="mb-6 bg-red-900/20 w-14 h-14 rounded-full flex items-center justify-center">
                                            {point.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-red-400 mb-3">{point.problem}</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {point.description}
                                        </p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Benefits List */}
                <section className="py-24">
                    <Container size="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold">
                                Profissionalize sua Operação <span className="text-green-500">Hoje</span>
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card glowColor="green" hoverable className="h-full border-green-900/20">
                                        <div className="p-6">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-green-900/20 rounded-lg text-green-500">
                                                    {benefit.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-black-secondary/50">
                    <Container size="lg">
                        <div className="grid md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                    Dúvidas Frequentes
                                </h2>
                                <p className="text-gray-400 mb-8">
                                    Tudo o que você precisa saber antes de migrar para a estrutura oficial e segura.
                                </p>
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    <Button variant="tertiary" className="w-full md:w-auto">
                                        Falar com um Humano
                                    </Button>
                                </a>
                            </div>

                            <div className="md:col-span-8 space-y-4">
                                {faqs.map((faq, index) => (
                                    <Card key={index} className="p-6 border-gray-800 hover:border-gray-700 transition-colors">
                                        <h3 className="text-lg font-bold text-white mb-3">
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                <ExploreSuite />

                {/* Final Conversion CTA */}
                <section className="py-24 bg-gradient-to-t from-green-900/30 to-black relative">
                    <Container size="lg" className="relative z-10 text-center">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
                            Não espere ser <span className="text-red-500 line-through decoration-red-500/50">banido</span>.
                        </h2>
                        <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
                            A migração é rápida, segura e o custo se paga na primeira venda que você não perdeu por instabilidade.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                <Button variant="whatsapp" size="lg" className="h-16 px-10 text-xl shadow-glow-green w-full sm:w-auto">
                                    Blindar Meu WhatsApp Agora
                                </Button>
                            </a>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Lock className="h-4 w-4 text-green-500" />
                                <span>Ambiente 100% Seguro</span>
                            </div>
                        </div>
                    </Container>
                </section>

                <Footer />
            </div>
        </>
    );
}
