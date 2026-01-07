
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SEO } from '@/components/SEO';
import { Container } from '@/components/ui/Container';
import { fetchAPI, getStrapiMedia } from '@/lib/strapi';
import { motion } from 'framer-motion';

export default function Authors() {
    const [authors, setAuthors] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadAuthors() {
            try {
                const data = await fetchAPI("/authors", {
                    populate: ["avatar"]
                });
                setAuthors(data.data || []);
            } catch (err) {
                console.error("Failed to load authors", err);
            } finally {
                setLoading(false);
            }
        }
        loadAuthors();
    }, []);

    return (
        <>
            <SEO
                title="Nossos Especialistas | Growmate"
                description="Conheça a mente por trás do conteúdo da Growmate. Engenheiros, estrategistas e visionários da IA."
                url="https://www.growmate.io/autores"
            />

            <div className="min-h-screen bg-black-base text-white">
                <Header />

                <main className="pt-32 pb-24">
                    <Container>
                        <div className="text-center mb-20 space-y-4">
                            <h1 className="text-5xl font-bold font-heading">Nossos <span className="text-purple-primary">Especialistas</span></h1>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Conteúdo escrito por quem constrói o futuro da IA todos os dias.
                            </p>
                        </div>

                        {loading ? (
                            <div className="flex justify-center py-20">
                                <div className="w-10 h-10 border-4 border-purple-primary border-t-transparent rounded-full animate-spin" />
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {authors.map((author) => (
                                    <motion.div
                                        key={author.id}
                                        whileHover={{ y: -5 }}
                                        className="bg-black-secondary border border-white/5 p-8 rounded-[2rem] text-center space-y-6 flex flex-col items-center"
                                    >
                                        <div className="h-32 w-32 rounded-full overflow-hidden border-2 border-purple-primary/30">
                                            <img
                                                src={getStrapiMedia(author.avatar?.url) || "/avatars/default.png"}
                                                alt={author.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-white">{author.name}</h2>
                                            <p className="text-purple-primary text-sm font-bold uppercase tracking-widest mt-2">{author.role || "Especialista em IA"}</p>
                                            <p className="text-gray-400 mt-4 leading-relaxed">
                                                {author.bio || "Apaixonado por tecnologia e automação inteligente."}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </Container>
                </main>

                <Footer />
            </div>
        </>
    );
}
