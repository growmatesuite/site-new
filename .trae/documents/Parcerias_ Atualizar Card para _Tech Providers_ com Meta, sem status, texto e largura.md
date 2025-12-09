## Objetivo
- Atualizar a sessão “Parcerias” para:
  - Renomear o card para “Tech Providers”.
  - Exibir a logo da Meta proporcional ao lado do título.
  - Remover o status “Oficial” com bolinha verde.
  - Atualizar a descrição para “Parceiro oficial da Meta para soluções empresariais e integrações com WhatsApp”.
  - Adicionar o tópico “Coexistence WhatsApp Business”.
  - Deixar o card mais largo, ocupando melhor o espaço.

## Mudanças
- `src/components/sections/PartnersSection.tsx`:
  - Atualizar o objeto do parceiro: `name`, `description`, `features` (acrescentar “Coexistence WhatsApp Business”), manter `logoUrl` para `Meta.svg`.
  - No cabeçalho do card: colocar `<img>` da logo da Meta ao lado do título, com classes `h-6 md:h-8 mr-3 brightness-0 invert`.
  - Remover a renderização do status e bolinha verde.
  - Ajustar o grid para ocupar mais largura: mudar para `grid-cols-1 gap-8` removendo `max-w-4xl` para usar a largura do `Container`.

## Verificação
- Conferir a Home: card “Tech Providers” com logo branca ao lado do título, sem status, com novo texto e tópico adicionado, ocupando mais largura.

Posso aplicar essas alterações agora?