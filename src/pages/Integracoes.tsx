import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ExploreSuite from '@/components/sections/ExploreSuite';
import { INTEGRATIONS } from '@/lib/constants';
import {
  MessageCircle,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Send as TelegramIcon,
  Workflow as WorkflowIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Slack as SlackIcon,
  Link as LineIcon,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  whatsapp: <MessageCircle className="h-6 w-6" />,
  facebook: <FacebookIcon className="h-6 w-6" />,
  instagram: <InstagramIcon className="h-6 w-6" />,
  telegram: <TelegramIcon className="h-6 w-6" />,
  line: <LineIcon className="h-6 w-6" />,
  sms: <PhoneIcon className="h-6 w-6" />,
  email: <MailIcon className="h-6 w-6" />,
  slack: <SlackIcon className="h-6 w-6" />,
  n8n: <WorkflowIcon className="h-6 w-6" />,
};

export default function Integracoes() {
  return (
    <>
      <Helmet>
        <title>Integrações | Growmate</title>
        <meta name="description" content="Conecte-se com suas plataformas favoritas e centralize todas as conversas em um só lugar." />
      </Helmet>

      <div className="min-h-screen bg-black-base">
        <Header />
        <main className="pt-24 pb-24">
          <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold">Integrações</h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Conecte-se com suas plataformas favoritas e centralize todas as suas conversas
              em um só lugar
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {INTEGRATIONS.map((item, idx) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card glowColor={'green'} hoverable>
                  <div className="flex items-start gap-4">
                    <div className={'h-11 w-11 rounded-lg bg-green-900/40 text-green-400 grid place-items-center'}>
                      <span aria-hidden="true">{iconMap[item.key]}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          </Container>
        </main>
        <ExploreSuite />
        <Footer />
      </div>
    </>
  );
}
