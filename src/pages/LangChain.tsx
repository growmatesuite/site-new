import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Brain, Zap, Puzzle, Workflow, Database, Shield, Target, Rocket } from 'lucide-react';
import ExploreSuite from '@/components/sections/ExploreSuite';
import { WHATSAPP_CONTACT_URL } from '@/lib/constants';

const concepts = [
  {
    title: 'Chains',
    icon: <Workflow className="h-6 w-6" />,
    description: 'Cadeias de operações que conectam prompts, modelos e ferramentas em sequência lógica.',
    details: 'Imagine uma esteira de montagem inteligente onde cada etapa processa informações antes de passar adiante.',
  },
  {
    title: 'Agents',
    icon: <Brain className="h-6 w-6" />,
    description: 'Agentes autônomos que decidem quais ações tomar baseados no contexto e objetivos.',
    details: 'São como assistentes inteligentes que escolhem as melhores ferramentas para resolver cada tarefa.',
  },
  {
    title: 'Memory',
    icon: <Database className="h-6 w-6" />,
    description: 'Sistema de memória que permite aos agentes lembrar contexto e histórico de conversas.',
    details: 'Funciona como a memória de trabalho, mantendo informações importantes disponíveis durante a interação.',
  },
  {
    title: 'Tools',
    icon: <Puzzle className="h-6 w-6" />,
    description: 'Ferramentas externas que os agentes podem usar: APIs, bancos de dados, calculadoras.',
    details: 'São as habilidades especiais que expandem o que os agentes podem fazer além de apenas conversar.',
  },
  {
    title: 'RAG',
    icon: <Target className="h-6 w-6" />,
    description: 'Retrieval-Augmented Generation: busca informações relevantes antes de responder.',
    details: 'Como um pesquisador que consulta livros antes de dar uma resposta bem fundamentada.',
  },
  {
    title: 'LCEL',
    icon: <Zap className="h-6 w-6" />,
    description: 'LangChain Expression Language: forma elegante de criar cadeias complexas.',
    details: 'É como uma linguagem de programação visual que conecta componentes de forma intuitiva.',
  },
];

const workflowSteps = [
  {
    step: 1,
    title: 'Entrada de Dados',
    description: 'O agente recebe sua pergunta ou tarefa e começa a analisar o contexto.',
    icon: <Brain className="h-5 w-5" />,
  },
  {
    step: 2,
    title: 'Busca Inteligente',
    description: 'Usa RAG para buscar informações relevantes em documentos, bancos de dados e APIs.',
    icon: <Database className="h-5 w-5" />,
  },
  {
    step: 3,
    title: 'Processamento',
    description: 'Aplica chains e tools para processar os dados e gerar insights.',
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    step: 4,
    title: 'Tomada de Decisão',
    description: 'O agente decide a melhor ação baseado nos dados processados e objetivos.',
    icon: <Target className="h-5 w-5" />,
  },
  {
    step: 5,
    title: 'Resposta Personalizada',
    description: 'Entrega uma resposta contextualizada e relevante para sua necessidade específica.',
    icon: <Zap className="h-5 w-5" />,
  },
];

export default function LangChain() {
  return (
    <>
      <Helmet>
        <title>LangChain na Prática: Growmate</title>
        <meta name="description" content="Descubra como LangChain revoluciona o atendimento com IA através de agentes inteligentes e workflows automatizados." />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-green-700/10"></div>
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
                    src="/logos/langchain.svg"
                    alt="LangChain marca"
                    className="h-16 w-auto brightness-0 invert"
                  />
                  <img
                    src="/logos/langchain-text.svg"
                    alt="LangChain texto"
                    className="h-6 w-auto brightness-0 invert opacity-90"
                  />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Cadeias e <span className="text-green-400">Agentes Inteligentes</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Entenda como transformamos conceitos de IA em soluções reais que revolucionam o atendimento ao cliente
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={WHATSAPP_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
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
                Os <span className="text-green-400">Pilares</span> da Nossa Tecnologia
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Conheça os componentes fundamentais que tornam nossos agentes de IA tão poderosos e eficientes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {concepts.map((concept, index) => (
                <motion.div
                  key={concept.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card glowColor="green" hoverable className="h-full">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-900/40 rounded-lg text-green-400">
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
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Como Nossos Agentes <span className="text-green-400">Pensam e Agem</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Um passeio pelo cérebro digital dos nossos agentes, mostrando cada etapa do processo de tomada de decisão.
              </p>
            </motion.div>

            <div className="relative">
              {/* Workflow Steps */}
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
                      <Card glowColor="green" className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-green-900/40 rounded-full flex items-center justify-center text-green-400">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-300">{step.description}</p>
                          </div>
                          <div className="text-green-400">{step.icon}</div>
                        </div>
                      </Card>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-px h-16 bg-gradient-to-b from-green-400/50 to-transparent"></div>
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
                LangChain na <span className="text-green-400">Vida Real</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Veja como transformamos conceitos complexos em soluções práticas que revolucionam negócios.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card glowColor="green" className="p-8 h-full">
                  <h3 className="text-xl font-semibold mb-4">🏢 Atendimento Empresarial Inteligente</h3>
                  <p className="text-gray-300 mb-4">
                    Imagine um assistente que não apenas responde perguntas sobre seus produtos, mas também
                    consulta seu estoque em tempo real, processa pedidos e agenda entregas, tudo em uma
                    conversa natural.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>Integração com sistemas ERP via APIs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>Processamento de pedidos automatizado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>Atualização de status em tempo real</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card glowColor="green" className="p-8 h-full">
                  <h3 className="text-xl font-semibold mb-4">🎯 Qualificação de Leads Avançada</h3>
                  <p className="text-gray-300 mb-4">
                    Nossos agentes analisam conversas, identificam sinais de compra e qualificam leads
                    automaticamente, criando oportunidades de negócio qualificadas para sua equipe.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>Análise de sentimento e intenção</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>Score de qualificação automático</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>Handoff inteligente para vendas</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Why It Matters */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Por Que <span className="text-green-400">Importa</span> Para Seu Negócio?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Velocidade</h3>
                <p className="text-gray-300">
                  Respostas instantâneas 24/7, sem filas de espera ou horários comerciais.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Precisão</h3>
                <p className="text-gray-300">
                  Respostas contextualizadas com seu conhecimento específico, não respostas genéricas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Escala</h3>
                <p className="text-gray-300">
                  Atenda milhares de clientes simultaneamente com a mesma qualidade e consistência.
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
                Pronto Para <span className="text-green-400">Transformar</span> Seu Atendimento?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Vamos criar agentes inteligentes que entendem seu negócio e entregam resultados reais.
                Entre em contato e descubra como LangChain pode revolucionar sua operação.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={WHATSAPP_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
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
