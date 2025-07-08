import ColourBox from "./ColourBox"
import "./ColourBox.css"
function ColourBoxList({ colors }) {
    const boxes = []
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColourBox colors={colors} />)
    }
    return (
        <div className="colourBoxGrid">
            {boxes}
        </div>
    )
}


export default ColourBoxList