## Objetivo
Remover o botão “Ver Integrações” e deixar apenas “Falar com Especialista” com comportamento `mailto:ops@growmate.io`, usando a paleta do CrewAI.

## Mudanças técnicas
- `src/pages/CrewAI.tsx` (seção CTA final):
  - Trocar o estilo do primeiro botão para preenchido no tom coral do CrewAI (`bg-[#ff5a50] hover:bg-[#ff7a6a] text-black`).
  - Remover o segundo botão `<Link to="/integracoes">Ver Integrações</Link>`.
  - Opcional: remover import `Link` se ficar sem uso.

## Resultado esperado
- Apenas um CTA “Falar com Especialista” em destaque com as cores do CrewAI, abrindo e‑mail.

Posso aplicar agora?