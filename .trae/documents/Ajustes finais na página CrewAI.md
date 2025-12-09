## Objetivo
- Atualizar título, CTA, iconografia e layout para alinhar CrewAI ao padrão visual das outras páginas (ex.: LangChain) e corrigir rodapé/menu.

## Mudanças de Conteúdo
- Título: substituir por "Orquestração Multi-Agente".
- CTA do Hero: manter apenas um botão com texto "Falar com Especialista" (link `mailto:ops@growmate.io`).

## Iconografia (padrão LangChain)
- Trocar emojis por ícones do `lucide-react` nas features (ex.: `Users`, `Brain`, `Workflow`, `Link2`, `Expand`, `Shield`).
- Usar mesma estrutura de ícone: container com `bg-*/40`, cor de acento laranja e `h-6 w-6`.

## Layout e Navegação
- Incluir `Header` e `Footer` como em LangChain, com wrapper `div.min-h-screen bg-black text-white`.
- Garantir o rodapé no final da página e presença do menu inicial.
- Adicionar links de saída (ex.: `Link` para `/integracoes` ou `/` em seções adequadas), mantendo rota pelo footer.

## Cores
- Manter laranja CrewAI `#ff5a50` em acentos (título, botões, ícones, bordas). Gradiente da CTA: `from-[#ff5a50] to-[#ff7a6a]`.

## Implementação Técnica
- Editar `src/pages/CrewAI.tsx`:
  - Importar `Header`, `Footer` e ícones do `lucide-react`.
  - Envolver conteúdo no wrapper com `Header` no topo e `Footer` no final.
  - Atualizar título e CTA no Hero.
  - Substituir iconografia nas features seguindo padrão do LangChain.
- Não alterar `tailwind.config.js`.

## Validação
- Rodar `npm run check` e testar navegação para confirmar rodapé e menu em `/crewai`.

## Entregável
- Página CrewAI com visual e navegação padronizados, título/CTA atualizados e iconografia consistente com LangChain.