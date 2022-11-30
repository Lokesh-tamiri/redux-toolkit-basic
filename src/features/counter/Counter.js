import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, increaseByPayload } from './counterSlice'
const Counter = () => {
    const count = useSelector((state) => state.counterReducer.count)
    const [val, setVal] = useState(0)
    const dispatch = useDispatch()
    return (
        <section>
            <p>{count}</p>
            <input value={val} onChange={e => setVal(e.target.value)} />
            <button onClick={() => dispatch(increaseByPayload(val))}>Increase</button>
            <button onClick={() => dispatch(increment())}> +</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => { dispatch(reset()); setVal(0) }}>reset</button>

        </section>
    )
}

export default Counter