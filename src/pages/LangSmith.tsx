import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import ExploreSuite from '@/components/sections/ExploreSuite';
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Target, 
  Zap, 
  Shield, 
  Database, 
  Users,
  Clock,
  Award,
  Settings,
  Search,
  AlertTriangle,
  CheckCircle,
  BarChart,
  Activity,
  Monitor,
  GitBranch
} from 'lucide-react';

const features = [
  {
    title: 'Monitoramento em Tempo Real',
    icon: <Monitor className="h-6 w-6" />,
    description: 'Acompanhe o desempenho dos seus agentes de IA em tempo real com dashboards interativos.',
    details: 'Visualize métricas de latência, taxa de sucesso e qualidade das respostas instantaneamente.',
  },
  {
    title: 'Análise de Custo',
    icon: <BarChart3 className="h-6 w-6" />,
    description: 'Monitore e otimize os custos de suas operações de IA com análises detalhadas.',
    details: 'Identifique oportunidades de economia e entenda o ROI de cada agente e fluxo.',
  },
  {
    title: 'Rastreamento de Conversas',
    icon: <Search className="h-6 w-6" />,
    description: 'Registre e analise cada interação para entender o comportamento dos usuários.',
    details: 'Reproduza conversas completas, identifique pontos de fricção e oportunidades de melhoria.',
  },
  {
    title: 'Detecção de Problemas',
    icon: <AlertTriangle className="h-6 w-6" />,
    description: 'Identifique automaticamente falhas, erros e comportamentos anômalos.',
    details: 'Receba alertas proativos sobre problemas de desempenho ou qualidade antes que afetem usuários.',
  },
  {
    title: 'Testes A/B',
    icon: <GitBranch className="h-6 w-6" />,
    description: 'Compare diferentes versões de prompts e fluxos para otimizar resultados.',
    details: 'Teste hipóteses e melhore continuamente o desempenho dos seus agentes.',
  },
  {
    title: 'Conformidade e Segurança',
    icon: <Shield className="h-6 w-6" />,
    description: 'Garanta que suas operações de IA estejam em conformidade com regulamentações.',
    details: 'Monitore uso de dados sensíveis e garanta conformidade com LGPD e outras regulamentações.',
  },
];

const metrics = [
  {
    title: 'Latência',
    description: 'Tempo de resposta dos agentes',
    icon: <Clock className="h-5 w-5" />,
    goodValue: '< 2 segundos',
    impact: 'Diretamente relacionada à satisfação do usuário',
  },
  {
    title: 'Taxa de Sucesso',
    description: 'Percentual de interações bem-sucedidas',
    icon: <CheckCircle className="h-5 w-5" />,
    goodValue: '> 95%',
    impact: 'Indica confiabilidade do sistema',
  },
  {
    title: 'Custo por Interação',
    description: 'Custo médio por conversa',
    icon: <TrendingUp className="h-5 w-5" />,
    goodValue: '< R$ 0,10',
    impact: 'Essencial para escalabilidade financeira',
  },
  {
    title: 'Satisfação do Usuário',
    description: 'Avaliação das interações',
    icon: <Award className="h-5 w-5" />,
    goodValue: '> 4.5/5',
    impact: 'Reflete a qualidade percebida',
  },
  {
    title: 'Taxa de Resolução',
    description: 'Problemas resolvidos sem escalonamento',
    icon: <Target className="h-5 w-5" />,
    goodValue: '> 80%',
    impact: 'Eficiência do atendimento automatizado',
  },
  {
    title: 'Uso de Tokens',
    description: 'Consumo de tokens por interação',
    icon: <Database className="h-5 w-5" />,
    goodValue: 'Otimizado',
    impact: 'Diretamente relacionado aos custos',
  },
];

const monitoringSteps = [
  {
    step: 1,
    title: 'Coleta de Dados',
    description: 'Todos os eventos e interações são registrados automaticamente.',
    icon: <Database className="h-5 w-5" />,
  },
  {
    step: 2,
    title: 'Processamento em Tempo Real',
    description: 'Os dados são processados e analisados instantaneamente.',
    icon: <Zap className="h-5 w-5" />,
  },
  {
    step: 3,
    title: 'Geração de Insights',
    description: 'Identificação automática de padrões e anomalias.',
    icon: <Activity className="h-5 w-5" />,
  },
  {
    step: 4,
    title: 'Alertas e Notificações',
    description: 'Notificações proativas sobre problemas ou oportunidades.',
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    step: 5,
    title: 'Ações Corretivas',
    description: 'Sugestões automáticas para melhorar desempenho.',
    icon: <Settings className="h-5 w-5" />,
  },
];

export default function LangSmith() {
  return (
    <>
      <Helmet>
        <title>LangSmith: Monitoramento e Analytics de IA - Growmate</title>
        <meta name="description" content="Descubra como LangSmith monitora, analisa e otimiza o desempenho dos agentes de IA da Growmate em tempo real." />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-700/10"></div>
          <Container size="lg" className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center items-center mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src="/logos/langsmith.svg"
                    alt="LangSmith marca"
                    className="h-16 w-auto brightness-0 invert"
                  />
                  <img
                    src="/logos/langsmith-text.svg"
                    alt="LangSmith texto"
                    className="h-6 w-auto brightness-0 invert opacity-90"
                  />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Monitoramento e <span className="text-blue-400">Analytics de IA</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Monitore, analise e otimize o desempenho dos seus agentes de IA com precisão cirúrgica. 
                Transforme dados em insights acionáveis.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:ops@growmate.io"
                  className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Falar com Especialista
                </a>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Core Features */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Recursos <span className="text-blue-400">Poderosos</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Ferramentas avançadas para monitoramento completo e otimização contínua dos seus agentes de IA.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card glowColor="blue" hoverable className="h-full">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-900/40 rounded-lg text-blue-400">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-3">{feature.description}</p>
                      <p className="text-sm text-gray-400 italic">{feature.details}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Key Metrics */}
        <section className="py-20 bg-black-secondary/50">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Métricas <span className="text-blue-400">Essenciais</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Acompanhe os indicadores mais importantes para garantir excelência operacional e eficiência de custos.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card glowColor="blue" className="p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 bg-blue-900/40 rounded-lg text-blue-400">
                        {metric.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
                        <p className="text-gray-300 text-sm mb-3">{metric.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                            <span className="text-sm text-green-400 font-medium">Bom: {metric.goodValue}</span>
                          </div>
                          <p className="text-xs text-gray-400">{metric.impact}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Monitoring Process */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Processo de <span className="text-blue-400">Monitoramento</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Como LangSmith coleta, processa e transforma dados em insights acionáveis para sua equipe.
              </p>
            </motion.div>

            <div className="relative">
              {/* Process Steps */}
              <div className="space-y-8">
                {monitoringSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="flex-1">
                      <Card glowColor="blue" className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-900/40 rounded-full flex items-center justify-center text-blue-400">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-300">{step.description}</p>
                          </div>
                          <div className="text-blue-400">{step.icon}</div>
                        </div>
                      </Card>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-px h-16 bg-gradient-to-b from-blue-400/50 to-transparent"></div>
                    </div>
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Real World Applications */}
        <section className="py-20 bg-black-secondary/50">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                LangSmith na <span className="text-blue-400">Prática</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Veja como empresas usam LangSmith para otimizar operações de IA e melhorar resultados de negócios.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card glowColor="blue" className="p-8 h-full">
                  <h3 className="text-xl font-semibold mb-4">🏢 E-commerce de Moda</h3>
                  <p className="text-gray-300 mb-4">
                    Uma grande varejista de moda reduziu custos de atendimento em 40% usando LangSmith para 
                    monitorar e otimizar seus agentes de recomendação de produtos, identificando padrões de 
                    conversão e ajustando prompts em tempo real.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Redução de 60% no tempo de resposta</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Aumento de 25% na taxa de conversão</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Economia de R$ 2M por ano</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card glowColor="blue" className="p-8 h-full">
                  <h3 className="text-xl font-semibold mb-4">🏥 Plataforma de Saúde Digital</h3>
                  <p className="text-gray-300 mb-4">
                    Uma healthtech melhorou a precisão de triagem em 35% monitorando interações com LangSmith, 
                    identificando casos onde o agente precisava de ajustes e otimizando fluxos de conversação.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>95% de precisão na triagem</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Redução de 70% em erros críticos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Melhoria contínua com feedback</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Benefícios <span className="text-blue-400">Mensuráveis</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">ROI Comprovado</h3>
                <p className="text-gray-300">
                  Redução média de 30-50% nos custos operacionais com melhoria na qualidade do atendimento.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Visibilidade Total</h3>
                <p className="text-gray-300">
                  Entenda exatamente como seus agentes estão performando e onde estão os gargalos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Confiança da Equipe</h3>
                <p className="text-gray-300">
                  Dados concretos para tomar decisões informadas e justificar investimentos em IA.
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        <ExploreSuite />

        {/* CTA Section */}
        <section className="py-20 bg-black-secondary/50">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Pronto Para <span className="text-blue-400">Monitorar</span> Seus Agentes de IA?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Transforme seus agentes de IA em operações de alta performance com monitoramento inteligente 
                e insights acionáveis. Entre em contato e descubra como LangSmith pode revolucionar sua gestão.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:ops@growmate.io"
                  className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Falar com Especialista
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
