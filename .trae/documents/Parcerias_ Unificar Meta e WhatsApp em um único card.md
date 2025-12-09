## Objetivo
- Mesclar os dois cards de parceiros (Meta e WhatsApp) em um único card: "Parceiro Oficial" com o logo da Meta (arquivo em public/logos/Meta.svg).

## Alterações
- Editar `src/components/sections/PartnersSection.tsx`:
  - Substituir o array `partners` atual por um único item:
    - `name`: "Parceiro Oficial"
    - `status`: "Oficial"
    - `logoUrl`: "/logos/Meta.svg" (renderizado em branco com `brightness-0 invert`)
    - `description`: texto curto consolidado (parceiro oficial para soluções empresariais e integrações WhatsApp)
    - `features`: união das capacidades dos dois cards (Business API, Cloud API, Instagram Graph API, Facebook Business, Threads API, Webhooks, Templates)
  - Renderizar `<img src={logoUrl} ...>` no cabeçalho do card em vez de emoji.
- Manter títulos da seção, animações e bloco “E mais parcerias com”.

## Verificação
- Abrir Home e confirmar que há um único card com logo da Meta branca e as capacidades unificadas.

Posso implementar agora?