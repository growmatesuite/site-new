## Objetivo
- Excluir completamente a seção "Parcerias Estratégicas" da página inicial, conforme solicitado.

## Alterações
- Remover import e renderização de `PartnersSection` em `src/pages/Home.tsx`.
- Remover o export de `PartnersSection` em `src/components/index.ts` para evitar uso futuro por engano.
- Manter arquivos da seção no projeto para possível restauração posterior (não deletar o componente nem dados).

## Verificação
- Abrir a Home e confirmar que a seção não aparece mais.

Posso aplicar agora?