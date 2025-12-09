## O que será feito
- Substituir os textos por logos reais na seção de Social Proof, nesta ordem:
  1. Unimed (`/logos/unimed.svg`)
  2. Expresso Nacional (`/logos/expresso.svg`)
  3. WCC (`/logos/wcc.svg`)
  4. AZ Ship (`/logos/azship.svg`)
  5. Cerizze (`/logos/cerizze.svg`)
  6. Propbnk (`/logos/propbnk.png`)

## Estilo (mesmo tom de cinza)
- Aplicar filtros para ficar com tom semelhante ao atual (cinza discreto):
  - `brightness-0 invert opacity-60 hover:opacity-100 transition-opacity`
  - Tamanho consistente: `h-6 md:h-7 w-auto`

## Implementação
- Editar `src/components/sections/SocialProofSection.tsx` e substituir o array de empresas por uma lista de objetos com `src` e `alt`.
- Renderizar `<img>` com as classes acima dentro do grid existente.

## Verificação
- Conferir na Home se as 6 logos aparecem na ordem e com o mesmo tom de cinza dos textos anteriores.

Posso aplicar agora?