module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {

        extend: {
            colors: {
                gari: "#04a49c",
                gariLight: "#3CBFB7"

            },
            height: {
                100: 600,
                200: 900,
                300: 1000
            },
            toggle: {
                toggleable: {
                    content: "25BC",
                    fontSize: "10px",
                    paddingLeft: "6px",
                    position: " relative",
                    top: "-1px"
                }

            }
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
}