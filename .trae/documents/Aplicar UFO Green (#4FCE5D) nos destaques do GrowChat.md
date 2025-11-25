## Objetivo
- Substituir todos os textos de destaque que eram roxos e quaisquer elementos remanescentes roxos na página do GrowChat pelo verde UFO Green (#4FCE5D).

## O que será ajustado
1. Token de cor
- Adicionar `whatsapp.ufo: '#4FCE5D'` no `tailwind.config.js` para uso consistente.

2. Remover roxo remanescente
- Trocar classes que ainda estão roxas em `GrowChatProduct.tsx`:
  - `bg-purple-900/40` → `bg-whatsapp-dark/40` (fundos)
  - `text-purple-400|300` → `text-whatsapp-ufo` (ícones, números de passos, títulos de FAQ)

3. Textos de destaque
- Alterar spans de destaque que estavam roxos (já migrados para verde padrão) para `text-whatsapp-ufo`, incluindo:
  - "WhatsApp", "solução completa", "Imediata", "Leve Integrado", "24/7", "Funciona", "Completos", "Frequentes" e o CTA final "WhatsApp sob controle?".
- Aplicar `text-whatsapp-ufo` em ícones de destaque correspondentes.

4. Escopo
- Mudanças apenas na página explicativa (`/growchat-produto`). Não altera o dashboard (`/growchat`).

5. QA
- Validar em `http://localhost:3000/growchat-produto` contraste, consistência visual, responsividade e CTAs.

Confirma que posso aplicar essas mudanças?