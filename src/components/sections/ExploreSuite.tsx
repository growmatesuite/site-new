import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

type Item = {
  key: string;
  name: string;
  description: string;
  to: string;
  glowColor: 'green' | 'purple' | 'coral' | 'whatsapp' | 'pink' | 'orange' | 'blue' | 'cyan';
};

const items: Item[] = [
  // Produtos
  { key: 'GrowChatProduct', name: 'GrowChat', description: 'Transforme o relacionamento com clientes e capture leads melhores.', to: '/growchat', glowColor: 'green' },
  { key: 'GrowMetrics', name: 'GrowMetrics', description: 'Mensuração NPS, CSAT, CES e insights com IA em tempo real.', to: '/growmetrics', glowColor: 'green' },
  { key: 'GrowCOEX', name: 'GrowCOEX', description: 'API Oficial + WhatsApp App. O melhor dos dois mundos.', to: '/growcoex', glowColor: 'green' },
  // Páginas internas
  { key: 'Integracoes', name: 'Integrações', description: 'Conecte-se às principais ferramentas e plataformas do mercado.', to: '/integracoes', glowColor: 'green' },
  { key: 'LangChain', name: 'LangChain', description: 'Framework para construir agentes e cadeias inteligentes.', to: '/langchain', glowColor: 'green' },
  { key: 'LangGraph', name: 'LangGraph', description: 'Orquestração adaptativa por grafos de estado.', to: '/langgraph', glowColor: 'orange' },
  { key: 'LangSmith', name: 'LangSmith', description: 'Observabilidade e avaliação de agentes e LLMs.', to: '/langsmith', glowColor: 'blue' },
  { key: 'Agno', name: 'Agno', description: 'Nosso agente proprietário que transforma operações.', to: '/agno', glowColor: 'pink' },
  { key: 'CrewAI', name: 'CrewAI', description: 'Orquestração multi-agente colaborativa.', to: '/crewai', glowColor: 'coral' },
  { key: 'n8n', name: 'n8n', description: 'Automação visual de workflows sem limites.', to: '/n8n', glowColor: 'coral' },
];

export const ExploreSuite: React.FC = () => {
  const { pathname } = useLocation();
  const visibleItems = items.filter((i) => i.to !== pathname);

  const themeColorMap: Record<string, Item['glowColor']> = {
    '/langchain': 'green',
    '/langgraph': 'orange',
    '/langsmith': 'blue',
    '/agno': 'pink',
    '/crewai': 'coral',
    '/n8n': 'coral',
    '/integracoes': 'green',
    '/growmetrics': 'purple',
    '/nps': 'purple',
    '/csat': 'green',
    '/ces': 'cyan',
    '/pmf': 'pink',
    '/enps': 'purple',
    '/growchat': 'whatsapp',
  };
  const themeColor: Item['glowColor'] = themeColorMap[pathname] ?? 'green';

  const accents: Record<Item['glowColor'], { border: string; badgeBg: string; badgeText: string; pillBg: string; pillText: string }> = {
    green: { border: 'border-green-600 hover:border-green-600', badgeBg: 'bg-green-900/40', badgeText: 'text-green-400', pillBg: 'bg-green-900/30', pillText: 'text-green-200' },
    orange: { border: 'border-orange-600 hover:border-orange-600', badgeBg: 'bg-orange-900/40', badgeText: 'text-orange-400', pillBg: 'bg-orange-900/30', pillText: 'text-orange-200' },
    blue: { border: 'border-blue-600 hover:border-blue-600', badgeBg: 'bg-blue-900/40', badgeText: 'text-blue-400', pillBg: 'bg-blue-900/30', pillText: 'text-blue-200' },
    purple: { border: 'border-purple-600 hover:border-purple-600', badgeBg: 'bg-purple-900/40', badgeText: 'text-purple-400', pillBg: 'bg-purple-900/30', pillText: 'text-purple-200' },
    pink: { border: 'border-pink-600 hover:border-pink-600', badgeBg: 'bg-pink-900/40', badgeText: 'text-pink-400', pillBg: 'bg-pink-900/30', pillText: 'text-pink-200' },
    coral: { border: 'border-n8n-primary hover:border-n8n-primary', badgeBg: 'bg-n8n-primary/20', badgeText: 'text-n8n-primary', pillBg: 'bg-n8n-primary/15', pillText: 'text-n8n-primary' },
    whatsapp: { border: 'border-whatsapp-primary hover:border-whatsapp-primary', badgeBg: 'bg-whatsapp-dark/40', badgeText: 'text-whatsapp-primary', pillBg: 'bg-whatsapp-dark/30', pillText: 'text-whatsapp-primary' },
    cyan: { border: 'border-cyan-600 hover:border-cyan-600', badgeBg: 'bg-cyan-900/40', badgeText: 'text-cyan-400', pillBg: 'bg-cyan-900/30', pillText: 'text-cyan-200' },
  };
  const accent = accents[themeColor];

  return (
    <section className="py-20">
      <Container size="lg">
        <div className="text-center mb-12">
          <div className={cn('font-medium mb-2',
            themeColor === 'green' && 'text-green-primary',
            themeColor === 'orange' && 'text-orange-400',
            themeColor === 'purple' && 'text-purple-400',
            themeColor === 'pink' && 'text-pink-400',
            themeColor === 'coral' && 'text-n8n-primary',
            themeColor === 'whatsapp' && 'text-whatsapp-primary',
            themeColor === 'cyan' && 'text-cyan-400'
          )}>Acelere seu crescimento</div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Explore as soluções da Growmate
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item) => (
            <Link key={item.key} to={item.to} aria-label={`Explorar ${item.name}`} className="block">
              <Card glowColor={themeColor} hoverable className={cn('bg-black-secondary p-8 h-full border', accent.border)}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn('w-10 h-10 rounded-full flex items-center justify-center', accent.badgeBg, accent.badgeText)}>
                    <span className="text-sm font-semibold">{item.name.slice(0, 2)}</span>
                  </div>
                  <div className="text-sm text-gray-400">Growmate</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 mb-6">{item.description}</p>
                <div>
                  <span className={cn('inline-flex items-center px-4 py-2 rounded-full text-sm', accent.pillBg, accent.pillText)}>
                    Quero conhecer!
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExploreSuite;
