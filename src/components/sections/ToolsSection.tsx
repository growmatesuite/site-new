import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Container } from '../ui/Container';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { Link } from 'react-router-dom';

const tools = [
  {
    name: 'LangChain',
    description: 'Framework para aplicações LLM',
    icon: '🔗',
    color: 'green' as const,
    features: ['Chains', 'Agents', 'Memory', 'Callbacks'],
  },
  {
    name: 'LangGraph',
    description: 'Orquestração de fluxos complexos',
    icon: '🔄',
    color: 'purple' as const,
    features: ['State Graphs', 'Cycles', 'Persistence', 'Streaming'],
  },
  {
    name: 'LangSmith',
    description: 'Observabilidade e avaliação de modelos e agentes',
    icon: '🧪',
    color: 'purple' as const,
    features: ['Tracing', 'Datasets', 'Evaluation', 'Monitoring'],
  },
  {
    name: 'Agno',
    description: 'Plataforma de agentes especializados',
    icon: '🎯',
    color: 'purple' as const,
    features: ['Swarm', 'Specialized', 'Adaptive', 'Scalable'],
  },
  {
    name: 'CrewAI',
    description: 'Agentes colaborativos inteligentes',
    icon: '👥',
    color: 'green' as const,
    features: ['Role-based', 'Delegation', 'Tools', 'Memory'],
  },
  {
    name: 'n8n',
    description: 'Automação visual de workflows',
    icon: '⚡',
    color: 'green' as const,
    features: ['Visual Editor', 'Integrations', 'Webhooks', 'AI Nodes'],
  },
];

const logoPairs: Record<string, [string, string]> = {
  LangChain: ['/logos/langchain.svg', '/logos/langchain-text.svg'],
  LangGraph: ['/logos/langgraph.svg', '/logos/langgraph-text.svg'],
  LangSmith: ['/logos/langsmith.svg', '/logos/langsmith-text.svg'],
};

const singleLogoMap: Record<string, string> = {
  CrewAI: '/logos/crewai.svg',
  Agno: '/logos/agno.png',
  n8n: '/logos/n8n.png',
};

export const ToolsSection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
      },
    },
  };

  const toolRoutes: Record<string, string> = {
    LangChain: '/langchain',
    LangGraph: '/langgraph',
    LangSmith: '/langsmith',
    Agno: '/agno',
    CrewAI: '/crewai',
    n8n: '/n8n',
    GrowChat: '/growchat',
  };

  return (
    <section className="pt-12 pb-24 relative">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-green-primary font-medium">Tecnologias</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Orquestração que{' '}
            <span className="gradient-text">escala com você</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Integramos as melhores ferramentas do mercado para criar soluções de IA que se adaptam às suas necessidades
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tools.map((tool, index) => (
            <motion.div key={tool.name} variants={itemVariants}>
              {toolRoutes[tool.name] ? (
                <Link
                  to={toolRoutes[tool.name]}
                  aria-label={`Explorar ${tool.name}`}
                  className="block h-full"
                >
                  <Card
                    glowColor={tool.color}
                    hoverable
                    className="h-full p-6 flex flex-col"
                  >
                    <div className="flex items-center mb-4">
                      {logoPairs[tool.name] ? (
                        <div className="flex items-center mr-4 gap-2" aria-hidden="true">
                          <img
                            src={logoPairs[tool.name][0]}
                            alt={`${tool.name} marca`}
                            className="h-7 w-auto brightness-0 invert"
                            onError={(e) => {
                              const fallback = e.currentTarget.parentElement?.querySelector('.emoji-fallback') as HTMLElement;
                              if (fallback) fallback.classList.remove('hidden');
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <img
                            src={logoPairs[tool.name][1]}
                            alt={`${tool.name} texto`}
                            className="h-5 w-auto opacity-90 brightness-0 invert"
                            onError={(e) => {
                              const fallback = e.currentTarget.parentElement?.querySelector('.emoji-fallback') as HTMLElement;
                              if (fallback) fallback.classList.remove('hidden');
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="emoji-fallback hidden text-3xl">{tool.icon}</div>
                        </div>
                      ) : singleLogoMap[tool.name] ? (
                        <div className="flex items-center mr-4" aria-hidden="true">
                          <img
                            src={singleLogoMap[tool.name]}
                            alt={`${tool.name} marca`}
                            className={tool.name === 'Agno' ? 'h-7 w-auto brightness-0 invert' : 'h-7 w-auto'}
                            onError={(e) => {
                              const fallback = e.currentTarget.parentElement?.querySelector('.emoji-fallback') as HTMLElement;
                              if (fallback) fallback.classList.remove('hidden');
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="emoji-fallback hidden text-3xl">{tool.icon}</div>
                        </div>
                      ) : (
                        <div className="text-3xl mr-4">{tool.icon}</div>
                      )}
                      {!(logoPairs[tool.name] || singleLogoMap[tool.name]) && (
                        <h3 className="text-xl font-heading font-semibold text-white">
                          {tool.name}
                        </h3>
                      )}
                    </div>

                    <p className="text-gray-400 mb-6 flex-grow">
                      {tool.description}
                    </p>

                    <div className="space-y-2">
                      {tool.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center text-sm text-gray-500"
                        >
                          <div className={tool.name === 'n8n' ? 'w-1.5 h-1.5 bg-n8n-primary rounded-full mr-3' : 'w-1.5 h-1.5 bg-green-primary rounded-full mr-3'}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </Card>
                </Link>
              ) : (
                <Card
                  glowColor={tool.color}
                  hoverable
                  className="h-full p-6 flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    {logoPairs[tool.name] ? (
                      <div className="flex items-center mr-4 gap-2" aria-hidden="true">
                        <img
                          src={logoPairs[tool.name][0]}
                          alt={`${tool.name} marca`}
                          className="h-7 w-auto brightness-0 invert"
                          onError={(e) => {
                            const fallback = e.currentTarget.parentElement?.querySelector('.emoji-fallback') as HTMLElement;
                            if (fallback) fallback.classList.remove('hidden');
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <img
                          src={logoPairs[tool.name][1]}
                          alt={`${tool.name} texto`}
                          className="h-5 w-auto opacity-90 brightness-0 invert"
                          onError={(e) => {
                            const fallback = e.currentTarget.parentElement?.querySelector('.emoji-fallback') as HTMLElement;
                            if (fallback) fallback.classList.remove('hidden');
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="emoji-fallback hidden text-3xl">{tool.icon}</div>
                      </div>
                    ) : singleLogoMap[tool.name] ? (
                      <div className="flex items-center mr-4" aria-hidden="true">
                        <img
                          src={singleLogoMap[tool.name]}
                          alt={`${tool.name} marca`}
                          className={tool.name === 'Agno' ? 'h-7 w-auto brightness-0 invert' : 'h-7 w-auto'}
                          onError={(e) => {
                            const fallback = e.currentTarget.parentElement?.querySelector('.emoji-fallback') as HTMLElement;
                            if (fallback) fallback.classList.remove('hidden');
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="emoji-fallback hidden text-3xl">{tool.icon}</div>
                      </div>
                    ) : (
                      <div className="text-3xl mr-4">{tool.icon}</div>
                    )}
                    {!(logoPairs[tool.name] || singleLogoMap[tool.name]) && (
                      <h3 className="text-xl font-heading font-semibold text-white">
                        {tool.name}
                      </h3>
                    )}
                  </div>

                  <p className="text-gray-400 mb-6 flex-grow">
                    {tool.description}
                  </p>

                  <div className="space-y-2">
                    {tool.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className={tool.name === 'n8n' ? 'w-1.5 h-1.5 bg-n8n-primary rounded-full mr-3' : 'w-1.5 h-1.5 bg-green-primary rounded-full mr-3'}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">
            E muito mais. Suportamos dezenas de frameworks e ferramentas.
          </p>
          <Link to="/integracoes" className="text-green-primary hover:text-green-secondary transition-colors duration-200 font-medium">
            Ver todas as integrações →
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};
