## Objetivo
- Unificar toda a página `GrowMetrics` para o mesmo padrão visual roxo usado em `GrowChat`, mantendo consistência de marca, CTAs, gradientes, sombras e realces.

## Referências de Estilo
- Paleta: `text-purple-400`, `bg-purple-900/..`, `from-purple-900 via-purple-800 to-purple-700`
- Componentes: `Button` com `variant="secondary"`, `Card` com `glowColor="purple"`
- Tailwind config já possui sombras e cores roxas (`shadow-glow-purple`, `purple.primary/secondary`).

## Alterações Propostas (arquivo: src/pages/GrowMetrics.tsx)
1. Hero
- Substituir todos gradientes azuis/cianos por roxos: `bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-purple-700/30`
- Ajustar radial backgrounds para roxo; badge com `border-purple-500/30` e `text-purple-200`
- Trocar textos destacados para `from-purple-400` (gradiente roxo)
- Manter CTA com `variant="secondary"`; remover/ajustar gradiente custom para roxo (consistente com GrowChat)

2. Visualização NPS
- Trocar `Card glowColor="blue"` para `glowColor="purple"`
- Títulos e destaques com gradiente roxo
- Manter cores de barras Promotor/Neutro/Detrator (verde/amarelo/vermelho) por semântica, mas acentuar molduras/legendas em roxo

3. Grid de Métricas (NPS, CSAT, CES, PMF, eNPS, Sentimentos)
- Uniformizar ícones com container roxo (`bg-purple-900/40`) e texto `text-purple-400`
- `Card glowColor="purple"` em todos
- Manter conteúdos, apenas padronizar acentos para roxo

4. Performance
- Fundo e realces usando gradiente roxo
- Trocar valores/labels anteriormente com azul/verde para `text-purple-400`
- Cards com `glowColor="purple"`

5. Análises Avançadas (Ranking + Planos de Ação)
- Ranking: bordas e destaques em roxo; manter semântica nas métricas quando necessário
- Planos de ação: ícones `text-purple-400` e containers com gradiente roxo

6. Como Funciona (Passos)
- Círculo de passo com gradiente roxo
- `Card glowColor="purple"`; ícones com `text-purple-400`
- CTA final com `variant="secondary"` (roxo)

7. Depoimentos
- `Card glowColor="purple"`; manter estrelas amarelas

8. FAQ
- `Card glowColor="purple"`; título `text-purple-300`

9. CTA Final
- Gradiente roxo consistente com GrowChat; CTA `secondary`

## Verificação
- Rodar a aplicação em `http://localhost:3000/growmetrics` e validar:
  - Consistência visual em roxo em todas as seções
  - Acessibilidade: contraste e legibilidade
  - Responsividade: mobile, tablet e desktop

## Entregáveis
- Página `GrowMetrics` visualmente alinhada ao padrão roxo do `GrowChat`
- Sem alterações de lógica; apenas temas/estilo
- Sem mudança no tailwind.config.js