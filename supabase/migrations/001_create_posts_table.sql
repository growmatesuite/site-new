-- create table
CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    subtitle VARCHAR(500),
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    tags TEXT[],
    cover_image VARCHAR(500),
    read_time INTEGER DEFAULT 5,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- create indexes
CREATE INDEX idx_posts_published_at ON posts(published_at DESC);
CREATE INDEX idx_posts_category ON posts(category);
CREATE INDEX idx_posts_slug ON posts(slug);

-- RLS policies
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Grant read access to everyone
GRANT SELECT ON posts TO anon;
GRANT SELECT ON posts TO authenticated;

-- Full access for authenticated users (editors)
GRANT ALL PRIVILEGES ON posts TO authenticated;

-- Insert sample data
INSERT INTO posts (title, slug, subtitle, content, author, category, tags, cover_image, read_time, published_at) VALUES
('Por que 2026 vai ser o ano dos agentes de IA no Brasil', '2026-ano-dos-agentes-ia-brasil', 'A verdade nua e crua sobre quem está realmente construindo o futuro', '# Por que 2026 vai ser o ano dos agentes de IA no Brasil

Enquanto todo mundo discute ChatGPT e imagens geradas por IA, algo muito mais profundo está acontecendo nos bastidores. Agentes de IA - sistemas autônomos que podem tomar decisões e executar tarefas sem supervisão humana - estão prestes a revolucionar como fazemos negócios no Brasil.

## O que são agentes de IA?

Diferente de chatbots simples, agentes de IA são sistemas que combinam:
- **Tomada de decisão autônoma**: Podem avaliar situações e escolher a melhor ação
- **Execução de tarefas**: Não apenas respondem, mas fazem
- **Aprendizado contínuo**: Melhoram com o tempo baseados em resultados
- **Integração multi-sistema**: Conectam diferentes ferramentas e plataformas

## Por que 2026 será o ano decisivo?

### 1. Maturidade tecnológica
Os modelos de IA finalmente alcançaram o nível de confiabilidade necessário para missões críticas. Não estamos mais falando de experimentos - estamos falando de ferramentas prontas para produção.

### 2. Pressão econômica
Com a economia desacelerando, empresas estão desesperadas por formas de:
- Reduzir custos operacionais
- Aumentar produtividade
- Melhorar atendimento ao cliente
- Escalar sem contratar mais pessoas

### 3. Casos de uso comprovados
2025 está sendo o ano dos pilotos. Grandes empresas brasileiras já estão testando agentes para:
- Atendimento ao cliente 24/7
- Processamento de pedidos e faturamento
- Análise de crédito e aprovação de financiamentos
- Gestão de estoque e compras automatizadas

## O que estamos vendo na prática

Na Growmate, acompanhamos dezenas de implementações. Os resultados são impressionantes:

- **Redução de 70% no tempo de resposta** ao cliente
- **Corte de 40% em custos operacionais** em departamentos específicos
- **Aumento de 3x na capacidade de processamento** sem novas contratações
- **95% de satisfação do cliente** em atendimento automatizado

## O segredo que ninguém conta

Aqui está a verdade que consultores e vendedores de IA não querem que você saiba: **implementar agentes de IA é mais simples do que parece**.

Você não precisa de:
- Um time de cientistas de dados
- Milhões em investimento
- Anos de desenvolvimento
- Infrastructure complexa

Você precisa de:
- Processos bem documentados
- Dados de qualidade
- Uma estratégia clara
- O parceiro certo

## O que fazer agora

Se você é empresário, gestor ou profissional que quer estar à frente da curva:

1. **Identifique processos repetitivos** em sua empresa
2. **Documente os fluxos de trabalho** atuais
3. **Comece pequeno** - um único processo
4. **Meça os resultados** e escale o que funciona

2026 está chegando rápido. A pergunta não é "se" os agentes de IA vão transformar seu setor, mas "quando" você vai começar a se preparar para isso.

**A vantagem competitiva está indo para quem age primeiro.**', 'Growmate Team', 'IA', '{"agentes-ia", "2026", "automação", "tecnologia"}', 'https://images.unsplash.com/photo-1677442136019-21780ecad995', 8, NOW());

INSERT INTO posts (title, slug, subtitle, content, author, category, tags, cover_image, read_time, published_at) VALUES
('Como um restaurante aumentou vendas em 45% com automação de IA', 'restaurante-aumenta-vendas-automacao-ia', 'O caso real de um pequeno restaurante que revolucionou seu atendimento com tecnologia', '# Como um restaurante aumentou vendas em 45% com automação de IA

Há 6 meses, o Restaurante Sabor Caseiro em São Paulo estava lutando para sobreviver. Com 45 lugares, o estabelecimento tinha dificuldades para competir com cadeias maiores e aplicativos de delivery. Hoje, aumentou suas vendas em 45% e reduziu custos operacionais em 30%. Como? Através de automação inteligente com IA.

## O problema

Dono Carlos, 52 anos, herdou o restaurante dos pais. Como muitos pequenos empresários, enfrentava desafios familiares:

- **Falta de pessoal qualificado** para atendimento
- **Pedidos errados** causando desperdício e insatisfação
- **Filas durante horário de pico** perdendo clientes
- **Tempo excessivo** no atendimento telefônico
- **Dificuldade em prever demanda** resultando em falta ou excesso de ingredientes

## A solução surpreendentemente simples

Carlos implementou um sistema de automação com IA que custou menos que contratar um novo funcionário. O sistema inclui:

### 1. Assistente virtual para pedidos
- Atende WhatsApp 24/7
- Tira pedidos com 99% de precisão
- Sugere combos e itens adicionais
- Confirma endereço e horário de entrega

### 2. Previsão de demanda
- Analisa histórico de vendas
- Considera fatores externos (clima, eventos, feriados)
- Sugere quantidade ideal de ingredientes
- Reduz desperdício em 40%

### 3. Gestão de filas
- Organiza pedidos por prioridade
- Otimiza tempo de preparo
- Avisa clientes sobre tempo estimado
- Reduz tempo de espera em 60%

## Os resultados impressionantes

Em apenas 6 meses:

- **Vendas aumentaram 45%** através de upselling inteligente
- **Custos operacionais reduzidos em 30%** (menos desperdício, menos erros)
- **Tempo de atendimento caiu 70%** (pedidos mais rápidos e precisos)
- **Satisfação do cliente aumentou para 4.8/5** (no Google Reviews)
- **Pedidos errados reduzidos em 95%**

## O que Carlos aprendeu

"Eu pensei que IA era coisa de empresa grande", conta Carlos. "Descobri que é perfeito para pequenos negócios como o meu. O sistema paga sozinho em 3 meses."

### Lições principais:

1. **Comece pequeno**: Carlos começou apenas com o assistente de WhatsApp
2. **Envolva sua equipe**: Funcionários foram treinados e agora amam o sistema
3. **Mensure tudo**: Acompanhe métricas desde o primeiro dia
4. **Ajuste constante**: O sistema melhora com feedback contínuo

## Como você pode fazer o mesmo

Se você tem um restaurante ou negócio similar:

1. **Identifique seu gargalo principal**: Atendimento? Estoque? Pedidos?
2. **Comece com uma solução específica**: Não tente automatizar tudo de uma vez
3. **Escolha um parceiro local**: Alguém que entenda suas necessidades específicas
4. **Prepare sua equipe**: Treinamento é essencial para sucesso

## O futuro do Carlos

Com os resultados positivos, Carlos já planeja:

- Expandir para delivery próprio (sem iFood)
- Abrir um segundo restaurante
- Criar um sistema de fidelidade com IA
- Implementar marketing personalizado

"Hoje eu trabalho 50% menos e ganho 45% mais. Minha qualidade de vida melhorou demais. Isso é tecnologia que realmente funciona."

## A moral da história

A automação com IA não é mais privilégio de grandes corporações. Pequenos e médios negócios podem - e devem - aproveitar essas tecnologias para competir de igual para igual.

**A pergunta não é se você deve automatizar, mas quando você vai começar.**

*Quer saber como automação de IA pode transformar seu restaurante? Entre em contato com a Growmate para uma avaliação gratuita.*', 'Growmate Team', 'Automação', '{"restaurante", "automação", "IA", "caso-de-sucesso", "vendas"}', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5', 6, NOW());

INSERT INTO posts (title, slug, subtitle, content, author, category, tags, cover_image, read_time, published_at) VALUES
('5 cases reais de empresas que revolucionaram seus processos com IA em 2025', '5-cases-empresas-revolucionaram-ia-2025', 'Aprenda com quem já está usando inteligência artificial para crescer mais rápido', '# 5 cases reais de empresas que revolucionaram seus processos com IA em 2025

A transformação digital não é mais uma promessa futura - está acontecendo agora. Em 2025, vimos empresas brasileiras de todos os tamanhos implementarem IA e obterem resultados extraordinários. Aqui estão 5 cases reais que vão te inspirar a começar sua própria jornada.

## 1. Loja de Materiais de Construção - 60% mais vendas online

**O desafio**: Uma tradicional loja de materiais de construção em Belo Horizonte tinha apenas 5% das vendas vindas do e-commerce. A concorrência online estava crescendo rápido.

**A solução**: Implementaram um sistema de IA que:
- Personaliza recomendações baseado em histórico e projetos similares
- Calcula quantidades exatas de materiais necessários
- Sugere produtos complementares automaticamente
- Atende dúvidas técnicas 24/7 via chat inteligente

**Resultados em 8 meses**:
- Vendas online aumentaram 60%
- Ticket médio aumentou 35%
- Tempo de atendimento caiu 80%
- Devoluções reduzidas em 45%

## 2. Clínica Médica - 3x mais pacientes atendidos

**O desafio**: Uma clínica médica especializada em exames de imagem tinha filas de espera de até 3 meses. Pacientes desistiam e iam para a concorrência.

**A solução**: Sistema de IA que:
- Prioriza exames baseado em urgência médica
- Otimiza agenda dos médicos automaticamente
- Previne faltas através de lembretes inteligentes
- Triagem inicial via assistente virtual

**Resultados em 6 meses**:
- Capacidade de atendimento aumentou 3x
- Tempo de espera caiu de 3 meses para 2 semanas
- Taxa de faltas reduzida em 70%
- Satisfação do paciente: 4.9/5

## 3. Escola de Idiomas - 85% de retenção de alunos

**O desafio**: Uma escola de idiomas perdendo alunos para apps como Duolingo. Taxa de evasão chegava a 40% ao ano.

**A solução**: Plataforma de aprendizado com IA que:
- Personaliza ritmo de aprendizado individualmente
- Identifica dificuldades específicas de cada aluno
- Cria exercícios adaptativos baseado no progresso
- Professores recebem insights sobre alunos em risco

**Resultados em 1 ano**:
- Retenção de alunos aumentou para 85%
- Tempo para fluência reduzido em 40%
- Novas matrículas aumentaram 50%
- Professores 70% mais eficientes

## 4. Indústria de Embalagens - 50% redução de desperdício

**O desafio**: Uma fábrica de embalagens plásticas tinha 15% de desperdício na produção. Cada ponto percentual significava R$ 200 mil economizados.

**A solução**: Sistema de IA para:
- Prever demanda com 95% de precisão
- Otimizar uso de matéria-prima
- Detectar problemas de qualidade em tempo real
- Ajustar parâmetros de produção automaticamente

**Resultados em 10 meses**:
- Desperdício reduzido de 15% para 7.5%
- Economia anual: R$ 1.5 milhão
- Produção aumentou 25% sem novos investimentos
- Qualidade melhorou 30% (menos reclamações)

## 5. Escritório de Contabilidade - 70% mais clientes

**O desafio**: Um escritório de contabilidade tradicional perdia clientes para plataformas digitais mais baratas. Precisava modernizar sem perder o toque pessoal.

**A solução**: Assistente de IA que:
- Classifica e organiza documentos automaticamente
- Preenche declarações com 99% de precisão
- Identifica oportunidades de economia fiscal
- Atende clientes 24/7 para dúvidas simples

**Resultados em 7 meses**:
- Capacidade de clientes aumentou 70%
- Tempo de entrega de declarações caiu 60%
- Erros reduzidos em 90%
- Custo por cliente caiu 40%

## O que esses cases têm em comum?

### 1. Começaram pequeno
Nenhuma dessas empresas implementou IA em tudo de uma vez. Começaram com um problema específico e expandiram.

### 2. Envolveram pessoas
Todas treinaram equipes e envolveram funcionários no processo. IA não substitui pessoas - potencializa elas.

### 3. Mediram tudo
Cada empresa acompanhou métricas claras desde o início. Isso permitiu ajustes e provou ROI.

### 4. Escolheram parceiros certos
Nenhuma tentou fazer sozinha. Escolheram especialistas que entenderam suas necessidades específicas.

## Lições principais

1. **IA funciona para qualquer tamanho de empresa**: Desde restaurantes até indústrias
2. **Comece com seu maior problema**: Não tente resolver tudo de uma vez
3. **ROI vem rápido**: A maioria viu resultados em menos de 1 ano
4. **É mais simples do que parece**: Com o parceiro certo, implementação é tranquila

## Qual será seu case de sucesso?

Essas empresas não são especiais - elas apenas decidiram agir. O que seu negócio está esperando?

**2025 está terminando. 2026 pode ser seu ano de revolução com IA.**

*Quer saber como IA pode transformar seu negócio específico? Entre em contato com a Growmate para uma análise personalizada.*', 'Growmate Team', 'Cases', '{"cases", "sucesso", "IA", "transformação-digital", "resultados"}', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f', 10, NOW());