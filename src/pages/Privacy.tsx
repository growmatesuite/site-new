import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Growmate</title>
        <meta name="description" content="Política de Privacidade da Growmate conforme LGPD e leis brasileiras." />
      </Helmet>

      <div className="min-h-screen bg-black-base">
        <Header />
        <main className="pt-24 pb-24">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-green-400">POLÍTICA DE PRIVACIDADE: GROWMATE</h1>
              <p className="mt-4 text-gray-300">
                A Growmate oferece produtos e serviços inclusive com Agentes de IA que conversam com você através de
                diferentes plataformas (WhatsApp, Instagram, Messenger, Facebook, e-mail). Ao usar nossos serviços, você aceita esta política.
              </p>
            </motion.div>

            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-semibold">1. Dados que Coletamos</h2>
                <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
                  <li><strong>Contato:</strong> nome, telefone, e-mail, foto de perfil</li>
                  <li><strong>Conversas:</strong> todas as mensagens com nossos Agentes de IA, comandos, feedbacks, arquivos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">2. Como Usamos Seus Dados</h2>
                <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
                  <li><strong>Prestar o serviço:</strong> permitir conversas com Agentes de IA e processar suas solicitações</li>
                  <li><strong>Treinar nossos modelos de IA:</strong> suas conversas ajudam a melhorar nossos agentes</li>
                  <li><strong>Segurança:</strong> prevenir fraudes e cumprir a lei</li>
                  <li><strong>Comunicações:</strong> notificações e ofertas (você pode cancelar quando quiser)</li>
                </ul>
                <p className="mt-3 text-gray-300"><strong>Importante:</strong> Suas conversas podem ser usadas para treinar nossos modelos de IA.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">3. Compartilhamento</h2>
                <p className="mt-3 text-gray-300"><strong>Não vendemos seus dados.</strong> Compartilhamos apenas com:</p>
                <ul className="mt-2 space-y-2 text-gray-300 list-disc list-inside">
                  <li>Parceiros técnicos (AWS Brasil, ferramentas de análise) com acordos de proteção</li>
                  <li>Autoridades quando exigido por lei</li>
                  <li>Em fusões/aquisições da empresa</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">4. Segurança</h2>
                <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
                  <li>Dados criptografados (AES-256 em repouso, TLS 1.2+ em trânsito)</li>
                  <li>Servidores AWS no Brasil com certificações de segurança</li>
                  <li>Acesso restrito a colaboradores autorizados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">5. Seus Direitos (LGPD)</h2>
                <p className="mt-3 text-gray-300">Você pode solicitar:</p>
                <ul className="mt-2 space-y-2 text-gray-300 list-disc list-inside">
                  <li>Acesso aos seus dados</li>
                  <li>Correção de informações</li>
                  <li>Exclusão dos seus dados</li>
                  <li>Cancelamento de comunicações</li>
                </ul>
                <p className="mt-3 text-gray-300"><strong>Como:</strong> ops@growmate.io | (34) 3236-9708</p>
                <p className="text-gray-300"><strong>Prazo:</strong> até 15 dias úteis</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">6. Dados da Meta (Facebook/Instagram/WhatsApp/Messenger)</h2>
                <p className="mt-3 text-gray-300"><strong>Uso específico:</strong> Dados obtidos via plataformas da Meta são usados apenas para prestar nosso serviço a você, não para treinar modelos genéricos ou criar perfis externos.</p>
                <p className="mt-3 text-gray-300"><strong>Exclusão de dados:</strong></p>
                <ol className="mt-2 space-y-2 text-gray-300 list-decimal list-inside">
                  <li><strong>Pelo produto:</strong> Configurações &gt; Privacidade &gt; Excluir dados (quando disponível)</li>
                  <li><strong>Por e-mail:</strong> ops@growmate.io com assunto "Exclusão Meta" + seu nome e perfil/telefone</li>
                  <li><strong>Confirmação:</strong> exclusão em até 7 dias úteis</li>
                </ol>
                
              </section>

              <section>
                <h2 className="text-2xl font-semibold">7. Retenção</h2>
                <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
                  <li>Durante o uso dos serviços</li>
                  <li>Após encerramento: 90 dias para recuperação, depois exclusão permanente</li>
                  <li>Exceções legais quando exigido por lei</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">8. Contato</h2>
                <p className="mt-3 text-gray-300"><strong>E-mail:</strong> ops@growmate.io</p>
                <p className="text-gray-300"><strong>Empresa:</strong> Growmate LTDA, CNPJ: 50.391.948/0001-93</p>
                <p className="text-gray-300"><strong>Endereço:</strong> R. Raphael de Lourenco, 45, Sala 02, Santa Maria, Uberlândia/MG, CEP 38.408-048</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">9. Atualizações</h2>
                <p className="mt-3 text-gray-300">Avisaremos sobre mudanças importantes por e-mail. Esta política segue a LGPD e leis brasileiras. Foro: Uberlândia/MG.</p>
              </section>

              <section>
                <p className="mt-6 text-gray-300"><strong>Resumo:</strong> Coletamos dados para operar nossos Agentes de IA, protegemos com criptografia, não vendemos a terceiros, e você pode solicitar acesso/exclusão a qualquer momento. Dados da Meta têm tratamento específico conforme suas políticas.</p>
                <p className="mt-2 text-sm text-gray-500">Última atualização: 03 de Novembro de 2025</p>
              </section>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
}
