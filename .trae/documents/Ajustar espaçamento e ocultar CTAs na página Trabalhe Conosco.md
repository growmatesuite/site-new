## Objetivo
Empurrar o card do formulário mais para baixo e remover os botões “Falar com Especialista” e “Agendar Demo” apenas na página Trabalhe Conosco.

## Mudanças propostas
- Adicionar `pt-32` no container da página Trabalhe Conosco para compensar o header fixo.
- Tornar `Header` configurável com prop opcional `hideCtas` e ocultar CTAs quando essa prop estiver ativa (desktop e mobile).
- Usar `<Header hideCtas />` em `WorkWithUs.tsx`.

## Arquivos afetados
- `src/components/layout/Header.tsx` — aceitar prop `hideCtas` e condicional nos blocos de CTAs.
- `src/pages/WorkWithUs.tsx` — aplicar `pt-32` no wrapper e passar `hideCtas` para `Header`.

## Resultado esperado
- Formulário visualmente afastado dos menus do topo.
- CTAs do header escondidos exclusivamente nessa página.

Posso aplicar agora?