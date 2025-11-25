## Objetivo
- Na seção de LLMs, exibir apenas as marcas com combinação de logo principal + versão texto para Grok e Ollama, e a marca simples para OpenAI. Sem utilizar `@lobehub/icons` (não presente no projeto), usando os arquivos em `public/logos`.

## Arquivos e Mudanças
- `src/lib/constants.ts`
  - Adicionar/atualizar `logoUrl` para `Grok` e `Ollama` apontando a `'/logos/grok.svg'` e `'/logos/ollama.svg'`.
  - Manter `OpenAI` com `logoUrl: '/logos/openai.svg'`.
- `src/components/sections/LLMSection.tsx`
  - Introduzir `logoPairs` com:
    - `Grok`: `['/logos/grok.svg','/logos/grok-text.svg']`
    - `Ollama`: `['/logos/ollama.svg','/logos/ollama-text.svg']`
  - Renderizar combinação de dois `<img>` para itens com par; aplicar `brightness-0 invert` para logos SVG.
  - Para itens sem par (ex.: OpenAI), renderizar apenas um `<img>`.
  - Continuar sem nomes/descrições, apenas marcas, mantendo animações.

## Verificação
- Home: seção LLMs exibe Grok e Ollama com logo + texto, OpenAI com logo simples; todas em branco no tema escuro.
- Fallback: se algum arquivo não carregar, ocultar a imagem daquele item para evitar detalhes quebrados.

Posso aplicar essas alterações agora?