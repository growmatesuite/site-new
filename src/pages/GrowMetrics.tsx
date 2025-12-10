import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
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
  PieChart,
  Activity,
  Heart,
  ThumbsUp,
  AlertTriangle,
  Minus,
  Smartphone,
  Settings,
  Mail,
  Phone,
  Database,
  LineChart,
  Globe,
  Zap as Lightning
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ExploreSuite from '@/components/sections/ExploreSuite';
import { WHATSAPP_LINK } from '@/lib/constants';

const metrics = [
  {
    title: 'NPS - Net Promoter Score',
    description: 'Mensure a lealdade de marca do seu cliente com a metodologia mais utilizada do mundo.',
    icon: <TrendingUp className="h-6 w-6" />,
    color: 'purple',
    gradient: 'from-purple-500 to-purple-400',
    path: '/nps'
  },
  {
    title: 'CSAT - Customer Satisfaction',
    description: 'Avalie a satisfação em cada ponto de contato com pesquisas rápidas e eficientes.',
    icon: <Heart className="h-6 w-6" />,
    color: 'purple',
    gradient: 'from-purple-500 to-purple-400',
    path: '/csat'
  },
  {
    title: 'CES - Customer Effort Score',
    description: 'Mensure o esforço que seus clientes fazem para resolver seus problemas.',
    icon: <Zap className="h-6 w-6" />,
    color: 'purple',
    gradient: 'from-purple-500 to-violet-400',
    path: '/ces'
  },
  {
    title: 'PMF - Product Market Fit',
    description: 'Descubra se seu produto realmente atende às necessidades do mercado.',
    icon: <Target className="h-6 w-6" />,
    color: 'purple',
    gradient: 'from-purple-500 to-purple-400',
    path: '/pmf'
  },
  {
    title: 'eNPS - Employee Net Promoter Score',
    description: 'Avalie o engajamento e satisfação dos seus colaboradores internamente.',
    icon: <Users className="h-6 w-6" />,
    color: 'purple',
    gradient: 'from-purple-500 to-purple-400',
    path: '/enps'
  },
  {
    title: 'Análise de Sentimentos',
    description: 'IA avançada que interpreta emoções e intenções nos feedbacks dos clientes.',
    icon: <Brain className="h-6 w-6" />,
    color: 'purple',
    gradient: 'from-purple-500 to-purple-400',
    path: null
  }
];

const differentials = [
  {
    title: 'Taxa de Resposta Superior',
    description: 'Nossas pesquisas atingem mais de 30% de taxa de resposta via WhatsApp',
    icon: <Smartphone className="h-8 w-8" />,
    value: '30%+',
    color: 'text-purple-400'
  },
  {
    title: 'Disparo Multicanal',
    description: 'WhatsApp, e-mail, SMS e web - alcance seus clientes onde estiverem',
    icon: <Globe className="h-8 w-8" />,
    value: 'Multi',
    color: 'text-purple-400'
  },
  {
    title: 'Análise em Tempo Real',
    description: 'Dashboards atualizados instantaneamente com dados de todas as unidades',
    icon: <Activity className="h-8 w-8" />,
    value: 'Real-Time',
    color: 'text-purple-400'
  },
  {
    title: 'IA Generativa',
    description: 'Planos de ação automáticos baseados em análise inteligente dos dados',
    icon: <Brain className="h-8 w-8" />,
    value: 'AI-Powered',
    color: 'text-purple-400'
  }
];

const steps = [
  {
    step: 1,
    title: 'Configure',
    description: 'Defina os momentos de pesquisa e personalize as perguntas para sua marca.',
    icon: <Settings className="h-5 w-5" />
  },
  {
    step: 2,
    title: 'Dispare',
    description: 'Envie pesquisas automaticamente via WhatsApp, e-mail ou SMS.',
    icon: <Mail className="h-5 w-5" />
  },
  {
    step: 3,
    title: 'Analise',
    description: 'Visualize resultados em dashboards interativos com insights acionáveis.',
    icon: <BarChart3 className="h-5 w-5" />
  },
  {
    step: 4,
    title: 'Aja',
    description: 'Receba planos de ação automáticos baseados em IA para melhorar.',
    icon: <Zap className="h-5 w-5" />
  }
];


const faqs = [
  {
    question: 'Como funciona a implementação?',
    answer: 'Implementação em até 7 dias com suporte dedicado. Integração com seus sistemas existentes e treinamento completo da equipe.'
  },
  {
    question: 'É compatível com minha indústria?',
    answer: 'Atendemos desde startups até grandes corporações em varejo, saúde, educação, serviços e tecnologia.'
  },
  {
    question: 'Como garantem a segurança dos dados?',
    answer: 'Certificados LGPD/GDPR, criptografia end-to-end, dados hospedados no Brasil e backups automáticos.'
  },
  {
    question: 'Posso personalizar as pesquisas?',
    answer: 'Totalmente personalizável: branding, perguntas, fluxos, triggers e relatórios sob medida para sua marca.'
  },
  {
    question: 'Qual é o ROI esperado?',
    answer: 'Clientes típicos veem aumento de 15-25% em retenção e 10-20% em receita dentro dos primeiros 12 meses.'
  },
  {
    question: 'Oferecem suporte técnico?',
    answer: 'Suporte 24/7 via WhatsApp, e-mail e telefone com time especializado em CX e análise de dados.'
  }
];

export default function GrowMetrics() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const npsData = [
    { category: 'Promotores', value: 68, color: 'bg-green-500', icon: <ThumbsUp className="h-4 w-4" /> },
    { category: 'Neutros', value: 22, color: 'bg-yellow-500', icon: <Minus className="h-4 w-4" /> },
    { category: 'Detratores', value: 10, color: 'bg-red-500', icon: <AlertTriangle className="h-4 w-4" /> }
  ];

  return (
    <>
      <Helmet>
        <title>GrowMetrics | Desvende o Poder da Lealdade de Marca</title>
        <meta name="description" content="Avalie o nível de lealdade da sua marca e construa uma cultura centrada no cliente com IA e métricas avançadas de CX." />
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
                <Award className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-200">Plataforma de Métricas de Experiência Baseada em IA</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                Inteligência Artificial medindo a <span className="text-purple-400">lealdade dos seus clientes</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6">
                pra você tomar decisões <span className="text-purple-400">baseadas em dados</span>
              </p>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Centralize NPS, CSAT, CES e outras métricas num só lugar
              </p>



              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="lg">
                    Falar com Especialista
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-400" />
                  <span>IA sob medida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-purple-400" />
                  <span>Multicanal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-purple-400" />
                  <span>Tempo Real</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-400" />
                  <span>LGPD Compliance</span>
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
                a Growmate para um amigo ou colega?
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A pergunta que revoluciona como empresas entendem seus clientes
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card glowColor="purple" className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Distribuição NPS</h3>

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
                      <div className="text-3xl font-bold text-purple-400 mb-1">NPS 58</div>
                      <div className="text-sm text-gray-400">Boa performance</div>
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
                      <p className="text-gray-300">Clientes altamente satisfeitos e leais, que têm alta probabilidade de recomendar seu negócio.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400">
                      <Minus className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-yellow-400 mb-2">Neutros (7-8)</h4>
                      <p className="text-gray-300">Clientes satisfeitos, mas não estão entusiasmados em promover ativamente sua marca.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-red-400">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-red-400 mb-2">Detratores (0-6)</h4>
                      <p className="text-gray-300">Clientes insatisfeitos que podem negativar seu negócio e impactar sua reputação.</p>
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
                Trabalhamos com as{' '}
                <span className="text-purple-400">
                  principais métricas
                </span>{' '}
                de customer experience do mercado!
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Metodologias validadas globalmente para medição precisa da experiência do cliente
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
                  {metric.path ? (
                    <Link to={metric.path} className="block h-full">
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
                    </Link>
                  ) : (
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
                  )}
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
                Performance que{' '}
                <span className="text-purple-400">
                  transforma resultados
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nossas taxas de resposta são acima de 30% com disparos estratégicos via WhatsApp
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
                  <h3 className="text-2xl font-semibold mb-4">Estamos prontos para atender empresas dos mais diversos segmentos</h3>
                  <p className="text-gray-300 text-lg">Franquias com várias unidades, startups em crescimento e corporações estabelecidas</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                    <div className="text-gray-400">Unidades monitoradas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">2M+</div>
                    <div className="text-gray-400">Respostas analisadas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                    <div className="text-gray-400">Taxa de satisfação</div>
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
                Acompanhe o{' '}
                <span className="text-purple-400">
                  ranking da experiência
                </span>{' '}
                do cliente
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Por unidade, por colaborador, setor, produtos, enfim imagine e nós mensuramos
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card glowColor="purple" className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Análise Granular</h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-900/40 to-green-800/40 rounded-lg border border-green-500/30">
                      <div>
                        <div className="font-semibold text-green-400">Unidade São Paulo</div>
                        <div className="text-sm text-gray-400">NPS: 72 | CSAT: 4.6</div>
                      </div>
                      <div className="text-green-400 font-bold">#1</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                      <div>
                        <div className="font-semibold text-purple-400">Unidade Rio de Janeiro</div>
                        <div className="text-sm text-gray-400">NPS: 68 | CSAT: 4.4</div>
                      </div>
                      <div className="text-purple-400 font-bold">#2</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 rounded-lg border border-yellow-500/30">
                      <div>
                        <div className="font-semibold text-yellow-400">Unidade Brasília</div>
                        <div className="text-sm text-gray-400">NPS: 65 | CSAT: 4.2</div>
                      </div>
                      <div className="text-yellow-400 font-bold">#3</div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Média geral</span>
                      <span className="text-lg font-bold text-purple-400">NPS 68</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '68%' }}></div>
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
                  <h3 className="text-2xl font-semibold mb-4">Planos de Ação com IA</h3>
                  <p className="text-gray-300 mb-6">Desenvolvidos com inteligência artificial, de maneira totalmente automatizada.</p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Análise Automática</h4>
                        <p className="text-gray-400 text-sm">Identifica padrões e tendências nos feedbacks</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Recomendações Personalizadas</h4>
                        <p className="text-gray-400 text-sm">Sugere ações específicas para cada situação</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Monitoramento Contínuo</h4>
                        <p className="text-gray-400 text-sm">Acompanha o progresso das melhorias implementadas</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-purple-900/30 rounded-lg border border-purple-500/30">
                  <h4 className="font-semibold text-purple-400 mb-2">Tudo numa única fonte da verdade!</h4>
                  <p className="text-gray-300 text-sm">Dashboards unificados com todos os indicadores de CX em tempo real.</p>
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
                Simples, rápido e poderoso. De configuração a insights em 4 passos
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
                    Começar agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>

                <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-purple-400" />
                    <span>Setup em 7 dias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-purple-400" />
                    <span>Suporte 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-purple-400" />
                    <span>Treinamento incluído</span>
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
                Perguntas{' '}
                <span className="text-purple-400">
                  frequentes
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tire suas dúvidas sobre o GrowMetrics
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
                Pronto para{' '}
                <span className="text-purple-400">
                  desvendar o poder
                </span>{' '}
                da lealdade de marca?
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Avalie o nível de lealdade da sua marca e construa uma cultura verdadeiramente centrada no cliente
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="lg">
                    Falar com Especialista
                  </Button>
                </a>
              </div>

              <div className="text-center text-sm text-gray-400">
                <div className="mb-2">
                  <span className="text-purple-400 font-medium">IA sob medida</span> +30% taxa resposta.{' '}
                  <span className="text-purple-400 font-medium">95% satisfação</span>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}
