export default function Slots({ val1, val2, val3 }) {
    const result = val1 === val2 && val2 === val3 && val3 === val1 ? "You Win" : "You Lose"
    const styles = { color: result === "You Win" ? "green" : "red" }
    return (
        <>
            <h2>{val1} {val2} {val3}</h2>
            <h3 style={styles}>{result}</h3>
            <h3>{result === "You Win" ? "Congrats!!!" : null}</h3>



        </>
    )

}