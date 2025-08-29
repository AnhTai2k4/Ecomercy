import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice'
import styled from 'styled-components'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const Button = styled.button`
    background-color: red;
  `

  return (
    <div>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  )
}