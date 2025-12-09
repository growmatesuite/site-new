import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { useParallax } from '../../hooks/useParallax';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { WHATSAPP_CONTACT_URL } from '../../lib/constants';

export const HeroSection: React.FC = () => {
  const parallaxY = useParallax(0.3);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-gradient rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            transform: prefersReducedMotion ? 'none' : `translateY(${parallaxY}px)`,
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-gradient rounded-full opacity-15 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            transform: prefersReducedMotion ? 'none' : `translateY(${parallaxY * 0.5}px)`,
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-primary/10 border border-green-primary/20">
              <div className="w-2 h-2 bg-green-primary rounded-full mr-3 animate-pulse"></div>
              <span className="text-green-primary text-sm font-medium">Agentes de IA Enterprise Ready</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6"
          >
            Agentes de IA que{' '}
            <span className="gradient-text animate-gradient-shift">
              trabalham por você
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Projetamos, treinamos e orquestramos agentes de IA que entendem seus processos e entregam resultados, de ponta a ponta
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="flex justify-center items-center mb-12"
          >
            <Button href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">Falar com Especialista</Button>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-green-primary mb-1">42%</div>
              <div className="text-sm text-gray-500">redução no tempo de atendimento</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-primary mb-1">3.1x</div>
              <div className="text-sm text-gray-500">aumento na produtividade</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-accent mb-1">99.9%</div>
              <div className="text-sm text-gray-500">uptime garantido</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};
