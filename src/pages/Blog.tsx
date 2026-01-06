import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ExploreSuite from '@/components/sections/ExploreSuite';

const POSTS = [
    {
        title: "O Futuro dos Agentes de IA nas Empresas",
        description: "Como a inteligência artificial autônoma está transformando a produtividade corporativa.",
        date: "12 Mar 2024",
        readTime: "5 min de leitura",
        category: "Inteligência Artificial",
    },
    {
        title: "LangChain vs LangGraph: Qual escolher?",
        description: "Uma análise detalhada das diferenças e casos de uso para orquestração de LLMs.",
        date: "10 Mar 2024",
        readTime: "8 min de leitura",
        category: "Tecnologia",
    },
    {
        title: "Métricas que Importam no Atendimento ao Cliente",
        description: "Descubra como medir e melhorar a satisfação do cliente com dados acionáveis.",
        date: "08 Mar 2024",
        readTime: "6 min de leitura",
        category: "Customer Success",
    }
];

export default function Blog() {
    return (
        <>
            <Helmet>
                <title>Blog | Growmate</title>
                <meta name="description" content="Artigos sobre IA, automação e futuro do trabalho." />
            </Helmet>

            <div className="min-h-screen bg-black-base">
                <Header />
                <main className="pt-24 pb-24">
                    <Container size="lg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h1 className="text-4xl md:text-5xl font-heading font-bold">Blog</h1>
                            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                                Fique por dentro das últimas novidades sobre inteligência artificial,
                                automação e estratégias de crescimento.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {POSTS.map((post, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <Card hoverable className="h-full flex flex-col">
                                        <div className="mb-4">
                                            <span className="text-xs font-medium px-2 py-1 rounded bg-green-900/30 text-green-400 border border-green-900/50">
                                                {post.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-400 mb-6 flex-grow">
                                            {post.description}
                                        </p>
                                        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-800">
                                            <span>{post.date}</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </main>
                <ExploreSuite />
                <Footer />
            </div>
        </>
    );
}
