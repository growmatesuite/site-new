## Objetivo
- Renomear o item de navegação "Casos de Uso" para "GrowChat" e criar uma página interna inspirada nos seus dashboards de métricas de experiência do cliente, mantendo o visual escuro e acentos do projeto.

## Alterações de Navegação
- Atualizar `Header` para exibir "GrowChat" no menu (substituindo "Casos de Uso").
- Adicionar link com destaque ativo para a nova rota.
- Nova rota: `/growchat` em `src/App.tsx`.

## Página GrowChat (estrutura)
- Manter `Header` e `Footer` como na Home.
- Hero simples: título `GrowChat` e subtítulo explicativo.
- Barra de filtros (UI):
  - `select` segmento (ex.: Todas)
  - Período com dois `input type="date"`
  - Botão `Filtrar` (sem backend; preserva apenas UI/estados locais)
- KPIs em grid (cards):
  - Pesquisas Enviadas, Respostas, Taxa de Respostas
  - NPS Operadora, Positivo (9-10), Neutros (7-8), Detratores (0-6)
- Gráficos (sem dependências externas):
  - Distribuição de Notas (0-10): barras com Tailwind e largura proporcional (CSS inline) e legenda mínima.
  - Análise de Sentimento: gráfico de pizza com `conic-gradient` (CSS inline) usando percentuais (Positivo/Neutro/Negativo).
- Blocos de análise:
  - "Análise Integrada" com CTA estilo `Button primary`
  - "Detalhes dos Comentários" com CTA secundário

## Dados
- Dados mockados e centralizados:
  - Adicionar constantes em `src/lib/constants.ts` (ex.: `GROWCHAT_METRICS`, `GROWCHAT_DISTRIBUTION`, `GROWCHAT_SENTIMENT`).
  - Facilitar futuras integrações sem refatorar UI.

## Componentização
- Reutilizar `Container`, `Card`, `Button` e `lucide-react` para ícones.
- Animações leves com `framer-motion` respeitando `prefers-reduced-motion`.

## Arquivos a criar/alterar
- Criar: `src/pages/GrowChat.tsx`.
- Alterar: `src/App.tsx` (rota), `src/components/layout/Header.tsx` (renomear menu e inserir link), `src/lib/constants.ts` (mock de dados).

## Verificação
- Dev server: navegar para `/growchat`, confirmar logo clicável para Home e Footer presente.
- Build para garantir ausência de erros.

Posso implementar agora?