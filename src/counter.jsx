import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    useEffect(function myEffect() {

    }, [count])
    const increment = () => {
        setCount(c => (c + 1));
    }
    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>Name: {name}</p>
            <input value={name} onChange={handleChange} type="text" />
            <p>yo</p>
        </div>

    )
}