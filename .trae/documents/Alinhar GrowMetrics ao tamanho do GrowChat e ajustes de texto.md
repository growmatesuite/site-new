## Objetivo
- Igualar o tamanho tipográfico do Hero (título e subtítulos) do GrowMetrics ao padrão da página GrowChat e aplicar ajustes específicos de copy e rótulos.

## Referência de Tamanho (GrowChat)
- Título (Hero): `text-5xl md:text-7xl`
- Subtítulo principal: `text-xl md:text-2xl`
- Parágrafo de apoio: `text-lg` / `text-gray-300`

## Alterações Propostas (arquivo: src/pages/GrowMetrics.tsx)
1. Tamanho do Hero
- Título: trocar `text-6xl md:text-8xl` para `text-5xl md:text-7xl`
- Subtítulo (linha grande): trocar `text-2xl md:text-3xl` para `text-xl md:text-2xl`
- Parágrafo de apoio: manter `text-lg`/`text-xl` conforme GrowChat (ajustar para `text-lg` quando aplicável) garantindo equilíbrio visual.

2. Copy do Hero
- Remover a segunda frase: "Trabalhamos com as principais métricas de customer experience do mercado!" deixando apenas: "Com IA avançada, disparos multicanal personalizáveis e análises em tempo real."
- Trocar o rótulo "IA Avançada" para "IA sob medida" (na linha de itens com ícones) e repetir a mesma alteração no bloco inferior após o CTA final.

3. Descrição do Card NPS
- Atualizar o texto de descrição do item NPS para: "Mensure a lealdade de marca do seu cliente com a metodologia mais utilizada do mundo."

## Verificação
- Abrir `http://localhost:3000/growmetrics` e conferir:
  - Título/subtítulos com os mesmos tamanhos do GrowChat
  - Remoção da frase extra no Hero
  - "IA sob medida" visível no topo e no rodapé
  - Descrição do NPS atualizada

## Escopo
- Somente alterações em `src/pages/GrowMetrics.tsx`. Nenhuma mudança de configuração global ou em outros componentes.