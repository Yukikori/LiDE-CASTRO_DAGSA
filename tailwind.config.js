/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/index.html"],
  theme: {
    extend: {
      fontFamily: {
        pressstart: ['"Press Start 2P"', "cursive"],
      },
      backgroundImage: {
        "unity-codm": "url('../images/UnityEngine-CODM.jpg')",
        "angry-birds": "url('../images/AngryBirds-bg.jpg')",
        bejeweled: "url('../images/Bejeweled-bg.jpg')",
        codm: "url('../images/CODM-bg.jpg')",
        genshin: "url('../images/Genshin-bg.jpg')",
      },
      maxWidth: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
