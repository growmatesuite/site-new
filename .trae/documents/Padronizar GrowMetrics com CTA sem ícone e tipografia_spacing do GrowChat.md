## Objetivo
- Remover ícones dos CTAs da página GrowMetrics e padronizar tipografia e espaçamentos para o mesmo padrão da página GrowChat.

## Correções de CTA
- Remover ícone `Lightning` dos dois botões:
  - Hero CTA: src/pages/GrowMetrics.tsx:257–262
  - CTA final: src/pages/GrowMetrics.tsx:831–834
- Manter `Button variant="secondary" size="lg"` e texto “Falar com Especialista”.

## Tipografia (igual ao GrowChat)
- Hero:
  - h1: `text-5xl md:text-7xl` (já está)
  - subtítulo menor: `text-xl md:text-2xl` (já está)
  - parágrafo seguinte: `text-xl md:text-2xl`
- Seções h2: trocar todas para `text-3xl md:text-4xl` (ajustado em NPS, Métricas, Performance, Ranking, Como Funciona, Depoimentos, FAQ; manter CTA final em `text-4xl md:text-5xl`).

## Espaçamentos
- Hero:
  - h1 `mb-6` (trocar de `mb-4`)
  - subtítulo menor `mb-6` (já está)
  - parágrafo “Centralize...” `mb-8` (já está)
  - grid de ícones: reduzir `mb-12` → `mb-8` para ritmo igual ao GrowChat
- Seções:
  - Títulos h2 `mb-6` (já ajustado)
  - Parágrafos de introdução `mb-8`
  - Cards internos: manter títulos `mb-4`; grids com `gap-6`

## Largura dos textos
- Uniformizar intro de seções para `max-w-3xl` (atualmente mistura `max-w-2xl/3xl/4xl`).
  - Ajustar para `max-w-3xl` nas introduções em: NPS (linha ~301), Métricas (~407), Performance (~457), Ranking (~528), Como Funciona (~642), Depoimentos (~725), FAQ (~782), CTA final intro (~826) → `max-w-3xl`.

## Verificação
- Abrir `http://localhost:3000/growmetrics` e comparar com GrowChat:
  - CTAs sem ícone e com espaçamento consistente
  - Hierarquia de títulos/subtítulos igual
  - Ritmo visual com `mb-6/mb-8` e `gap-6`

## Escopo
- Apenas edições em `src/pages/GrowMetrics.tsx`. Nenhuma mudança em componentes globais ou tailwind.config.js.