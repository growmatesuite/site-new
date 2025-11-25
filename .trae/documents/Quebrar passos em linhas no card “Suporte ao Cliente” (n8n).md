## Objetivo
Exibir cada passo do fluxo de trabalho do card “Suporte ao Cliente” em uma linha separada com seta à direita, sem afetar os demais cards.

## Mudanças técnicas
- Em `src/pages/N8n.tsx` dentro do mapeamento de `automationExamples`:
  - Renderização condicional:
    - Para `example.title === 'Suporte ao Cliente'`: usar `space-y-2` e, por passo, uma linha `flex items-center gap-2` com chip e seta (exceto no último).
    - Para os demais exemplos: manter o layout atual `flex flex-wrap gap-2` com chips e setas inline.

## Resultado esperado
- “Ticket criado →”
- “Análise do problema →”
- “Solução automática →”
- “Escalonamento se necessário”
Cada um em sua própria linha no card “Suporte ao Cliente”, preservando o estilo dos outros cards.

Posso aplicar agora?