import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { WHATSAPP_CONTACT_URL } from '../../lib/constants';

const partners = [
  {
    name: 'Tech Providers',
    logoUrl: '/logos/Meta.svg',
    description: 'Parceiro oficial da Meta para soluções empresariais e integrações com WhatsApp',
    color: 'purple' as const,
    features: [
      'WhatsApp Business API',
      'Cloud API',
      'Webhooks',
      'Templates',
      'Instagram Graph API',
      'Facebook Business',
      'Threads API',
      'Coexistence WhatsApp Business',
    ],
  },
];

export const PartnersSection: React.FC = () => {
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
    <section className="py-24 bg-black-tertiary/50">
      <Container size="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-green-primary font-medium">Parcerias</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Parcerias{' '}
            <span className="gradient-text">estratégicas</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Relacionamentos diretos com os principais players do mercado para garantir a melhor experiência
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div key={partner.name} variants={itemVariants}>
              <Card
                glowColor={partner.color}
                hoverable
                className="p-8 h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <img
                      src={partner.logoUrl}
                      alt={partner.name}
                      className="h-6 md:h-8 w-auto mr-3 brightness-0 invert"
                    />
                    <h3 className="text-2xl font-heading font-semibold text-white">
                      {partner.name}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 max-w-3xl">
                  {partner.description}
                </p>

                <div>
                  <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-3">
                    Capacidades
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {partner.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-800 my-6" />

                <div className="flex">
                  <a href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="sm">Falar com Especialista</Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-6">
            E mais parcerias com:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Google Cloud', 'AWS', 'Azure', 'Twilio', 'SendGrid', 'Stripe'].map((name) => (
              <span
                key={name}
                className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg text-sm"
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
