import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { cn } from '../../lib/utils';
import { COMPANY_INFO, WHATSAPP_LINK } from '../../lib/constants';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { name: 'GrowChat', href: '/growchat' },
    { name: 'GrowMetrics', href: '/growmetrics' },
    { name: 'Integrações', href: '/integracoes' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled && !isMobileMenuOpen
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
            <nav className={cn('hidden lg:flex items-center space-x-8', centerNav && 'absolute left-1/2 -translate-x-1/2')}>
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'transition-colors duration-200 font-medium',
                      location.pathname === item.href ? 'text-green-400' : 'text-gray-400 hover:text-white'
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {!hideCtas && (
              <div className="hidden lg:flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="sm">
                      Falar com Especialista
                    </Button>
                  </a>
                </motion.div>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black-base/95 backdrop-blur-xl lg:hidden flex flex-col"
          >
            <Container className="flex-1 flex flex-col h-full pt-24 pb-8">
              <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        'text-3xl font-bold transition-colors duration-200',
                        location.pathname === item.href ? 'text-green-400' : 'text-white hover:text-green-400'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {!hideCtas && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full px-4"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button variant="primary" size="lg" className="w-full h-14 text-lg">
                      Falar com Especialista
                    </Button>
                  </a>
                </motion.div>
              )}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
