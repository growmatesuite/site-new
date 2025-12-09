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
        title="Home"
        description="Criamos, treinamos e orquestramos agentes de IA que entendem seus processos e entregam resultados. Soluções enterprise-ready com implementação em semanas."
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