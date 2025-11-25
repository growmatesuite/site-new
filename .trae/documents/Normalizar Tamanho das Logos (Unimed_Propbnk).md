## Objetivo
- Deixar as logos da Unimed e Propbnk com o mesmo tamanho visual das demais sem trocar arquivos.

## Abordagem
- Ajustar a renderização na seção "Empresas que confiam na Growmate" para aplicar uma leve escala nas logos que têm bounding box com muito espaço interno.
- Manter altura uniforme para todas (h-7 md:h-8) e o tom cinza já aplicado (brightness-0 invert opacity-60).

## Implementação
- Editar `src/components/sections/SocialProofSection.tsx`:
  - Passar uma propriedade `scale` por logo (ex.: `scale-110` para Unimed e `scale-120` para Propbnk).
  - Concatenar a classe de escala no `className` da imagem.

## Verificação
- Conferir na Home que Unimed e Propbnk ficam visualmente proporcionais às demais.

Posso aplicar agora?