## Diagnóstico
- Não há rotas/páginas para `/blog` no código atual, por isso não abre em localhost.
- O rodapé não possui link para Blog abaixo de "Carreiras".

## Implementação
- Rotas:
  - Adicionar `/blog` (lista de artigos) e `/blog/post/:slug` (artigo individual) no arquivo de rotas.
- Páginas:
  - `BlogHome`: grid com cards (imagem 16:9, título, subtítulo, autor, data, categoria) e destaque do artigo principal.
  - `BlogPost`: renderiza o conteúdo do texto, com título/subtítulo/capa/leitura estimada e bloco de “Artigos Relacionados”.
- Dados locais (sem Supabase):
  - Criar `src/data/blog.ts` com um array `posts` contendo o artigo que você enviou (slug, título, subtítulo, conteúdo, autor, categoria, tags, imagem de capa, read_time, published_at).
  - Funções auxiliares: buscar por slug, listar por categoria, listar relacionados (mesmas tags/categoria).
- Componentes:
  - `BlogCard` (card do artigo), `RelatedPosts` (lista lateral/abaixo), `BlogLayout` (estilo clean inspirado no Medium).
- Rodapé:
  - Adicionar link “Blog” abaixo de “Carreiras” na seção “Empresas”.
- SEO/UX:
  - `Helmet` com título/descrição por página, Open Graph básico.
  - Navegação para próximo/anterior artigo (se existir).

## Verificação
- Rodar em desenvolvimento e testar:
  - Acessar `/blog` para ver a lista.
  - Abrir `/blog/post/melhor-empresa-agentes-ia-brasil-2026` para ler o artigo.
  - Verificar que “Artigos Relacionados” aparece ao lado/abaixo.
  - Conferir link “Blog” no rodapé.

## Evolução futura (opcional)
- Alternar para Supabase quando as env vars forem fornecidas (fallback para dados locais se ausentes).
- Adicionar páginas de categoria e busca conforme PRD.

Confirma que posso aplicar essas mudanças agora para você testar o blog em localhost?