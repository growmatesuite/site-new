import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Users,
  Shield,
  Code,
  Rocket,
  Target,
  Workflow,
  Cpu,
  Sparkles,
  Network,
  Database,
  BarChart3
} from 'lucide-react';
import ExploreSuite from '@/components/sections/ExploreSuite';
import { WHATSAPP_LINK } from '@/lib/constants';

const coreConcepts = [
  {
    title: 'Processamento Neural',
    icon: <Brain className="h-6 w-6" />,
    description: 'Algoritmos de deep learning que compreendem contexto e nuance em cada interação.',
    details: 'Imagine ter um cérebro digital que aprende e evolui com cada conversa, tornando-se mais inteligente ao longo do tempo.',
  },
  {
    title: 'Tomada de Decisão Inteligente',
    icon: <Target className="h-6 w-6" />,
    description: 'Sistema que analisa múltiplas variáveis para escolher a melhor ação em milissegundos.',
    details: 'Como um estrategista experiente que considera todas as possibilidades antes de tomar a decisão ótima.',
  },
  {
    title: 'Aprendizado Contínuo',
    icon: <Sparkles className="h-6 w-6" />,
    description: 'Evolui constantemente com base em feedback e novos padrões de comportamento.',
    details: 'Cada interação torna o Agno mais inteligente, criando uma experiência cada vez mais personalizada.',
  },
  {
    title: 'Integração Seamless',
    icon: <Network className="h-6 w-6" />,
    description: 'Conecta-se perfeitamente com mais de 1000+ ferramentas e plataformas.',
    details: 'Funciona como um maestro digital, orquestrando todas as ferramentas da sua empresa em perfeita harmonia.',
  },
  {
    title: 'Segurança Enterprise',
    icon: <Shield className="h-6 w-6" />,
    description: 'Proteção de nível bancário com criptografia end-to-end e compliance LGPD.',
    details: 'Seus dados estão mais seguros que em um cofre digital, com múltiplas camadas de proteção.',
  },
  {
    title: 'Escalabilidade Infinita',
    icon: <Rocket className="h-6 w-6" />,
    description: 'Cresce junto com seu negócio, de startups a grandes corporações.',
    details: 'Do atendimento de dezenas para milhões de clientes, mantendo a mesma excelência em performance.',
  },
];

const workflowSteps = [
  {
    step: 1,
    title: 'Captura de Contexto',
    description: 'Agno analisa a entrada do usuário, histórico e contexto empresarial em microssegundos.',
    icon: <Brain className="h-5 w-5" />,
  },
  {
    step: 2,
    title: 'Processamento Neural',
    description: 'Redes neurais avançadas processam informações e identificam intenções e padrões.',
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    step: 3,
    title: 'Decisão Inteligente',
    description: 'Algoritmos escolhem a melhor ação baseado em milhares de variáveis e aprendizados passados.',
    icon: <Target className="h-5 w-5" />,
  },
  {
    step: 4,
    title: 'Execução e Aprendizado',
    description: 'Ação é executada e o feedback é incorporado para melhorar futuras interações.',
    icon: <Zap className="h-5 w-5" />,
  },
];

const realWorldApplications = [
  {
    title: 'Atendimento ao Cliente Inteligente',
    description: 'Agente que não apenas responde perguntas, mas antecipa necessidades, resolve problemas complexos e cria experiências memoráveis.',
    features: [
      'Compreensão emocional e contextual',
      'Resolução de problemas em até 30 segundos',
      'Personalização baseada em histórico do cliente',
      'Escalonamento inteligente quando necessário'
    ],
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'Análise de Dados e Insights',
    description: 'Transforma dados brutos em insights acionáveis, identificando tendências e oportunidades ocultas.',
    features: [
      'Análise preditiva com 95% de precisão',
      'Identificação automática de anomalias',
      'Geração de relatórios executivos instantâneos',
      'Recomendações estratégicas baseadas em dados'
    ],
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: 'Automação de Processos Complexos',
    description: 'Orquestra workflows empresariais complexos, coordenando múltiplos sistemas e equipes automaticamente.',
    features: [
      'Redução de 90% no tempo de processamento',
      'Zero erros em operações repetitivas',
      'Integração com sistemas legados e modernos',
      'Monitoramento proativo de performance'
    ],
    icon: <Workflow className="h-6 w-6" />,
  },
  {
    title: 'Gestão de Conhecimento Empresarial',
    description: 'Centraliza e organiza todo o conhecimento da empresa, tornando-o acessível instantaneamente.',
    features: [
      'Busca inteligente em milhares de documentos',
      'Síntese automática de informações complexas',
      'Atualização contínua da base de conhecimento',
      'Treinamento acelerado de novos funcionários'
    ],
    icon: <Database className="h-6 w-6" />,
  },
];

const advantages = [
  {
    title: 'Velocidade Supersonica',
    description: 'Processa e responde em milissegundos, eliminando filas de espera e delays.',
    icon: <Zap className="h-8 w-8" />,
  },
  {
    title: 'Precisão Cirúrgica',
    description: '95% de acurácia em tarefas complexas, superando expectativas humanas.',
    icon: <Target className="h-8 w-8" />,
  },
  {
    title: 'Escala Infinita',
    description: 'Atende milhares de usuários simultaneamente sem perder qualidade.',
    icon: <Rocket className="h-8 w-8" />,
  },
];

const techStack = [
  { name: "OpenAI", category: "LLM" },
  { name: "Anthropic", category: "LLM" },
  { name: "Google", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
  { name: "Python", category: "Linguagem" },
  { name: "TypeScript", category: "Linguagem" },
  { name: "Docker", category: "Container" },
  { name: "Kubernetes", category: "Orquestração" }
];

export default function Agno() {
  return (
    <>
      <Helmet>
        <title>Agno: Inteligência Artificial de Ponta - Growmate</title>
        <meta name="description" content="Descubra como Agno, nosso agente de IA proprietário, transforma negócios com automação inteligente, análise preditiva e atendimento personalizado." />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <Header />

        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-transparent to-fuchsia-700/10"></div>
          <Container size="lg" className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center items-center mb-6">
                <img
                  src="/logos/agno.png"
                  alt="Agno"
                  className="h-16 w-auto brightness-0 invert"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Inteligência <span className="text-pink-400">Artificial</span> que Transforma
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Conheça Agno, o coração inteligente da Growmate. Um agente de IA proprietário que revoluciona
                como sua empresa opera, toma decisões e cresce no mundo digital.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Falar com Especialista
                </a>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Core Concepts */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Os <span className="text-pink-400">Pilares</span> do Agno
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Conheça os fundamentos que tornam o Agno o agente de IA mais poderoso e adaptável do mercado.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreConcepts.map((concept, index) => (
                <motion.div
                  key={concept.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card glowColor="pink" hoverable className="h-full">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-pink-900/40 rounded-lg text-pink-400">
                          {concept.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{concept.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-3">{concept.description}</p>
                      <p className="text-sm text-gray-400 italic">{concept.details}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Workflow Visualization */}
        <section className="py-20 bg-black-secondary/50">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Como o Agno <span className="text-pink-400">Pensa e Age</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Um passeio pelo cérebro digital do Agno, mostrando cada etapa do processo de inteligência artificial.
              </p>
            </motion.div>

            <div className="relative">
              <div className="space-y-8">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="flex-1">
                      <Card glowColor="pink" className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-pink-900/40 rounded-full flex items-center justify-center text-pink-400">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-300">{step.description}</p>
                          </div>
                          <div className="text-pink-400">{step.icon}</div>
                        </div>
                      </Card>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-px h-16 bg-gradient-to-b from-pink-400/50 to-transparent"></div>
                    </div>
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Real World Applications */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Agno na <span className="text-pink-400">Vida Real</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Veja como Agno transforma conceitos de IA em soluções práticas que revolucionam negócios.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {realWorldApplications.map((application, index) => (
                <motion.div
                  key={application.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card glowColor="pink" className="p-8 h-full">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 p-3 bg-pink-900/40 rounded-lg text-pink-400">
                        {application.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">{application.title}</h3>
                        <p className="text-gray-300 mb-4">{application.description}</p>
                        <div className="space-y-2">
                          {application.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Advantages */}
        <section className="py-20 bg-black-secondary/50">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Por Que o Agno é <span className="text-pink-400">Diferente</span>?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-pink-900/40 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-400">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Tech Stack */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Tecnologias que <span className="text-pink-400">Potencializam</span> o Agno
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Construído com as tecnologias mais avançadas do mercado para oferecer performance e confiabilidade excepcionais.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-center"
                >
                  <Card className="bg-black-secondary border-gray-800 hover:border-pink-600/50 transition-all duration-300 p-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-600/20 to-fuchsia-600/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-pink-400 font-bold text-sm">
                        {tech.name.slice(0, 2)}
                      </span>
                    </div>
                    <p className="text-white text-sm font-medium mb-1">{tech.name}</p>
                    <p className="text-gray-500 text-xs">{tech.category}</p>
                  </Card>
                </motion.div>
              ))}
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
                Pronto Para <span className="text-pink-400">Transformar</span> Seu Negócio?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Junte-se às centenas de empresas que já estão revolucionando suas operações com Agno.
                Entre em contato e descubra como nossa IA pode impulsionar seus resultados.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
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
