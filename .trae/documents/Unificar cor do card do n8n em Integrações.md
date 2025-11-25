## Objetivo
Deixar o card do n8n com a mesma cor dos demais cards na página "Integrações".

## Mudança técnica
- Em `src/pages/Integracoes.tsx`:
  - Alterar `glowColor` do `Card` para não diferenciar o n8n: usar sempre `green`.
  - Ajustar o bloco do ícone para usar o mesmo background/texto dos demais (`bg-green-900/40 text-green-400`).

## Linhas a alterar
- `src/pages/Integracoes.tsx:71-73` — remover o ternário que aplica `coral`/`n8n-primary` ao n8n e usar as classes verdes como os demais.

## Resultado esperado
- Todos os cards (incluindo n8n) exibem o mesmo glow e esquema de cor verde, mantendo consistência visual.

Posso aplicar agora?