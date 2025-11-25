## Objetivo
Exibir nos topos das páginas internas (hero) a marca acompanhada do texto (wordmark), igual à Home.

## Abordagem
- Substituir o `<img>` único do hero por um bloco com dois `<img>` lado a lado: ícone da marca + texto da marca (wordmark).
- Usar os mesmos arquivos já presentes na Home:
  - LangChain: `/logos/langchain.svg` + `/logos/langchain-text.svg`
  - LangGraph: `/logos/langgraph.svg` + `/logos/langgraph-text.svg`
  - LangSmith: `/logos/langsmith.svg` + `/logos/langsmith-text.svg`
- Aplicar `brightness-0 invert` nos dois `<img>` para manter tudo branco no tema escuro.
- Estilizar com `flex items-center gap-2` e tamanhos consistentes (ícone `h-16`, texto `h-6`) garantindo responsividade.

## Arquivos a editar
- `src/pages/LangChain.tsx` (hero): trocar bloco do logo por par marca+texto.
- `src/pages/LangGraph.tsx` (hero): idem.
- `src/pages/LangSmith.tsx` (hero): idem.

## Validação
- Verificar visualmente cada página para alinhamento e contraste.
- Confirmar que os títulos conceituais abaixo do bloco permanecem inalterados.

Posso aplicar essas mudanças agora para os três heros?