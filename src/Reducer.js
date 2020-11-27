import { createStore } from 'redux';

export function setText(tipo, texto) {
    return {
        type: tipo,
        text: texto
    }
}

const initialState = {
    textTitulo: 'Titulo',
    textMensagem: 'Mensagem',
    numero: 0
} // precisa colocar o nome do objeto

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TEXT_T':
            return { ...state, textTitulo: action.text }
        case 'SET_TEXT_M':
            return { ...state, textMensagem: action.text }
        case 'NUMERO':
            return { ...state, numero: action.text }
        default:
            return state
    }
}
export default createStore(reducer)