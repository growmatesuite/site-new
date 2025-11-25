## Objetivo
Configurar os ícones do rodapé para abrir os perfis oficiais da Growmate e incluir o LinkedIn.

## Mudanças propostas
- Substituir os hrefs dos ícones:
  - YouTube → `https://www.youtube.com/@growmate_io`
  - Instagram → `https://www.instagram.com/growmate.io/`
- Adicionar ícone do LinkedIn → `https://www.linkedin.com/company/growmate-io/`
- Abrir em nova aba com `target="_blank"` e `rel="noopener noreferrer"`.

## Arquivo afetado
- `src/components/layout/Footer.tsx` — importar `Linkedin` de `lucide-react`, atualizar `socialLinks` e atributos dos anchors.

## Resultado esperado
- Ícones de Instagram, YouTube e LinkedIn presentes e funcionando, no estilo atual de chips.

Posso aplicar agora?