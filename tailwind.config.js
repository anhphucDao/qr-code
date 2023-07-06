module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'plex-sans': ['IBM Plex Sans', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
            },

            body: ['Outfit', 'sans-serif'],
            margin: {
                0: '0',
            },
            padding: {
                0: '0',
            },
            height: {
                screen: '100vh',
            },
        },
    },
    plugins: [],
};
