## Arquivos Alvo
- `src/pages/Privacy.tsx` (nova página com o conteúdo fornecido)
- `src/App.tsx` (adicionar rota `/privacy`)
- `src/components/layout/Footer.tsx` (trocar link de "Política de Privacidade" para navegar via rota)

## Implementação da Página
- Estrutura padrão: `Header`, `Footer`, `Container`, `main` com `pt-24 pb-24` e fundo `bg-black-base`
- SEO: `<Helmet>` com `title` e `meta description`
- Conteúdo: renderizar os blocos conforme texto enviado, usando headings (`h1`, `h2`), parágrafos e listas
  - Incluir chamada de contato e prazos
  - Link público corretamente formatado para `https://growmate.io/privacy/meta-data-deletion`
  - Última atualização: 03 de Novembro de 2025

## Ajustes de Navegação
- `App.tsx`: adicionar `<Route path="/privacy" element={<Privacy />} />`
- `Footer.tsx`: substituir o link atual `href="#privacy"` por um `Link` do `react-router-dom` apontando para `/privacy`

## Verificação
- Acessar `http://localhost:5173/privacy` e validar:
  - Página carrega com título e seções corretas
  - Link do rodapé "Política de Privacidade" navega para `/privacy`
  - Estilo consistente com o restante do site

## Observações
- Manterei os demais links legais do rodapé como estão (Termos, Cookies, LGPD) até você solicitar páginas para eles.
- Caso você deseje versões em inglês, posso adicionar um toggle ou página separada depois.