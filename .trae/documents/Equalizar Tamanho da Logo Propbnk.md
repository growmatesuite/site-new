## Objetivo
Deixar a logo da Propbnk proporcional às demais sem trocar o arquivo.

## Ajustes Propostos (na SocialProofSection)
- Identificar a entrada da Propbnk e aplicar classes específicas válidas do Tailwind:
  - Tamanho: `h-10 md:h-12`
  - Contenção: `object-contain`
  - Escala: `scale-150` (Tailwind possui 50%, 100%, 125%, 150%, 200%)
  - Cor/estilo: manter `brightness-0 invert opacity-60 hover:opacity-100`
- (Opcional) Se ainda ficar menor, aumentar para `scale-200` ou ajustar `md:h-14`.
- Manter as demais logos em `h-7 md:h-8` com as classes atuais, apenas Unimed continuar com ajuste leve (`scale-110`).

## Implementação
- Editar `src/components/sections/SocialProofSection.tsx` e sobrescrever o `className` apenas para a entrada da Propbnk.

## Verificação
- Recarregar a Home e validar proporção visual. Se necessário, calibrar fino (ex.: `scale-175` não existe; usar `scale-150` ou `scale-200`).

Posso aplicar agora?