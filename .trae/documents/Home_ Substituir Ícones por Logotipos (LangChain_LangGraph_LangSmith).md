## Objetivo
- Trocar os ícones por logotipos oficiais na Home, especificamente para LangChain, LangGraph e LangSmith, usando os arquivos já presentes em `public/logos`.

## Abordagem
- Editar somente `src/components/sections/ToolsSection.tsx` (sem criar novos arquivos) para renderizar combinação de dois logos (ícone + versão texto) quando disponível, com fallback automático caso o arquivo falhe.
- Manter o restante do visual: cards, animações, tipografia e glow.

## Implementação
- Adicionar um mapa local de pares de logos:
  - LangChain: `['/logos/langchain.svg','/logos/langchain-text.svg']`
  - LangGraph: `['/logos/langgraph.svg','/logos/langgraph-text.svg']`
  - LangSmith: `['/logos/langsmith.svg','/logos/langsmith-text.svg']`
- No cabeçalho do card, substituir o `<div className="text-3xl">{tool.icon}</div>` por um bloco combinado:
  - `<img src=... className="h-7 w-auto" />` para o ícone
  - `<img src=... className="h-5 w-auto opacity-90" />` para o texto da marca
  - `onError` em cada imagem para esconder o `<img>` e mostrar fallback com o emoji original do `tool.icon`.
- Para outras ferramentas sem par de logos, manter ícones atuais.
- Acessibilidade: `aria-label` com o nome da ferramenta e `alt` descritivo.

## Verificação
- Rodar o dev server e validar visual na Home.
- Checar fallback removendo/renomeando um dos arquivos para ver se o emoji aparece.

## Escopo
- Não alterar `constants.ts` nem criar novos componentes.
- Se aprovado, posso expandir o mesmo padrão para outras marcas da pasta `public/logos` (CrewAI, Agno, n8n, etc.) na mesma seção.

Posso aplicar essas alterações agora?