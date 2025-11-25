## Objetivo
- Garantir que ao navegar para "/integracoes" (ou qualquer rota) a página role para o topo em vez de manter a posição anterior.

## Alterações
- Implementar um pequeno componente `ScrollToTop` dentro de `src/App.tsx` que observa `location.pathname` e executa `window.scrollTo({ top: 0, behavior: 'smooth' })`.
- Renderizar `<ScrollToTop />` dentro do `<Router>` e antes de `<Routes>`.

## Verificação
- Clicar em “Ver todas as integrações” na Home e confirmar que a página de Integrações abre posicionada no topo.
- Testar navegação pelo Header para outras rotas.

Posso aplicar agora?