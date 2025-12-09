## Objetivo
- Diminuir proporcionalmente apenas os logos na seção de LLMs, mantendo o tamanho atual dos cards.

## Alterações
- Em `src/components/sections/LLMSection.tsx`, ajustar as classes de tamanho dos `<img>`:
  - Logos principais: de `h-10` para `h-8`.
  - Texto das marcas (quando combinado): de `h-8` para `h-6`.
  - Logos únicas (sem texto): de `h-10` para `h-8`.
- Manter `brightness-0 invert`, espaçamento e animações.

## Verificação
- Conferir a Home para garantir que os 8 cards permanecem no mesmo tamanho e os logos diminuem de forma uniforme.

Posso aplicar essas alterações agora?