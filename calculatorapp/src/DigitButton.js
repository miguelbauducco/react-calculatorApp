import React from 'react'
import { actions } from './App'

const DigitButton = ({ dispatch, digit }) => {
return (
    <button onClick={() => dispatch ({ type: actions.addDigit, payload: { digit } })}> {digit} </button>
)
}

export default DigitButton