## Problema
- Palavras em spans com gradiente (bg-clip-text + text-transparent) não aparecem.
- Ícone de "LGPD Compliance" está verde.
- Texto "Excelente performance" precisa virar "Boa performance".
- Remover "Métrica validada globalmente" dos cards.
- Remover símbolo ® de "NPS®".

## Solução Proposta
1. Remover gradientes em textos dos títulos e usar `text-purple-400`:
   - Hero: "lealdade de marca"
   - NPS: "o quanto você recomendaria"
   - Métricas: "principais métricas"
   - Ranking: "ranking da experiência"
   - CTA final: "desvendar o poder"
   - FAQ: "frequentes"
   - Depoimentos: "falam por si"
   - Como funciona: "funciona"
   - Performance: "transforma resultados"

2. Trocar o ícone de "LGPD Compliance" para roxo:
   - Alterar `Shield` de `text-green-400` para `text-purple-400`.

3. Ajustar texto de performance NPS:
   - Substituir "Excelente performance" por "Boa performance".

4. Remover etiqueta de validação global dos cards:
   - Excluir bloco com `Star` e texto "Métrica validada globalmente" em todos os cards de métricas.

5. Remover ® do título NPS:
   - Alterar "NPS® - Net Promoter Score" para "NPS - Net Promoter Score".

## Verificação
- Abrir `http://localhost:3000/growmetrics` e validar a presença de todas as palavras nos títulos.
- Conferir ícone de LGPD roxo e textos atualizados.
- Garantir responsividade e consistência com o padrão roxo do GrowChat.

## Escopo
- Alterações apenas em `src/pages/GrowMetrics.tsx` (estilo/conteúdo). Nenhuma mudança no `tailwind.config.js`.