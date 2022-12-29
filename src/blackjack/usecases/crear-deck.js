import _ from 'underscore'
// Esta función crea un nuevo deck
// export const miNombre = 'Alberto Herrera';

/**
 * Esta función crea un nuevo deck
 * @param {array<string>} tiposDeCarta Ej. ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ej. ['A','J','Q','K']
 * @returns {array<String>} Regresa un nuevo deck en array
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('El tipo de carta es obligatorio')
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('El tipo especiales es obligatorio')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }
    
    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );

    return deck;

}

// export default crearDeck