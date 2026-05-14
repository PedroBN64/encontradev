/* ============================================
   PEDRO DEV — TAILWIND CONFIG
   Autor: Pedro Augusto
   Versão: 1.0.0
   ============================================ */

tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#020817',
          900: '#040f28',
          800: '#071535',
          700: '#0c2150',
        },
        azure: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        electric: '#00d4ff',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-glow':  'pulseGlow 3s ease-in-out infinite',
        'slide-up':    'slideUp 0.7s ease forwards',
        'fade-in':     'fadeIn 1s ease forwards',
        'spin-slow':   'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%':      { boxShadow: '0 0 50px rgba(0,212,255,0.7)' },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(40px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
      },
    }
  }
};
