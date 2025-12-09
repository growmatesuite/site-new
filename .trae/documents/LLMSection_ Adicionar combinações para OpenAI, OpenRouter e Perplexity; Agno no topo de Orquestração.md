## Objetivo
- Na seção de LLMs, combinar logo principal + texto para OpenAI, OpenRouter e Perplexity (sem nomes), como feito com Grok e Ollama.
- Na seção de Orquestração (Tecnologias), aplicar a marca do Agno no topo da seção.

## Mudanças
- `src/lib/constants.ts`
  - Adicionar modelos: OpenRouter e Perplexity com `logoUrl` apontando para `public/logos/openrouter.svg` e `public/logos/perplexity.svg`.
  - Garantir `OpenAI` com `logoUrl: '/logos/openai.svg'`.
- `src/components/sections/LLMSection.tsx`
  - Expandir `logoPairs` para:
    - OpenAI: `['/logos/openai.svg','/logos/openai-text.svg']`
    - OpenRouter: `['/logos/openrouter.svg','/logos/openrouter-text.svg']`
    - Perplexity: `['/logos/perplexity.svg','/logos/perplexity-text.svg']`
  - Renderizar a combinação com fallback (se um dos arquivos não existir, ele oculta só aquela imagem e mostra o restante).
- `src/components/sections/ToolsSection.tsx`
  - Corrigir o caminho da marca do Agno para `'/logos/agno.png'` e exibir a marca junto ao cabeçalho da seção (ao lado de “Tecnologias”), mantendo os cards como estão.

## Verificação
- Home: LLMs mostram combinações das três marcas em branco sobre o tema.
- Topo da seção Orquestração exibe a marca do Agno.

Posso implementar agora?