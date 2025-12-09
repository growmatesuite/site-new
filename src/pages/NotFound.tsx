import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Página não encontrada | Growmate</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <div className="min-h-screen bg-black text-white flex flex-col">
                <Header />

                <main className="flex-grow flex items-center justify-center py-20">
                    <Container>
                        <div className="text-center max-w-2xl mx-auto px-4">
                            <h1 className="text-9xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-8 select-none">
                                404
                            </h1>

                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                                Ops! Página não encontrada
                            </h2>

                            <p className="text-xl text-gray-400 mb-12">
                                A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/">
                                    <Button variant="primary" size="lg" className="w-full sm:w-auto">
                                        <Home className="mr-2 h-5 w-5" />
                                        Voltar para Home
                                    </Button>
                                </Link>

                                <button
                                    onClick={() => window.history.back()}
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600 transition-colors w-full sm:w-auto"
                                >
                                    <ArrowLeft className="mr-2 h-5 w-5" />
                                    Voltar Anterior
                                </button>
                            </div>
                        </div>
                    </Container>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default NotFound;
