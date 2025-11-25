## Objetivo
Voltar o layout do fluxo de trabalho no card “Suporte ao Cliente” para a versão anterior (com `flex-wrap`, sem `overflow-x` e sem `whitespace-nowrap`).

## Mudança técnica
- Em `src/pages/N8n.tsx` restaurar:
  - Container dos steps: `flex flex-wrap gap-2`.
  - Chips e setas: remover `whitespace-nowrap`.

## Resultado esperado
- Diagramação idêntica à versão anterior, acompanhando o comportamento dos outros cards.

Posso aplicar agora?