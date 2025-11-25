## Por que algumas mudanças não rodam
Quando preciso fazer alterações no código e publicar, eu primeiro proponho um plano e, com sua confirmação, executo. Se a confirmação não chegar ou o servidor local não estiver ativo, você pode não ver as mudanças imediatamente. Vamos alinhar um fluxo claro.

## Fluxo que vou seguir
1. Consolidar e aplicar todas as mudanças pendentes.
2. Rodar e publicar em localhost.
3. Validar visualmente e ajustar fino (logos/tamanhos) na hora.

## Checklist de mudanças a aplicar agora
- Header
  - Remover “Soluções”, “Tecnologias”, “Sobre”, “Contato”.
  - Deixar apenas “GrowChat” (/growchat), “GrowMetrics” (/growmetrics), “Integrações” (/integracoes) no desktop e mobile.
- Footer
  - Trocar texto “Growmate” pelo logo `/brand.svg` com tamanho consistente.
  - Atualizar contatos: `ops@growmate.io`, `+55 11 4863-5675`, `Uberlândia, Minas Gerais`.
  - Atualizar copyright para `© 2025 Growmate.`
- Social Proof (logos)
  - Garantir ordem: Unimed, Expresso Nacional, WCC, AZ Ship, Cerizze, Propbank.
  - Propbank: usar exatamente `public/logos/propbnk.svg` (ou `propbank.png` se preferir). Uniformizar tamanho com wrapper fixo e `object-contain`; ajustar altura/escala para ficar igual às demais.
- Favicon
  - Se você trocou o arquivo dentro de `public/favicon.svg`, nada muda; se renomeou, atualizo o `index.html` para o novo nome.
- Publicação
  - Start/Restart do dev server e disponibilizar preview em `http://localhost:5173/`.

## Verificação
- Hard refresh (Cmd+Shift+R) e validação visual: topo, rodapé, logos e favicon.
- Ajuste fino imediato (tamanho/escala das logos) caso necessário.

Posso executar este checklist agora para que você veja tudo rodando no localhost?