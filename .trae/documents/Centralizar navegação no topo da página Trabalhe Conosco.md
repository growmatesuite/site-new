## Objetivo
Manter os itens GrowChat, GrowMetrics e Integrações alinhados ao centro na página Trabalhe Conosco, sem afetar outras páginas.

## Mudanças propostas
- Tornar o Header configurável com prop `centerNav` que centraliza a navegação.
- Ajustar o container do Header para posicionamento relativo e posicionar a navegação de forma absoluta no centro quando `centerNav` estiver ativo.
- Usar `<Header hideCtas centerNav />` na página Trabalhe Conosco.

## Arquivos afetados
- `src/components/layout/Header.tsx` — adicionar prop `centerNav` e centralização condicional.
- `src/pages/WorkWithUs.tsx` — passar `centerNav` ao Header.

## Resultado esperado
- Na página Trabalhe Conosco, os links GrowChat, GrowMetrics e Integrações ficam centralizados horizontalmente no topo.

Posso aplicar agora?