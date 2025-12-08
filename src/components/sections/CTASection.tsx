import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { WHATSAPP_CONTACT_URL } from '../../lib/constants';

export const CTASection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-brand-gradient opacity-10"></div>
      <div className="absolute inset-0 bg-glow-gradient opacity-20"></div>
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-green-primary/20 rounded-full blur-3xl"
        animate={{
          x: [-200, 200, -200],
          y: [-100, 100, -100],
        }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-primary/20 rounded-full blur-3xl"
        animate={{
          x: [200, -200, 200],
          y: [100, -100, 100],
        }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <div className="w-2 h-2 bg-green-primary rounded-full mr-3 animate-pulse"></div>
              <span className="text-white text-sm font-medium">Comece hoje mesmo</span>
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Pronto para lançar seu{' '}
            <span className="gradient-text">agente de IA?</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Transforme sua operação em semanas, não meses. Nossa equipe de especialistas está pronta para criar a solução perfeita para seu negócio.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center mb-12"
          >
            <a href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">Falar com Especialista</Button>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-primary rounded-full mr-2"></div>
              Implementação em semanas
            </div>
            {/* SLA empresarial removido */}
            <div className="flex items-center">
              <div className="w-2 h-2 bg-cyan-accent rounded-full mr-2"></div>
              Compliance-ready
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
