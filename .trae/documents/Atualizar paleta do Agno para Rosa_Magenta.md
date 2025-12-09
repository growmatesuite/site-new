## Objetivo
- Migrar o tema da página interna do Agno de roxo para rosa/magenta, padronizando ícones, textos, bordas, gradientes e brilhos de cards.

## Escopo
- Apenas a página `src/pages/Agno.tsx` e o suporte visual necessário em UI/shared para manter consistência.
- Não altera outras páginas internas (LangChain, LangGraph, LangSmith, CrewAI, n8n) nem o Header/Footer.

## Ajustes em `src/pages/Agno.tsx`
- Trocar roxo por rosa/magenta nas classes utilitárias Tailwind:
  - `text-purple-400` → `text-pink-400`
  - `bg-purple-900/40` → `bg-pink-900/40`
  - `border-purple-600` → `border-pink-600`
  - `hover:border-purple-600/50` → `hover:border-pink-600/50`
  - Pontos/dots: `bg-purple-400` → `bg-pink-400`
- Atualizar gradientes de fundo nas seções para tons rosa/magenta:
  - Hero: `from-purple-900/20 via-transparent to-blue-700/10` → `from-pink-900/20 via-transparent to-fuchsia-700/10`
  - Aura do ícone: `from-purple-600 to-blue-600` → `from-pink-600 to-fuchsia-600`
- Atualizar CTAs para rosa:
  - Botão sólido: `bg-purple-600 hover:bg-purple-700` → `bg-pink-600 hover:bg-pink-700`
  - Botão contorno: `border-purple-600 text-purple-400` → `border-pink-600 text-pink-400`
- Alterar ícones e badges para cor rosa (wrappers com `text-pink-400`).
- Cards: usar `glowColor="pink"` (ver suporte abaixo).

## Suporte no componente `Card`
- Adicionar suporte a `glowColor="pink"` em `src/components/ui/Card.tsx`:
  - Extender o union type: `'green' | 'purple' | 'coral' | 'whatsapp' | 'none' | 'pink'`
  - Mapear `pink: 'shadow-glow-pink hover:shadow-glow-pink/70'`

## Tailwind: brilho rosa
- Em `tailwind.config.js`, adicionar `boxShadow.glow-pink: '0 0 24px rgba(236,72,153,0.35)'` para o efeito de glow.
- Não é necessário extender cores, pois `text-pink-400`/`bg-pink-*` já existem no Tailwind.
- Não é obrigatório adicionar à `safelist` (classes estão estáticas nos arquivos fonte).

## Verificação
- Rodar o dev server e validar visualmente:
  - Hero: título e ícone com rosa/magenta.
  - Cards: borda/brilho e ícones em rosa.
  - Timeline: badges, conectores e pontos em rosa.
  - CTAs: cores de fundo e contorno em rosa.
- Checar contraste AA/AAA nas áreas alteradas (rosa sobre fundo preto).

## Rollback
- Alterações são localizadas; caso necessário, reverter substituições e remover `glow-pink` do `Card`/Tailwind.

## Arquivos a alterar
- `src/pages/Agno.tsx`
- `src/components/ui/Card.tsx`
- `tailwind.config.js`

Confirma que posso aplicar essas mudanças agora?