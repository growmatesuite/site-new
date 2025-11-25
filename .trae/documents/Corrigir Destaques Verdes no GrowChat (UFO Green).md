## Problema
- Usuário vê a página toda cinza: os estilos verdes (UFO Green) não estão aplicando.

## Causas prováveis
- Tailwind não gerou classes novas (`text-whatsapp-ufo`, `from-whatsapp-dark/..`).
- Herança de cor padrão cinza do `body` (src/index.css:90–95) sobre elementos sem classe de cor.

## Plano de Correção
1. Fallback imediato com valor arbitrário
- Aplicar `text-[#4FCE5D]` (UFO Green) diretamente nos destaques e ícones críticos da página `GrowChatProduct.tsx` (títulos, spans, ícones, números +2M/95%).

2. Safelist no Tailwind
- Adicionar `safelist` em `tailwind.config.js` para garantir geração das classes: `text-whatsapp-ufo`, `text-whatsapp-primary`, `bg-whatsapp-dark/40`, `from-whatsapp-dark/30`, `to-whatsapp-primary/20`, etc.

3. Revisão de herança
- Garantir que containers com texto cinza tenham overrides explícitos verdes onde necessário.

4. QA
- Validar visual em `http://localhost:3000/growchat-produto` (contraste e consistência).

Posso aplicar essas mudanças agora?