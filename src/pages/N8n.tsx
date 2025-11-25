import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Zap, Workflow, Puzzle, Target, Rocket, BarChart3, Users, Settings } from 'lucide-react';
import ExploreSuite from '@/components/sections/ExploreSuite';

const n8nFeatures = [
  {
    title: 'Automação Visual',
    icon: <Workflow className="h-6 w-6" />,
    description: 'Crie fluxos complexos com interface drag-and-drop intuitiva.',
    details: 'Monte automações como se estivesse conectando peças de LEGO: visual, simples e poderoso.',
  },
  {
    title: 'Integração Total',
    icon: <Puzzle className="h-6 w-6" />,
    description: 'Conecte mais de 350+ aplicativos e serviços diferentes.',
    details: 'Do WhatsApp ao Salesforce, do Google Sheets ao Slack: tudo se conecta perfeitamente.',
  },
  {
    title: 'Processamento em Tempo Real',
    icon: <Zap className="h-6 w-6" />,
    description: 'Execute automações instantaneamente com triggers inteligentes.',
    details: 'Reaja a eventos em milissegundos, criando experiências fluidas e responsivas.',
  },
  {
    title: 'Escalabilidade Infinita',
    icon: <Target className="h-6 w-6" />,
    description: 'Processe milhões de operações sem perder performance.',
    details: 'Cresça sem limites: nossa infraestrutura escala automaticamente com seu negócio.',
  },
  {
    title: 'Código quando Necessário',
    icon: <Settings className="h-6 w-6" />,
    description: 'Adicione lógica customizada com JavaScript quando precisar.',
    details: 'Tenha o melhor dos dois mundos: simplicidade visual e poder do código quando necessário.',
  },
  {
    title: 'Self-Hosted ou Cloud',
    icon: <Rocket className="h-6 w-6" />,
    description: 'Escolha entre hospedar na nuvem ou manter tudo em seu servidor.',
    details: 'Controle total sobre seus dados e conformidade: você decide onde processar suas automações.',
  },
];

const workflowSteps = [
  {
    step: 1,
    title: 'Trigger Inteligente',
    description: 'Um evento dispara o fluxo: nova mensagem, formulário preenchido, ou agendamento.',
    icon: <Zap className="h-5 w-5" />,
  },
  {
    step: 2,
    title: 'Processamento de Dados',
    description: 'Informações são extraídas, validadas e transformadas conforme necessário.',
    icon: <Settings className="h-5 w-5" />,
  },
  {
    step: 3,
    title: 'Ação Automatizada',
    description: 'O sistema executa ações: envia emails, atualiza sistemas, notifica equipes.',
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    step: 4,
    title: 'Monitoramento e Logs',
    description: 'Tudo é registrado para análise, auditoria e melhoria contínua.',
    icon: <BarChart3 className="h-5 w-5" />,
  },
];

const automationExamples = [
  {
    title: 'Onboarding de Clientes',
    description: 'Automatize todo o processo de boas-vindas para novos clientes.',
    steps: ['Formulário preenchido', 'Email de boas-vindas', 'Criação de conta', 'Notificação equipe'],
    benefits: ['Redução de 80% no tempo de resposta', 'Experiência consistente para todos', 'Zero erros humanos'],
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'Qualificação de Leads',
    description: 'Identifique e qualifique oportunidades de negócio automaticamente.',
    steps: ['Lead entra no sistema', 'Análise de perfil', 'Score de qualificação', 'Distribuição para vendas'],
    benefits: ['Aumento de 60% na taxa de conversão', 'Resposta em menos de 5 minutos', 'Equipe mais focada em fechar'],
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: 'Suporte ao Cliente',
    description: 'Resolva problemas comuns instantaneamente com automações inteligentes.',
    steps: ['Ticket criado', 'Análise do problema', 'Solução automática', 'Escalonamento se necessário'],
    benefits: ['Resolução de 70% dos casos automaticamente', 'Tempo de resposta 10x mais rápido', 'Satisfação do cliente +45%'],
    icon: <BarChart3 className="h-6 w-6" />,
  },
];

export default function N8n() {
  return (
    <>
      <Helmet>
        <title>n8n: Automação Sem Limites: Growmate</title>
        <meta name="description" content="Descubra como o n8n transforma processos complexos em automações simples e poderosas para seu negócio." />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-n8n-primary/20 via-transparent to-n8n-primary/10"></div>
          <Container size="lg" className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center items-center mb-6">
                <img
                  src="/logos/n8n.png"
                  alt="n8n"
                  className="h-16 w-auto"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Automação de <span className="text-n8n-primary">Workflows</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transforme processos manuais em máquinas de eficiência que funcionam 24/7 sem intervenção humana
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:ops@growmate.io"
                  className="border border-n8n-primary text-n8n-primary hover:bg-n8n-primary hover:text-black px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Falar com Especialista
                </a>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Core Features */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Por Que <span className="text-n8n-primary">n8n</span> é Diferente?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Conheça os superpoderes que tornam o n8n a escolha número um para automação empresarial de alto nível.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {n8nFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card glowColor="coral" hoverable className="h-full">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-n8n-primary/20 rounded-lg text-n8n-primary">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-3">{feature.description}</p>
                      <p className="text-sm text-gray-400 italic">{feature.details}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-black-secondary/50">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Como Funciona a <span className="text-n8n-primary">Mágica</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Simples assim: conecte, configure e deixe o n8n trabalhar para você.
              </p>
            </motion.div>

            <div className="relative">
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
                      <Card glowColor="coral" className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-n8n-primary/20 rounded-full flex items-center justify-center text-n8n-primary">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-300">{step.description}</p>
                          </div>
                          <div className="text-n8n-primary">{step.icon}</div>
                        </div>
                      </Card>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-px h-16 bg-gradient-to-b from-n8n-primary/50 to-transparent"></div>
                    </div>
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Automation Examples */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Automações Que <span className="text-n8n-primary">Transformam</span> Negócios
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Veja como empresas reais estão usando n8n para revolucionar suas operações diárias.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationExamples.map((example, index) => (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card glowColor="coral" className="p-8 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-n8n-primary/20 rounded-lg text-n8n-primary">
                        {example.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{example.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{example.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-n8n-primary mb-3">Fluxo de Trabalho:</h4>
                      {example.title === 'Suporte ao Cliente' ? (
                        <div className="space-y-2">
                          {example.steps.map((step, stepIndex) => (
                            <div key={step} className="flex items-center gap-2">
                              <span className="px-3 py-1 bg-n8n-primary/20 rounded-full text-xs text-n8n-primary/80">
                                {step}
                              </span>
                              {stepIndex < example.steps.length - 1 && (
                                <span className="text-n8n-primary text-xs">→</span>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {example.steps.map((step, stepIndex) => (
                            <React.Fragment key={step}>
                              <span className="px-3 py-1 bg-n8n-primary/20 rounded-full text-xs text-n8n-primary/80">
                                {step}
                              </span>
                              {stepIndex < example.steps.length - 1 && (
                                <span className="text-n8n-primary text-xs self-center">→</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-n8n-primary mb-3">Resultados:</h4>
                      <div className="space-y-2">
                        {example.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-n8n-primary rounded-full"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
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
                Pronto Para <span className="text-n8n-primary">Automatizar</span> Seu Negócio?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Vamos criar máquinas de automação que trabalham 24/7 para seu negócio crescer sem limites.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:ops@growmate.io"
                  className="border border-n8n-primary text-n8n-primary hover:bg-n8n-primary hover:text-black px-6 py-3 rounded-lg font-medium transition-colors"
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
