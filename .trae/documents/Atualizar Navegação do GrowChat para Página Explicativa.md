## Objetivo
- Ao clicar em `GrowChat` no topo, abrir a página explicativa do produto (não o dashboard), usando o layout e padrão das páginas internas e cor roxa.

## Estado Atual
- `Header.tsx` aponta `GrowChat` para `'/growchat'`, que hoje renderiza o dashboard de métricas.
- A página explicativa já existe em `'/growchat-produto'` com conteúdo completo e visual roxo.

## Plano de Implementação
1. Atualizar navegação no `Header.tsx`
- Alterar `navigationItems` para usar `href: '/growchat-produto'` no item `GrowChat`.
- Garantir highlight correto quando a rota ativa for `'/growchat-produto'`.

2. Padronizar botões roxos conforme design system
- Trocar botões roxos de `variant="primary" + className` para `variant="secondary"` (que aplica roxo nativo) na página `GrowChatProduct`.

3. Verificação e QA
- Rodar em `http://localhost:3000/growchat-produto` e validar:
  - Clique em `GrowChat` abre a página explicativa.
  - CTAs: “Falar com Especialista” e “Transformar meu WhatsApp agora” exibem estilo roxo consistente.
  - Responsividade e animações OK.

## Observações
- Mantemos o dashboard atual acessível em `'/growchat'` (sem expor no menu), caso necessário para métricas.
- Se preferir o slug principal `'/growchat'` para a página explicativa, posso alternar as rotas: `'/growchat'` → explicativa e `'/growchat-metricas'` → dashboard.

Confirma que posso aplicar essas mudanças?