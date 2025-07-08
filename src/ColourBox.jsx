import "./colourBox.css"
import { useState } from "react"
export default function ColourBox({ colors }) {
    const [colour, setColour] = useState("purple")
    const changeColour = () => {
        const idx = Math.floor(Math.random() * colors.length)
        const randColor = colors[idx];
        setColour(randColor)
    }
    return (
        <div className="colourBox" style={{ backgroundColor: colour }} onClick={changeColour}>

        </div>
    )




}