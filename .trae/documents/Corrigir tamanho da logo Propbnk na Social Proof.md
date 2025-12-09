## Problema
A classe `scale-175` não existe no Tailwind padrão, então o aumento não surtiu efeito. Além disso, por ser PNG com margem interna, apenas `h-8` pode não igualar o tamanho visual.

## Solução proposta
- Atualizar o mapeamento de logos em `src/components/sections/SocialProofSection.tsx` para a Propbnk:
  - Usar classes válidas: `h-10 md:h-12 object-contain scale-150` (Tailwind tem `scale-150`).
  - Manter o tom cinza: `brightness-0 invert opacity-60`.
- Ajustar Unimed para manter proporção (se necessário): `h-9 md:h-10 object-contain scale-125`.
- Garantir que o último conjunto de classes de altura sobrescreva o padrão (`h-7 md:h-8`).

## Verificação
- Recarregar a Home e confirmar que a Propbnk está do mesmo tamanho visual das demais.

Posso aplicar estas alterações agora?