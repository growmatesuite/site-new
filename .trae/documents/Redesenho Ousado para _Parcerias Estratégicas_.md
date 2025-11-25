## Conceito
Criar um banner hero único de parceiro, com estética futurista e impacto visual: grande marca Meta com halo e gradient neon, conteúdo enxuto, chips animados e CTAs destacados. Sem aparência de lista. 

## Layout
- Estrutura: Card full-width com grid `md:grid-cols-2`.
- Coluna esquerda (marca):
  - Logo Meta grande `h-12 md:h-16 brightness-0 invert`.
  - Título "Tech Providers" com tipografia forte.
  - Subcopy curta abaixo (uma linha).
- Coluna direita (conteúdo):
  - Chips de capacidades em `grid grid-cols-2 md:grid-cols-3 gap-2`, pills `px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm`.
  - Linha de CTAs: "Ver integrações" (primário) e "Saiba mais" (terciário), alinhados à esquerda.

## Efeitos Visuais
- Halo/Glow: pseudo-elemento com `ring-1 ring-purple-primary/30` + `shadow-glow-purple` ao redor do Card.
- Fundo do card com glass `glass-effect` e leve `backdrop-blur-glass`.
- Logo com shimmer suave (Framer Motion): `initial={{opacity:0, scale:0.96}} animate={{opacity:1, scale:1}}` e micro pulso.
- Chips entram com `staggerChildren`.

## Interações
- Hover do Card: `hover:scale-[1.01] hover:-translate-y-[2px]`.
- CTAs com estados de foco/hover consistentes.

## Conteúdo
- Título: "Tech Providers".
- Descrição: "Parceiro oficial da Meta para soluções empresariais e integrações com WhatsApp".
- Capacidades: adicionar "Coexistence WhatsApp Business" ao conjunto já listado.
- Remover completamente qualquer status/bolinha.

## Implementação
- Editar `src/components/sections/PartnersSection.tsx`:
  - Container: `size="xl"`.
  - Card: `glowColor="purple"` e `className="glass-effect p-10 md:p-12 rounded-2xl"`.
  - Grid interno: `grid md:grid-cols-2 gap-8 items-start`.
  - Cabeçalho esquerdo: bloco com logo + título + descrição.
  - Bloco direito: chips + divisor + CTAs.
- Manter a seção de "E mais parcerias com" abaixo, sem mudanças.

## Validação
- Abrir Home, verificar impacto visual, responsividade e contraste.
- Conferir animações suaves e acessibilidade (foco nos CTAs).

Posso aplicar este redesign agora?