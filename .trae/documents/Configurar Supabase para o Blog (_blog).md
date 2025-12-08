## O que vou configurar
- Variáveis de ambiente do Supabase para desenvolvimento local e produção (Vercel).
- Garantir que o blog passe a usar o Supabase (desativando o fallback local automaticamente).
- Criar/validar tabela `posts` no Supabase e inserir o seu primeiro artigo.

## Passos (local)
1. Criar arquivo `.env.local` na raiz do projeto com:
   - `VITE_SUPABASE_URL=https://zitnremdgnticvogjoyr.supabase.co`
   - `VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppdG5yZW1kZ250aWN2b2dqb3lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxOTY2MzgsImV4cCI6MjA4MDc3MjYzOH0.5PlPZmicMZqDpeu6uTuPJoiiw8b9eNvWBefDdFCdGug`
2. Garantir que `.gitignore` contenha entradas para `.env` e `.env.*` (para não versionar chaves).
3. Rodar `npm run dev` e acessar `http://localhost:5173/blog` (ou a porta ativa) para validar.
4. Verificar que o blog está listando posts do Supabase (o fallback local é desativado automaticamente quando as envs existem).

## Passos (Supabase)
1. No SQL Editor do Supabase, criar a tabela `posts` e índices (DDL):
   - Usar o script do documento técnico (CREATE TABLE com colunas: `id`, `title`, `slug`, `subtitle`, `content`, `author`, `category`, `tags`, `cover_image`, `read_time`, `published_at`, etc.).
2. Inserir o seu primeiro artigo usando `INSERT INTO posts (...) VALUES (...)` com o conteúdo fornecido.
3. Conferir RLS e permissões de SELECT para `anon/authenticated` conforme o script.

## Passos (Vercel)
1. Em “Settings → Environment Variables”, criar:
   - `VITE_SUPABASE_URL=https://zitnremdgnticvogjoyr.supabase.co`
   - `VITE_SUPABASE_ANON_KEY=...` (mesmo valor acima)
2. Redeploy do projeto.
3. Testar `/blog` e `/blog/post/<slug>` em produção.

## Validação
- Local: acessar `/blog`, `/blog/post/melhor-empresa-agentes-ia-brasil-2026`, categorias e busca.
- Produção: repetir os acessos após o deploy.

## Segurança
- Não versionar `.env` nem chaves.
- Usar somente a `anon key` no frontend.

Posso aplicar esses passos agora para te deixar rodando local e pronto para produção?