## Objetivo
Aplicar ícones de redes sociais apenas para Instagram e YouTube no rodapé, estilizados como chips arredondados com alto contraste, seguindo a "pegada" do print.

## Mudanças propostas
- Substituir emojis por ícones vetoriais usando `lucide-react` (`Instagram`, `Youtube`).
- Estilizar cada item como um chip: `inline-flex`, `w-10 h-10`, `rounded-lg`, `bg-white/10`, `border-gray-700`, `text-white`, `hover:bg-white/20`.
- Manter apenas dois links (Instagram e YouTube), deixando URLs como placeholder (`#`) até você enviar os perfis.

## Arquivo afetado
- `src/components/layout/Footer.tsx` — importar ícones e atualizar o bloco de social links.

## Resultado esperado
- Ícones visuais limpos e consistentes com o print, visíveis no tema escuro, somente Instagram e YouTube.

Posso aplicar agora?