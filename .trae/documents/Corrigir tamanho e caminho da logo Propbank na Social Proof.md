## Problema
O logo da Propbank aparece menor que as demais e o caminho do arquivo foi alterado para `/logos/propbank.png`.

## Solução
1. Atualizar o caminho da Propbank para usar o novo arquivo PNG:
   - Em `src/components/sections/SocialProofSection.tsx`, trocar a entrada da Propbank para `{ src: '/logos/propbank.png', alt: 'Propbank' }`.
2. Normalizar tamanho visual das logos:
   - Aplicar `object-contain` e altura uniforme.
   - Para compensar margens internas do PNG da Propbank, aplicar override específico:
     - `className` adicional apenas para Propbank: `h-10 md:h-12 scale-150` (mantendo `brightness-0 invert opacity-60`).
   - Manter Unimed com ajuste leve (`scale-110`) se necessário.
3. Verificar visual na Home e ajustar fino se ainda houver diferença (ex.: `scale-200` ou `md:h-14`).

## Estilo Consistente
- Todas: `h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100`.
- Overrides por logo quando necessário.

Posso aplicar essas alterações agora?