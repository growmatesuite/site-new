## Diagnóstico do Padrão
- Estrutura comum: `Helmet` → `min-h-screen bg-black text-white` → `Header` → Hero com logo + título com span colorido → parágrafo `text-gray-300` → CTA “Falar com Especialista” → seções com `Card` em grade → CTA final em `bg-black-secondary/50` → `Footer`.
- CTAs: apenas “Falar com Especialista” (mailto), sem segundo botão.
- Tipografia: títulos `text-white`, descrições `text-gray-300`.
- Hero: `py-32`, `overflow-hidden`, gradiente discreto, logo centralizado.

## Divergências na CrewAI (com referências)
- Metadados: usa `SEO` em vez de `Helmet` (`src/pages/CrewAI.tsx:82-85`).
- CTA final: título e parágrafo em `text-black`/`text-black/80` (`src/pages/CrewAI.tsx:290-296`), diferindo das demais que usam `text-white`/`text-gray-300`.
- CTA final: já removemos “Ver Integrações”, mas manteremos o estilo e copy alinhados ao padrão.
- Hero: já segue boa parte do padrão; manteremos e ajustaremos espaçamentos para `py-32` como nas demais, se necessário.

## Plano de Ajustes
1. Trocar `SEO` por `Helmet` com título/description alinhados.
2. Corrigir CTA final:
   - Título `text-white`, parágrafo `text-gray-300`.
   - Seção com `bg-black-secondary/50` e copy padrão “Pronto para …”.
   - Manter botão único “Falar com Especialista” coral (`#ff5a50`).
3. Revisar hero para espaçamentos consistentes (`py-32`) e manter coral em destaque.
4. Conferir que não restam `Link`/botões redundantes e imports não usados.

## Resultado Esperado
- CrewAI visualmente consistente com LangChain, LangGraph, n8n, Agno e LangSmith, mantendo sua cor coral como acento.

Posso aplicar estes ajustes agora?