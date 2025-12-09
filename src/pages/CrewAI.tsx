import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SEO } from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Users, Brain, Workflow, Link2, Expand, Shield } from 'lucide-react';
import ExploreSuite from '@/components/sections/ExploreSuite';
import { WHATSAPP_CONTACT_URL } from '@/lib/constants';

const CrewAI: React.FC = () => {
  const features = [
    {
      title: "Orquestração Multi-Agente",
      description: "Gerencie múltiplos agentes de IA trabalhando em equipe, cada um com papéis específicos e especializações únicas.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Autonomia Colaborativa",
      description: "Agentes que se comunicam entre si, tomam decisões em grupo e executam tarefas complexas de forma coordenada.",
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "Workflows Inteligentes",
      description: "Crie processos automatizados onde cada agente contribui com sua expertise para alcançar objetivos comuns.",
      icon: <Workflow className="h-6 w-6" />
    },
    {
      title: "Integração Seamless",
      description: "Conecte CrewAI com suas ferramentas existentes, APIs e sistemas para automação empresarial completa.",
      icon: <Link2 className="h-6 w-6" />
    },
    {
      title: "Escalabilidade Infinita",
      description: "Adicione novos agentes e capacidades conforme suas necessidades crescem, mantendo performance e eficiência.",
      icon: <Expand className="h-6 w-6" />
    },
    {
      title: "Segurança e Governança",
      description: "Controle total sobre permissões, acessos e comportamentos dos agentes com auditoria completa.",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const useCases = [
    {
      title: "Análise de Mercado",
      description: "Equipe de agentes especializados em coleta de dados, análise de tendências e geração de insights de mercado em tempo real.",
      result: "Redução de 80% no tempo de análise"
    },
    {
      title: "Suporte ao Cliente",
      description: "Agentes especializados em diferentes áreas trabalham juntos para resolver problemas complexos de clientes.",
      result: "Aumento de 95% na satisfação do cliente"
    },
    {
      title: "Desenvolvimento de Conteúdo",
      description: "Criação colaborativa de conteúdo com agentes de pesquisa, redação, revisão e otimização SEO.",
      result: "10x mais conteúdo de qualidade produzido"
    },
    {
      title: "Gestão de Projetos",
      description: "Coordenação automática de equipes virtuais para planejamento, execução e acompanhamento de projetos.",
      result: "Redução de 60% nos prazos de entrega"
    }
  ];

  const techStack = [
    { name: "Python", category: "Linguagem" },
    { name: "OpenAI", category: "LLM" },
    { name: "Anthropic", category: "LLM" },
    { name: "LangChain", category: "Framework" },
    { name: "FastAPI", category: "API" },
    { name: "Docker", category: "Container" },
    { name: "Redis", category: "Cache" },
    { name: "PostgreSQL", category: "Banco de Dados" }
  ];

  return (
    <>
      <Helmet>
        <title>CrewAI: Orquestração Multi-Agente - Growmate</title>
        <meta name="description" content="Descubra como a CrewAI revoluciona a automação empresarial com equipes de agentes de IA trabalhando em colaboração. Transforme seus processos de negócio com inteligência artificial avançada." />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Header />

        {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-black to-black-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,90,80,0.12)_0%,_transparent_50%)]"></div>
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center items-center mb-6">
              <img 
                src="/logos/crewai.svg" 
                alt="CrewAI" 
                className="h-16 w-auto"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Orquestração <span className="text-[#ff5a50]">Multi-Agente</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transforme seus processos de negócio com equipes de agentes de IA trabalhando em perfeita sincronia. 
              Cada agente com sua especialidade, todos colaborando para alcançar resultados extraordinários.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#ff5a50] hover:bg-[#ff7a6a] text-black font-semibold rounded-lg px-8 py-3 transition-colors">
                Falar com Especialista
              </a>
            </div>
          </motion.div>
        </Container>
        </section>

      {/* Features Section */}
      <section id="demo" className="py-20 bg-black-secondary/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por que escolher CrewAI?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A CrewAI permite criar equipes de agentes de IA que trabalham juntos como uma equipe real, 
              cada um contribuindo com suas habilidades únicas para alcançar objetivos complexos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800 hover:border-[#ff5a50] transition-all duration-300 h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#ff5a50]/20 rounded-lg text-[#ff5a50]">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases Section */}
      <section id="casos" className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Casos de Sucesso
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Veja como empresas estão usando CrewAI para revolucionar seus processos 
              e alcançar resultados extraordinários.
            </p>
          </motion.div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-8",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                <div className="lg:w-1/2">
                  <Card className="bg-black-secondary border-gray-800 p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#ff5a50] rounded-full"></div>
                      <span className="text-[#ff5a50] font-semibold">
                        {useCase.result}
                      </span>
                    </div>
                  </Card>
                </div>
                
              </motion.div>
            ))}
          </div>
          <div className="mt-16">
            <div className="flex justify-center gap-3 mb-6">
              <Toggle viewLabel="Equipe" activeLabel="Equipe" inactiveLabel="Fluxo" />
            </div>
            <AgentShowcase />
          </div>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-black-secondary">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tecnologias Integradas
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              CrewAI se integra perfeitamente com as tecnologias mais avançadas do mercado 
              para oferecer uma solução completa e robusta.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-black border-gray-800 hover:border-[#ff5a50] transition-all duration-300 p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-primary/20 to-transparent rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-[#ff5a50] font-bold text-sm">
                      {tech.name.slice(0, 2)}
                    </span>
                  </div>
                  <p className="text-white text-sm font-medium mb-1">{tech.name}</p>
                  <p className="text-gray-500 text-xs">{tech.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <ExploreSuite />

      {/* CTA Section */}
      <section className="py-20 bg-black-secondary/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para revolucionar seus processos com CrewAI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Entre em contato com nossa equipe de especialistas e descubra como CrewAI pode 
              transformar sua empresa com automação inteligente multi-agente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer" size="lg" className="bg-[#ff5a50] hover:bg-[#ff7a6a] text-black font-semibold">Falar com Especialista</Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
      </div>
    </>
  );
};

const Toggle: React.FC<{ viewLabel: string; activeLabel: string; inactiveLabel: string }> = ({ viewLabel, activeLabel, inactiveLabel }) => {
  const [active, setActive] = useState<'team' | 'flow'>('team');
  return (
    <div className="inline-flex rounded-lg border border-gray-800 overflow-hidden">
      <button onClick={() => setActive('team')} className={cn("px-4 py-2 text-sm", active === 'team' ? "bg-[#ff5a50] text-black" : "bg-black text-gray-400 hover:text-white")}>{activeLabel}</button>
      <button onClick={() => setActive('flow')} className={cn("px-4 py-2 text-sm", active === 'flow' ? "bg-[#ff5a50] text-black" : "bg-black text-gray-400 hover:text-white")}>{inactiveLabel}</button>
    </div>
  );
};

const AgentShowcase: React.FC = () => {
  const [mode, setMode] = useState<'team' | 'flow'>('team');
  return (
    <div className="grid gap-8">
      <AgentCanvas />
      <WorkflowTimeline />
    </div>
  );
};

const AgentCanvas: React.FC = () => {
  return (
    <div className="relative rounded-2xl p-8 bg-gradient-to-br from-[#ff5a50]/15 to-transparent">
      <div className="relative h-80">
        <svg className="absolute inset-0 w-full h-full">
          <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#ff5a50" strokeWidth="2" strokeLinecap="round" />
          <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#ff5a50" strokeWidth="2" strokeLinecap="round" />
          <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#ff5a50" strokeWidth="2" strokeLinecap="round" />
          <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#ff5a50" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-36 h-36 rounded-full bg-black border border-[#ff5a50] flex items-center justify-center shadow-[0_0_24px_rgba(255,90,80,0.35)]">
            <span className="text-white font-semibold">Orquestrador</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="absolute left-[20%] top-[20%]">
          <AgentNode label="Planner" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="absolute left-[80%] top-[20%] -translate-x-full">
          <AgentNode label="Researcher" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="absolute left-[20%] top-[80%] -translate-y-full">
          <AgentNode label="Executor" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="absolute left-[80%] top-[80%] -translate-x-full -translate-y-full">
          <AgentNode label="Reviewer" />
        </motion.div>
      </div>
    </div>
  );
};

const AgentNode: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="text-center">
      <div className="w-14 h-14 rounded-full bg-[#ff5a50] flex items-center justify-center mb-2">
        <span className="text-black font-bold">{label.slice(0,1)}</span>
      </div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
};

const WorkflowTimeline: React.FC = () => {
  const steps = [
    { title: 'Planejamento', desc: 'Definição de objetivos e decomposição de tarefas.' },
    { title: 'Execução', desc: 'Agentes operam em paralelo com coordenação central.' },
    { title: 'Validação', desc: 'Revisão, verificação e geração do output final.' }
  ];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {steps.map((s, i) => (
        <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
          <Card className="bg-black-secondary border-gray-800">
            <div className="p-6">
              <div className="h-1 w-full bg-[#ff5a50] mb-4"></div>
              <div className="text-white font-semibold mb-2">{s.title}</div>
              <div className="text-gray-400 text-sm">{s.desc}</div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default CrewAI;
