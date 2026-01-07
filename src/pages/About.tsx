
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SEO } from '@/components/SEO';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <>
            <SEO
                title="Sobre a Growmate | Especialistas em IA Agêntica"
                description="Conheça a história, a missão e a equipe por trás da Growmate, a consultoria líder em orquestração de IA enterprise no Brasil."
                url="https://www.growmate.io/sobre"
            />

            <div className="min-h-screen bg-black-base text-white">
                <Header />

                <main className="pt-32 pb-24">
                    <Container>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto space-y-16"
                        >
                            <section className="text-center space-y-6">
                                <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight">
                                    Nossa <span className="text-green-primary">Missão</span>
                                </h1>
                                <p className="text-xl text-gray-400 leading-relaxed">
                                    Não apenas geramos código; orquestramos o futuro do trabalho. A Growmate nasceu para preencher o abismo entre o potencial da IA e a realidade operacional das empresas brasileiras.
                                </p>
                            </section>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-4 bg-black-secondary p-8 rounded-3xl border border-white/5">
                                    <h2 className="text-2xl font-bold text-white">Experiência Real</h2>
                                    <p className="text-gray-400">
                                        Nossa equipe é composta por engenheiros de software seniores e especialistas em ML que atuaram em grandes players do mercado. Não somos "hype" — somos execução.
                                    </p>
                                </div>
                                <div className="space-y-4 bg-black-secondary p-8 rounded-3xl border border-white/5">
                                    <h2 className="text-2xl font-bold text-white">Transparência Ética</h2>
                                    <p className="text-gray-400">
                                        Acreditamos que a IA deve ser segura e auditável. Todos os nossos sistemas seguem padrões rigorosos de privacidade e governança de dados.
                                    </p>
                                </div>
                            </div>

                            <section className="space-y-8">
                                <h2 className="text-3xl font-bold font-heading">E-E-A-T em IA</h2>
                                <p className="text-gray-400">
                                    No mundo da Inteligência Artificial, a autoridade é construída com resultados públicos e contribuições para a comunidade. Por isso, somos ativos em frameworks como LangChain e CrewAI, compartilhando conhecimento técnico que impacta milhares de desenvolvedores.
                                </p>
                            </section>
                        </motion.div>
                    </Container>
                </main>

                <Footer />
            </div>
        </>
    );
}
