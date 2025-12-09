## Objetivo
Remover o uso do traço “ - ” em textos de toda a aplicação e padronizar a pontuação, começando pela página de LangChain e abrangendo todas as páginas internas e metadados.

## Escopo e Detecção
- Fazer uma varredura em `src` para localizar ocorrências de “ - ” e de possíveis variantes “–”/“—”.
- Focar apenas em textos de interface (string literals dentro de JSX/TS), evitando alterações em `node_modules` e em trechos técnicos (código, operadores, CEPs, etc.).

## Regras de Substituição
- Introdução de lista/explicação: substituir “ - ” por “: ”
  - Ex.: `usar - APIs, bancos...` → `usar: APIs, bancos...`
- Pausa explicativa no meio da frase: substituir “ - ” por `, `
  - Ex.: `entregas - tudo em uma conversa` → `entregas, tudo em uma conversa`
- Títulos/headers com separador: substituir “ - ” por “: ”
  - Ex.: `POLÍTICA DE PRIVACIDADE - GROWMATE` → `POLÍTICA DE PRIVACIDADE: GROWMATE`
- Casos especiais legais: substituir “ - ” por parênteses ou vírgula
  - Ex.: `Lei nº 13.709/2018 - LGPD` → `Lei nº 13.709/2018 (LGPD)`
  - Ex.: `Growmate LTDA - CNPJ: ...` → `Growmate LTDA, CNPJ: ...`
- Manter hífens que fazem parte de grafia oficial (ex.: `38.408-048` em CEP) — só remover o traço usado como separador.

## Arquivos a Atualizar
- `src/pages/LangChain.tsx`
  - Conceito “Tools”: `usar - APIs...` → `usar: APIs...`
  - RAG: `Retrieval-Augmented Generation - ...` → `Retrieval-Augmented Generation: ...`
  - LCEL: `... Language - ...` → `... Language: ...`
  - Metatítulo: `LangChain na Prática - Growmate` → `LangChain na Prática: Growmate`
  - Texto de casos: `entregas - tudo` → `entregas, tudo`
- `src/pages/LangGraph.tsx`
  - “Nodes”: `processo - como ...` → `processo: como ...`
  - “Decisão de Fluxo”: `seguir - informação...` → `seguir: informação...`
  - Metatítulo: `LangGraph - ... - Growmate` → `LangGraph: ... — Growmate` (ou apenas `LangGraph: ... : Growmate`; adotaremos `:` para consistência)
- `src/pages/N8n.tsx`
  - Diversos `details/description`: trocar “ - ” por `: ` ou `, ` conforme regra
  - Metatítulo: `n8n - Automação Sem Limites - Growmate` → `n8n: Automação Sem Limites: Growmate`
- `src/pages/Terms.tsx`
  - H1: `TERMOS DE USO - GROWMATE` → `TERMOS DE USO: GROWMATE`
  - LGPD: `Lei nº 13.709/2018 - LGPD` → `Lei nº 13.709/2018 (LGPD)`
  - Endereço: `CEP 38.408-048 - Uberlândia/MG` → `CEP 38.408-048, Uberlândia/MG`
- `src/pages/Privacy.tsx`
  - H1: `POLÍTICA DE PRIVACIDADE - GROWMATE` → `POLÍTICA DE PRIVACIDADE: GROWMATE`
  - Empresa: `Growmate LTDA - CNPJ: ...` → `Growmate LTDA, CNPJ: ...`
- `src/lib/constants.ts`
  - Títulos/descriptions com “ - ” (ex.: `Growmate - Agentes de IA Enterprise Ready`, `Claude - ...`) → usar `:`

## Validação
- Rodar build e validar que nenhuma quebra foi introduzida.
- Inspecionar visualmente as páginas citadas e metadados (title em aba do navegador) para confirmar remoções.
- Garantir que CEPs e termos técnicos que exigem hífen permaneçam intactos.

## Entregáveis
- Texto padronizado sem o traço separador “ - ” em todo o site.
- Consistência de pontuação em títulos, metatítulos e descrições.

Confirma implementar agora essas substituições e validações? 