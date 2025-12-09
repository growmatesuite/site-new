## Problema
- O build falha na Vercel por módulos ausentes: `framer-motion` e `react-helmet-async` em vários arquivos (ex.: `src/components/SEO.tsx:2`, `src/components/layout/Header.tsx:2`).

## O que vou fazer
1. Adicionar dependências necessárias no `package.json`:
   - `framer-motion`
   - `react-helmet-async`
2. Atualizar `src/main.tsx` para usar `HelmetProvider` do `react-helmet-async` (boa prática e evita warnings):
   - Envolver `<App />` com `<HelmetProvider>`.
3. Instalar dependências, validar com `npm run check` e `npm run build` localmente.
4. Criar commit e dar push na branch atual conectada à Vercel (`chore/remove-trae-solo-badge`).
5. Verificar o novo deployment na Vercel.

## Arquivos a alterar
- `package.json`: adicionar `"framer-motion"` e `"react-helmet-async"` em `dependencies`.
- `src/main.tsx`: importar `HelmetProvider` e envolver `<App />`.

## Referências de erro
- `src/components/SEO.tsx:2` (react-helmet-async)
- `src/components/layout/Header.tsx:2` (framer-motion)
- `src/components/sections/HeroSection.tsx:2` (framer-motion)
- Demais páginas/sections citadas na mensagem (LangChain, LangGraph, LangSmith, N8n, etc.).

## Validação
- Rodar `npm run check` para checar TypeScript.
- Rodar `npm run build` para garantir o bundle.
- Confirmar que Vercel conclui deploy sem erros.

Posso aplicar essas mudanças agora e disparar o novo build?