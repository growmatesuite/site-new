## Objetivo
Preparar e executar o preview de produção do projeto React/Vite, abrindo a URL acessível no navegador.

## Pré‑requisitos
- Node.js 18 ou 20 LTS (recomendado 20). Verificar com `node -v`.
- NPM disponível (`npm -v`). Usaremos `npm` por causa do `package-lock.json`.

## Passos de Execução (Preview de Produção)
1. `cd /Users/cleiton/Documents/trae_projects/site_growmate`
2. Instalar dependências (se necessário): `npm ci`
3. Gerar build: `npm run build`
4. Iniciar preview e abrir navegador: `npm run preview -- --open`
5. Acessar a URL mostrada no terminal (padrão `http://localhost:4173`). Se precisar, `--port 3000`.

## Alternativa (Desenvolvimento)
- `npm run dev -- --open` para hot reload em `http://localhost:5173`.

## Resultado Esperado
- Servidor de preview rodando, com a URL exibida.
- Eu vou executar os comandos e te mostrar o link do preview imediatamente após iniciar.

Confirma que posso executar agora?