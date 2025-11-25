// SEO Configuration
export const SEO_CONFIG = {
  title: 'Growmate: Agentes de IA Enterprise Ready',
  description: 'Criamos, treinamos e orquestramos agentes de IA que entendem seus processos e entregam resultados. Soluções enterprise-ready com implementação em semanas.',
  keywords: 'agentes de IA, inteligência artificial, automação, LangChain, LangGraph, CrewAI, n8n, orquestração, enterprise',
  author: 'Growmate',
  url: 'https://growmate.ai',
  image: 'https://growmate.ai/og-image.jpg',
  twitter: '@growmateai',
};

// Company Information
export const COMPANY_INFO = {
  name: 'Growmate',
  email: 'contato@growmate.ai',
  phone: '+55 11 99999-9999',
  address: 'São Paulo, Brasil',
  cnpj: '00.000.000/0001-00',
};

// Navigation Links
export const NAVIGATION_LINKS = [
  { name: 'Soluções', href: '#solutions' },
  { name: 'Tecnologias', href: '#technologies' },
  { name: 'Casos de Uso', href: '#use-cases' },
  { name: 'Sobre', href: '#about' },
  { name: 'Contato', href: '#contact' },
];

// Social Links
export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/growmate', icon: '💼' },
  { name: 'Twitter', href: 'https://twitter.com/growmateai', icon: '🐦' },
  { name: 'GitHub', href: 'https://github.com/growmate', icon: '🐙' },
  { name: 'YouTube', href: 'https://youtube.com/@growmate', icon: '📺' },
];

// Tools Configuration
export const TOOLS_CONFIG = [
  {
    name: 'LangChain',
    description: 'Framework para aplicações LLM',
    icon: '🔗',
    color: 'green' as const,
    features: ['Chains', 'Agents', 'Memory', 'Callbacks'],
  },
  {
    name: 'LangGraph',
    description: 'Orquestração de fluxos complexos',
    icon: '🔄',
    color: 'purple' as const,
    features: ['State Graphs', 'Cycles', 'Persistence', 'Streaming'],
  },
  {
    name: 'CrewAI',
    description: 'Agentes colaborativos inteligentes',
    icon: '👥',
    color: 'green' as const,
    features: ['Role-based', 'Delegation', 'Tools', 'Memory'],
  },
  {
    name: 'Agno',
    description: 'Plataforma de agentes especializados',
    icon: '🎯',
    color: 'purple' as const,
    features: ['Swarm', 'Specialized', 'Adaptive', 'Scalable'],
  },
  {
    name: 'n8n',
    description: 'Automação visual de workflows',
    icon: '⚡',
    color: 'green' as const,
    features: ['Visual Editor', 'Integrations', 'Webhooks', 'AI Nodes'],
  },
];

// LLM Models Configuration
export const LLM_MODELS = [
  {
    name: 'Anthropic',
    logo: '🤖',
    logoUrl: '/logos/anthropic.svg',
    description: 'Claude: Segurança e confiabilidade',
    color: 'purple' as const,
  },
  {
    name: 'OpenAI',
    logo: '💬',
    logoUrl: '/openai.svg',
    description: 'GPT-4: Líder em capacidades gerais',
    color: 'green' as const,
  },
  {
    name: 'Llama',
    logo: '🦙',
    logoUrl: '/logos/llama.svg',
    description: 'Meta: Open source e customizável',
    color: 'purple' as const,
  },
  {
    name: 'Gemini',
    logo: '💎',
    logoUrl: '/logos/gemini.svg',
    description: 'Google: Multimodal e integrado',
    color: 'green' as const,
  },
  {
    name: 'DeepSeek',
    logo: '🔍',
    logoUrl: '/logos/deepseek.svg',
    description: 'Codificação e raciocínio avançado',
    color: 'purple' as const,
  },
  {
    name: 'Grok',
    logo: '⚡',
    description: 'xAI: Real-time e irreverente',
    color: 'green' as const,
  },
  {
    name: 'Copilot',
    logo: '🧠',
    logoUrl: '/logos/copilot.svg',
    description: 'Microsoft: Produtividade integrada',
    color: 'purple' as const,
  },
];

// Append models present as assets
LLM_MODELS.push(
  {
    name: 'Ollama',
    logo: '🦙',
    logoUrl: '/logos/ollama.svg',
    description: 'Runtime local de modelos, simples e eficiente',
    color: 'purple' as const,
  },
  {
    name: 'Grok',
    logo: '⚡',
    logoUrl: '/logos/grok.svg',
    description: 'xAI: Real-time e irreverente',
    color: 'green' as const,
  }
);

// Additional models
LLM_MODELS.push(
  {
    name: 'OpenRouter',
    logo: '🛣️',
    logoUrl: '/logos/openrouter.svg',
    description: 'Gateway para múltiplos LLMs com roteamento',
    color: 'green' as const,
  },
  {
    name: 'Perplexity',
    logo: '💡',
    logoUrl: '/logos/perplexity.svg',
    description: 'Pesquisa e respostas com modelos avançados',
    color: 'purple' as const,
  }
);

// Features Configuration
export const FEATURES = [
  {
    title: 'Agentes multi-etapa com LangGraph',
    description: 'Crie fluxos complexos com estados, ciclos e tomadas de decisão inteligentes',
    icon: '🔄',
    color: 'purple' as const,
    highlights: ['State Management', 'Conditional Logic', 'Error Handling'],
  },
  {
    title: 'Automação ponta a ponta com n8n',
    description: 'Integre sistemas, APIs e serviços com workflows visuais intuitivos',
    icon: '⚡',
    color: 'green' as const,
    highlights: ['Visual Editor', '300+ Integrations', 'Real-time Sync'],
  },
  {
    title: 'Roteamento inteligente de modelos',
    description: 'Selecione automaticamente o melhor modelo baseado em custo, velocidade e qualidade',
    icon: '🎯',
    color: 'purple' as const,
    highlights: ['Cost Optimization', 'Latency Routing', 'Quality Scoring'],
  },
  {
    title: 'Observabilidade e segurança empresarial',
    description: 'Monitore, audite e garanta conformidade com padrões empresariais',
    icon: '🔒',
    color: 'green' as const,
    highlights: ['Audit Logs', 'Compliance', 'Access Control'],
  },
  {
    title: 'APIs para integração',
    description: 'Conecte seus sistemas existentes com APIs RESTful e GraphQL robustas',
    icon: '🔌',
    color: 'purple' as const,
    highlights: ['REST API', 'GraphQL', 'Webhooks'],
  },
  {
    title: 'Escalabilidade automática',
    description: 'Dimensione automaticamente baseado na demanda com infraestrutura serverless',
    icon: '🚀',
    color: 'green' as const,
    highlights: ['Auto-scaling', 'Serverless', 'Global CDN'],
  },
];

// Integrations Configuration
export const INTEGRATIONS = [
  {
    key: 'whatsapp',
    name: 'WhatsApp',
    description: 'Gerencie suas interações comerciais do WhatsApp a partir do GrowChat',
  },
  {
    key: 'facebook',
    name: 'Facebook',
    description: 'Mantenha-se conectado com seus clientes no Facebook',
  },
  {
    key: 'instagram',
    name: 'Instagram',
    description: 'Mantenha-se conectado com seus clientes no Instagram',
  },
  {
    key: 'telegram',
    name: 'Telegram',
    description: 'Gerencie suas interações com clientes do Telegram através do GrowChat',
  },
  {
    key: 'line',
    name: 'Line',
    description: 'Gerencie suas interações com clientes do Line através do GrowChat',
  },
  {
    key: 'sms',
    name: 'SMS',
    description: 'Gerencie suas interações com clientes via SMS através do GrowChat',
  },
  {
    key: 'email',
    name: 'Email',
    description: 'Gerencie suas interações com clientes por email através do GrowChat',
  },
  {
    key: 'slack',
    name: 'Slack',
    description: 'Responda às consultas dos seus clientes diretamente no Slack',
  },
  {
    key: 'n8n',
    name: 'n8n',
    description: 'Integre suas automações no n8n com o GrowChat',
  },
];

// GrowChat Mock Metrics
export const GROWCHAT_METRICS = {
  surveysSent: 3400,
  responses: 952,
  responseRate: 28.0,
  npsOperator: 79.73,
  positives: 813,
  neutrals: 85,
  detractors: 54,
};

export const GROWCHAT_DISTRIBUTION = {
  // 0-10 distribution
  buckets: [
    { score: 0, value: 5 },
    { score: 1, value: 8 },
    { score: 2, value: 12 },
    { score: 3, value: 20 },
    { score: 4, value: 30 },
    { score: 5, value: 40 },
    { score: 6, value: 60 },
    { score: 7, value: 120 },
    { score: 8, value: 220 },
    { score: 9, value: 380 },
    { score: 10, value: 820 },
  ],
  max: 820,
};

export const GROWCHAT_SENTIMENT = {
  positive: 58,
  neutral: 27,
  negative: 16,
};