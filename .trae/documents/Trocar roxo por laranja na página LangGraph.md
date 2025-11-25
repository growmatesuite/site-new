## Objetivo
- Substituir todas as ocorrências de roxo na página LangGraph por laranja, usando `text-orange-400` como cor primária de destaque (títulos, spans, ícones, badges e conectores).

## Escopo
- Alterações apenas em `src/pages/LangGraph.tsx`.
- Manter Header/Footer.
- Opcional: harmonizar gradientes e glow dos cards para laranja (se desejar consistência total como no Agno).

## Mapeamento de substituições (em `src/pages/LangGraph.tsx`)
- Texto destacado:
  - `text-purple-400` → `text-orange-400`
- Badges/ícones/containers:
  - `bg-purple-900/40` → `bg-orange-900/40`
  - `text-purple-400` (em ícones) → `text-orange-400`
- CTAs (contorno):
  - `border-purple-600` → `border-orange-600`
  - `hover:bg-purple-600` → `hover:bg-orange-600`
  - `text-purple-400` → `text-orange-400`
- Conectores/divisores:
  - `from-purple-400/50` → `from-orange-400/50`
- Gradientes de seção (opcional para consistência):
  - `from-purple-900/20 via-transparent to-blue-700/10` → `from-orange-900/20 via-transparent to-amber-700/10`
- Cards:
  - `glowColor="purple"` → manter por ora (não solicitado) OU trocar para `glowColor="coral"` (já disponível) ou criar `glowColor="orange"` com `shadow-glow-orange` (caso queira brilho em laranja).

## Implementação sugerida (passo-a-passo)
1. Atualizar todas as classes `text-purple-400` para `text-orange-400` nas seções Hero, Components, Workflow, Scenarios, Advantages, Deep Dive e CTA.
2. Ajustar wrappers e badges (`bg-purple-900/40`, ícones `text-purple-400`) para laranja.
3. Atualizar conectores (divisores) `from-purple-400/50` para `from-orange-400/50`.
4. Ajustar botões de contorno para laranja.
5. (Opcional) Atualizar gradiente geral do Hero para base laranja.
6. (Opcional) Se desejar brilho laranja nos cards, adiciono suporte a `glowColor="orange"` no `Card` e `tailwind.config.js` com `boxShadow.glow-orange`.

## Verificação
- Rodar em dev e validar que todas as referências visuais roxas viraram laranja.
- Checar contraste do laranja sobre fundo preto.

## Arquivos afetados
- `src/pages/LangGraph.tsx` (obrigatório)
- `src/components/ui/Card.tsx` e `tailwind.config.js` (apenas se optar pelo glow laranja).

Posso aplicar essas mudanças agora? Prefere apenas texto laranja ou também glow/gradientes em laranja para consistência total?