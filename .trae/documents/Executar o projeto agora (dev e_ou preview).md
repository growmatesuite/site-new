## Objetivo
Garantir que o projeto esteja acessível imediatamente em localhost, entregando os links ativos (dev e/ou preview).

## Passos
1. Verificar se já existem servidores ativos (desenvolvimento em `http://localhost:5173` e preview em `http://localhost:4173`).
2. Se algum não estiver ativo, iniciar:
   - Desenvolvimento: `npm run dev -- --open`
   - Preview de produção: `npm run preview -- --open`
3. Opcional: expor na rede local com `--host` e te passar o endereço LAN.
4. Confirmar execução e te entregar os links clicáveis.

## Resultado
Links de acesso em localhost disponíveis, sem interromper processos existentes. Posso executar agora?