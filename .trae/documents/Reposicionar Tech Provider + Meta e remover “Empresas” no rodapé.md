## Objetivo
Mover o bloco “Tech Provider” com a logo da Meta para o canto inferior direito, exatamente acima da linha divisória do rodapé, e retirar o item “Empresas” da coluna “Empresa”.

## Mudanças propostas
- Adicionar o bloco “Tech Provider” logo após o grid principal do rodapé, alinhado à direita, antes da linha `border-t`.
- Remover o bloco “Tech Provider” da faixa inferior onde ficam os ícones e o ©.
- Remover o link “Empresas” da seção “Empresa”.

## Arquivo afetado
- `src/components/layout/Footer.tsx`.

## Resultado esperado
- “Tech Provider” com logo Meta aparece no canto inferior direito, acima da linha divisória do rodapé.
- A faixa inferior fica com ícones sociais e o ©.
- A coluna “Empresa” contém apenas “Sobre” e “Carreiras”.

Posso aplicar agora?