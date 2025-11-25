## Referência (GrowChatProduct)
- Hero h1: `text-5xl md:text-7xl` (src/pages/GrowChatProduct.tsx:142)
- Hero subtítulo: `text-xl md:text-2xl` (src/pages/GrowChatProduct.tsx:147)
- Títulos de seção h2: `text-3xl md:text-4xl` (src/pages/GrowChatProduct.tsx:188,209,251,317,394,472,538)
- CTA final h2: `text-4xl md:text-5xl` (src/pages/GrowChatProduct.tsx:574)

## Estado atual (GrowMetrics)
- Hero h1 já em `text-5xl md:text-7xl` (src/pages/GrowMetrics.tsx:242)
- Subtítulo pequeno em `text-xl md:text-2xl` (src/pages/GrowMetrics.tsx:246)
- Várias seções usam `text-4xl md:text-5xl` (ex.: NPS, Performance, Ranking, Como funciona, Depoimentos, FAQ) — acima do padrão do GrowChat

## Ajustes propostos (src/pages/GrowMetrics.tsx)
1. H2 de seções
- Trocar todas as ocorrências de `text-4xl md:text-5xl` para `text-3xl md:text-4xl` nos títulos:
  - NPS: linhas ~296–303
  - Métricas: linhas ~402–408
  - Performance: linhas ~458–463
  - Ranking: linhas ~528–534
  - Como funciona: linhas ~643–648
  - Depoimentos: linhas ~726–731
  - FAQ: linhas ~783–788

2. CTA final
- Manter `text-5xl md:text-6xl` ou ajustar para `text-4xl md:text-5xl` igual GrowChat (src/pages/GrowMetrics.tsx:826–832). Proponho `text-4xl md:text-5xl` para consistência.

3. Subtítulos e parágrafos
- Garantir subtítulos das seções em `text-xl` e parágrafos principais em `text-xl` ou `text-lg` com `text-gray-300`, seguindo padrão GrowChat.
- Ajustar `max-w` para `max-w-4xl` / `max-w-3xl` conforme seção para manter ritmo visual.

4. Títulos de cards
- Manter `h3` dos cards em `text-xl font-semibold` (consistente com GrowChat).

## Verificação
- Conferir visual em `http://localhost:3000/growmetrics` e comparar com GrowChat.
- Garantir que não há regressão de espaçamentos e que a hierarquia visual fique alinhada.

## Escopo
- Somente edições em `src/pages/GrowMetrics.tsx`; nenhuma mudança em Tailwind config ou componentes globais.