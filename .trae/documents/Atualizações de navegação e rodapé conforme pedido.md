## Objetivo
Aplicar ajustes no topo (Header) e rodapé (Footer): remover “Trabalhe Conosco” do header, apontar “Carreiras” para a rota de “Trabalhe Conosco”, retirar a seção “Recursos”, atualizar ícones sociais (apenas Instagram e YouTube), aumentar a logo da Meta e remover o disclaimer.

## Mudanças propostas
### Header (topo)
- Remover item “Trabalhe Conosco” do array `navigationItems`.

### Footer
- Seção “Empresa”: alterar link de “Carreiras” para `/trabalhe-conosco`.
- Remover a seção “Recursos” completamente (não renderizar título vazio).
- Ajustar grid para redistribuir colunas: de `lg:grid-cols-6` para `lg:grid-cols-5` (brand ocupa 2 colunas + 3 seções restantes), mantendo espaçamento consistente.
- Ícones sociais: remover conjunto atual, manter apenas Instagram e YouTube com ícones; links placeholder `#` (podemos trocar pelos seus perfis quando enviar).
- Aumentar a logo da Meta no bloco “Tech Provider” (ex.: `h-7 md:h-8`).
- Remover o bloco de disclaimer (“Logos e marcas…”).

## Arquivos envolvidos
- `src/components/layout/Header.tsx` — remover “Trabalhe Conosco”.
- `src/components/layout/Footer.tsx` — ajustes nas seções, ícones, grid, Meta e remoção do disclaimer.

## Resultado esperado
- Navegação do topo sem “Trabalhe Conosco”.
- “Carreiras” no rodapé leva à página `/trabalhe-conosco`.
- Rodapé sem “Recursos”, com espaçamento padronizado.
- Somente ícones de Instagram e YouTube.
- Logo Meta maior.
- Disclaimer removido.

Posso aplicar agora?