## Objetivo
Trocar todos os acentos azuis da página `/n8n` pela cor oficial do logo do n8n (coral) para reforçar a identidade visual.

## Referência de Cor
- Usar a cor primária do n8n em HSL conforme documentação: `hsl(6.9, 100%, 67.6%)` (coral).
- Alternativa hex comum: `#FF5F57` (coral). Se preferir outro tom oficial, ajusto facilmente.

## Mudanças Técnicas
1. Tailwind e Variáveis
- Adicionar a cor `n8n` ao `tailwind.config.js` em `extend.colors` (ex.: `n8n: { primary: '#FF5F57' }`).
- Adicionar `--color-n8n-primary: hsl(6.9 100% 67.6%)` em `src/index.css` para uso em efeitos e fallback.

2. Card Glow
- Estender `src/components/ui/Card.tsx` para aceitar `glowColor: 'coral'` e mapear para classe `shadow-glow-coral`.
- Definir `boxShadow.glow-coral` em `tailwind.config.js` e `--shadow-glow-coral` em `src/index.css`.

3. Página n8n (`src/pages/N8n.tsx`)
- Substituir todas as ocorrências de classes com `blue` por a cor coral:
  - `text-blue-400` → `text-n8n-primary` (ou `text-[var(--color-n8n-primary)]`).
  - `bg-blue-900/40` → `bg-n8n-primary/20` (ou `bg-[hsl(6.9,100%,67.6%)/0.20]`).
  - `border-blue-600` → `border-n8n-primary`.
  - Botões: `bg-blue-600 hover:bg-blue-700` → `bg-n8n-primary hover:brightness-110`.
  - Gradientes: `from-blue-900/20 to-purple-900/20` → `from-n8n-primary/20 to-n8n-primary/10`.
- Corrigir `glowColor="blue"` para `glowColor="coral"` nos componentes `Card`.
- Exemplos onde ocorrerá (linhas aproximadas):
  - Hero gradient e textos: `src/pages/N8n.tsx:151–181`.
  - Features/Workflows/CTA: múltiplas ocorrências em `N8n.tsx:186–427` usando `blue`.

## Verificação
- Rodar o servidor e navegar até `/n8n` para validar:
  - Consistência visual dos acentos na nova cor coral.
  - Efeito glow funcionando com `glowColor="coral"`.
  - Nenhum erro de TypeScript (ajuste do union type em `CardProps`).

## Impacto
- Alterações restritas à página `/n8n` e utilitários de UI (Card/Tailwind), sem impacto nas outras páginas.

Confirma que deseja aplicar essas mudanças? Posso executar e ajustar o tom exato se preferir o HSL ou um HEX específico do manual de marca.