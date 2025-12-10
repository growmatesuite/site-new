/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'text-whatsapp-ufo',
    'text-whatsapp-primary',
    'bg-whatsapp-dark/40',
    'from-whatsapp-dark/30',
    'to-whatsapp-primary/20',
    'from-whatsapp-primary/50',
    'bg-whatsapp-primary',
    'hover:bg-whatsapp-dark',
    'focus:ring-whatsapp-primary',
    'shadow-glow-whatsapp',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        black: {
          base: 'var(--color-black-base)',
          secondary: 'var(--color-black-secondary)',
          tertiary: 'var(--color-black-tertiary)',
        },
        gray: {
          900: 'var(--color-gray-900)',
          800: 'var(--color-gray-800)',
          700: 'var(--color-gray-700)',
          600: 'var(--color-gray-600)',
          500: 'var(--color-gray-500)',
          400: 'var(--color-gray-400)',
        },
        green: {
          primary: 'var(--color-green-primary)',
          secondary: 'var(--color-green-secondary)',
        },
        whatsapp: {
          primary: '#25D366', // Branding strict color
          dark: '#128C7E',    // Branding strict color
          ufo: '#4FCE5D',     // Special accent
        },
        purple: {
          primary: 'var(--color-purple-primary)',
          secondary: 'var(--color-purple-secondary)',
        },
        cyan: {
          accent: 'var(--color-accent-cyan)',
        },
        n8n: {
          primary: 'var(--color-n8n-primary)',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '48px', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '36px', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '22px', fontWeight: '400' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
      boxShadow: {
        'base': '0 10px 30px rgba(0,0,0,0.35)',
        'glow-green': '0 0 24px rgba(0,229,153,0.35)',
        'glow-purple': '0 0 24px rgba(139,92,246,0.35)',
        'glow-coral': '0 0 24px rgba(255,95,87,0.35)',
        'glow-whatsapp': '0 0 24px rgba(37,211,102,0.35)',
        'glow-pink': '0 0 24px rgba(236,72,153,0.35)',
        'glow-orange': '0 0 24px rgba(249,115,22,0.35)',
        'glow-blue': '0 0 24px rgba(59,130,246,0.35)',
        'glow-cyan': '0 0 24px rgba(6,182,212,0.35)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00E599 0%, #8B5CF6 100%)',
        'glow-gradient': 'radial-gradient(60% 60% at 50% 40%, rgba(139,92,246,0.20) 0%, rgba(0,229,153,0.12) 45%, rgba(11,11,19,0) 70%)',
        'whatsapp-gradient': 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backdropBlur: {
        glass: '16px',
      },
    },
  },
  plugins: [],
};
