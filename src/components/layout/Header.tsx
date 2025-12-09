import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { cn } from '../../lib/utils';
import { COMPANY_INFO, WHATSAPP_CONTACT_URL } from '../../lib/constants';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC<{ hideCtas?: boolean; centerNav?: boolean }> = ({ hideCtas, centerNav }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'GrowChat', href: '/growchat-produto' },
    { name: 'GrowMetrics', href: '/growmetrics' },
    { name: 'Integrações', href: '/integracoes' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black-secondary/80 backdrop-blur-glass border-b border-gray-800'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center gap-3" aria-label={COMPANY_INFO.name}>
              {!logoFailed ? (
                <img
                  src="/brand.svg"
                  alt={COMPANY_INFO.name}
                  className="h-5 md:h-6 w-auto select-none"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <span className="text-2xl font-bold font-heading">
                  {COMPANY_INFO.name}
                </span>
              )}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className={cn('hidden md:flex items-center space-x-8', centerNav && 'absolute left-1/2 -translate-x-1/2')}>
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className={cn(
                      'transition-colors duration-200 font-medium',
                      location.pathname === item.href ? 'text-green-400' : 'text-gray-400 hover:text-white'
                    )}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
            
          </nav>

          {!hideCtas && (
            <div className="hidden md:flex items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="sm">Falar com Especialista</Button>
              </motion.div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={cn(
                  'block w-5 h-0.5 bg-white transition-all duration-300',
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                )}
              />
              <span
                className={cn(
                  'block w-5 h-0.5 bg-white mt-1 transition-all duration-300',
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-800 mt-4"
            >
              <nav className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  item.href.startsWith('/') ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block py-2 text-gray-400 hover:text-white transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-gray-400 hover:text-white transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                ))}
                
              </nav>
              {!hideCtas && (
                <div className="pb-4">
                  <Button href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="sm" className="w-full">Falar com Especialista</Button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};
