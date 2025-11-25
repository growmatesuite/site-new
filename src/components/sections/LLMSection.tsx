import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { LLM_MODELS } from '../../lib/constants';

const logoPairs: Record<string, [string, string]> = {
  Grok: ['/logos/grok.svg', '/logos/grok-text.svg'],
  Ollama: ['/logos/ollama.svg', '/logos/ollama-text.svg'],
  OpenAI: ['/logos/openai.svg', '/logos/openai-text.svg'],
  OpenRouter: ['/logos/openrouter.svg', '/logos/openrouter-text.svg'],
  Perplexity: ['/logos/perplexity.svg', '/logos/perplexity-text.svg'],
};

const allowedOrder = [
  'Anthropic',
  'OpenAI',
  'Gemini',
  'DeepSeek',
  'Ollama',
  'Grok',
  'OpenRouter',
  'Perplexity',
];

export const LLMSection: React.FC = () => {
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
    <section className="py-24 bg-black-secondary/50">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-purple-primary font-medium">Modelos</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Modelos sem{' '}
            <span className="gradient-text">bloqueio de fornecedor</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Escolha o modelo ideal para cada caso de uso. Suportamos todos os principais LLMs do mercado com roteamento inteligente
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {allowedOrder
            .map((name) => LLM_MODELS.find((m) => m.name === name))
            .filter((m): m is typeof LLM_MODELS[number] => !!m)
            .map((model) => (
            <motion.div key={model.name} variants={itemVariants}>
              <Card
                glowColor={model.color}
                hoverable
                className="p-6 text-center h-full flex flex-col items-center justify-center"
              >
                {logoPairs[model.name] ? (
                  <div className="flex items-center gap-2">
                    <img
                      src={logoPairs[model.name][0]}
                      alt={`${model.name} marca`}
                      className="h-8 w-auto brightness-0 invert"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                    <img
                      src={logoPairs[model.name][1]}
                      alt={`${model.name} texto`}
                      className="h-6 w-auto opacity-90 brightness-0 invert"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                  </div>
                ) : model.logoUrl ? (
                  <img
                      src={model.logoUrl!}
                      alt={model.name}
                      className="h-8 w-auto brightness-0 invert"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                ) : null}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">
            E mais de 50 outros modelos disponíveis
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Mistral', 'Cohere', 'AI21', 'Stability AI', 'Hugging Face'].map((name) => (
              <span
                key={name}
                className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};