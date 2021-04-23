module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {

        extend: {
            colors: {
                gari: "#04a49c",
                gariLight: "#3CBFB7"

            }
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
}