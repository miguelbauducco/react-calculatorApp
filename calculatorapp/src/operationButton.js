import React from 'react'
import { actions } from './App'

const OperationButton = ({ dispatch, operation}) => {
return (
    <button onClick={() => dispatch ({ type: actions.chooseOperation, payload: { operation } })}> {operation} </button>
)
}

export default OperationButton;