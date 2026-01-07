
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ExploreSuite from '@/components/sections/ExploreSuite';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { NewsletterSection } from '@/components/blog/NewsletterSection';
import { fetchAPI, getStrapiMedia } from '@/lib/strapi';
import { formatDate, extractText } from '@/lib/blog-utils';

export default function Blog() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('q');
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadArticles() {
            setLoading(true);
            setError(null);
            try {
                const params: any = {
                    populate: {
                        cover: true,
                        categories: true,
                        authors: {
                            fields: ["name"],
                            populate: ["avatar"],
                        },
                    },
                    sort: ["featured:desc", "publishedAt:desc"],
                    pagination: {
                        limit: 100 // Fetch a large enough batch for client-side search
                    }
                };

                const data = await fetchAPI("/articles", params);
                const allArticles = data?.data || [];

                if (searchQuery) {
                    const query = searchQuery.toLowerCase();
                    const filtered = allArticles.filter((article: any) => {
                        const title = (article.title || "").toLowerCase();
                        const excerpt = (article.excerpt || "").toLowerCase();
                        const takeaways = (article.key_takeaways || "").toLowerCase();
                        const categories = (article.categories || []).map((c: any) => c.name.toLowerCase()).join(" ");
                        const authors = (article.authors || []).map((a: any) => a.name.toLowerCase()).join(" ");

                        // Extract text from blocks content
                        const contentText = extractText(article.content).toLowerCase();

                        return (
                            title.includes(query) ||
                            excerpt.includes(query) ||
                            takeaways.includes(query) ||
                            categories.includes(query) ||
                            authors.includes(query) ||
                            contentText.includes(query)
                        );
                    });
                    setArticles(filtered);
                } else {
                    setArticles(allArticles);
                }
            } catch (err: any) {
                console.error("Failed to fetch articles", err);
                setError(err.message || "Erro ao conectar com API");
            } finally {
                setLoading(false);
            }
        }
        loadArticles();
    }, [searchQuery]);

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
                            className="text-center max-w-4xl mx-auto mb-16"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                                Inteligência que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">escala.</span>
                                <br />
                                Resultados que orquestram.
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                Insights sobre IA Agêntica, LLMs Enterprise e como construir uma força de trabalho infinitamente escalável.
                            </p>
                        </motion.div>

                        <BlogSearch />

                        {searchQuery && (
                            <div className="mb-12 text-center animate-in fade-in zoom-in duration-300">
                                <p className="text-gray-500">
                                    Mostrando resultados para: <span className="text-green-primary font-bold">"{searchQuery}"</span>
                                    <span className="ml-2 text-xs">({articles.length} {articles.length === 1 ? 'resultado' : 'resultados'})</span>
                                </p>
                            </div>
                        )}

                        {error && (
                            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-center">
                                <p className="text-red-400 font-bold mb-2">Erro de Conexão:</p>
                                <p className="text-red-300 text-sm">{error}</p>
                                <p className="text-gray-500 text-xs mt-2">Verifique a conexão com o servidor de conteúdo ou o status do túnel de acesso.</p>
                            </div>
                        )}



                        {loading ? (
                            <div className="flex justify-center py-20">
                                <div className="w-10 h-10 border-4 border-green-primary border-t-transparent rounded-full animate-spin" />
                            </div>
                        ) : articles.length === 0 ? (
                            <div className="py-20 text-center bg-black-secondary/30 rounded-[3rem] border border-dashed border-white/10">
                                <h2 className="text-2xl font-bold font-heading text-white mb-4">Nenhum resultado encontrado</h2>
                                <p className="text-gray-500 mb-8 max-w-md mx-auto">Não encontramos artigos. Tente outros termos.</p>
                                <Link to="/blog" className="px-8 py-3 rounded-full bg-white/5 text-white font-bold hover:bg-white/10 transition-all">
                                    LIMPAR PESQUISA
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-24">
                                {/* Featured Article (First one if no search) */}
                                {(!searchQuery && articles[0]) && (
                                    <div className="mb-24">
                                        <Link to={`/blog/${articles[0].slug}`} className="group relative block w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black-secondary shadow-2xl transition-all duration-500 hover:border-green-primary/50 hover-glow-green">
                                            <div className="grid md:grid-cols-5 gap-0 h-full">
                                                <div className="relative md:col-span-3 aspect-video md:aspect-auto w-full overflow-hidden min-h-[300px] md:min-h-[500px] bg-black-tertiary">
                                                    {articles[0].cover ? (
                                                        <img
                                                            src={getStrapiMedia(articles[0].cover.formats?.large?.url || articles[0].cover.url) || ""}
                                                            alt={articles[0].title}
                                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="absolute inset-0 bg-gradient-to-br from-green-primary/20 via-black-tertiary to-purple-primary/20 flex items-center justify-center">
                                                            <span className="text-white/10 font-heading font-bold text-8xl rotate-12 select-none">GROWMATE</span>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black-base via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black-base/80" />
                                                </div>
                                                <div className="flex flex-col justify-center p-6 md:p-12 md:col-span-2 relative bg-black-base/20 backdrop-blur-3xl">
                                                    <div className="mb-4 md:mb-6 flex flex-wrap gap-2">
                                                        {articles[0].categories?.map((category: any) => (
                                                            <span
                                                                key={category.id}
                                                                className="inline-flex items-center rounded-full border border-green-primary/30 bg-green-primary/10 px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-green-primary"
                                                            >
                                                                {category.name}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <h2 className="mb-4 md:mb-6 text-2xl font-bold font-heading leading-tight text-white transition-colors group-hover:text-green-primary sm:text-4xl">
                                                        {articles[0].title}
                                                    </h2>
                                                    <p className="mb-6 md:mb-8 text-sm md:text-lg text-gray-500 line-clamp-2 md:line-clamp-3 leading-relaxed">
                                                        {articles[0].excerpt}
                                                    </p>
                                                    <div className="mt-auto flex items-center gap-4 pt-4 md:pt-6 border-t border-white/5">
                                                        {articles[0].authors?.[0]?.avatar && (
                                                            <div className="relative h-8 w-8 md:h-10 md:w-10 overflow-hidden rounded-full border border-white/10">
                                                                <img
                                                                    src={getStrapiMedia(articles[0].authors[0].avatar.url) || ""}
                                                                    alt={articles[0].authors[0].name}
                                                                    className="object-cover w-full h-full"
                                                                />
                                                            </div>
                                                        )}
                                                        <div className="text-[10px] md:text-sm">
                                                            <p className="font-medium text-white">{articles[0].authors?.[0]?.name}</p>
                                                            <p className="text-gray-600">{formatDate(articles[0].publishedAt)}</p>
                                                        </div>
                                                        <div className="ml-auto flex items-center gap-2 text-green-primary font-bold text-[10px] md:text-sm tracking-wide group-hover:translate-x-1 transition-transform">
                                                            LER <span className="hidden sm:inline">ARTIGO</span> <span aria-hidden="true">→</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )}

                                {/* Grid of Articles */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {(searchQuery ? articles : articles.slice(1)).map((article, idx) => (
                                        <motion.div
                                            key={article.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        >
                                            <Link to={`/blog/${article.slug}`} className="group h-full block">
                                                <Card hoverable className="h-full flex flex-col overflow-hidden hover-glow-purple transition-all duration-300">
                                                    <div className="relative aspect-video w-full overflow-hidden bg-black-secondary mb-4 rounded-xl border border-white/5">
                                                        {article.cover ? (
                                                            <img
                                                                src={getStrapiMedia(article.cover.formats?.small?.url || article.cover.url) || ""}
                                                                alt={article.title}
                                                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        ) : (
                                                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-primary/10 to-black-tertiary flex items-center justify-center">
                                                                <span className="text-white/5 font-heading font-bold text-2xl rotate-12">GROWMATE</span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="flex-1 flex flex-col">
                                                        <div className="mb-4 flex gap-2">
                                                            {article.categories?.map((category: any) => (
                                                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-purple-primary/30 bg-purple-primary/10 text-purple-primary" key={category.id}>
                                                                    {category.name}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-primary transition-colors line-clamp-2 leading-tight font-heading">
                                                            {article.title}
                                                        </h3>
                                                        <p className="text-gray-400 mb-6 flex-grow line-clamp-2 text-sm leading-relaxed">
                                                            {article.excerpt}
                                                        </p>
                                                        <div className="flex items-center justify-between text-[10px] text-gray-500 mt-auto pt-4 border-t border-white/5 font-medium uppercase tracking-widest">
                                                            <span>{formatDate(article.publishedAt)}</span>
                                                            <span className="group-hover:text-white transition-colors">Leia mais</span>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-24">
                            <NewsletterSection />
                        </div>
                    </Container>
                </main>
                <ExploreSuite />
                <Footer />
            </div>
        </>
    );
}
