import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Container } from '../ui/Container';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const features = [
  {
    title: 'Agentes multi-etapa com LangGraph',
    description: 'Crie fluxos complexos com estados, ciclos e tomadas de decisão inteligentes',
    icon: '🔄',
    color: 'purple' as const,
    highlights: ['State Management', 'Conditional Logic', 'Error Handling'],
  },
  {
    title: 'Automação ponta a ponta com n8n',
    description: 'Integre sistemas, APIs e serviços com workflows visuais intuitivos',
    icon: '⚡',
    color: 'green' as const,
    highlights: ['Visual Editor', '300+ Integrations', 'Real-time Sync'],
  },
  {
    title: 'Roteamento inteligente de modelos',
    description: 'Selecione automaticamente o melhor modelo baseado em custo, velocidade e qualidade',
    icon: '🎯',
    color: 'purple' as const,
    highlights: ['Cost Optimization', 'Latency Routing', 'Quality Scoring'],
  },
  {
    title: 'Observabilidade e segurança empresarial',
    description: 'Monitore, audite e garanta conformidade com padrões empresariais',
    icon: '🔒',
    color: 'green' as const,
    highlights: ['Audit Logs', 'Compliance', 'Access Control'],
  },
  {
    title: 'APIs para integração',
    description: 'Conecte seus sistemas existentes com APIs RESTful e GraphQL robustas',
    icon: '🔌',
    color: 'purple' as const,
    highlights: ['REST API', 'GraphQL', 'Webhooks'],
  },
  {
    title: 'Escalabilidade automática',
    description: 'Dimensione automaticamente baseado na demanda com infraestrutura serverless',
    icon: '🚀',
    color: 'green' as const,
    highlights: ['Auto-scaling', 'Serverless', 'Global CDN'],
  },
];

export const FeaturesSection: React.FC = () => {
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

  return (
    <section className="py-24">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-green-primary font-medium">Recursos</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Construído para{' '}
            <span className="gradient-text">escalar</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Funcionalidades empresariais que garantem performance, segurança e confiabilidade
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card
                glowColor={feature.color}
                hoverable
                className="p-6 h-full flex flex-col"
              >
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4 mt-1">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="mt-auto space-y-2">
                  {feature.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1 h-1 bg-green-primary rounded-full mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700">
            <div className="w-2 h-2 bg-green-primary rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-400">
              +25 recursos empresariais adicionais
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};