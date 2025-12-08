## Objetivo
1. Tornar todos os CTAs com texto "Falar com Especialista" um link externo para `https://wa.me/551148635675`.
2. Manter o estilo visual atual (botões/anchors), garantindo acessibilidade.
3. Criar um commit e enviar para o repositório conectado.

## Abordagem Técnica
1. Adicionar uma constante reutilizável `WHATSAPP_CONTACT_URL` em `src/lib/constants.ts`.
2. Atualizar todos os locais com o texto "Falar com Especialista" para usar essa URL:
   - `src/components/layout/Header.tsx` (desktop e mobile): envolver o `Button` com `<a href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer">...</a>`.
   - `src/components/sections/HeroSection.tsx`: envolver o `Button` com `<a>` para WhatsApp.
   - `src/components/sections/CTASection.tsx`: envolver o `Button` com `<a>` para WhatsApp.
   - `src/components/sections/PartnersSection.tsx`: substituir `<Link to="/integracoes">` por `<a href={WHATSAPP_CONTACT_URL} ...>` em torno do `Button`.
   - `src/pages/GrowChatProduct.tsx`: envolver o `Button variant="whatsapp"` com `<a>` para WhatsApp.
   - `src/pages/GrowMetrics.tsx`: duas ocorrências de `Button` com o texto; envolver com `<a>`.
   - `src/pages/CrewAI.tsx`: substituir `mailto:` pelo WhatsApp em ambos os anchors/botão interno.
   - `src/pages/LangSmith.tsx`, `src/pages/N8n.tsx`, `src/pages/Agno.tsx`, `src/pages/LangGraph.tsx`, `src/pages/LangChain.tsx`: substituir `href` dos anchors para WhatsApp nas duas ocorrências por arquivo.
3. Padrão de link externo: sempre `target="_blank" rel="noopener noreferrer"`.

## Locais Identificados
- Header: `src/components/layout/Header.tsx:103–106`, `src/components/layout/Header.tsx:169–172`
- Hero: `src/components/sections/HeroSection.tsx:108–112`
- CTA Section: `src/components/sections/CTASection.tsx:97–101`
- Partners: `src/components/sections/PartnersSection.tsx:129–133`
- GrowChat: `src/pages/GrowChatProduct.tsx:156–160`
- GrowMetrics: `src/pages/GrowMetrics.tsx:231–233` e `src/pages/GrowMetrics.tsx:752–753`
- CrewAI: `src/pages/CrewAI.tsx:122–123` e `src/pages/CrewAI.tsx:303–304`
- LangSmith: `src/pages/LangSmith.tsx:192–196` e `src/pages/LangSmith.tsx:508–512`
- N8n: `src/pages/N8n.tsx:138–142` e `src/pages/N8n.tsx:346–350`
- Agno: `src/pages/Agno.tsx:205–209` e `src/pages/Agno.tsx:455–459`
- LangGraph: `src/pages/LangGraph.tsx:192–196` e `src/pages/LangGraph.tsx:479–483`
- LangChain: `src/pages/LangChain.tsx:127–131` e `src/pages/LangChain.tsx:394–398`

## Exemplo de Mudança
- Antes:
```tsx
<Button variant="primary" size="lg">Falar com Especialista</Button>
```
- Depois:
```tsx
<a href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer">
  <Button variant="primary" size="lg">Falar com Especialista</Button>
</a>
```
- Anchors diretas:
```tsx
<a href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer" className="...">Falar com Especialista</a>
```

## Validação
1. Rodar `npm run lint` e `npm run check`.
2. Start local e clicar em todos os CTAs citados para confirmar redirecionamento.
3. Criar commit: `feat(cta): apontar todos os CTAs para WhatsApp` e fazer `push` para o remote.

## Observações
- Não vamos alterar o componente `Button` para aceitar `href` agora; envolveremos o botão em um `<a>` por clareza e acessibilidade.
- Usaremos `https://wa.me/551148635675` com protocolo explícito.

Confirma que posso aplicar essas mudanças e fazer o commit?