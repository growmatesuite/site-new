## Causa do erro
- O componente está referenciando `'/logos/propbank.svg'`, mas você adicionou `'/logos/propbank.png'`. Por isso o alt “Propbank” aparece no lugar da imagem.

## Correção proposta
- Atualizar o caminho do logo para `'/logos/propbank.png'` em `src/components/sections/SocialProofSection.tsx`.
- Normalizar tamanho visual da Propbank para ficar igual às demais:
  - Base comum para todas: `h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-60`
  - Propbank (ajuste fino): `h-9 md:h-10` caso ainda fique menor (compensa margem interna do PNG).

## Validação
- Recarregar a Home: a imagem deve aparecer e ficar proporcional às outras.

Posso aplicar essas alterações agora?