## Objetivo
Eliminar os botões "Ver Integrações Disponíveis" das seções de CTA ao final das páginas internas, mantendo apenas "Falar com Especialista".

## Locais a alterar
- LangChain: `src/pages/LangChain.tsx:389-395`
- LangSmith: `src/pages/LangSmith.tsx:503-509`
- Agno: `src/pages/Agno.tsx:450-456`
- LangGraph: `src/pages/LangGraph.tsx:474-480`
- n8n: `src/pages/N8n.tsx:330-331`

## Ação
- Remover o `<Link to="/integracoes">...Ver Integrações Disponíveis</Link>` em cada arquivo.
- Manter o `<a href="mailto:ops@growmate.io">Falar com Especialista</a>`.
- Preservar layout e espaçamento (container `flex` e `gap-4`).

## Resultado esperado
- Nas páginas internas, os CTAs de final ficam com apenas “Falar com Especialista”.

Posso aplicar agora?