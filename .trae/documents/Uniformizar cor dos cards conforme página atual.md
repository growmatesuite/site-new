## Objetivo
- Deixar os cards da seção ExploreSuite com a mesma cor da página atual (tema), como no exemplo: LangChain → verde, LangGraph → laranja, etc.

## Abordagem
- Atualizar `src/components/sections/ExploreSuite.tsx` para:
  - Detectar `pathname` via `useLocation()`.
  - Mapear `pathname` → `glowColor` do tema.
  - Aplicar esse `glowColor` em todos os cards renderizados (independente do destino), mantendo o filtro que oculta o card da página atual.

## Mapeamento de cores
- `/langchain` → `green`
- `/langgraph` → `orange`
- `/langsmith` → `purple`
- `/agno` → `pink`
- `/crewai` → `coral`
- `/n8n` → `coral`
- `/integracoes` → `green`
- `/growchat` → `green`
- `/growmetrics` → `purple`
- `/growchat-produto` → `whatsapp`

## Escopo
- Apenas o componente `ExploreSuite.tsx` será alterado. Nenhum outro arquivo precisa ser modificado.

## Verificação
- Acessar cada página e confirmar que todos os cards aparecem com o brilho/tema correspondente ao da página.
- Manter acessibilidade e navegação dos cards.

Posso aplicar essa alteração agora?