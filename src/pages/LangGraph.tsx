import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { 
  GitBranch, 
  GitCommit, 
  GitPullRequest, 
  Workflow, 
  Brain, 
  Network, 
  Zap, 
  Target, 
  Rocket, 
  Users,
  MessageSquare,
  BarChart3
} from 'lucide-react';
import ExploreSuite from '@/components/sections/ExploreSuite';

const graphConcepts = [
  {
    title: 'Nodes',
    icon: <GitCommit className="h-6 w-6" />,
    description: 'Pontos de decisão onde o agente executa ações específicas ou processa informações.',
    details: 'Cada nó representa uma etapa do processo: como um posto de trabalho inteligente na sua linha de montagem digital.',
  },
  {
    title: 'Edges',
    icon: <GitBranch className="h-6 w-6" />,
    description: 'Conexões que determinam o fluxo de execução entre os nós baseado em condições.',
    details: 'São como as rodovias digitais que conectam diferentes pontos de decisão, criando caminhos inteligentes.',
  },
  {
    title: 'State Graph',
    icon: <Network className="h-6 w-6" />,
    description: 'Estrutura que mantém o estado da conversa e contexto durante toda a interação.',
    details: 'Funciona como a memória de curto prazo, mantendo tudo organizado e acessível durante a conversa.',
  },
  {
    title: 'Conditional Edges',
    icon: <GitPullRequest className="h-6 w-6" />,
    description: 'Decisões dinâmicas que mudam o fluxo baseado no conteúdo e contexto da conversa.',
    details: 'São como encruzilhadas inteligentes que escolhem o melhor caminho baseado na situação atual.',
  },
  {
    title: 'Memory Management',
    icon: <Brain className="h-6 w-6" />,
    description: 'Sistema avançado de memória que lembra contexto, preferências e histórico.',
    details: 'Cria um perfil dinâmico da conversa, lembrando o que é importante para personalizar respostas.',
  },
  {
    title: 'Parallel Processing',
    icon: <Workflow className="h-6 w-6" />,
    description: 'Executa múltiplas tarefas simultaneamente para respostas mais rápidas e completas.',
    details: 'Como ter vários especialistas trabalhando juntos ao mesmo tempo, cada um focado em uma parte diferente.',
  },
];

const workflowStages = [
  {
    stage: 1,
    title: 'Entrada & Análise',
    description: 'O sistema recebe a mensagem e analisa intenção, sentimento e contexto histórico.',
    icon: <MessageSquare className="h-5 w-5" />,
    color: 'from-blue-900/30 to-blue-700/20',
  },
  {
    stage: 2,
    title: 'Decisão de Fluxo',
    description: 'Baseado na análise, o grafo decide qual caminho seguir: informação, ação ou esclarecimento.',
    icon: <GitBranch className="h-5 w-5" />,
    color: 'from-orange-900/30 to-amber-700/20',
  },
  {
    stage: 3,
    title: 'Processamento Paralelo',
    description: 'Executa múltiplas operações simultaneamente: busca de dados, validações e preparações.',
    icon: <Workflow className="h-5 w-5" />,
    color: 'from-green-900/30 to-green-700/20',
  },
  {
    stage: 4,
    title: 'Síntese & Resposta',
    description: 'Combina todos os resultados em uma resposta coerente, personalizada e contextual.',
    icon: <Zap className="h-5 w-5" />,
    color: 'from-yellow-900/30 to-yellow-700/20',
  },
];

const realWorldScenarios = [
  {
    title: 'Suporte Técnico Inteligente',
    description: 'Um grafo que diagnostica problemas técnicos, consulta base de conhecimento, e escala para humanos quando necessário.',
    features: [
      'Diagnóstico automático de problemas',
      'Consulta a manuais e documentação',
      'Escalonamento inteligente para técnicos',
      'Acompanhamento de resolução'
    ],
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: 'Assistente de Vendas Personalizado',
    description: 'Agente que qualifica leads, recomenda produtos, processa pedidos e fecha vendas.',
    features: [
      'Qualificação de leads em tempo real',
      'Recomendações personalizadas',
      'Processamento de pedidos',
      'Follow-up automatizado'
    ],
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: 'Onboarding de Clientes',
    description: 'Fluxo completo que guia novos clientes através da configuração e adoção do produto.',
    features: [
      'Tutorial interativo personalizado',
      'Configuração guiada passo a passo',
      'Verificação de progresso',
      'Suporte contextual durante o processo'
    ],
    icon: <Users className="h-6 w-6" />,
  },
];

const advantages = [
  {
    title: 'Flexibilidade Total',
    description: 'Crie fluxos complexos que se adaptam a qualquer cenário de negócio.',
    icon: <GitBranch className="h-8 w-8" />,
  },
  {
    title: 'Escalabilidade Infinita',
    description: 'Processe milhares de conversações simultâneas com consistência perfeita.',
    icon: <Rocket className="h-8 w-8" />,
  },
  {
    title: 'Inteligência Adaptativa',
    description: 'Aprenda com cada interação e melhore continuamente as respostas.',
    icon: <Brain className="h-8 w-8" />,
  },
];

export default function LangGraph() {
  return (
    <>
      <Helmet>
        <title>LangGraph: A Arte da Orquestração de Agentes: Growmate</title>
        <meta name="description" content="Descubra como LangGraph cria workflows inteligentes e adaptativos que revolucionam o atendimento ao cliente através de grafos de estado." />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-amber-700/10"></div>
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
                    src="/logos/langgraph.svg"
                    alt="LangGraph marca"
                    className="h-16 w-auto brightness-0 invert"
                  />
                  <img
                    src="/logos/langgraph-text.svg"
                    alt="LangGraph texto"
                    className="h-6 w-auto brightness-0 invert opacity-90"
                  />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Orquestração por <span className="text-orange-400">Grafos de Estado</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Como transformamos fluxos de conversação complexos em experiências fluidas e inteligentes através de grafos de estado
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:ops@growmate.io"
                  className="border border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
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
                Os <span className="text-orange-400">Componentes</span> do Nosso Grafo
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Entenda os elementos fundamentais que tornam nossos agentes de conversação verdadeiramente inteligentes e adaptativos.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {graphConcepts.map((concept, index) => (
                <motion.div
                  key={concept.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card glowColor="orange" hoverable className="h-full">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-orange-900/40 rounded-lg text-orange-400">
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
                Como Nossos <span className="text-orange-400">Grafos</span> Pensam
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Um passeio visual pelo cérebro digital dos nossos agentes, mostrando como cada decisão é tomada em tempo real.
              </p>
            </motion.div>

            <div className="relative">
              {/* Workflow Stages */}
              <div className="space-y-8">
                {workflowStages.map((stage, index) => (
                  <motion.div
                    key={stage.stage}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="flex-1">
                      <Card glowColor="orange" className={`p-6 bg-gradient-to-br ${stage.color}`}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-orange-900/40 rounded-full flex items-center justify-center text-orange-400">
                            {stage.stage}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">{stage.title}</h3>
                            <p className="text-gray-300">{stage.description}</p>
                          </div>
                          <div className="text-orange-400">{stage.icon}</div>
                        </div>
                      </Card>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-px h-16 bg-gradient-to-b from-orange-400/50 to-transparent"></div>
                    </div>
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Real World Scenarios */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                LangGraph na <span className="text-orange-400">Vida Real</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Veja como transformamos interações complexas em experiências fluidas que encantam clientes e impulsionam negócios.
              </p>
            </motion.div>

            <div className="space-y-8">
              {realWorldScenarios.map((scenario, index) => (
                <motion.div
                  key={scenario.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card glowColor="orange" className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 p-3 bg-orange-900/40 rounded-lg text-orange-400">
                        {scenario.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">{scenario.title}</h3>
                        <p className="text-gray-300 mb-4">{scenario.description}</p>
                        <div className="grid md:grid-cols-2 gap-3">
                          {scenario.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
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
                Por Que <span className="text-orange-400">LangGraph</span> é Diferente?
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
                  <div className="w-16 h-16 bg-orange-900/40 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-400">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Technical Deep Dive */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                O <span className="text-orange-400">Cérebro</span> Por Trás da Magia
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Entenda como nossos grafos mantêm estado, tomam decisões e criam experiências verdadeiramente personalizadas.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card glowColor="orange" className="p-8 h-full">
                  <h3 className="text-xl font-semibold mb-4">🧠 Estado Persistente</h3>
                  <p className="text-gray-300 mb-4">
                    Nossos grafos mantêm um estado rico que evolui com cada interação, lembrando contexto, 
                    preferências e histórico para criar conversas cada vez mais personalizadas.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      <span>Contexto de conversação completo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      <span>Preferências do usuário aprendidas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      <span>Histórico de ações e decisões</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card glowColor="orange" className="p-8 h-full">
                  <h3 className="text-xl font-semibold mb-4">⚡ Tomada de Decisão em Tempo Real</h3>
                  <p className="text-gray-300 mb-4">
                    Algoritmos sofisticados avaliam múltiplos fatores instantaneamente para escolher 
                    o melhor caminho de ação, criando respostas relevantes e contextualizadas.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      <span>Análise de sentimento e intenção</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      <span>Avaliação de contexto histórico</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      <span>Seleção ótima de ações</span>
                    </div>
                  </div>
                </Card>
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
                Pronto Para <span className="text-orange-400">Orquestrar</span> Agentes Inteligentes?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Vamos criar grafos de estado que transformam suas conversas em experiências memoráveis 
                e impulsionam resultados reais para seu negócio.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:ops@growmate.io"
                  className="border border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
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
