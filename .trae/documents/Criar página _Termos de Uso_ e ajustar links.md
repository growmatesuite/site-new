## Arquivos Alvo
- `src/pages/Terms.tsx` (nova página com o conteúdo fornecido)
- `src/App.tsx` (adicionar rota `/terms`)
- `src/components/layout/Footer.tsx` (alterar rótulo e link de "Termos de Serviço" para "Termos de Uso" usando navegação interna)

## Implementação da Página
- Estrutura igual à de Privacidade: `Header`, `Footer`, `Container`, `main` com `pt-24 pb-24` e fundo `bg-black-base`
- SEO: `<Helmet>` com `title` e `meta description`
- Título principal: "TERMOS DE USO - GROWMATE" com `text-3xl md:text-4xl text-green-400`
- Seções 1–12 com headings e listas conforme o texto enviado, incluindo contato e última atualização

## Ajustes de Navegação
- `App.tsx`: adicionar `<Route path="/terms" element={<Terms />} />`
- `Footer.tsx`:
  - No bloco de links legais: trocar "Termos de Serviço" por `Link` para `/terms` com rótulo "Termos de Uso"

## Verificação
- Acessar `http://localhost:5173/terms` e validar:
  - Página carrega com título verde e conteúdo completo
  - Link do rodapé "Termos de Uso" navega para `/terms`

## Observações
- Manterei os demais links do rodapé como estão, a menos que você peça para apontarem para rotas internas específicas (como fizemos com Privacidade).