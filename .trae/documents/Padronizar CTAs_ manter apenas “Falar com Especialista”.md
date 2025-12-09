## Objetivo
Remover CTAs duplicados e padronizar para um único botão "Falar com Especialista" em toda a aplicação (desktop e mobile), mantendo a consistência visual e funcional.

## Escopo (locais a ajustar)
1. Header (desktop e mobile)
   - `src/components/layout/Header.tsx:103-116, 176-183`
   - Ação: remover "Agendar Demo" e quaisquer pares, mantendo só "Falar com Especialista"; preservar `hideCtas` na Trabalhe Conosco.
2. Seções compartilhadas
   - `src/components/sections/HeroSection.tsx:109-112`
   - `src/components/sections/CTASection.tsx:98-102`
   - `src/components/sections/PartnersSection.tsx:131-133`
   - Ação: onde houver dois `<Button>`, deixar apenas o de "Falar com Especialista" (ou adicionar se faltar), removendo os demais rótulos como "Agendar Demo" ou similares.
3. Páginas específicas
   - `src/pages/LangChain.tsx:124-130` (tem "Explorar Integrações")
   - `src/pages/LangSmith.tsx:193-200`
   - `src/pages/Agno.tsx:206-213`
   - `src/pages/LangGraph.tsx:195-201`
   - `src/pages/N8n.tsx:141-147`
   - `src/pages/CrewAI.tsx:117-123, 299-302`
   - Ação: em trechos com dois CTAs lado a lado, manter somente "Falar com Especialista". Se houver apenas um CTA com outro rótulo (p.ex. "Explorar Integrações"), decidir caso a caso: substituir por "Falar com Especialista" nos heros/CTAs principais e mover links secundários para texto/links simples quando necessário.

## Comportamento do botão
- Rótulo: "Falar com Especialista"
- Ação: por padrão, abrir contato (ex.: `mailto:ops@growmate.io`) ou rolar até seção de contato caso exista; usaremos `mailto:ops@growmate.io` onde não há seção específica.
- Estilo: preservar variantes existentes (`primary` ou `tertiary`) conforme contexto visual da página, priorizando `primary` em heros/CTAs.

## Considerações de UX
- Garantir que a remoção de um segundo CTA não quebre layout: ajustar `gap`, alinhar centro e responsividade.
- No header da Trabalhe Conosco, `hideCtas` continua removendo CTAs conforme já implementado.

## Entregáveis
- Código atualizado nos arquivos listados, com verificação local para garantir que nenhum par de CTAs permaneça.

Deseja que eu aplique agora em todos esses pontos?