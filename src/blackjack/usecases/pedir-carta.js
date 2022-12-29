// Esta función me permite tomar una carta
/**
 * Esta función pide una carta al presionar el booton pedir carta
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} Retorna un string
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;

}