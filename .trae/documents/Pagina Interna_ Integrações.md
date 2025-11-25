## Objetivo
- Criar a página interna "Integrações" seguindo o layout do print e os padrões visuais do projeto (tema escuro, glass, acentos verde/roxo, tipografia e espaçamentos).

## Estrutura da Página
- Hero simples centralizado com:
  - Título: `Integrações` (font-heading, peso forte)
  - Subtítulo em duas linhas, tom cinza (`text-gray-400`), largura máxima controlada.
- Grid responsivo de cards (1 col no mobile, 2 no md, 3 no lg) com 9 integrações:
  - WhatsApp, Facebook, Instagram, Telegram, Line, SMS, Email, Slack, n8n.
  - Cada card: ícone em badge circular com acento verde, título em negrito, descrição curta.
  - Estilo dos cards: `Card` com `glass-effect`, `rounded-xl`, borda discreta e hover leve (`hoverable`).

## Dados e Componentização
- Criar um array `INTEGRATIONS` (nome, descrição, ícone, cor) em `src/lib/constants.ts` para centralizar conteúdo.
- Componente `IntegrationCard` dentro da página (ou `components/pages/Integrations/IntegrationCard.tsx` caso prefira) reutilizando `Card` e `Container`.
- Ícones: utilizar `lucide-react` (MessageCircle/MessageSquare para WhatsApp, Facebook, Instagram, Send para Telegram, Phone para SMS, Mail para Email, Slack para Slack, Workflow para n8n, e Paperclip/Link para Line).

## Rotas e Navegação
- Adicionar nova rota em `src/App.tsx`: `path="/integracoes"` apontando para `Integracoes`.
- Incluir link "Integrações" no `Header`:
  - No desktop: item do menu com `href="/integracoes"` (ou `Link` do `react-router-dom` se preferir evitar reload).
  - No mobile: mesmo link no menu colapsado.

## SEO e Acessibilidade
- Usar `react-helmet-async` na página: título `Integrações | Growmate` e meta description curta.
- Garantir contraste, foco e navegação por teclado; ícones com `aria-hidden` e `aria-label` nos links.
- Respeitar `prefers-reduced-motion` (animações leves com `framer-motion`).

## Estilo e Consistência
- Tipografia: `font-heading` para o título, `text-gray-400`/`text-gray-300` nos textos secundários.
- Espaçamento: `Container` tamanho `lg`, `py-24` no bloco principal, `gap-6` no grid.
- Cores: `badge` interna com verde (`bg-green-900/40`, `text-green-400`), eventualmente roxo para variação.

## Verificação
- Build e dev server para validar layout e responsividade.
- Conferir links, hover e foco, além de peso do bundle.

## Arquivos a criar/alterar
- Criar: `src/pages/Integracoes.tsx`.
- Alterar: `src/App.tsx` (rota), `src/components/layout/Header.tsx` (link de navegação), `src/lib/constants.ts` (array `INTEGRATIONS`).

Confirma que posso implementar agora? 