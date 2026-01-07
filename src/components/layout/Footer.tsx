import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Linkedin } from 'lucide-react';
import { Container } from '../ui/Container';
import { cn } from '../../lib/utils';


export const Footer: React.FC = () => {
  const navigationSections = [
    {
      title: 'Soluções',
      links: [
        { name: 'GrowChat', href: '/growchat' },
        { name: 'GrowMetrics', href: '/growmetrics' },
        { name: 'Integrações', href: '/integracoes' },
      ],
    },
    {
      title: 'Tecnologias',
      links: [
        { name: 'LangChain', href: '/langchain' },
        { name: 'LangGraph', href: '/langgraph' },
        { name: 'LangSmith', href: '/langsmith' },
        { name: 'Agno', href: '/agno' },
        { name: 'CrewAI', href: '/crewai' },
      ],
    },
    {
      title: 'Métricas',
      links: [
        { name: 'NPS', href: '/nps' },
        { name: 'CSAT', href: '/csat' },
        { name: 'CES', href: '/ces' },
        { name: 'PMF', href: '/pmf' },
        { name: 'eNPS', href: '/enps' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre', href: '/sobre' },
        { name: 'Autores', href: '/autores' },
        { name: 'Carreiras', href: '/trabalhe-conosco' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/growmate.io/', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://www.youtube.com/@growmate_io', icon: <Youtube className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/growmate-io/', icon: <Linkedin className="w-5 h-5" /> },
  ];

  return (
    <footer className="bg-black-secondary border-t border-gray-800">
      <Container className="py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <a href="/" aria-label="Growmate" className="inline-flex items-center">
                <img
                  src="/brand.svg"
                  alt="Growmate"
                  className="h-6 md:h-7 w-auto select-none"
                />
              </a>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Criando agentes de IA que transformam negócios.
              Especialistas em orquestração e automação inteligente.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:ops@growmate.io" className="hover:text-white transition-colors">
                  ops@growmate.io
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+551148635675" className="hover:text-white transition-colors">
                  +55 11 4863-5675
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>Uberlândia, Minas Gerais</span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">Tech Provider</span>
            <img src="/logos/Meta.svg" alt="Meta" className="h-7 md:h-8 w-auto" />
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-3 mb-4 sm:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 border border-gray-700 text-white hover:bg-white/20 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-sm text-gray-400 mt-4 sm:mt-0">
              © 2026 Growmate. Todos os direitos reservados.
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-4 flex flex-wrap justify-center sm:justify-end gap-4 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>


      </Container>
    </footer>
  );
};
