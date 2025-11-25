## Objetivo
- Substituir os ícones/nomes por logotipos oficiais na seção de LLMs, mantendo apenas as marcas (sem títulos) e usando os arquivos em `public/logos`.

## Alterações
- Atualizar `src/lib/constants.ts` para incluir `logoUrl` nos modelos disponíveis na pasta: `Anthropic`, `OpenAI`, `Gemini`, `DeepSeek` (e manter outros como fallback se não houver arquivo).
- Modificar `src/components/sections/LLMSection.tsx` para:
  - Filtrar e exibir somente itens que têm `logoUrl`.
  - Renderizar apenas o logo centralizado, remover nome/descrição.
  - Aplicar "logo branco" com classes `brightness-0 invert` para SVGs.
  - Manter animações e layout atual.

## Verificação
- Visual na Home: grid de marcas brancas na seção LLMs, sem nomes.
- Fallback: se algum logo falhar, o item é ocultado (sem texto/emoji), mantendo o grid.

Posso aplicar essas alterações agora?