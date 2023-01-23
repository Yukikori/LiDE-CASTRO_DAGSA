/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './**/index.html'],
  theme: {
    extend: {
      fontFamily: {
        pressstart: ['"Press Start 2P"', 'cursive'],
      },
      backgroundImage: {
        'angry-birds': "url('../images/AngryBirds-bg.webp')",
        'bejeweled': "url('../images/Bejeweled-bg.webp')",
        'codm': "url('../images/CODM-bg.webp')",
        'genshin': "url('../images/Genshin-bg.webp')",
      },
      maxWidth: {
        '1/2': '50%',
      },
    },
    screens: {
      'sm': '512px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
