## Objetivo
- Remover os dois cards vazios e manter exatamente 8 cards na seção de LLMs, todos com suas respectivas marcas (Anthropic, OpenAI, Gemini, DeepSeek, Ollama, Grok, OpenRouter, Perplexity).

## Alteração
- Em `src/components/sections/LLMSection.tsx`, montar explicitamente o array de exibição na ordem desejada com base no `LLM_MODELS`, filtrando apenas os nomes permitidos e garantindo que tenham `logoUrl`.
- Renderizar somente esses 8 itens (sem nomes/descrições), mantendo combinações marca+texto quando disponíveis.

## Verificação
- Home exibe exatamente 8 cards preenchidos, sem espaços vazios.

Posso aplicar agora?