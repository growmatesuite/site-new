import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ExploreSuite from '@/components/sections/ExploreSuite';
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
    Activity,
    ThumbsUp,
    AlertTriangle,
    Minus,
    Smartphone,
    Settings,
    Mail,
    Globe,
} from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

const metrics = [
    {
        title: 'eNPS - Employee Net Promoter Score',
        description: 'Mensure a lealdade dos seus colaboradores com a métrica definitiva de cultura.',
        icon: <TrendingUp className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400'
    },
    {
        title: 'Engajamento e Clima',
        description: 'Avalie o nível de engajamento e a percepção do clima organizacional em tempo real.',
        icon: <Users className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400'
    },
    {
        title: 'Satisfação Interna',
        description: 'Entenda pontos de atrito e oportunidades de melhoria na jornada do colaborador.',
        icon: <Zap className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-violet-400'
    },
    {
        title: 'Alinhamento Cultural',
        description: 'Descubra se seus times estão alinhados com os valores e missão da empresa.',
        icon: <Target className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400'
    },
    {
        title: 'Employer Branding',
        description: 'Fortaleça sua marca empregadora transformando colaboradores em embaixadores.',
        icon: <Award className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400'
    },
    {
        title: 'Análise de Sentimentos',
        description: 'IA avançada que interpreta emoções e intenções nos feedbacks dos times.',
        icon: <Brain className="h-6 w-6" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-400'
    }
];

const differentials = [
    {
        title: 'Taxa de Resposta Superior',
        description: 'Pesquisas ágeis pelo WhatsApp garantem máxima adesão dos times.',
        icon: <Smartphone className="h-8 w-8" />,
        value: '30%+',
        color: 'text-purple-400'
    },
    {
        title: 'Disparo Multicanal',
        description: 'WhatsApp, e-mail, Slack e Teams - alcance seus colaboradores onde preferirem.',
        icon: <Globe className="h-8 w-8" />,
        value: 'Multi',
        color: 'text-purple-400'
    },
    {
        title: 'Análise em Tempo Real',
        description: 'Dashboards atualizados instantaneamente por setor, cargo ou unidade.',
        icon: <Activity className="h-8 w-8" />,
        value: 'Real-Time',
        color: 'text-purple-400'
    },
    {
        title: 'IA para RH',
        description: 'Planos de ação automáticos para líderes baseados em análise de dados.',
        icon: <Brain className="h-8 w-8" />,
        value: 'AI-Powered',
        color: 'text-purple-400'
    }
];

const steps = [
    {
        step: 1,
        title: 'Configure',
        description: 'Defina a periodicidade e personalize as perguntas para sua cultura.',
        icon: <Settings className="h-5 w-5" />
    },
    {
        step: 2,
        title: 'Dispare',
        description: 'Envie pesquisas pulse automaticamente via canais de comunicação interna.',
        icon: <Mail className="h-5 w-5" />
    },
    {
        step: 3,
        title: 'Analise',
        description: 'Visualize o sentimento dos times em dashboards interativos com insights de RH.',
        icon: <BarChart3 className="h-5 w-5" />
    },
    {
        step: 4,
        title: 'Aja',
        description: 'Receba planos de retenção e engajamento sugeridos pela IA para os gestores.',
        icon: <Zap className="h-5 w-5" />
    }
];

const faqs = [
    {
        question: 'Como garantem o anonimato?',
        answer: 'Nossa plataforma garante total confidencialidade nas respostas, incentivando feedbacks honestos e seguros para os colaboradores.'
    },
    {
        question: 'Serve para empresas de qual porte?',
        answer: 'Atendemos desde startups em crescimento até grandes corporações com milhares de funcionários distribuídos.'
    },
    {
        question: 'A IA ajuda na gestão de pessoas?',
        answer: 'Sim, nossa IA analisa tendências de satisfação e sugere ações preventivas para reduzir turnover e aumentar engajamento.'
    },
    {
        question: 'Posso integrar com meu sistema de RH?',
        answer: 'Sim, integramos facilmente com os principais softwares de RH e folhas de pagamento do mercado.'
    }
];

export default function ENPS() {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const npsData = [
        { category: 'Promotores', value: 72, color: 'bg-green-500', icon: <ThumbsUp className="h-4 w-4" /> },
        { category: 'Neutros', value: 18, color: 'bg-yellow-500', icon: <Minus className="h-4 w-4" /> },
        { category: 'Detratores', value: 10, color: 'bg-red-500', icon: <AlertTriangle className="h-4 w-4" /> }
    ];

    return (
        <>
            <Helmet>
                <title>eNPS | Employee Net Promoter Score | Growmate</title>
                <meta name="description" content="Mensure o eNPS e fortaleça sua cultura organizacional com inteligência artificial e métricas de engajamento." />
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
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.2),transparent_50%)]" />

                    <Container size="lg" className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-3 bg-purple-900/30 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-purple-500/30">
                                <Users className="h-5 w-5 text-purple-400" />
                                <span className="text-sm font-medium text-purple-200">Gestão de Cultura e Clima com IA</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                                Inteligência Artificial medindo a <span className="text-purple-400">lealdade dos colaboradores</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6">
                                para você tomar decisões sobre pessoas <span className="text-purple-400">baseadas em dados</span>
                            </p>

                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                                Centralize eNPS, Engajamento e Clima num só lugar
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 mb-8">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="lg">
                                        Falar com Especialista
                                    </Button>
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 max-w-4xl mx-auto">
                                <div className="flex items-center gap-2">
                                    <Brain className="h-5 w-5 text-purple-400" />
                                    <span>IA para RH</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="h-5 w-5 text-purple-400" />
                                    <span>Multicanal</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Activity className="h-5 w-5 text-purple-400" />
                                    <span>Feedback em Tempo Real</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-purple-400" />
                                    <span>100% Anônimo</span>
                                </div>
                            </div>
                        </motion.div>
                    </Container>
                </section>

                {/* NPS Visualization Section */}
                <section className="py-20 bg-black-secondary/30">
                    <Container size="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                Em uma escala de 0 a 10,{' '}
                                <span className="text-purple-400">
                                    o quanto você recomendaria
                                </span>{' '}
                                a sua empresa como um excelente lugar para trabalhar?
                            </h2>

                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                A pergunta fundamental para entender o engajamento do seu time
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card glowColor="purple" className="p-8">
                                    <h3 className="text-2xl font-semibold mb-6">Distribuição eNPS</h3>

                                    <div className="space-y-4">
                                        {npsData.map((item, index) => (
                                            <div key={item.category} className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className={`p-2 rounded-lg ${item.color} bg-opacity-20 text-white`}>
                                                            {item.icon}
                                                        </div>
                                                        <span className="font-medium">{item.category}</span>
                                                    </div>
                                                    <span className="text-lg font-bold">{item.value}%</span>
                                                </div>
                                                <div className="w-full bg-gray-800 rounded-full h-3">
                                                    <motion.div
                                                        className={`h-3 rounded-full ${item.color}`}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${item.value}%` }}
                                                        transition={{ duration: 1, delay: index * 0.2 }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-purple-400 mb-1">eNPS 62</div>
                                            <div className="text-sm text-gray-400">Zona de Qualidade</div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                                            <ThumbsUp className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-green-400 mb-2">Promotores (9-10)</h4>
                                            <p className="text-gray-300">Colaboradores engajados que vestem a camisa e atraem outros talentos.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400">
                                            <Minus className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-yellow-400 mb-2">Neutros (7-8)</h4>
                                            <p className="text-gray-300">Colaboradores satisfeitos, mas que podem aceitar ofertas de outras empresas.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-red-400">
                                            <AlertTriangle className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-red-400 mb-2">Detratores (0-6)</h4>
                                            <p className="text-gray-300">Colaboradores insatisfeitos que podem impactar negativamente o clima da equipe.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </section>

                {/* Metrics Grid */}
                <section className="py-20">
                    <Container size="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                Monitore o{' '}
                                <span className="text-purple-400">
                                    pulso da organização
                                </span>
                            </h2>

                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Metodologias comprovadas para fortalecer a cultura e reter talentos
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {metrics.map((metric, index) => (
                                <motion.div
                                    key={metric.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
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

                {/* Performance Section */}
                <section className="py-20 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-700/20">
                    <Container size="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                Resultados que{' '}
                                <span className="text-purple-400">
                                    transformam a cultura
                                </span>
                            </h2>

                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Altas taxas de adesão com pesquisas simplificadas e acessíveis
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {differentials.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className={`w-16 h-16 ${item.color} bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                                        {item.icon}
                                    </div>
                                    <div className={`text-2xl font-bold text-purple-400 mb-2`}>{item.value}</div>
                                    <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Card glowColor="purple" className="p-8">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-semibold mb-4">Prontos para apoiar o RH estratégico</h3>
                                    <p className="text-gray-300 text-lg">Do setor de serviços à tecnologia, impactando milhares de vidas profissionais</p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-400 mb-2">10k+</div>
                                        <div className="text-gray-400">Colaboradores ouvidos</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
                                        <div className="text-gray-400">Taxa de Engajamento</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-400 mb-2">-25%</div>
                                        <div className="text-gray-400">Redução de Turnover</div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </Container>
                </section>

                {/* Advanced Analytics Section */}
                <section className="py-20">
                    <Container size="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                Visão completa do{' '}
                                <span className="text-purple-400">
                                    clima organizacional
                                </span>
                            </h2>

                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Por departamento, cargo, tempo de casa ou geração, entenda sua equipe profundamente
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card glowColor="purple" className="p-8">
                                    <h3 className="text-2xl font-semibold mb-6">Análise por Setor</h3>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-900/40 to-green-800/40 rounded-lg border border-green-500/30">
                                            <div>
                                                <div className="font-semibold text-green-400">Time de Tecnologia</div>
                                                <div className="text-sm text-gray-400">eNPS: 78 | Engajamento: Alto</div>
                                            </div>
                                            <div className="text-green-400 font-bold">#1</div>
                                        </div>

                                        <div className="flex items-center justify-between p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                                            <div>
                                                <div className="font-semibold text-purple-400">Time Comercial</div>
                                                <div className="text-sm text-gray-400">eNPS: 65 | Engajamento: Médio</div>
                                            </div>
                                            <div className="text-purple-400 font-bold">#2</div>
                                        </div>

                                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 rounded-lg border border-yellow-500/30">
                                            <div>
                                                <div className="font-semibold text-yellow-400">Operações</div>
                                                <div className="text-sm text-gray-400">eNPS: 52 | Engajamento: Atenção</div>
                                            </div>
                                            <div className="text-yellow-400 font-bold">#3</div>
                                        </div>
                                    </div>

                                    <div className="mt-6 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-gray-400">Média da Empresa</span>
                                            <span className="text-lg font-bold text-purple-400">eNPS 62</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">Insights para Liderança</h3>
                                    <p className="text-gray-300 mb-6">Empodere seus líderes com dados e sugestões práticas de gestão de pessoas.</p>

                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-medium">Identificação de Riscos</h4>
                                                <p className="text-gray-400 text-sm">Prevê possíveis saídas de colaboradores chave (Churn Prediction)</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-medium">Ações de Reconhecimento</h4>
                                                <p className="text-gray-400 text-sm">Sugestões de feedback positivo para talentos que se destacam</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-medium">Plano de Desenvolvimento</h4>
                                                <p className="text-gray-400 text-sm">Identifica gaps de competências e satisfação nas equipes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-purple-900/30 rounded-lg border border-purple-500/30">
                                    <h4 className="font-semibold text-purple-400 mb-2">People Analytics Simplificado</h4>
                                    <p className="text-gray-300 text-sm">Transforme dados complexos em decisões simples para melhorar a vida dos seus colaboradores.</p>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </section>

                {/* How It Works */}
                <section className="py-20 bg-black-secondary/30">
                    <Container size="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                Como{' '}
                                <span className="text-purple-400">
                                    funciona
                                </span>
                            </h2>

                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Implementação rápida para ouvir quem mais importa: seu time
                            </p>
                        </motion.div>

                        <div className="relative">
                            <div className="space-y-8">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={step.step}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                    >
                                        <div className="flex-1">
                                            <Card glowColor="purple" className="p-6">
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                                                        {step.step}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                                        <p className="text-gray-300">{step.description}</p>
                                                    </div>
                                                    <div className="text-purple-400">{step.icon}</div>
                                                </div>
                                            </Card>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="w-px h-16 bg-gradient-to-b from-purple-400/50 to-transparent"></div>
                                        </div>
                                        <div className="flex-1"></div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                className="text-center mt-12"
                            >
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="lg">
                                        Agendar Apresentação
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>

                                <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-purple-400" />
                                        <span>Setup Rápido</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Globe className="h-4 w-4 text-purple-400" />
                                        <span>Plataforma Online</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MessageCircle className="h-4 w-4 text-purple-400" />
                                        <span>Suporte Consultivo</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-black-secondary/30">
                    <Container size="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                Dúvidas{' '}
                                <span className="text-purple-400">
                                    frequentes
                                </span>
                            </h2>

                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Tudo sobre o eNPS e gestão de clima
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
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

                {/* Final CTA */}
                <section className="py-20 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-700/40">
                    <Container size="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                                Construa um{' '}
                                <span className="text-purple-400">
                                    lugar incrível
                                </span>{' '}
                                para trabalhar
                            </h2>

                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                Cuide de quem cuida do seu negócio. Comece a medir o engajamento hoje mesmo.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 mb-12">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="lg">
                                        Falar com Consultor
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    </Container>
                </section>

                <Footer />
            </div>
        </>
    );
}
