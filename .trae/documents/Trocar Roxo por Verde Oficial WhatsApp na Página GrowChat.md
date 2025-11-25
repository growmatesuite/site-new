## Objetivo
- Substituir toda a temática roxa da página explicativa do GrowChat por verde no padrão oficial do WhatsApp.

## Referências de Código
- Config de tema: `tailwind.config.js` (cores/boxShadow/backgroundImage)
- Componentes base: `src/components/ui/Card.tsx`, `src/components/ui/Button.tsx`
- Página alvo: `src/pages/GrowChatProduct.tsx`

## Implementação
1. Adicionar tokens de cor WhatsApp
- Em `tailwind.config.js`, criar `colors.whatsapp: { primary: '#25D366', dark: '#128C7E' }`.
- Incluir `boxShadow.glow-whatsapp: '0 0 24px rgba(37, 211, 102, 0.35)'`.
- Incluir `backgroundImage.whatsapp-gradient` com variação suave entre `primary` e `dark`.

2. Suporte nos componentes
- Em `Card.tsx`, adicionar `glowColor: 'whatsapp'` mapeando para `shadow-glow-whatsapp`.
- Em `Button.tsx`, criar `variant: 'whatsapp'` com `bg-whatsapp-primary`, `hover:bg-whatsapp-dark`, `shadow-glow-whatsapp` e `focus:ring-whatsapp-primary`.

3. Aplicar na página GrowChatProduct
- Trocar todas ocorrências de roxo por verde WhatsApp:
  - Gradientes/overlays: `from-purple-*` → `from-whatsapp-dark`, `to-purple-*` → `to-whatsapp-primary`.
  - Acentos de texto: `text-purple-*` → `text-whatsapp-primary`.
  - Badges/fundos: `bg-purple-*` → `bg-whatsapp-*`.
  - `Card glowColor="purple"` → `glowColor="whatsapp"`.
  - `Button variant="secondary"`/custom roxo → `variant="whatsapp"`.

4. QA
- Verificar `http://localhost:3000/growchat-produto`:
  - Verde consistente em todos acentos, cards, gradientes e CTAs.
  - Contraste adequado em tema escuro.
  - Responsividade e animações preservadas.

## Observações
- Escopo limitado à página do produto GrowChat; dashboard `/growchat` permanece inalterado. Se desejar, aplico o mesmo verde também no dashboard.

Posso aplicar essas mudanças?