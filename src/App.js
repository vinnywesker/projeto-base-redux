import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setText } from './Reducer'


export default props => {
    const dispatch = useDispatch() //usado para despachar uma ação

    const textoMensagem = useSelector(state => state.textMensagem) // usado para pegar uma ação
    const textoTitulo = useSelector(state => state.textTitulo)
    const numero = useSelector(state => state.numero)

    return (
        <div>
            <h1>Titulo: {textoTitulo}</h1>
            <p>Mensagem: {textoMensagem}</p>
            <button
                onClick={() => {
                    dispatch(setText('SET_TEXT_M', 'React é a melhor lib'))
                    dispatch(setText('SET_TEXT_T', 'Uma verdade'))
                }
                }>
                Clica em min rsrs
        </button>

            <h1>{numero}</h1>
            <button
                onClick={() => {
                    dispatch(setText('NUMERO', numero + 1))
                }
                }>
                ++
        </button>
            <button
                onClick={() => {
                    if (numero > 0) dispatch(setText('NUMERO', numero - 1))
                }
                }>
                --
        </button>

        </div>
    )
}