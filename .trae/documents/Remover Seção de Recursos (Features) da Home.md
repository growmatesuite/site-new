## Objetivo
- Excluir a seção que mostra os cards de recursos ("Construído para escalar") da página inicial.

## Alterações Planejadas
- Editar `src/pages/Home.tsx` para remover a importação e a renderização de `FeaturesSection`.
- Editar `src/components/index.ts` para não exportar mais `FeaturesSection` (evita importações futuras por engano).
- Não apagar arquivos ou dados (`src/components/sections/FeaturesSection.tsx` e `FEATURES` em `constants.ts`) para facilitar restauração, apenas deixar de usar.

## Verificação
- Abrir a Home e confirmar que a seção deixou de aparecer.
- Build para garantir ausência de erros de importação.

Posso aplicar essas alterações agora?