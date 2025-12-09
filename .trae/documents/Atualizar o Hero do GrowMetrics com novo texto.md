## Objetivo
- Substituir os três textos atuais do Hero por dois novos textos fornecidos, alinhando com o padrão visual do GrowChat.

## Mudanças no arquivo src/pages/GrowMetrics.tsx
1. Título (h1)
- Trocar o conteúdo para: "A medindo o amor (e o ódio) dos seus clientes em tempo real, pra você agir antes que vire churn."
- Manter classes: `text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight`.
- Remover o `span` destacado anterior.

2. Subtítulo (parágrafo grande)
- Trocar o conteúdo para: "Centralize NPS, CSAT, CES e mais métricas, com disparos multicanal automáticos 24/7."
- Manter classes: `text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed`.

3. Remover o terceiro parágrafo
- Excluir o bloco que contém "Com IA avançada, disparos multicanal personalizáveis e análises em tempo real." para ficar apenas com dois textos conforme solicitado.

## Verificação
- Abrir `http://localhost:3000/growmetrics` e confirmar os novos textos e espaçamentos.
- Garantir que o CTA e a lista de ícones abaixo permaneçam funcionais.

## Escopo
- Apenas edição de conteúdo em `GrowMetrics.tsx`, sem alterações de tema global.