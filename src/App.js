import React from 'react'

import { setText } from './Reducer'

import { useSelector, useDispatch } from 'react-redux'

export default props => {
    const dispatch = useDispatch() //usado para despachar uma ação

    const textoMensagem = useSelector(state => { return state.textMensagem }) // usado para pegar uma ação
    const textoTitulo = useSelector(state => { return state.textTitulo })

    return (
    <div>
        <h1>Titulo: {textoTitulo}</h1>
        <p>Mensagem: {textoMensagem}</p>
        <button
            onClick={() => {
                dispatch(setText('SET_TEXT_M','Essa é minha mensagem'))
                dispatch(setText('SET_TEXT_T','Esse é meu título'))
            }
            }>
            Clica em min rsrs
        </button>
    </div>
    )
}