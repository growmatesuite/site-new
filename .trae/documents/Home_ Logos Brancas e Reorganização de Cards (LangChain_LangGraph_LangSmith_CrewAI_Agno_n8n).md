## Objetivo
- Remover os títulos (ex.: "LangChain"/"LangGraph") ao lado das marcas e usar apenas os logotipos.
- Deixar os logos em branco (aplicação visual sobre tema escuro) quando forem SVGs.
- Adicionar um card de "LangSmith" similar ao "LangGraph" à direita, usando os arquivos da pasta `public/logos`.
- Reorganizar e aplicar logos nos cards de "CrewAI", "Agno" e "n8n" (sem texto do nome no cabeçalho), usando as marcas da pasta.

## Mudanças na Home (ToolsSection)
- Editar `src/components/sections/ToolsSection.tsx`:
  - Incluir `LangSmith` no array `tools` e posicioná-lo após "LangGraph".
  - Reordenar os itens para descer "CrewAI" (ordem: LangChain, LangGraph, LangSmith, Agno, n8n, CrewAI).
  - Adicionar mapas de logos:
    - `logoPairs` (ícone + texto): LangChain (`/logos/langchain.svg`, `/logos/langchain-text.svg`), LangGraph (`/logos/langgraph.svg`, `/logos/langgraph-text.svg`), LangSmith (`/logos/langsmith.svg`, `/logos/langsmith-text.svg`).
    - `singleLogoMap`: CrewAI (`/logos/crewai.svg`), Agno (`/logos/agno.svg`), n8n (`/logos/n8n.png`).
  - Renderizar combinação de dois logos quando disponível; caso contrário, usar logo único; se falhar o carregamento, exibir o emoji original como fallback.
  - Remover o `<h3>` (nome da ferramenta) do cabeçalho quando estiver mostrando logos (para não repetir o nome ao lado da marca).
  - Aplicar "logo branco" para SVGs com classes `brightness-0 invert` (mantendo PNGs sem inversão para preservar suas cores).

## Verificação
- Abrir a Home e validar:
  - Cabeçalho dos cards de LangChain/LangGraph/LangSmith exibindo marcas brancas (sem texto do nome ao lado).
  - CrewAI, Agno e n8n com suas marcas no lugar do texto e posicionados conforme solicitado.
  - Fallback exibido se algum arquivo de logo falhar.

## Escopo
- Alterar somente `ToolsSection.tsx`, sem criar novos arquivos.
- Se necessário depois, posso expandir o padrão para outras seções (Parcerias/LLM).

Posso aplicar essas alterações agora?