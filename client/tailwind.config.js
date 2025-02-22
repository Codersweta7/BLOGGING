/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                kota: ['Kotta One', 'serif'],
                kumar: ['Kumar One', 'cursive'],
                nixie: ['Nixie One', 'cursive'],
                rubik: ["Rubik Marker Hatch", "serif"],
                rubikm: ["Rubik Maze", "serif"],
                nosifer: ["Nosifer", "serif"],
                eater: ["Eater", "serif"],
                RubikPuddles: ["Rubik Puddles", "serif"],
                Kranky: ["Kranky", "serif"],
                Frijole: ["Frijole", "serif"],
            },
        },
    },
    plugins: [],
};
