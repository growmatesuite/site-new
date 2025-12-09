## Objetivo
- Excluir a página "GrowChat" (dashboard do print) e remover referências para evitar links quebrados.

## Ações
1. Deletar `src/pages/GrowChat.tsx`.
2. Remover rota e import em `src/App.tsx` (retirar `/growchat`).
3. Atualizar `ExploreSuite` para não listar "GrowChat (Página)" e remover mapeamento de cor para `/growchat`.
4. Atualizar `ToolsSection` para que o card GrowChat direcione para `/growchat-produto`.
5. Verificar outros links para `/growchat` (ex.: `Header`, `Footer`) e atualizar se necessário.
6. Rodar e validar navegação sem erros.

## Impacto
- Mantém o produto GrowChat em `/growchat-produto`.
- Elimina completamente o dashboard antigo `/growchat`.

Posso aplicar agora?