## Como enviar as fotos
- Formatos: .jpg ou .png, ideais em proporção quadrada (ex.: 512×512).
- Coloque os arquivos em `public/avatars/` (ex.: `public/avatars/sidney-pimentel.jpg`).
- Nomes de arquivo em kebab-case (sem espaços), para URLs limpas.

## Ajustes no código
### 1) Estrutura dos depoimentos
- Em `src/components/sections/SocialProofSection.tsx`, adicione uma propriedade `photo` para cada item e remova `avatar` quando usar foto.
- Exemplo:
```ts
const testimonials = [
  {
    name: 'Sidney Pimentel',
    role: 'CEO',
    company: 'Propbnk',
    content: '...',
    photo: '/avatars/sidney-pimentel.jpg',
    rating: 5,
  },
]
```

### 2) Renderização do avatar
- Trocar a renderização do emoji por `<img>` circular.
```tsx
{testimonial.photo ? (
  <img
    src={testimonial.photo}
    alt={testimonial.name}
    className="h-10 w-10 rounded-full object-cover mr-3"
  />
) : (
  <div className="text-2xl mr-3">{testimonial.avatar}</div>
)}
```

## Resultado
- Fotos exibidas em círculos, alinhadas ao lado do nome/cargo, mantendo o layout atual.

Confirma que posso aplicar essas mudanças? 