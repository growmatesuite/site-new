## Problema
Você já colocou as fotos em `public/avatars/`, mas o componente ainda está renderizando os emojis porque não há suporte a `photo` no array e na renderização.

## Solução
1) Adicionar a propriedade `photo` em cada item do array `testimonials` com o caminho `/avatars/...`.
2) Atualizar a renderização para usar `<img>` circular quando `photo` existir; caso contrário, manter o emoji.

## Mudanças
- Arquivo: `src/components/sections/SocialProofSection.tsx`
- Alterações:
  - Adicionar `photo` nos três depoimentos.
  - Renderização condicional:
    ```tsx
    {testimonial.photo ? (
      <img src={testimonial.photo} alt={testimonial.name} className="h-10 w-10 rounded-full object-cover mr-3" />
    ) : (
      <div className="text-2xl mr-3">{testimonial.avatar}</div>
    )}
    ```

## Resultado
- Fotos vão aparecer redondas; se algum arquivo faltar, o emoji aparece como fallback.

Posso aplicar agora?