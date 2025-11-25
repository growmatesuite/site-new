## O que vou ajustar agora
- Padronizar a página LangSmith com tema azul em todos os componentes e links
- Corrigir a rota da página CrewAI (import ausente de Helmet causava erro de renderização)

## Mudanças detalhadas
1) LangSmith
- Substituir "to-purple-700/10" por "to-blue-700/10" no gradiente da Hero
- Garantir cor azul em cards: já usei `glowColor="blue"`, mas vou validar e completar
- Atualizar seção de exploração para usar tema azul nesta página:
  - Mapear `/langsmith` → `blue` em `themeColorMap`
  - Adicionar acento `blue` nas classes (bordas, badges, pill)

2) ExploreSuite
- Incluir `blue` no union type de `glowColor` (do tipo Item), e nos `accents`
- Ajustar o `themeColorMap` para `/langsmith` ser `blue`

3) CrewAI
- Adicionar `import { Helmet } from 'react-helmet-async'` no topo da página para evitar erro
- Validar que a rota `/crewai` funciona com o componente renderizado

## Verificação
- Navegar para `/langsmith`: títulos, gradientes, cards e links devem estar em azul
- Navegar para `/crewai`: página carrega normalmente e links funcionam

Posso aplicar essas correções agora?