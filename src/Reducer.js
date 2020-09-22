import { createStore } from 'redux';

export function setText(texto) {
  return {
    type: 'SET_TEXT',
    text: texto
  }
}

const initialState = { text: 'Este texto' }

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TEXT':
      console.log(state)
      return { ...state, text: action.text }
    default:
      return state
  }
}
export default createStore(reducer)