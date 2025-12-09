## O que será removido
- Páginas de blog: `src/pages/BlogHome.tsx`, `src/pages/BlogPost.tsx`, `src/pages/BlogCategory.tsx`, `src/pages/BlogSearch.tsx`
- Camada de dados do blog: `src/lib/supabase.ts`
- Migração e pasta do Supabase usada pelo blog: `supabase/migrations/001_create_posts_table.sql` (e a pasta `supabase/` se estiver só para o blog)
- Documentos internos sobre blog: `.trae/documents/Adicionar Blog Local em _blog e rotas de Artigos.md`, `.trae/documents/Configurar Supabase para o Blog (_blog).md`, `.trae/documents/prd_blog_growmate.md`, `.trae/documents/technical_architecture_blog.md`

## Ajustes de código para não quebrar o build
- Remover rotas do blog em `src/App.tsx` e apontar `/` para uma página existente (ex.: `src/pages/Home.tsx`).
- Remover o link "Blog" do rodapé em `src/components/layout/Footer.tsx`.

## Validação
- Rodar `npm run check` e `npm run build` para garantir que o projeto compila sem referências ao blog.

## Observação
- Variáveis em `.env` relacionadas ao Supabase não serão usadas após remover `src/lib/supabase.ts`. Posso limpá-las se desejar.

Confirma que posso aplicar essas remoções e ajustes agora? 