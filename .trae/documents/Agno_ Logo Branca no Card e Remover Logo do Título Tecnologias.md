## Objetivo
- Deixar branca a logo do Agno exibida no card acima do texto “Plataforma de agentes especializados”.
- Remover a logo do Agno ao lado do título “Tecnologias” no topo da seção.

## Mudanças
- `src/components/sections/ToolsSection.tsx`
  - No branch que renderiza logos únicas (`singleLogoMap`), aplicar `brightness-0 invert` quando `tool.name === 'Agno'` para o `<img>` do card.
  - Garantir que o cabeçalho da seção (título “Tecnologias”) não exiba o `<img>` do Agno (ficar apenas o texto).

## Verificação
- Home: no card Agno, a marca fica branca; o título “Tecnologias” aparece sem logo ao lado.

Posso aplicar agora?