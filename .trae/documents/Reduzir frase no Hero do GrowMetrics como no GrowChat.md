## Objetivo
- Deixar a frase "pra você tomar decisões baseadas em dados" menor, seguindo o padrão do GrowChat (um subtítulo abaixo do título).

## Alterações (src/pages/GrowMetrics.tsx)
1. Título (h1)
- Remover a parte final do h1 e manter: "Inteligência Artificial medindo a <span class='text-purple-400'>lealdade dos seus clientes</span>".

2. Subtítulo pequeno (abaixo do h1)
- Inserir um novo `<p>` com classes menores: `text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-4`.
- Conteúdo: "pra você tomar decisões <span class='text-purple-400'>baseadas em dados</span>".

3. Manter o próximo parágrafo existente
- Deixar logo abaixo: "Centralize NPS, CSAT, CES e outras métricas num só lugar".

## Verificação
- Abrir `http://localhost:3000/growmetrics` e confirmar que a frase menor aparece abaixo do título, com destaque roxo apenas na parte indicada.

## Escopo
- Apenas edição do conteúdo na página GrowMetrics, sem mudanças globais.