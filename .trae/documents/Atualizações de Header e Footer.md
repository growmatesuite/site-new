## O que vou alterar
- Footer
  - Trocar o texto "Growmate" do bloco de marca pelo logo (`/brand.svg`), mantendo altura consistente.
  - Atualizar contatos: `ops@growmate.io`, `+55 11 4863-5675`, `Uberlândia, Minas Gerais`.
  - Atualizar copyright para `© 2025 Growmate.`.
- Header
  - Simplificar o menu: remover “Soluções”, “Tecnologias”, “Sobre”, “Contato”.
  - Manter apenas: “GrowChat” (rota `/growchat`), “GrowMetrics” (rota a definir) e “Integrações” (`/integracoes`).
  - No mobile, refletir a mesma lista.

## Arquivos a editar
- `src/components/layout/Footer.tsx`: bloco de marca, contatos e copyright.
- `src/components/layout/Header.tsx`: `navigationItems` e links de navegação (desktop e mobile).

## Observações
- “GrowMetrics” será linkado como `/growmetrics` (placeholder); posso criar a rota depois se você quiser.

Posso aplicar essas mudanças agora?