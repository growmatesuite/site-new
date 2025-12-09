## Objetivo
- Adicionar uma seção de cards clicáveis acima do último CTA em todas as páginas mencionadas, mostrando 2 produtos (GrowChat, GrowMetrics) e 8 páginas (Integrações, LangChain, LangGraph, LangSmith, Agno, CrewAI, n8n, GrowChat). O card da página atual não aparece.

## Componente
- Criar `src/components/sections/ExploreSuite.tsx`:
  - Usa `useLocation()` para obter `pathname` e filtrar o item correspondente (`to === pathname`).
  - Renderiza título/subtítulo e grid de `Card`s com `Link` para cada rota.
  - Itens com `{key, name, description, to, glowColor}`; cores coerentes: 
    - Produtos: GrowChat (green), GrowMetrics (green)
    - Páginas: Integrações (green), LangChain (green), LangGraph (orange), LangSmith (purple), Agno (pink), CrewAI (coral), n8n (coral), GrowChat (green)
  - Botão “Quero conhecer!” dentro do card.

## Inserção da seção
- Inserir `<ExploreSuite />` imediatamente antes do último CTA em:
  - `src/pages/Integracoes.tsx`
  - `src/pages/LangChain.tsx`
  - `src/pages/LangGraph.tsx`
  - `src/pages/LangSmith.tsx`
  - `src/pages/Agno.tsx`
  - `src/pages/CrewAI.tsx`
  - `src/pages/N8n.tsx`
  - `src/pages/GrowChat.tsx`
  - `src/pages/GrowMetrics.tsx`
  - `src/pages/GrowChatProduct.tsx`

## Verificação
- Checar que cada página oculta seu próprio card.
- Confirmar redirecionamentos, hover e foco via teclado.

## Não altera
- CTA existentes permanecem; a nova seção é adicionada logo acima.

Posso implementar agora?