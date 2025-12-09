## Objetivo
Fazer o fluxo de trabalho no último card (“Suporte ao Cliente”) seguir o mesmo padrão visual dos cards ao lado, evitando quebra e desalinhamento.

## Ajustes propostos
- Impedir quebra de linha nos chips do fluxo e nos ícones de seta.
- Garantir um único eixo horizontal com scroll quando necessário.

## Mudanças técnicas
- Em `src/pages/N8n.tsx`:
  - Alterar o container dos steps de `flex flex-wrap gap-2` para `flex flex-nowrap gap-2 overflow-x-auto`.
  - Adicionar `whitespace-nowrap` aos chips e às setas (para não quebrar).

## Resultado esperado
- Os quatro steps aparecem alinhados em uma única linha com setas entre eles, como nos demais cards; caso não caibam, o container rola horizontalmente mantendo o padrão.

Posso aplicar agora?