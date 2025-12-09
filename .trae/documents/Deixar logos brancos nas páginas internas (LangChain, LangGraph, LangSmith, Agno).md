## Objetivo
Aplicar a cor branca aos logos exibidos no topo das páginas internas de LangChain, LangGraph, LangSmith e Agno.

## Abordagem Técnica
- Usar utilitários do Tailwind para converter os SVG/PNG pretos em branco sem trocar os arquivos de logo.
- Classe recomendada: `brightness-0 invert` (deixa preto → branco em fundo dark, mantendo transparência).
- Não alterar os assets; apenas as classes `className` dos `<img />` em cada página.

## Arquivos e Alterações
- `src/pages/LangChain.tsx`
  - Hero logo: adicionar `className="h-16 w-auto brightness-0 invert"` no `<img src="/logos/langchain.svg" />`.
- `src/pages/LangGraph.tsx`
  - Hero logo: adicionar `className="h-16 w-auto brightness-0 invert"` no `<img src="/logos/langgraph.svg" />`.
- `src/pages/LangSmith.tsx`
  - Hero logo: adicionar `className="h-16 w-auto brightness-0 invert"` no `<img src="/logos/langsmith.svg" />`.
- `src/pages/Agno.tsx`
  - Hero logo: adicionar `className="h-16 w-auto brightness-0 invert"` no `<img src="/logos/agno.png" />`.

## Validação
- Rodar a aplicação e verificar visualmente cada página em tema escuro (padrão do site).
- Confirmar que o logo permanece nítido sobre o fundo, sem artefatos.
- Garantir que outras áreas (por exemplo ToolsSection) não sejam afetadas.

## Observações
- Caso algum logo possua cores internas (não preto puro), `invert` pode produzir branco com tonalidades; se necessário, podemos substituir pelo arquivo correspondente em versão branca. A princípio, todos estes logos funcionam com `invert`.

Confirma que posso aplicar essas classes agora para deixar todos os logos brancos?