## Objetivo
- Recriar o card de Parcerias para um layout mais visual e moderno, reduzindo o texto corrido e estruturando capacidades como chips.

## Proposta de Layout
- Cabeçalho do card:
  - Linha com logo da Meta (branca, `brightness-0 invert`), seguida de título "Tech Providers".
  - Sub-label "Meta" pequena e discreta abaixo do título (opcional).
- Descrição curta (uma linha):
  - "Parceiro oficial da Meta para soluções empresariais e integrações com WhatsApp".
- Capacidades em chips (em grid):
  - `WhatsApp Business API`, `Cloud API`, `Webhooks`, `Templates`, `Instagram Graph API`, `Facebook Business`, `Threads API`, `Coexistence WhatsApp Business`.
  - Renderizadas como pills: `px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm` em `grid grid-cols-2 md:grid-cols-3 gap-2`.
- CTAs (linha inferior):
  - Botões: "Ver integrações" (primário) e "Saiba mais" (terciário).

## Ajustes Visuais
- Largura: usar toda a largura do Container (`Container size="lg"` ou `xl`), e o grid da seção como `grid-cols-1 gap-10` (sem `max-w`).
- Card: `glass-effect p-8 md:p-10 rounded-xl`, `glowColor="purple"`, espaçamento consistente.
- Logo: `h-6 md:h-8 w-auto` com `mr-3`.
- Remover status/bolinha verde.

## Implementação Técnica
- `src/components/sections/PartnersSection.tsx`:
  - Atualizar o objeto único do parceiro (já existe) mantendo `logoUrl`.
  - Substituir a lista de features por chips renderizados a partir de `partner.features`.
  - Inserir a barra de CTAs com `Button`.
  - Manter títulos/animacões da seção.

## Acessibilidade
- `alt="Meta"` na logo, sem decorativos redundantes.
- Foco visível nos chips e CTAs.

## Verificação
- Conferir na Home: card amplo, logo proporcional ao título, chips de capacidades, sem status, CTAs visíveis.

Posso implementar esse redesign agora?