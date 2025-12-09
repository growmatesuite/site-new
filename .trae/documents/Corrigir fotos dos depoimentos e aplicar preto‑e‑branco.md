## Causa do erro
As fotos estão em `public/avatars` com extensão `.jpeg`, mas o código aponta para `.jpg`. Por isso não carregaram.

## Ajustes a aplicar
1) Atualizar os caminhos das fotos no array `testimonials` para usar `.jpeg`:
- Bruno Brasil → `/avatars/bruno-brasil.jpeg`
- Sidney Pimentel → `/avatars/sidney-pimentel.jpeg`
- Ricardo Borges → `/avatars/ricardo-borges.jpeg`

2) Aplicar filtro preto‑e‑branco nas fotos
- Adicionar a classe `grayscale` na tag `<img>` dos avatars.
- Manter `rounded-full object-cover h-10 w-10`.

## Arquivo
- `src/components/sections/SocialProofSection.tsx`

## Resultado esperado
- Fotos carregam corretamente, aparecem circulares e em preto‑e‑branco, com fallback automático para emoji se algum arquivo faltar.

Posso aplicar essas mudanças agora?