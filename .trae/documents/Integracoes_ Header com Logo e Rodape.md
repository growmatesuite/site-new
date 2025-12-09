## Objetivo
- Na página "Integrações", manter o logo (no Header) como rota de retorno para a Home e incluir o Footer.

## Mudanças
- Atualizar o Header para usar `Link to="/"` no logo, garantindo navegação client-side.
- Atualizar `src/pages/Integracoes.tsx` para seguir a mesma estrutura da Home:
  - Wrapper `div` com `min-h-screen bg-black-base`.
  - Incluir `<Header />` antes do `<main>`.
  - Incluir `<Footer />` após o `<main>`.

## Consistência Visual
- Manter tema escuro, glass e tipografia existentes.
- Preservar realce do link ativo "Integrações" no Header.

## Verificação
- Rodar o dev server, acessar `/integracoes` e validar:
  - Logo visível e clicável; leva a `/`.
  - Footer renderizado corretamente.

Posso aplicar essas alterações agora?