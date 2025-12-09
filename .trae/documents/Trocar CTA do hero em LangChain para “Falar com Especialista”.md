## Objetivo
Alterar o primeiro botão de CTA no hero da página LangChain para o texto “Falar com Especialista”, mantendo o estilo atual.

## Mudança técnica
- Em `src/pages/LangChain.tsx` na seção do hero:
  - Substituir o `<Link to="/integracoes">Explorar Integrações</Link>` por um anchor com rótulo “Falar com Especialista”.
  - Manter classes (`bg-green-600 hover:bg-green-700 text-white ...`).
  - Usar `href="mailto:ops@growmate.io"` para seguir o comportamento dos demais CTAs.

## Resultado esperado
- O botão principal do hero exibe “Falar com Especialista” e abre o e‑mail.

Posso aplicar agora?