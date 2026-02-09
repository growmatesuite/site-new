import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/Input';
import { CheckCircle, Shield, Zap, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react'; // Assuming lucide-react is installed as per previous files

export default function WABA() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleConnect = () => {
        if (!phoneNumber) return;
        // In a real scenario, we might pass this phone number to the backend or use it in the OAuth flow state
        window.open('https://www.facebook.com/v18.0/dialog/oauth?client_id=YOUR_APP_ID&redirect_uri=YOUR_REDIRECT_URL', '_blank');
    };

    return (
        <>
            <Helmet>
                <title>Growmate Meta Tech Provider | Conexão WABA</title>
                <meta name="description" content="Conecte seu WhatsApp Business API (WABA) com a plataforma Growmate de forma segura e oficial." />
            </Helmet>

            <div className="min-h-screen bg-black text-white overflow-hidden flex flex-col">
                <Header />

                <main className="flex-grow pt-32 pb-20">
                    <Container size="lg">
                        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 bg-green-900/20 text-green-400 px-4 py-2 rounded-full mb-8 border border-green-500/20"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-sm font-medium">Meta Business Partner</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl md:text-6xl font-heading font-bold mb-6"
                            >
                                Growmate <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Meta Tech Provider</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
                            >
                                Conecte sua conta do WhatsApp Business API (WABA) à nossa plataforma e desbloqueie o poder da automação oficial.
                            </motion.p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
                            {/* Card de Informação */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Card className="h-full p-8 border-gray-800 bg-gray-900/30 backdrop-blur-sm">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Shield className="h-6 w-6 text-green-500" />
                                        Por que conectar?
                                    </h3>

                                    <ul className="space-y-6">
                                        <li className="flex items-start gap-4">
                                            <div className="p-2 bg-green-900/20 rounded-lg shrink-0">
                                                <CheckCircle className="h-5 w-5 text-green-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white mb-1">API Oficial e Estável</h4>
                                                <p className="text-sm text-gray-400">Garanta a entrega das suas mensagens sem riscos de banimento por uso de automações não oficiais.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="p-2 bg-green-900/20 rounded-lg shrink-0">
                                                <Zap className="h-5 w-5 text-green-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white mb-1">Templates e HSM</h4>
                                                <p className="text-sm text-gray-400">Envie notificações ativas e aprovadas pela Meta para seus clientes.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="p-2 bg-green-900/20 rounded-lg shrink-0">
                                                <MessageSquare className="h-5 w-5 text-green-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white mb-1">Escala Infinita</h4>
                                                <p className="text-sm text-gray-400">Atenda milhares de clientes simultaneamente com múltiplos agentes.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </Card>
                            </motion.div>

                            {/* Card de Ação */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <Card glowColor="green" className="h-full p-8 border-gray-700 bg-black flex flex-col justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-900/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10 text-center">
                                        <div className="w-20 h-20 bg-green-500/20 rounded-2xl mx-auto flex items-center justify-center mb-6 ring-1 ring-green-500/50">
                                            <svg viewBox="0 0 24 24" className="h-10 w-10 fill-green-500" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 text-white">Iniciar Conexão (Embedded)</h3>
                                        <div className="mb-6 space-y-2">
                                            <Input
                                                id="waba-phone"
                                                type="tel"
                                                placeholder="Ex: 55 11 99999-9999"
                                                label="Número de Telefone (WhatsApp)"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                className="bg-gray-900 border-gray-700 focus:border-green-500 h-14 text-lg"
                                            />
                                            <p className="text-xs text-gray-400 text-left">
                                                *O número que receberá a verificação oficial.
                                            </p>
                                        </div>

                                        <Button
                                            size="lg"
                                            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-14 rounded-xl shadow-lg shadow-green-900/20 transition-all"
                                            onClick={() => window.open('https://www.facebook.com/v18.0/dialog/oauth?client_id=YOUR_APP_ID&redirect_uri=YOUR_REDIRECT_URL', '_blank')}
                                        >
                                            <span className="mr-2">Conectar com Facebook</span>
                                            <ExternalLink className="h-5 w-5" />
                                        </Button>
                                        <p className="text-xs text-gray-500 mt-4">
                                            Você será redirecionado para o ambiente seguro do Facebook.
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
                    </Container>
                </main>

                <Footer />
            </div>
        </>
    );
}
