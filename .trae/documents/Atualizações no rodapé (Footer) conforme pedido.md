## Objetivo
Aplicar as mudanças no rodapé: ajustar itens de "Soluções" e "Recursos", reorganizar "Empresa", atualizar a área de ícones sociais, inserir "Tech Provider" com logo Meta e remover links legais específicos.

## Mudanças propostas
### Seção "Soluções"
- Trocar "Agentes de IA" → "GrowChat" com link para `/growchat`.
- Trocar "Automação" → "GrowMetrics" (link temporário `#growmetrics`).
- Manter "Integrações" como está.
- Remover "Analytics".

### Seção "Recursos"
- Remover a seção inteira (todos os itens: "Documentação", "API Reference", "Blog", "Status").

### Seção "Empresa"
- Ajustar para: "Sobre", "Carreiras", "Empresas" (substitui "Blog").
- Remover "Contato" e "Privacidade" dessa coluna (Privacidade já permanece nos links legais abaixo).

### Ícones sociais
- Garantir apenas: 💼 🐦 🐙 📺 (LinkedIn, Twitter, GitHub, YouTube) com links placeholder `#`.

### "Tech Provider" + Meta
- Adicionar um bloco no canto direito da barra inferior: texto "Tech Provider" seguido da logo Meta (`/logos/Meta.svg`).

### Links legais
- Manter: "Política de Privacidade" (`/privacy`) e "Termos de Uso" (`/terms`).
- Remover: "Política de Cookies" e "Compliance LGPD".

## Impacto de código
- Editar `src/components/layout/Footer.tsx` para modificar arrays de navegação e estrutura da barra inferior.
- Não alterar rotas; apenas ajustar rótulos e, quando aplicável, links existentes (`/growchat`).

## Resultado esperado
- Rodapé refletindo os novos textos e organização.
- Área inferior com ícones (emoji), bloco "Tech Provider" + logo Meta e sem os links de cookies/LGPD.

Posso aplicar essas alterações agora?