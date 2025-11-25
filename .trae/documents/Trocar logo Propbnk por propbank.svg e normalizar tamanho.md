## Objetivo
- Usar o novo arquivo `/logos/propbank.svg` na seção “Empresas que confiam na Growmate” e deixar o logo com o mesmo tamanho visual das demais.

## Alterações
- Em `src/components/sections/SocialProofSection.tsx`:
  - Substituir a entrada atual da Propbnk para `{ src: '/logos/propbank.svg', alt: 'Propbank' }`.
  - Remover overrides anteriores de escala da Propbnk.
  - Garantir classes consistentes: `h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100`.

## Verificação
- Recarregar a Home e confirmar que o novo SVG aparece e está proporcional às demais logos.

Posso aplicar agora?