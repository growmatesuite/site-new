# Growmate Blog

Blog corporativo da Growmate para publicação de conteúdo sobre agentes de IA e transformação digital.

## 🚀 Tecnologias

- **Frontend**: React 18 + TypeScript + Vite
- **Estilização**: Tailwind CSS
- **Backend**: Supabase (Database + Auth + Storage)
- **Ícones**: Lucide React
- **Roteamento**: React Router DOM

## 📋 Pré-requisitos

- Node.js 18+
- Conta no Supabase

## 🔧 Configuração

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd site_growmate
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o Supabase

1. Crie um projeto no [Supabase](https://supabase.com)
2. Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

3. Preencha as variáveis de ambiente no arquivo `.env`:

```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anon_do_supabase
```

### 4. Configure o banco de dados

Execute o script SQL do arquivo `supabase/migrations/001_create_posts_table.sql` no dashboard do Supabase para criar a tabela de posts e inserir os dados iniciais.

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) para ver o blog.

## 📁 Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis
├── hooks/           # Hooks customizados
├── lib/             # Configurações e utilidades
│   └── supabase.ts  # Cliente Supabase e tipos
├── pages/           # Páginas principais
│   ├── BlogHome.tsx     # Página inicial do blog
│   ├── BlogPost.tsx     # Página individual do artigo
│   ├── BlogCategory.tsx # Página de categoria
│   └── BlogSearch.tsx   # Página de busca
└── App.tsx          # Configuração de rotas
```

## 🎯 Funcionalidades

- ✅ **Página inicial** com hero section e lista de artigos
- ✅ **Artigos individuais** com renderização de markdown
- ✅ **Categorias** para filtrar conteúdo
- ✅ **Busca** por palavras-chave
- ✅ **Design responsivo** para mobile e desktop
- ✅ **SEO otimizado** para motores de busca
- ✅ **Carregamento otimizado** com skeletons

## 🎨 Design

- **Cores primárias**: Preto (#000000) e branco (#FFFFFF)
- **Cor de destaque**: Verde (#00FF88)
- **Tipografia**: Inter (sans-serif)
- **Layout**: Clean e minimalista inspirado no Medium

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras plataformas

O projeto pode ser facilmente deployado em outras plataformas que suportem aplicações React/Vite.

## 📊 Analytics e SEO

Para adicionar analytics e melhorar o SEO, considere:

- Google Analytics
- Google Search Console
- Meta tags dinâmicas
- Sitemap XML
- Robots.txt

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença da Growmate.

## 📞 Contato

Growmate - contato@growmate.com.br

Link do projeto: [https://github.com/growmate/blog](https://github.com/growmate/blog)