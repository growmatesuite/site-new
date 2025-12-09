## Problema
O PNG/SVG da Propbank tem área útil menor que o bounding box, então usar apenas `h-8` não iguala visualmente. Precisamos aplicar um ajuste específico no render.

## Solução Proposta
1. Envolver cada logo em um wrapper de altura fixa para padronizar:
   - Wrapper: `h-8 md:h-10 flex items-center justify-center`
   - Img: `max-h-full w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100`
2. Aplicar um ajuste específico para Propbank:
   - `scale-[1.6] md:scale-[1.8]` (arbitrary values válidos no Tailwind JIT) para compensar margens internas
   - Se ainda menor, subir `md:h-12` apenas para Propbank
3. Manter Unimed com leve ajuste (`scale-110`) se necessário, para uniformizar altura visual.

## Implementação Técnica
- Editar `src/components/sections/SocialProofSection.tsx`:
  - Atualizar o mapeamento de logos para adicionar `classNameExtra` apenas na Propbank: `scale-[1.6] md:scale-[1.8]`
  - Padronizar wrapper e img para todas as logos
  - Confirmar caminho da Propbank (`/logos/propbank.png`)

## Verificação
- Recarregar a Home e validar que a Propbank está visualmente do mesmo tamanho das demais; calibrar fino se necessário.

Posso aplicar essas alterações agora?