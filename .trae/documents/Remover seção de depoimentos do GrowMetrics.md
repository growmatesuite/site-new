## O que será feito
- Remover completamente a seção de depoimentos da página `GrowMetrics`.
- Eliminar o array `testimonials` e o import do ícone `Star` não mais utilizado.

## Arquivos e trechos afetados
- `src/pages/GrowMetrics.tsx:709–764` — remover o bloco JSX marcado como `/* Testimonials */`, incluindo título “Resultados que falam por si”, descrição e grid de cards.
- `src/pages/GrowMetrics.tsx:143–168` — remover a constante `testimonials` (nomes, cargos, conteúdo, avatar, rating).
- `src/pages/GrowMetrics.tsx:16` — remover `Star` do import de `lucide-react` para evitar warnings de import não utilizado.

## Ajustes complementares
- Garantir continuidade visual entre a seção anterior e a `/* FAQ Section */` (já começa em `src/pages/GrowMetrics.tsx:766`).
- Conferir se não há referências residuais a `testimonials` ou `Star` em outros trechos.

## Verificação
- Rodar em desenvolvimento e acessar `/growmetrics` para validar que:
  - A seção de depoimentos não aparece.
  - Não há erros de compilação nem imports não utilizados.
  - Layout permanece consistente (espaçamentos e transições entre seções).

Confirma que posso aplicar essas remoções agora?