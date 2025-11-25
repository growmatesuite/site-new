## Objetivo
- Substituir o bloco repetitivo de "Agente 1–4" por uma visualização dinâmica e clara das funcionalidades da CrewAI.
- Trocar o verde atual por laranja da marca CrewAI em toda a página.

## Direção Visual
- Adotar o laranja da marca: usar `#ff5a50` (extraído de `public/logos/crewai.svg`) como cor principal.
- Aplicar laranja em acentos, gradientes, ícones, badges e destaques que hoje usam `green-primary`.

## Redesenho da Demonstração
- Remover a grade estática de 4 agentes.
- Criar uma seção "Orquestração em Ação" com um canvas interativo (sem libs extras) usando `framer-motion`:
  - Layout radial: nó central "Orquestrador" e 4 nós: "Planner", "Researcher", "Executor", "Reviewer".
  - Conexões em SVG com `stroke-[#ff5a50]` e animação de fluxo (traço que se move suavemente).
  - Hover em cada nó mostra tooltip curto com a função e um mini exemplo.
- Alternativamente (toggle no topo): "Fluxo de Trabalho" com linha do tempo horizontal (3 etapas: Planejamento → Execução → Validação), cada etapa com microcards e animação sutil.

## Ajustes de Cores na Página
- Substituições locais em `src/pages/CrewAI.tsx` (usar utilitários Tailwind arbitrários, sem mexer no tema global):
  - `bg-green-primary` → `bg-[#ff5a50]`
  - `text-green-primary` → `text-[#ff5a50]`
  - `border-green-primary` → `border-[#ff5a50]`
  - Gradientes: `from-green-primary`/`to-green-secondary` → `from-[#ff5a50] to-[#ff7a6a]` (tom secundário mais claro)
  - `shadow-glow-green` (se usado) → criar classe equivalente via inline `shadow-[0_0_24px_rgba(255,90,80,0.35)]`

## Conteúdo e Estrutura
- Manter as seções já criadas (Hero, Por que escolher, Casos, Tecnologias, CTA), mas:
  - Atualizar ícones e detalhes para reforçar multi-agente.
  - Integrar o novo canvas na seção atualmente marcada com `id="casos"` ou criar uma seção "Orquestração em Ação" entre Features e Casos.

## Implementação
- Atualizar `src/pages/CrewAI.tsx`:
  - Introduzir componentes internos `AgentCanvas` e `WorkflowTimeline` com `framer-motion` e Tailwind.
  - Aplicar substituições de cor (usar classes arbitrárias Tailwind com hex).
- Não alterar `tailwind.config.js`; manter mudanças encapsuladas na página CrewAI.

## Testes e Verificação
- Rodar checagem de tipos (`npm run check`) e servidor de dev para validar interações.
- Verificar navegação via footer até `/crewai`.

## Entregáveis
- Página CrewAI redesenhada com acento laranja e visualização interativa de funcionalidades, mantendo performance e consistência com o design atual.