## O que vou fazer
- Trocar a referência da logo da Propbnk na seção "Empresas que confiam na Growmate" para usar `public/logos/propbnk.svg`.
- Verificar o favicon em `index.html`:
  - Se você apenas substituiu `public/favicon.svg`, não é preciso alterar o código.
  - Se trocou o nome, atualizo o `<link rel="icon">` para o novo arquivo.
- Iniciar o servidor dev e disponibilizar o preview em `http://localhost:5173/`.

## Passos
1) Atualizar `src/components/sections/SocialProofSection.tsx` para usar `'/logos/propbnk.svg'`.
2) Conferir `index.html` para garantir que está apontando para `favicon.svg` (ou para o novo nome, se mudou).
3) Rodar `npm run dev` e publicar o preview.

Posso aplicar agora e te entregar o link de acesso?