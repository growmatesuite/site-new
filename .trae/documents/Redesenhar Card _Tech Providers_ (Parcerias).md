## Objetivo
Reestruturar o card para uma diagramação mais limpa, visual e escaneável, mantendo a marca Meta e o conteúdo essencial.

## Layout Proposto
1. Cabeçalho do card
- Linha com logo Meta (branca, `h-6 md:h-8 brightness-0 invert`) + título “Tech Providers” alinhados à esquerda.
- Sem status/bolinha.

2. Descrição curta
- Texto em **uma linha**: “Parceiro oficial da Meta para soluções empresariais e integrações com WhatsApp”.
- Cor `text-gray-300` e largura máxima `max-w-3xl`.

3. Capacidades em chips (em grid)
- Transformar os tópicos em pills: `px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm`.
- Grid responsivo: `grid grid-cols-2 md:grid-cols-3 gap-2`.
- Itens: WhatsApp Business API, Cloud API, Webhooks, Templates, Instagram Graph API, Facebook Business, Threads API, Coexistence WhatsApp Business.

4. Divisor e CTAs
- Linha sutil `border-t border-gray-800 my-6`.
- CTAs no rodapé: `Button` primário “Ver integrações” e `Button` terciário “Saiba mais”.

5. Largura e espaçamento
- Card: `glass-effect p-8 md:p-10 rounded-xl` com `glowColor="purple"`.
- Seção em `grid-cols-1 gap-10` sem `max-w-4xl` para ocupar melhor o Container (podemos usar `Container size="xl"`).

## Implementação Técnica
- `src/components/sections/PartnersSection.tsx`
  - Manter objeto único com `logoUrl`.
  - Substituir lista de features por chips renderizados.
  - Inserir divisor e bloco de CTAs.
  - Ajustar grid da seção para mais largura.

## Acessibilidade
- `alt="Meta"` no logo; foco visível nos CTAs.

## Resultado Esperado
- Card mais leve visualmente, com informação sintetizada e melhor aproveitamento do espaço.

Posso implementar este redesign agora?