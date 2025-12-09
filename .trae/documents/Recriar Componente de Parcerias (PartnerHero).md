## Objetivo
Recriar o cartão de “Parcerias Estratégicas” como um componente hero visual, moderno e ousado, destacando a Meta como Tech Provider.

## Conceito Visual
- Banner hero full-width com glass + halo neon (roxo/verde), forte presença de marca.
- Layout em duas colunas: marca/título/descricao à esquerda; capacidades + CTAs à direita.
- Animado com Framer Motion (micro-interações, stagger nos chips).

## Estrutura do Componente
- Componente: `PartnerHeroCard`
- Props: `logoUrl`, `title`, `subtitle`, `features[]`, `primaryCta{label,to}`, `secondaryCta{label,to}`.
- Layout:
  - Coluna esquerda:
    - Logo Meta (`h-14 md:h-16 brightness-0 invert`) com shimmer suave
    - Título “Tech Providers” (`text-3xl md:text-4xl font-heading`)
    - Subcopy: “Parceiro oficial da Meta para soluções empresariais e integrações com WhatsApp”
  - Coluna direita:
    - Chips (`grid grid-cols-2 md:grid-cols-3 gap-2`), pills `px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm`
    - CTAs: primário “Ver integrações” (`to=/integracoes`), secundário “Saiba mais”
- Card container:
  - `glass-effect rounded-2xl p-10 md:p-12 hover:scale-[1.01] hover:-translate-y-[2px]`
  - Halo: `ring-1 ring-purple-primary/30 shadow-glow-purple`

## Animações
- Container: `initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}`
- Logo: `initial={{opacity:0, scale:0.96}} animate={{opacity:1, scale:1}}`
- Chips: stagger `0.05` com fade-up
- Respeitar `prefers-reduced-motion`

## Acessibilidade
- `alt="Meta"` na logo, contraste AA, foco visível em CTAs

## Implementação Técnica
1. Criar `src/components/partners/PartnerHeroCard.tsx`
2. Atualizar `PartnersSection` para usar `PartnerHeroCard` com dados atuais
3. Remover status/bolinha e layout antigo
4. Ampliar container da seção para `size="xl"`

## Conteúdo
- Título: “Tech Providers”
- Descrição: “Parceiro oficial da Meta para soluções empresariais e integrações com WhatsApp”
- Features: adicionar “Coexistence WhatsApp Business”
- Logo: `/logos/Meta.svg`

## Validação
- Visual ousado, responsivo, sem comportamento de lista; CTAs funcionais

Posso implementar agora e substituir o card atual pela nova versão hero?