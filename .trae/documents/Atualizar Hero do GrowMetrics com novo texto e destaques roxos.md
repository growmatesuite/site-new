## Objetivo
- Substituir o título e subtítulo do Hero da página GrowMetrics por novos textos e aplicar destaque roxo apenas às frases especificadas.

## Alterações (arquivo: src/pages/GrowMetrics.tsx)
1. Título (h1)
- Novo conteúdo: "Inteligência Artificial medindo a lealdade dos seus clientes em tempo real, pra você tomar decisões baseadas em dados"
- Aplicar `text-purple-400` nas frases: "lealdade dos seus clientes" e "baseadas em dados" usando `<span className="text-purple-400">...`.
- Manter classes: `text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight`.

2. Subtítulo (parágrafo grande)
- Novo conteúdo: "Centralize NPS, CSAT, CES e outras métricas num só lugar"
- Manter classes: `text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed`.

## Verificação
- Abrir `http://localhost:3000/growmetrics` e validar que os destaques roxos aparecem corretamente, sem gradiente.
- Conferir responsividade e hierarquia tipográfica consistente com GrowChat.

## Escopo
- Apenas edição de conteúdo em `GrowMetrics.tsx`, sem alterar configuração global do Tailwind.