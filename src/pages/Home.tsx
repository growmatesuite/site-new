import React from 'react';
import { SEO } from '../components/SEO';
import {
  Header,
  HeroSection,
  ToolsSection,
  LLMSection,
  SocialProofSection,
  CTASection,
  Footer,
} from '../components';

export default function Home() {
  return (
    <>
      <SEO
        title="Agentes de IA Enterprise Ready"
        description="Líderes em orquestração de IA Agêntica no Brasil. Criamos, treinamos e escalamos agentes que automatizam processos complexos e entregam resultados reais em semanas."
      />
      <div className="min-h-screen bg-black-base">
        <Header />
        <main id="main-content">
          <HeroSection />
          <ToolsSection />
          <LLMSection />
          <SocialProofSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}