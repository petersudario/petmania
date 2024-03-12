import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        colors: {
            'paleta-1' : '#381893',
            'paleta-2': '#2c0153', 
            'paleta-3': '#060956', 
            'paleta-4': '#182a52',
            'paleta-5': '#012f51',
            'paleta-6': '#00523c',
            'paleta-7': '#35b0b8',
            'paleta-8': '#389638',
            'paleta-9': '#6acfad',
            'paleta-10': '#f2eaa1',
            'escuro': '#1E2E33',
            'custom-dark-grey': '#4b4f54',
            'white': '#ffffff'
        },    
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
