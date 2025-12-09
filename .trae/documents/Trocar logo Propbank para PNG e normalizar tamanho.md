## Objetivo
- Usar o novo arquivo `/logos/propbank.png` na seção “Empresas que confiam na Growmate” e deixar o logo com o mesmo tamanho visual das demais.

## Alterações
- Editar `src/components/sections/SocialProofSection.tsx`:
  - Substituir a entrada atual de Propbank para `{ src: '/logos/propbank.png', alt: 'Propbank' }`.
  - Garantir classes consistentes: `h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100`.
  - Se ainda ficar menor, aplicar apenas a Propbank `md:h-10` para ajuste fino.

## Verificação
- Recarregar a Home e confirmar que a Propbank está proporcional às demais.

Posso aplicar agora?