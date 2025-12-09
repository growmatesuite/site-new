## Objetivo
- Tornar os cards da seção "Orquestração que escala com você" clicáveis, redirecionando para as páginas internas correspondentes.

## Local do código
- `src/components/sections/ToolsSection.tsx`

## Implementação
1. Criar um mapa de rotas: `toolRoutes: Record<string, string>` com:
   - LangChain → `/langchain`
   - LangGraph → `/langgraph`
   - LangSmith → `/langsmith`
   - Agno → `/agno`
   - CrewAI → `/crewai`
   - n8n → `/n8n`
2. Envolver o componente `Card` com `<Link to={toolRoutes[tool.name]}>` quando existir rota para o `tool.name`.
   - Usar `className="block h-full"` no `Link` para preservar layout;
   - Adicionar `aria-label` para acessibilidade (ex.: `Explorar LangChain`).
3. Manter animações e estilos atuais (Framer Motion, hover, glow) sem alteração.
4. Garantir que cards sem rota (se houver) permaneçam não clicáveis.

## Verificação
- Navegar e testar cada card; confirmar redirecionamento correto.
- Checar foco via teclado e comportamento de hover.

## Arquivo afetado
- `src/components/sections/ToolsSection.tsx`

Posso aplicar agora?