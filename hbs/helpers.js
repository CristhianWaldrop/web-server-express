const hbs = require('hbs');

// Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, index) => {
        palabras[index] = palabras[index].charAt(0).toUpperCase() + palabras[index].slice(1).toLowerCase();
    });

    return palabras.join(' ');

});