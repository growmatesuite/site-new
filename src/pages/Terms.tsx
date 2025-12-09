import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | Growmate</title>
        <meta name="description" content="Termos de Uso da plataforma SaaS Growmate." />
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
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-green-400">TERMOS DE USO: GROWMATE</h1>
              <p className="mt-4 text-gray-300">
                Este documento contém os Termos de Uso que regem o uso do nosso serviço de SaaS (Software como Serviço),
                que oferece Agentes de Inteligência Artificial para auxiliar empresas de diversos segmentos na captação e
                gestão de leads através do WhatsApp e outros canais de comunicação.
              </p>
            </motion.div>

            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-semibold">1. Aceitação dos Termos</h2>
                <p className="mt-3 text-gray-300">
                  Ao acessar ou utilizar a Growmate, você concorda com os presentes Termos de Uso. Caso não concorde com estes Termos,
                  você deve cessar o uso do nosso serviço. Estes Termos podem ser alterados periodicamente, e ao continuar utilizando a plataforma,
                  você concorda com as alterações realizadas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">2. Definição dos Serviços</h2>
                <p className="mt-3 text-gray-300">
                  A Growmate oferece uma plataforma SaaS que disponibiliza Agentes de Inteligência Artificial para empresas de diversos segmentos com o objetivo
                  de automatizar a captação de leads e otimizar a interação e relacionamento com clientes. A ferramenta permite a integração com WhatsApp,
                  Instagram, Messenger, Facebook e outros canais de comunicação, gerando inteligência de negócios para os usuários da plataforma.
                  Os serviços são disponibilizados por meio de um modelo de assinatura.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">3. Requisitos para Uso</h2>
                <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
                  <li>Você tenha mais de 18 anos e possua plena capacidade civil</li>
                  <li>A conta seja criada por uma pessoa autorizada, caso esteja contratando em nome de uma empresa</li>
                  <li>Você forneça informações verídicas e atualizadas no momento do cadastro</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">4. Planos e Assinaturas</h2>
                <p className="mt-3 text-gray-300">
                  A Growmate opera em um modelo de assinatura, com diferentes planos disponíveis para atender às necessidades dos clientes.
                  Os valores, características e funcionalidades de cada plano estão descritos em nosso site e podem ser ajustados conforme atualização da plataforma.
                  O pagamento é processado automaticamente conforme o ciclo de pagamento contratado (mensal ou anual), e a assinatura é renovada automaticamente,
                  salvo se cancelada com antecedência.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">5. Política de Cancelamento</h2>
                <p className="mt-3 text-gray-300">
                  O usuário pode cancelar a assinatura a qualquer momento, sendo que a interrupção dos serviços ocorrerá ao final do ciclo de pagamento vigente.
                  Não haverá reembolso de valores já pagos, exceto nos casos previstos em lei ou conforme acordado previamente por escrito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">6. Coleta e Uso de Dados (LGPD)</h2>
                <p className="mt-3 text-gray-300">
                  A Growmate coleta dados pessoais, incluindo, mas não se limitando a, nomes, telefones, e-mails e conversas com nossos Agentes de IA,
                  conforme inseridos pelos usuários em nossa plataforma. Estamos comprometidos com a conformidade à Lei Geral de Proteção de Dados
                  (Lei nº 13.709/2018 (LGPD)) e adotamos medidas para garantir a segurança e a privacidade dos dados coletados.
                </p>
                <h3 className="mt-4 text-lg font-semibold">6.1. Dados Pessoais Coletados</h3>
                <p className="mt-2 text-gray-300">
                  Coletamos informações fornecidas pelos usuários e leads, tais como nome, telefone, e-mail e interações com nossos Agentes de IA,
                  para viabilizar a operação da plataforma, gerar relatórios de performance e otimizar a experiência de interação.
                  Esses dados são processados de forma automatizada e utilizados para os fins descritos neste documento.
                </p>
                <h3 className="mt-4 text-lg font-semibold">6.2. Finalidade do Tratamento de Dados</h3>
                <ul className="mt-2 space-y-2 text-gray-300 list-disc list-inside">
                  <li>Operacionalizar a plataforma Growmate e gerar insights de negócios</li>
                  <li>Permitir a comunicação via WhatsApp e outros canais com leads e clientes</li>
                  <li>Treinar e aprimorar nossos modelos de Inteligência Artificial</li>
                  <li>Melhorar a experiência do usuário através de análises e relatórios</li>
                </ul>
                <h3 className="mt-4 text-lg font-semibold">6.3. Compartilhamento de Dados</h3>
                <p className="mt-2 text-gray-300">
                  A Growmate não vende ou comercializa dados pessoais. Compartilhamos informações apenas quando necessário para o funcionamento da plataforma ou conforme exigido por lei.
                  O uso de dados por terceiros que atuam em nome da Growmate é restrito às finalidades específicas descritas nestes Termos e em nossa Política de Privacidade.
                </p>
                <h3 className="mt-4 text-lg font-semibold">6.4. Direitos dos Titulares</h3>
                <ul className="mt-2 space-y-2 text-gray-300 list-disc list-inside">
                  <li>Solicitar o acesso, correção, atualização ou exclusão de seus dados</li>
                  <li>Retirar o consentimento previamente dado para o tratamento de dados</li>
                  <li>Solicitar a portabilidade de dados, sempre que aplicável</li>
                </ul>
                <p className="mt-2 text-gray-300">As solicitações devem ser enviadas para nosso Encarregado de Proteção de Dados através do e-mail <strong>ops@growmate.io</strong>.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">7. Uso Adequado da Plataforma</h2>
                <p className="mt-3 text-gray-300">Você concorda em utilizar a Growmate exclusivamente para os fins permitidos e em conformidade com as leis aplicáveis. É estritamente proibido:</p>
                <ul className="mt-2 space-y-2 text-gray-300 list-disc list-inside">
                  <li>Utilizar a plataforma para coletar dados de maneira fraudulenta ou não autorizada</li>
                  <li>Enviar mensagens em massa sem consentimento ou praticar spam</li>
                  <li>Violar os direitos de privacidade ou propriedade intelectual de terceiros</li>
                  <li>Transmitir conteúdos ofensivos, ilícitos ou que violem os Termos de Uso</li>
                  <li>Usar os Agentes de IA para fins maliciosos ou que violem políticas de plataformas de terceiros</li>
                </ul>
                <p className="mt-2 text-gray-300">A violação dos Termos poderá resultar na suspensão ou cancelamento da conta sem aviso prévio.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">8. Limitação de Responsabilidade</h2>
                <p className="mt-3 text-gray-300">
                  A Growmate se esforça para manter a plataforma funcionando adequadamente e de forma segura, mas não garante que os serviços estarão disponíveis ininterruptamente ou livres de erros.
                  Não nos responsabilizamos por perdas ou danos diretos ou indiretos decorrentes do uso da plataforma, falhas de integrações de terceiros ou indisponibilidades,
                  exceto nos casos previstos pela legislação aplicável.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">9. Modificações e Encerramento dos Serviços</h2>
                <p className="mt-3 text-gray-300">
                  A Growmate reserva-se o direito de modificar, suspender ou encerrar os serviços ou qualquer funcionalidade da plataforma a qualquer momento, sem aviso prévio,
                  exceto quando previamente estipulado contratualmente com o usuário.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">10. Propriedade Intelectual</h2>
                <p className="mt-3 text-gray-300">
                  Todos os direitos relacionados à plataforma Growmate, incluindo o design, marca, código fonte, algoritmos de IA e funcionalidades, são de propriedade exclusiva da Growmate.
                  O uso dos nossos serviços não concede qualquer licença ou direito sobre nossa propriedade intelectual.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">11. Disposições Finais</h2>
                <p className="mt-3 text-gray-300">
                  Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa oriunda destes Termos será resolvida no foro da comarca de Uberlândia/MG,
                  com renúncia expressa de qualquer outro.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">12. Contato</h2>
                <p className="mt-3 text-gray-300"><strong>E-mail:</strong> ops@growmate.io</p>
                <p className="text-gray-300"><strong>Empresa:</strong> Growmate LTDA</p>
                <p className="text-gray-300"><strong>CNPJ:</strong> 50.391.948/0001-93</p>
                <p className="text-gray-300"><strong>Endereço:</strong> R. Raphael de Lourenco, 45, Sala 02, Bairro Santa Maria, CEP 38.408-048, Uberlândia/MG</p>
              </section>

              <section>
                <p className="mt-6 text-gray-300">Estamos comprometidos em fornecer um serviço seguro e confiável. Se encontrou algo que poderia ser melhor nestes Termos ou alguma parte que está faltando ser coberta, não deixe de nos procurar.</p>
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