## Causa do Erro
- A compilação do app está quebrada por um typo em `src/pages/Privacy.tsx:1` (`port React from 'react';`), o que dispara overlay de erro e afeta qualquer rota, inclusive `/n8n`.

## Plano de Correção
1. Corrigir import no `Privacy.tsx`
- Substituir a linha 1 por `import React from 'react';`.
2. Validar `/n8n`
- Confirmar que a página carrega sem overlay de erro.
- Conferir se todas as substituições para o vermelho do n8n (coral) estão aplicadas: textos, chips, gradiente, botões e glow.
3. Verificações adicionais
- Garantir que as classes Tailwind customizadas (`text-n8n-primary`, `bg-n8n-primary/20`, `shadow-glow-coral`) estão presentes e funcionando.
- Rodar um smoke test rápido nas rotas principais para assegurar que nenhuma outra página está quebrando a build.

## Impacto
- Alteração pontual em um arquivo; sem efeitos colaterais na lógica de `/n8n` além de permitir renderização correta.

Posso aplicar agora a correção no `Privacy.tsx` e validar `/n8n`? 