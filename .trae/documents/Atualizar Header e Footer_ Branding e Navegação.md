## Arquivos Alvo
- `src/components/layout/Header.tsx` (menu desktop e mobile)
- `src/components/layout/Footer.tsx` (branding, contatos e copyright)
- `public/brand.svg` já existe e será usado como logo no rodapé

## Alterações no Footer
- Trocar o texto "Growmate" por logo `brand.svg` no bloco de marca
  - Substituir o anchor atual por `<img src="/brand.svg" alt="Growmate" class="h-6 md:h-7 w-auto" />`
  - Local: `src/components/layout/Footer.tsx:63-66`
- Atualizar contatos no bloco de contato
  - Email: `ops@growmate.io` com `mailto:ops@growmate.io`
  - Telefone: `+55 11 4863-5675` com `tel:+551148635675`
  - Localização: `Uberlândia, Minas Gerais`
  - Locais: `Footer.tsx:86-101` (linhas do email, telefone e localização)
- Atualizar copyright
  - Trocar `© 2024 Growmate.` por `© 2025 Growmate.`
  - Local: `Footer.tsx:143-145`

## Alterações no Header
- Simplificar itens de navegação para apenas três entradas visíveis: `GrowChat`, `GrowMetrics`, `Integrações`
  - Atualizar `navigationItems` para:
    - `{ name: 'GrowChat', href: '/growchat' }`
    - `{ name: 'GrowMetrics', href: '#growmetrics' }` (ancora provisória até a página existir)
    - `{ name: 'Integrações', href: '/integracoes' }`
  - Local: `src/components/layout/Header.tsx:24-30`
- Remover o link duplicado adicional de `Integrações` que está fora do array `navigationItems`
  - Desktop: `Header.tsx:100-109`
  - Mobile: `Header.tsx:189-195`
- Manter o logo do topo como está (`/brand.svg` em `Header.tsx:52-57`) sem alterações de tamanho

## Verificação
- Build local e execução do dev server
  - Abrir `http://localhost:5173/` e validar:
    - Rodapé exibe logo da marca no lugar do texto
    - Email, telefone e cidade atualizados
    - Copyright 2025
    - Menu do topo com apenas `GrowChat`, `GrowMetrics` e `Integrações` (sem itens removidos, sem duplicação)
- Testar navegação:
  - `GrowChat` navega para `/growchat`
  - `Integrações` navega para `/integracoes`
  - `GrowMetrics` âncora `#growmetrics` (placeholder até existir a página)

## Observações
- Caso você deseje `GrowMetrics` como página interna, posso criar `src/pages/GrowMetrics.tsx` e adicionar a rota `/growmetrics` no `src/App.tsx` em seguida.
- Nenhuma outra seção do rodapé será alterada ("Soluções", "Tecnologias", etc.) nesta etapa, conforme seu pedido focado em branding, contatos e copyright.