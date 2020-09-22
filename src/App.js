import React from 'react'

import { setText } from './Reducer'

import { useSelector, useDispatch } from 'react-redux'

export default props => {
    const dispatch = useDispatch()

    const Texto = useSelector(state => { return state.text }) 

    return (
    <div>
        <h1>Titulo: </h1>
        <p>Mensagem: {Texto}</p>
        <button
            onClick={() => {
                dispatch(setText("Mudar Pra esse ..."))
            }
            }>
            Clica em min rsrs
        </button>
    </div>
    )
}