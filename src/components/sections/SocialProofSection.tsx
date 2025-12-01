import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Container } from '../ui/Container';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const testimonials = [
  {
    name: 'Bruno Brasil',
    role: 'Diretor de Operações',
    company: 'Expresso Nacional',
    content: 'A Growmate transformou completamente nossa operação de atendimento. Reduzimos o tempo de resposta em 70% e aumentamos a satisfação do cliente em 45%.',
    photo: '/avatars/bruno-brasil.jpeg',
    rating: 5,
  },
  {
    name: 'Sidney Pimentel',
    role: 'CEO',
    company: 'Propbnk',
    content: 'A capacidade de integrar diferentes modelos de IA e orquestrar fluxos complexos é impressionante. Implementamos em 3 semanas o que levaria meses com outras soluções.',
    photo: '/avatars/sidney-pimentel.jpeg',
    rating: 5,
  },
  {
    name: 'Ricardo Borges',
    role: 'Diretor de Marketing',
    company: 'WCC',
    content: 'ROI extraordinário. Nossos agentes de IA processam 85% das solicitações sem intervenção humana, liberando nossa equipe para tarefas estratégicas.',
    photo: '/avatars/ricardo-borges.jpeg',
    rating: 5,
  },
];

const metrics = [
  {
    value: '50',
    label: 'Agentes de IA',
    suffix: 'Implantados',
    color: 'green' as const,
  },
  {
    value: '2.5M',
    label: 'Interações',
    suffix: 'Processadas',
    color: 'purple' as const,
  },
  {
    value: '30%',
    label: 'Aumento de Conversão',
    suffix: '',
    color: 'green' as const,
  },
  // Removido uptime 99.9% garantido
  {
    value: '45%',
    label: 'Redução de Custos',
    suffix: 'Média',
    color: 'purple' as const,
  },
];

export const SocialProofSection: React.FC = () => {
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
    <section className="py-24 bg-black-secondary/30">
      <Container>
        {/* Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Resultados que{' '}
              <span className="gradient-text">falam por si</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Milhares de empresas já transformaram suas operações com nossos agentes de IA
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                  metric.color === 'green' ? 'text-green-primary' : 'text-purple-primary'
                }`}>
                  {metric.value}
                </div>
                <div className="text-gray-400 font-medium mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.suffix}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              O que nossos clientes dizem
            </h3>
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-green-primary fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  glowColor={index % 2 === 0 ? 'green' : 'purple'}
                  className="p-6 h-full"
                >
                  <div className="mb-4">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-green-primary fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <img src={testimonial.photo} alt={testimonial.name} className="h-10 w-10 rounded-full object-cover mr-3 grayscale" />
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role} na {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-8">
            Empresas que confiam na Growmate
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { src: '/logos/unimed.png', alt: 'Unimed', scale: 'scale-110' },
              { src: '/logos/expresso.svg', alt: 'Expresso Nacional' },
              { src: '/logos/wcc.svg', alt: 'WCC' },
              { src: '/logos/azship.svg', alt: 'AZ Ship' },
              { src: '/logos/cerizze.svg', alt: 'Cerizze' },
              { src: '/logos/propbnk.svg', alt: 'Propbank' },
            ].map((logo) => (
              <div key={logo.alt} className="flex justify-center items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-7 md:h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
