import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ExploreSuite from '@/components/sections/ExploreSuite';
import { 
  MessageCircle, 
  Users, 
  Brain, 
  Shield, 
  Target, 
  Zap, 
  Clock, 
  TrendingUp,
  CheckCircle,
  BarChart3,
  Smartphone,
  Settings,
  Mail,
  Phone,
  Star
} from 'lucide-react';

const features = [
  {
    title: 'Atendimento Unificado Entre Equipes',
    description: 'Vendas, suporte, financeiro e gestão colaborando no mesmo ambiente. Histórico único do cliente, zero informação perdida.',
    icon: <Users className="h-6 w-6" />,
    color: 'purple'
  },
  {
    title: 'Multi-WhatsApp com Controle Total',
    description: 'Conecte quantos números precisar e defina exatamente quem acessa cada conversa. Máxima segurança e organização.',
    icon: <Smartphone className="h-6 w-6" />,
    color: 'purple'
  },
  {
    title: 'Transbordamento Inteligente',
    description: 'Sistema que direciona conversas para a pessoa certa no momento ideal — vendas para vendedores, suporte para especialistas.',
    icon: <Target className="h-6 w-6" />,
    color: 'purple'
  },
  {
    title: 'Relatórios de Performance',
    description: 'Descubra qual vendedor converte mais, quais horários geram mais leads e a conversão em cada etapa da jornada do cliente.',
    icon: <BarChart3 className="h-6 w-6" />,
    color: 'purple'
  },
  {
    title: 'IA que Entende seu Negócio',
    description: 'Respostas automáticas personalizadas, qualificação de leads inteligente e identificação de oportunidades de venda.',
    icon: <Brain className="h-6 w-6" />,
    color: 'purple'
  },
  {
    title: 'Disparo de Mensagens',
    description: 'Customize e envie mensagens para a sua base de cliente, somos parceiros oficiais da Meta!',
    icon: <Mail className="h-6 w-6" />,
    color: 'purple'
  }
];

const steps = [
  {
    step: 1,
    title: 'Conecte',
    description: 'Integre seu WhatsApp Business em segundos. Sem complicação, sem mudança de número, sem perder histórico.',
    icon: <Settings className="h-5 w-5" />
  },
  {
    step: 2,
    title: 'Organize',
    description: 'Configure funis de vendas, distribua conversas para a equipe certa e defina automações inteligentes.',
    icon: <BarChart3 className="h-5 w-5" />
  },
  {
    step: 3,
    title: 'Venda Mais',
    description: 'Acompanhe métricas em tempo real, automatize respostas e feche mais vendas com menos esforço.',
    icon: <TrendingUp className="h-5 w-5" />
  }
];

const faqs = [
  {
    question: 'É permitido pelo WhatsApp usar essa plataforma?',
    answer: 'Sim, nossa plataforma é 100% compatível com as políticas do WhatsApp Business. Somos Business Partner do WhatsApp, mas também usamos APIs não oficiais e seguimos todas as diretrizes de uso. Não fazemos automação que viola os termos de serviço.'
  },
  {
    question: 'Preciso trocar meu número de WhatsApp?',
    answer: 'Não! Você continua usando seu número atual. Nós apenas conectamos sua conta WhatsApp Business existente à nossa plataforma. Todo o histórico de conversas é preservado.'
  },
  {
    question: 'Como funciona a LGPD e proteção de dados?',
    answer: 'Estamos 100% em conformidade com a LGPD. Seus dados ficam no Brasil, em servidores seguros. Você mantém total controle sobre as informações dos clientes, com opções de backup e exclusão quando necessário.'
  },
  {
    question: 'E se não funcionar para meu negócio?',
    answer: 'Oferecemos garantia de 30 dias. Se por qualquer motivo não atender suas expectativas, devolvemos 100% do valor investido. Nossa taxa de satisfação é superior a 95%.'
  },
  {
    question: 'Quanto tempo leva para implementar?',
    answer: 'Em média 2 dias úteis. Isso inclui: integração do WhatsApp, configuração dos funis, treinamento da IA para seu negócio e capacitação da sua equipe. Você sai usando imediatamente.'
  },
  {
    question: 'Posso cancelar a gestão mensal quando quiser?',
    answer: 'Sim, não há fidelidade. Você pode cancelar quando quiser!'
  }
];

export default function GrowChatProduct() {
  return (
    <>
      <Helmet>
        <title>GrowChat - Inteligência Artificial no WhatsApp da sua Empresa</title>
        <meta name="description" content="IA no WhatsApp atendendo 24/7 para escalar o atendimento. Centralize conversas, automatize respostas e venda mais com nossa solução completa." />
      </Helmet>
      
      <div className="min-h-screen bg-black text-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-whatsapp-dark/30 via-transparent to-whatsapp-primary/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,211,102,0.1),transparent_70%)]"></div>
          
          <Container size="lg" className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-whatsapp-dark/30 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-whatsapp-primary/30">
                <Star className="h-4 w-4 text-whatsapp-primary" />
                <span className="text-sm font-medium text-whatsapp-primary">Feito para Empresas Brasileiras</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                Inteligência Artificial no 
                <span className="text-[#4FCE5D]"> WhatsApp</span> da sua empresa
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                atendendo 24/7, para escalar o atendimento.
              </p>
              
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
                Centralize todas as conversas de WhatsApp da sua empresa em um só lugar e conecte quantos números você quiser!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button variant="whatsapp" size="lg" className="text-black-base bg-[#4FCE5D] hover:bg-[#128C7E]">
                  Falar com Especialista
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#4FCE5D]" />
                  <span>LGPD Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-[#4FCE5D]" />
                  <span>Controle Total dos Dados</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-[#4FCE5D]" />
                  <span>Suporte Customizado</span>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Subtitle Section */}
        <section className="py-16 bg-black-secondary/30">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                A <span className="text-[#4FCE5D]">solução completa</span> para profissionalizar o relacionamento 
                com seus clientes no WhatsApp
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Centralize, automatize e venda mais! Equipe focada no estratégico enquanto a IA qualifica seus clientes
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Organização <span className="text-[#4FCE5D]">Imediata</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Um painel central para toda a equipe visualizar, gerenciar e responder todas as conversas de WhatsApp da empresa.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card glowColor="whatsapp" hoverable className="h-full">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-whatsapp-dark/40 rounded-lg text-[#4FCE5D]">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CRM Section */}
        <section className="py-20 bg-gradient-to-r from-whatsapp-dark/20 to-whatsapp-primary/10">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                CRM <span className="text-[#4FCE5D]">Leve Integrado</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cada conversa vira um lead rastreável com histórico completo, pipeline visual e métricas que realmente importam.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-whatsapp-dark/40 rounded-full flex items-center justify-center mx-auto mb-4 text-[#4FCE5D]">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lead Rastreável</h3>
                <p className="text-gray-300">
                  Cada conversa se transforma em um lead com histórico completo e rastreamento detalhado.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-whatsapp-dark/40 rounded-full flex items-center justify-center mx-auto mb-4 text-[#4FCE5D]">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pipeline Visual</h3>
                <p className="text-gray-300">
                  Visualize seu funil de vendas com interface intuitiva e gestão simplificada.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-whatsapp-dark/40 rounded-full flex items-center justify-center mx-auto mb-4 text-[#4FCE5D]">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Métricas Reais</h3>
                <p className="text-gray-300">
                  Acompanhe indicadores que realmente importam para o crescimento do seu negócio.
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Vendedor 24/7 Section */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Vendedor <span className="text-[#4FCE5D]">24/7</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                IA treinada no seu negócio para qualificar leads, responder dúvidas frequentes e agendar reuniões automaticamente.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card glowColor="whatsapp" className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">IA Sob Medida para seu Negócio</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#4FCE5D] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Qualificação Inteligente</h4>
                        <p className="text-gray-300 text-sm">Identifica leads qualificados automaticamente</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#4FCE5D] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Respostas Personalizadas</h4>
                        <p className="text-gray-300 text-sm">Responde dúvidas frequentes com seu tom de voz</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#4FCE5D] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Agendamento Automático</h4>
                        <p className="text-gray-300 text-sm">Marca reuniões e compromissos sem intervenção humana</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#4FCE5D]/20 blur-3xl rounded-full"></div>
                  <Brain className="h-32 w-32 text-[#4FCE5D] mx-auto relative z-10" />
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="text-3xl font-bold text-[#4FCE5D]">+2M</div>
                  <div className="text-gray-300">mensagens/mês</div>
                  
                  <div className="text-3xl font-bold text-[#4FCE5D]">95%</div>
                  <div className="text-gray-300">taxa de satisfação</div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-black-secondary/30">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Como <span className="text-[#4FCE5D]">Funciona</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Em 3 passos simples você transforma seu WhatsApp
              </p>
            </motion.div>

            <div className="relative">
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="flex-1">
                      <Card glowColor="whatsapp" className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-whatsapp-dark/40 rounded-full flex items-center justify-center text-[#4FCE5D] text-lg font-bold">
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-300">{step.description}</p>
                          </div>
                          <div className="text-[#4FCE5D]">{step.icon}</div>
                        </div>
                      </Card>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-px h-16 bg-gradient-to-b from-[#4FCE5D]/50 to-transparent"></div>
                    </div>
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-12"
            >
              <Button variant="whatsapp" size="lg" className="text-black-base bg-[#4FCE5D] hover:bg-[#128C7E]">
                Transformar meu WhatsApp agora
              </Button>
              
              <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#4FCE5D]" />
                  <span>Setup em 2 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#4FCE5D]" />
                  <span>Sem mudança de número</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-[#4FCE5D]" />
                  <span>Suporte Customizado</span>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Additional Features */}
        <section className="py-20">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Recursos <span className="text-[#4FCE5D]">Completos</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card glowColor="whatsapp" className="p-8 h-full">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <Zap className="h-6 w-6 text-[#4FCE5D]" />
                    Transbordo entre áreas
                  </h3>
                  <p className="text-gray-300">
                    Transição suave entre departamentos com histórico completo preservado.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card glowColor="whatsapp" className="p-8 h-full">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <MessageCircle className="h-6 w-6 text-[#4FCE5D]" />
                    Omnichannel
                  </h3>
                  <p className="text-gray-300">
                    Integração completa com outros canais de comunicação para experiência unificada.
                  </p>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card glowColor="whatsapp" className="p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Smartphone className="h-6 w-6 text-[#4FCE5D]" />
                  Aplicativo Mobile
                </h3>
                <p className="text-gray-300">
                  Gerencie suas conversas de qualquer lugar com nosso aplicativo mobile completo e intuitivo.
                </p>
              </Card>
            </motion.div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black-secondary/30">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Perguntas <span className="text-[#4FCE5D]">Frequentes</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card glowColor="whatsapp" className="p-6 h-full">
                    <h3 className="text-lg font-semibold mb-3 text-[#4FCE5D]">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <ExploreSuite />

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-whatsapp-dark/40 via-whatsapp-primary/20 to-transparent">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Pronto para ter seu <span className="text-[#4FCE5D]">WhatsApp sob controle?</span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Inteligência Artificial no WhatsApp da sua empresa atendendo 24/7 para escalar o atendimento
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button variant="whatsapp" size="lg" className="text-black-base bg-[#4FCE5D] hover:bg-[#128C7E]">
                  Falar com o especialista
                </Button>
              </div>
              
              <div className="text-center text-sm text-gray-400">
                <div className="mb-2">
                  <span className="text-[#4FCE5D] font-medium">IA sob medida</span> +2M mensagens/mês. <span className="text-[#4FCE5D] font-medium">95% satisfação</span>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}
