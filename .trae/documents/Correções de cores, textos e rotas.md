## Objetivo
Aplicar ajustes de UI e navegação:
- Home: borda do card n8n verde; atualizar contadores; remover itens solicitados
- Texto padrão da seção de exploração: "Explore as soluções da Growmate"
- Frase "Acelere seu crescimento": seguir cor/tipografia do tema da página
- LangSmith: trocar componentes roxos por azuis mantendo padrão
- Rotas: corrigir rotas na página CrewAI e no rodapé

## Mudanças por arquivo
1) `src/components/sections/ToolsSection.tsx`
- Trocar cor do card n8n para `green` no array `tools` (efeito de borda/glow verde na Home)

2) `src/pages/Home.tsx`
- Alterar texto "500+ Agentes de IA Implantados" para "50"
- Remover bloco/bullets: "99.9% Uptime Garantido" e "SLA empresarial"
- Garantir que nenhum estilo force borda vermelha no card n8n

3) `src/components/sections/ExploreSuite.tsx`
- Trocar título: "Explore outros produtos e páginas da Growmate" → "Explore as soluções da Growmate"
- Tornar "Acelere seu crescimento" dinâmico: cor conforme `pathname` (green/orange/blue/pink/coral/whatsapp)

4) `src/pages/LangSmith.tsx`
- Substituir `glowColor="purple"` por `glowColor="blue"` em cards e seções
- Trocar classes roxas por equivalentes azuis em gradientes/divisores/badges (ex.: `bg-blue-900/40`, `text-blue-400`, `from-blue-400/50`)

5) `src/components/ui/Card.tsx` e `tailwind.config.js`
- Adicionar suporte a `glowColor="blue"` com `boxShadow.glow-blue` (ex.: `rgba(59,130,246,0.35)`) para manter padrão visual

6) `src/components/layout/Footer.tsx`
- Corrigir links:
  - GrowChat → `/growchat-produto` (já feito)
  - GrowMetrics → `/growmetrics`
  - Integrações → `/integracoes`

7) `src/pages/CrewAI.tsx`
- Garantir que os `Link` estejam corretos e clicáveis (sem overlays bloqueando); revalidar rotas da seção de exploração

## Verificação
- Rodar dev server e testar Home, LangSmith, CrewAI e rodapé
- Confirmar que todos os cards/links navegam
- Conferir que cores/tipografia condizem com cada tema

Posso aplicar essas alterações agora?